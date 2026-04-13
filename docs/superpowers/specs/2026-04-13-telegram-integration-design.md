# Telegram Integration Design

**Date:** 2026-04-13
**Status:** Approved

## Overview

Single shared Telegram bot owned by Relay. Users connect their Telegram account via a unique one-time token link. Once connected, the bot responds to their Telegram messages using Gemini AI as a generic personal assistant. Set-and-forget — users never need to return to the dashboard.

## Architecture

### Flow

```
User clicks "Connect Telegram" in dashboard
  → Convex mutation creates pending token (uuid) linked to userId
  → UI displays deep link: https://t.me/RELAY_BOT?start=<token>
  → User taps link in Telegram, sends /start <token>
  → Telegram POSTs to /api/telegram/webhook
  → Webhook: token lookup → link telegram_user_id to userId → status = "connected"
  → Convex real-time update → UI shows "Connected" state automatically

Future messages from telegram_user_id:
  → Webhook receives message
  → Lookup user by telegram_user_id
  → Fetch last 20 messages (sliding window) from Convex
  → Call Gemini with system prompt + history + new message
  → Save user message + AI reply to Convex
  → Send reply to Telegram
```

### Components

| Component | Role |
|---|---|
| `/dashboard/integrations` | UI — connect/disconnect Telegram |
| `convex/telegram.ts` | Mutations/queries for connections + messages |
| `convex/schema.ts` | New tables: telegram_connections, telegram_messages |
| `/api/telegram/webhook/route.ts` | Next.js webhook handler |
| `/lib/gemini.ts` | Gemini API client wrapper |

## Data Model

### `telegram_connections` table

```ts
{
  userId: string,          // Convex user _id
  telegramUserId: string,  // Telegram's numeric user id
  connectToken: string,    // one-time uuid for linking (cleared after connect)
  connectedAt: number,     // timestamp
  status: "pending" | "connected"
}
```

Indexes:
- `by_user_id` — look up connection by Convex user
- `by_token` — look up pending connection during /start
- `by_telegram_user_id` — look up user on each incoming message

### `telegram_messages` table

```ts
{
  telegramUserId: string,
  role: "user" | "assistant",
  content: string,
  createdAt: number
}
```

Index: `by_telegram_user_id_created_at` — fetch last N messages ordered by time.

## UI Design

**Route:** `/dashboard/integrations`

**Not connected state:**
- "Connect Telegram" button
- On click: calls Convex mutation → gets token → displays deep link
- Shows "Waiting for connection..." with live status polling via Convex query

**Connected state:**
- Green "Connected" badge
- Shows Telegram username/id
- "Disconnect" button → deletes connection record, clears messages

Convex real-time reactivity handles state transition automatically — no polling needed from frontend.

## Webhook Handler

**Route:** `POST /api/telegram/webhook`

**Steps:**
1. Verify `X-Telegram-Bot-Api-Secret-Token` header
2. Parse Telegram Update object
3. If message text starts with `/start <token>`:
   - Find pending token in Convex
   - Link `telegram_user_id` to `userId`
   - Set status = `connected`, save `telegramUsername`
   - Reply: "You're connected! I'm your AI personal assistant. How can I help?"
4. Otherwise (normal message):
   - Find user by `telegram_user_id` (must be connected)
   - Fetch last 20 messages from `telegram_messages`
   - Call Gemini with history + new message
   - Save both messages to Convex
   - Send Gemini reply to Telegram

## AI Configuration

**Model:** `gemini-1.5-flash` (fast, cheap)

**System prompt:**
```
You are a helpful personal assistant. Be concise, friendly, and useful.
```

**History:** Last 20 messages (sliding window) — alternating user/assistant roles fed as Gemini conversation history.

## Environment Variables

```
TELEGRAM_BOT_TOKEN          # from @BotFather
TELEGRAM_WEBHOOK_SECRET     # random string to verify webhook requests
GEMINI_API_KEY              # Google AI Studio
```

## Setup Steps (one-time, manual)

1. Create bot via @BotFather → get `TELEGRAM_BOT_TOKEN`
2. Set webhook: `POST https://api.telegram.org/bot<TOKEN>/setWebhook` with `url` + `secret_token`
3. Add env vars to `.env.local` and Vercel/deployment env

## Out of Scope

- Custom system prompts per user (future)
- Knowledge base / RAG (future)
- Multiple bots per user (future)
- Message media (images, voice) — text only for now

import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { getChatReply } from "@/lib/gemini";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

async function sendTelegramMessage(chatId: string, text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN!;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-telegram-bot-api-secret-token");
  if (secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    console.error("[webhook] bad secret:", secret);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch (e) {
    console.error("[webhook] bad json", e);
    return NextResponse.json({ ok: true });
  }

  try {
    return await handleUpdate(body);
  } catch (e) {
    console.error("[webhook] unhandled error", e);
    return NextResponse.json({ ok: true });
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleUpdate(body: any) {
  const message = body?.message;
  if (!message?.text) {
    return NextResponse.json({ ok: true });
  }

  const chatId = String(message.chat.id);
  const telegramUserId = String(message.from.id);
  const text: string = message.text;
  const username: string | undefined = message.from.username;

  if (text.startsWith("/start")) {
    const token = text.split(" ")[1];

    if (!token) {
      await sendTelegramMessage(chatId, "Send this link from your Relay dashboard to connect.");
      return NextResponse.json({ ok: true });
    }

    const result = await convex.mutation(api.telegram.linkTelegramUser, {
      token,
      telegramUserId,
      telegramUsername: username,
    });

    if (result.success) {
      await sendTelegramMessage(chatId, "You're connected! I'm your AI personal assistant. How can I help?");
    } else {
      await sendTelegramMessage(chatId, "Invalid or expired link. Please generate a new one from your Relay dashboard.");
    }

    return NextResponse.json({ ok: true });
  }

  const connection = await convex.query(api.telegram.getUserByTelegramId, { telegramUserId });

  if (!connection || connection.status !== "connected") {
    await sendTelegramMessage(chatId, "Please connect your Telegram account from your Relay dashboard first.");
    return NextResponse.json({ ok: true });
  }

  const history = await convex.query(api.telegram.getRecentMessages, { telegramUserId, limit: 20 });

  const reply = await getChatReply(
    history.map((m) => ({ role: m.role, content: m.content })),
    text
  );

  await convex.mutation(api.telegram.saveMessages, {
    telegramUserId,
    userContent: text,
    assistantContent: reply,
  });

  await sendTelegramMessage(chatId, reply);

  return NextResponse.json({ ok: true });
}

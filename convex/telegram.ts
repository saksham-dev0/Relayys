import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

// Called when user clicks "Connect Telegram" — creates a pending connection with a token
export const createConnectToken = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    let user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();

    if (!user) {
      const id = await ctx.db.insert("users", {
        clerkId: identity.subject,
        email: identity.email!,
        firstName: identity.givenName ?? undefined,
        lastName: identity.familyName ?? undefined,
        imageUrl: identity.pictureUrl ?? undefined,
        createdAt: Date.now(),
      });
      user = (await ctx.db.get(id))!;
    }

    // Remove only non-connected (pending/stale) rows; leave active integrations intact
    const existingAll = await ctx.db
      .query("telegram_connections")
      .withIndex("by_user_id", (q) => q.eq("userId", user._id))
      .collect();
    for (const row of existingAll) {
      if (row.status !== "connected") {
        await ctx.db.delete(row._id);
      }
    }

    const token = crypto.randomUUID();
    await ctx.db.insert("telegram_connections", {
      userId: user._id,
      connectToken: token,
      status: "pending",
    });

    return token;
  },
});

// Returns the current user's Telegram connection status
export const getConnection = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();
    if (!user) return null;

    return ctx.db
      .query("telegram_connections")
      .withIndex("by_user_id", (q) => q.eq("userId", user._id))
      .first();
  },
});

// Disconnect — deletes connection and messages
export const disconnect = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();
    if (!user) return;

    const connections = await ctx.db
      .query("telegram_connections")
      .withIndex("by_user_id", (q) => q.eq("userId", user._id))
      .collect();

    for (const connection of connections) {
      if (connection.telegramUserId) {
        const messages = await ctx.db
          .query("telegram_messages")
          .withIndex("by_telegram_user_id_created_at", (q) =>
            q.eq("telegramUserId", connection.telegramUserId!)
          )
          .collect();
        for (const msg of messages) {
          await ctx.db.delete(msg._id);
        }
      }
      await ctx.db.delete(connection._id);
    }
  },
});

// Called from webhook to link telegram user to pending token
export const linkTelegramUser = mutation({
  args: {
    token: v.string(),
    telegramUserId: v.string(),
    telegramUsername: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const connection = await ctx.db
      .query("telegram_connections")
      .withIndex("by_token", (q) => q.eq("connectToken", args.token))
      .unique();

    if (!connection || connection.status !== "pending") {
      return { success: false, reason: "invalid_token" };
    }

    const existingMapping = await ctx.db
      .query("telegram_connections")
      .withIndex("by_telegram_user_id", (q) =>
        q.eq("telegramUserId", args.telegramUserId)
      )
      .first();

    if (existingMapping && existingMapping._id !== connection._id) {
      return { success: false, reason: "telegram_id_in_use" };
    }

    await ctx.db.patch(connection._id, {
      telegramUserId: args.telegramUserId,
      telegramUsername: args.telegramUsername,
      connectToken: undefined,
      connectedAt: Date.now(),
      status: "connected",
    });

    return { success: true };
  },
});

// Called from webhook to get user by telegramUserId
export const getUserByTelegramId = query({
  args: { telegramUserId: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("telegram_connections")
      .withIndex("by_telegram_user_id", (q) =>
        q.eq("telegramUserId", args.telegramUserId)
      )
      .unique();
  },
});

// Save a message pair (user + assistant)
export const saveMessages = mutation({
  args: {
    telegramUserId: v.string(),
    userContent: v.string(),
    assistantContent: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    await ctx.db.insert("telegram_messages", {
      telegramUserId: args.telegramUserId,
      role: "user",
      content: args.userContent,
      createdAt: now,
    });
    await ctx.db.insert("telegram_messages", {
      telegramUserId: args.telegramUserId,
      role: "assistant",
      content: args.assistantContent,
      createdAt: now + 1,
    });
  },
});

// Fetch last N messages for context window
export const getRecentMessages = query({
  args: { telegramUserId: v.string(), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 20;
    const messages = await ctx.db
      .query("telegram_messages")
      .withIndex("by_telegram_user_id_created_at", (q) =>
        q.eq("telegramUserId", args.telegramUserId)
      )
      .order("desc")
      .take(limit);
    return messages.reverse();
  },
});

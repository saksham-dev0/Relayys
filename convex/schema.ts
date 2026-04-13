import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_clerk_id", ["clerkId"]),

  telegram_connections: defineTable({
    userId: v.id("users"),
    telegramUserId: v.optional(v.string()),
    telegramUsername: v.optional(v.string()),
    connectToken: v.optional(v.string()),
    connectedAt: v.optional(v.number()),
    status: v.union(v.literal("pending"), v.literal("connected")),
  })
    .index("by_user_id", ["userId"])
    .index("by_token", ["connectToken"])
    .index("by_telegram_user_id", ["telegramUserId"]),

  telegram_messages: defineTable({
    telegramUserId: v.string(),
    role: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
    createdAt: v.number(),
  }).index("by_telegram_user_id_created_at", ["telegramUserId", "createdAt"]),
});

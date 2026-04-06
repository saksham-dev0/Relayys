import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const upsertUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        email: identity.email!,
        firstName: identity.givenName ?? undefined,
        lastName: identity.familyName ?? undefined,
        imageUrl: identity.pictureUrl ?? undefined,
      });
      return existing._id;
    }

    return await ctx.db.insert("users", {
      clerkId: identity.subject,
      email: identity.email!,
      firstName: identity.givenName ?? undefined,
      lastName: identity.familyName ?? undefined,
      imageUrl: identity.pictureUrl ?? undefined,
      createdAt: Date.now(),
    });
  },
});

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    return ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();
  },
});

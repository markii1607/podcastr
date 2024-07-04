import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    podcasts: defineTable({
        user: v.id('users'), // from users table
        podcastTitle: v.string(),
        podcastDescription: v.string(),
        audioUrl: v.optional(v.string()), // optional field
        imageUrl: v.optional(v.string()), // optional field
        audioStorageId: v.optional(v.id('_storage')), // optional field
        imageStorageId: v.optional(v.id('_storage')), // optional field
        author: v.string(),
        authorId: v.string(),
        authorImageUrl: v.string(),
        voicePrompt: v.string(),
        imagePrompt: v.string(),
        voiceType: v.string(),
        audioDuration: v.number(),
        views: v.number(),
    })
        // search indeces
        .searchIndex('search_author', { searchField: 'author'})
        .searchIndex('search_title', { searchField: 'podcastTitle'})
        .searchIndex('search_body', { searchField: 'podcastDescription'}),
        
    users: defineTable({
        email: v.string(), 
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
    }),
})
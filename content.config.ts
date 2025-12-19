import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        updatedAt: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),
        author: z.string().default("Aboubakar Sidik Faha"),
        readingTime: z.string().optional(),
        locale: z.enum(["fr", "en"]),
        slug: z.string(),
        draft: z.boolean().default(false),
      }),
    }),
  },
});

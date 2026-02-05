import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog_en: defineCollection({
      type: 'page',
      source: 'blog/en/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.string(),
        image: z.string(),
        readTime: z.number()
      })
    }),
    blog_fr: defineCollection({
      type: 'page',
      source: 'blog/fr/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.string(),
        image: z.string(),
        readTime: z.number()
      })
    })
  }
})

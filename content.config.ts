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
    }),
    projects_en: defineCollection({
      type: 'page',
      source: 'projects/en/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        image: z.string(),
        url: z.string().optional(),
        client: z.string(),
        year: z.string(),
        duration: z.string(),
        role: z.string(),
        tech: z.array(z.string()),
        featured: z.boolean().default(false),
        results: z.array(z.string())
      })
    }),
    projects_fr: defineCollection({
      type: 'page',
      source: 'projects/fr/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        image: z.string(),
        url: z.string().optional(),
        client: z.string(),
        year: z.string(),
        duration: z.string(),
        role: z.string(),
        tech: z.array(z.string()),
        featured: z.boolean().default(false),
        results: z.array(z.string())
      })
    })
  }
})

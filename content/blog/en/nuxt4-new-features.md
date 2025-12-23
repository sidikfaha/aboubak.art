---
title: "Nuxt 4: Game-Changing New Features"
description: "Discover the new features of Nuxt 4, from the new project structure to performance improvements."
date: "2025-12-18T09:00:00+01:00"
image: "/images/blog/en/nuxt4-new-features.png"
tags: ["Nuxt", "Vue.js", "SSR", "Performance"]
category: "Web Development"
author: "Aboubakar Sidik Faha"
readingTime: "6 min"
locale: "en"
slug: "nuxt4-new-features"
draft: false
sitemap: true
---

Nuxt 4 has arrived with its share of major innovations. Let's explore together the most impactful changes for your projects.

## New project structure

Nuxt 4 introduces a new structure with the `app/` folder that centralizes all your application files:

```
my-project/
├── app/
│   ├── app.vue
│   ├── components/
│   ├── composables/
│   ├── layouts/
│   ├── middleware/
│   ├── pages/
│   └── plugins/
├── content/
├── public/
├── server/
└── nuxt.config.ts
```

This organization brings better separation of concerns and a more predictable structure.

## Improved performance

### Optimized hydration

Nuxt 4 significantly improves First Contentful Paint time thanks to:

- **Lazy hydration**: Deferred hydration of non-visible components
- **Island architecture**: Isolated components with their own context
- **Streaming SSR**: Progressive HTML delivery

### Lighter bundle

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    treeshakeClientOnly: true,
    componentIslands: true,
  },
});
```

## Nuxt Content v3

Nuxt Content integration has been redesigned with:

- **Typed collections**: Zod schemas for your content
- **Improved queries**: More intuitive and performant API
- **MDC support**: Markdown with integrated Vue components

```typescript
// content.config.ts
export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
      }),
    }),
  },
});
```

## Migrating from Nuxt 3

Migration is made easy with the `nuxt-migrate` tool:

```bash
npx nuxi@latest upgrade --dedupe
```

### Major changes to note

1. **New folder structure**: Move your files to `app/`
2. **Content v3**: Update your Content queries
3. **Compatibility Date**: New format required

## Conclusion

Nuxt 4 represents a major evolution of the Vue/Nuxt ecosystem. These performance and DX improvements make it an even more solid choice for your modern projects.

Have you already migrated to Nuxt 4? Share your experience in the comments!

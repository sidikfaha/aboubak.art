# Blog Setup with Giscus Comments

This blog is built with **Nuxt Content v3** for content management and **Giscus** for comments.

## Setting up Giscus Comments

To enable Giscus comments on your blog, follow these steps:

### 1. Enable GitHub Discussions

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Features**
3. Enable **Discussions**

### 2. Install Giscus App

1. Go to [giscus.app](https://giscus.app)
2. Install the Giscus GitHub App on your repository
3. Configure your settings:
   - **Repository**: `sidikfaha/aboubak.art`
   - **Discussion Category**: Create a "Blog Comments" category in Discussions
   - **Mapping**: `pathname` (recommended)
   - **Theme**: `dark_dimmed`

### 3. Get Your Configuration

After configuration, Giscus will provide you with:
- `data-repo-id`
- `data-category-id`

### 4. Update the Component

Edit `app/components/GiscusComments.vue` and update these values:

```typescript
const giscusConfig = {
  repo: "sidikfaha/aboubak.art",
  repoId: "YOUR_REPO_ID",       // Replace with your repo ID
  category: "Blog Comments",
  categoryId: "YOUR_CATEGORY_ID", // Replace with your category ID
  // ... rest of config
};
```

## Adding New Blog Posts

1. Create a new `.md` file in the appropriate locale folder:
   - French: `content/blog/fr/your-slug.md`
   - English: `content/blog/en/your-slug.md`

2. Add the required frontmatter:

```yaml
---
title: "Your Post Title"
description: "A brief description of your post"
date: "2025-12-20"
image: "/images/blog/your-image.jpg"
tags: ["Tag1", "Tag2"]
category: "Category Name"
author: "Aboubakar Sidik Faha"
readingTime: "5 min"
locale: "en"  # or "fr"
slug: "your-post-slug"
draft: false
---
```

3. Write your content in Markdown below the frontmatter

## SEO Features

Each blog post includes:
- **Open Graph tags** for social media sharing
- **Twitter Card** meta tags
- **JSON-LD structured data** (Article + BreadcrumbList)
- **Canonical URLs**
- **Article-specific meta tags** (published time, author, tags)

## Content Collection Schema

The blog collection is defined in `content.config.ts` with the following schema:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | ✅ | Post title |
| description | string | ✅ | Short description for SEO |
| date | string | ✅ | Publication date (YYYY-MM-DD) |
| image | string | ❌ | Featured image URL |
| tags | string[] | ❌ | Array of tags |
| category | string | ❌ | Post category |
| author | string | ❌ | Author name (defaults to Aboubakar Sidik Faha) |
| readingTime | string | ❌ | Estimated reading time |
| locale | "fr" \| "en" | ✅ | Post language |
| slug | string | ✅ | URL slug |
| draft | boolean | ❌ | Whether post is a draft (default: false) |

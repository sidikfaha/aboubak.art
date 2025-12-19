<script setup lang="ts">
const { t, locale } = useI18n();
const route = useRoute();
const localePath = useLocalePath();

const slug = route.params.slug as string;

// Fetch the blog post
const { data: post, error } = await useAsyncData(
  `blog-post-${slug}-${locale.value}`,
  () =>
    queryCollection("blog")
      .where("slug", "=", slug)
      .where("locale", "=", locale.value)
      .first(),
  { watch: [locale] }
);

// Redirect to 404 if post not found
if (error.value || !post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

// Format date based on locale
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString(locale.value, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Copy link to clipboard
const copyLink = () => {
  if (import.meta.client) {
    navigator.clipboard.writeText(`https://aboubak.art/blog/${slug}`);
  }
};

// SEO metadata
useSeoMeta({
  title: () => `${post.value?.title} | Aboubak'Art Blog`,
  description: () => post.value?.description,
  ogTitle: () => `${post.value?.title} | Aboubak'Art Blog`,
  ogDescription: () => post.value?.description,
  ogType: "article",
  ogUrl: () => `https://aboubak.art/blog/${slug}`,
  ogImage: () => post.value?.image || "https://aboubak.art/images/blog-og.png",
  articlePublishedTime: () => post.value?.date,
  articleModifiedTime: () => post.value?.updatedAt || post.value?.date,
  articleSection: () => post.value?.category || "Technology",
  twitterCard: "summary_large_image",
  twitterTitle: () => `${post.value?.title} | Aboubak'Art Blog`,
  twitterDescription: () => post.value?.description,
  twitterImage: () =>
    post.value?.image || "https://aboubak.art/images/blog-og.png",
});

// Structured data for article (Article + BreadcrumbList)
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `https://aboubak.art/blog/${slug}#article`,
              headline: post.value?.title,
              description: post.value?.description,
              image: post.value?.image || "https://aboubak.art/images/blog-og.png",
              datePublished: post.value?.date,
              dateModified: post.value?.updatedAt || post.value?.date,
              author: {
                "@type": "Person",
                name: "Aboubakar Sidik Faha",
                url: "https://aboubak.art",
              },
              publisher: {
                "@type": "Organization",
                name: "Aboubak'Art",
                logo: {
                  "@type": "ImageObject",
                  url: "https://aboubak.art/favicon.svg",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://aboubak.art/blog/${slug}`,
              },
              keywords: post.value?.tags?.join(", "),
              articleSection: post.value?.category || "Technology",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://aboubak.art",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://aboubak.art/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.value?.title,
                  item: `https://aboubak.art/blog/${slug}`,
                },
              ],
            },
          ],
        })
      ),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://aboubak.art/blog/${slug}`,
    },
  ],
});

// Fetch related posts (same tags or category)
const { data: relatedPosts } = await useAsyncData(
  `related-posts-${slug}-${locale.value}`,
  async () => {
    const posts = await queryCollection("blog")
      .where("locale", "=", locale.value)
      .order("date", "DESC")
      .limit(4)
      .all();
    // Filter out current post
    return posts.filter((p) => p.slug !== slug).slice(0, 3);
  },
  { watch: [locale] }
);
</script>

<template>
  <div v-if="post" class="pt-32 pb-20 min-h-screen">
    <article class="container-lg px-4 md:px-12">
      <!-- Breadcrumb -->
      <nav class="mb-8" aria-label="Breadcrumb">
        <ol class="flex items-center gap-2 text-sm text-text-secondary">
          <li>
            <NuxtLink
              :to="localePath('/')"
              class="hover:text-primary transition-colors"
            >
              {{ t("nav.home") }}
            </NuxtLink>
          </li>
          <li>
            <Icon name="heroicons:chevron-right" class="size-4" />
          </li>
          <li>
            <NuxtLink
              :to="localePath('/blog')"
              class="hover:text-primary transition-colors"
            >
              {{ t("blog.title") }}
            </NuxtLink>
          </li>
          <li>
            <Icon name="heroicons:chevron-right" class="size-4" />
          </li>
          <li class="text-text truncate max-w-52">{{ post.title }}</li>
        </ol>
      </nav>

      <!-- Header -->
      <header class="max-w-4xl mx-auto mb-12">
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Title -->
        <h1
          class="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 leading-tight"
        >
          {{ post.title }}
        </h1>

        <!-- Description -->
        <p class="font-inter text-xl text-text-secondary mb-8">
          {{ post.description }}
        </p>

        <!-- Meta -->
        <div
          class="flex flex-wrap items-center gap-6 text-sm text-text-secondary"
        >
          <!-- Author -->
          <div class="flex items-center gap-3">
            <img
              src="/images/40f2530e23e53f99d2ca8a1288a99418ce79bd7f.webp"
              alt="Aboubakar Sidik Faha"
              class="size-10 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p class="font-medium text-text">Aboubakar Sidik Faha</p>
              <p class="text-xs">{{ t("blog.author") }}</p>
            </div>
          </div>

          <span class="w-px h-6 bg-border" />

          <!-- Date -->
          <time :datetime="post.date" class="flex items-center gap-2">
            <Icon name="heroicons:calendar" class="size-4" />
            {{ formatDate(post.date) }}
          </time>

          <!-- Reading time -->
          <span class="flex items-center gap-2">
            <Icon name="heroicons:clock" class="size-4" />
            {{ post.readingTime || "5 min" }}
          </span>
        </div>
      </header>

      <!-- Featured Image -->
      <div
        v-if="post.image"
        class="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-auto aspect-video object-cover"
          loading="eager"
        />
      </div>

      <!-- Content -->
      <div class="max-w-4xl mx-auto">
        <div class="prose prose-invert prose-lg max-w-none">
          <ContentRenderer :value="post" />
        </div>

        <!-- Share Section -->
        <div class="mt-12 pt-8 border-t border-border">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <p class="font-inter font-medium text-text">
              {{ t("blog.share") }}
            </p>
            <div class="flex items-center gap-4">
              <a
                :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://aboubak.art/blog/${slug}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center size-10 rounded-lg glass-card hover:border-primary transition-colors"
                aria-label="Share on Twitter"
              >
                <Icon name="mdi:twitter" class="size-5" />
              </a>
              <a
                :href="`https://www.linkedin.com/sharing/share-offsite/?url=https://aboubak.art/blog/${slug}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center size-10 rounded-lg glass-card hover:border-primary transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Icon name="mdi:linkedin" class="size-5" />
              </a>
              <button
                @click="copyLink"
                class="flex items-center justify-center size-10 rounded-lg glass-card hover:border-primary transition-colors"
                aria-label="Copy link"
              >
                <Icon name="heroicons:link" class="size-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Giscus Comments -->
        <GiscusComments :key="slug" class="mt-12" />
      </div>
    </article>

    <!-- Related Posts -->
    <section
      v-if="relatedPosts && relatedPosts.length > 0"
      class="container-lg px-4 md:px-12 mt-20"
    >
      <h2 class="font-orbitron text-2xl font-bold text-text mb-8">
        {{ t("blog.relatedPosts") }}
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="relatedPost in relatedPosts"
          :key="relatedPost.path"
          class="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
        >
          <NuxtLink :to="localePath(`/blog/${relatedPost.slug}`)">
            <div class="relative aspect-video overflow-hidden">
              <img
                v-if="relatedPost.image"
                :src="relatedPost.image"
                :alt="relatedPost.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div
                v-else
                class="w-full h-full bg-gradient-primary opacity-20"
              />
            </div>
          </NuxtLink>
          <div class="p-6">
            <NuxtLink :to="localePath(`/blog/${relatedPost.slug}`)">
              <h3
                class="font-orbitron text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2"
              >
                {{ relatedPost.title }}
              </h3>
            </NuxtLink>
            <p class="font-inter text-text-secondary text-sm line-clamp-2">
              {{ relatedPost.description }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style>
/* Prose styling for dark theme */
.prose {
  --tw-prose-body: var(--color-text-secondary);
  --tw-prose-headings: var(--color-text);
  --tw-prose-links: var(--color-primary);
  --tw-prose-bold: var(--color-text);
  --tw-prose-code: var(--color-primary);
  --tw-prose-pre-bg: var(--color-surface);
  --tw-prose-pre-code: var(--color-text);
  --tw-prose-quotes: var(--color-text-secondary);
  --tw-prose-quote-borders: var(--color-primary);
}

.prose h2,
.prose h3,
.prose h4 {
  font-family: var(--font-orbitron);
  scroll-margin-top: 6rem;
}

.prose a {
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}

.prose pre {
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
}

.prose code:not(pre code) {
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  background-color: var(--color-surface);
  color: var(--color-primary);
}

.prose img {
  border-radius: 0.75rem;
}

.prose blockquote {
  border-left: 4px solid var(--color-primary);
  opacity: 0.5;
  font-style: italic;
}
</style>

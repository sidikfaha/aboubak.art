<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();

// SEO metadata for blog listing page
useSeoMeta({
  title: () => `${t("blog.title")} | Aboubak'Art`,
  description: () => t("blog.description"),
  ogTitle: () => `${t("blog.title")} | Aboubak'Art`,
  ogDescription: () => t("blog.description"),
  ogType: "website",
  ogUrl: "https://aboubak.art/blog",
  ogImage: "https://aboubak.art/images/blog-og.png",
  twitterCard: "summary_large_image",
  twitterTitle: () => `${t("blog.title")} | Aboubak'Art`,
  twitterDescription: () => t("blog.description"),
});

// Structured data for blog listing (WebPage + Blog)
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Aboubak'Art Blog",
        description:
          "Articles about web development, AI, and digital transformation",
        url: "https://aboubak.art/blog",
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
      }),
    },
  ],
});

// Fetch blog posts with locale filter
const { data: posts } = await useAsyncData(
  `blog-posts-${locale.value}`,
  () =>
    queryCollection("blog")
      .where("locale", "=", locale.value)
      .order("date", "DESC")
      .all(),
  { watch: [locale] }
);

// Format date based on locale
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString(locale.value, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};


</script>

<template>
  <div class="pt-32 pb-20 min-h-screen">
    <div class="container-lg px-4 md:px-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1.5 rounded-full glass-card text-primary font-inter text-sm font-medium mb-6"
        >
          {{ t("blog.badge") }}
        </span>
        <h1
          class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6"
        >
          {{ t("blog.title") }}
        </h1>
        <p
          class="font-inter text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
        >
          {{ t("blog.subtitle") }}
        </p>
      </div>

      <!-- Blog Posts Grid -->
      <div
        v-if="posts && posts.length > 0"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <article
          v-for="post in posts"
          :key="post.path"
          class="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
        >
          <!-- Featured Image -->
          <NuxtLink :to="localePath(`/blog/${post.slug}`)">
            <div class="relative aspect-video overflow-hidden">
              <NuxtImg
                v-if="post.image"
                :src="post.image"
                :alt="post.title"
                width="800"
                height="450"
                format="webp"
                quality="80"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div
                v-else
                class="w-full h-full bg-gradient-primary opacity-20"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"
              />
            </div>
          </NuxtLink>

          <!-- Content -->
          <div class="p-6">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in post.tags?.slice(0, 3)"
                :key="tag"
                class="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Title -->
            <NuxtLink :to="localePath(`/blog/${post.slug}`)">
              <h2
                class="font-orbitron text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-2"
              >
                {{ post.title }}
              </h2>
            </NuxtLink>

            <!-- Excerpt -->
            <p class="font-inter text-text-secondary text-sm mb-4 line-clamp-3">
              {{ post.description }}
            </p>

            <!-- Meta -->
            <div
              class="flex items-center justify-between text-xs text-text-secondary"
            >
              <time :datetime="post.date">{{ formatDate(post.date) }}</time>
              <span class="flex items-center gap-1">
                <Icon name="heroicons:clock" class="size-4" />
                {{ post.readingTime || '5 min' }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <Icon
          name="heroicons:document-text"
          class="size-16 text-text-secondary mx-auto mb-6"
        />
        <h2 class="font-orbitron text-2xl font-bold text-text mb-4">
          {{ t("blog.empty.title") }}
        </h2>
        <p class="font-inter text-text-secondary">
          {{ t("blog.empty.description") }}
        </p>
      </div>
    </div>
  </div>
</template>

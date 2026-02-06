<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Back button - Pill -->
      <NuxtLink 
        :to="localePath('/blog')"
        class="inline-flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-white hover:bg-slate-800/50 rounded-full transition-all mb-8 border border-transparent hover:border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
        aria-label="Back to all articles"
      >
        <Icon name="lucide:arrow-left" class="w-4 h-4" aria-hidden="true" />
        <span>{{ $t('blog.detail.back') }}</span>
      </NuxtLink>
      
      <article v-if="post" class="max-w-3xl mx-auto">
        <!-- Header -->
        <header class="mb-12">
          <div class="flex items-center gap-3 mb-6 flex-wrap">
            <span class="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
              {{ post.category }}
            </span>
            <time :datetime="post.date" class="text-text-muted">
              {{ formatDate(post.date) }}
            </time>
            <span class="text-text-muted" aria-hidden="true">•</span>
            <span class="text-text-muted">{{ post.readTime }} {{ $t('blog.detail.min_read') }}</span>
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {{ post.title }}
          </h1>
          <p class="text-text-secondary text-lg md:text-xl mb-6">
            {{ post.description }}
          </p>
          
          <!-- Tags -->
          <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="px-3 py-1 bg-slate-800/50 text-text-secondary text-sm rounded-full border border-slate-700/50 hover:border-accent/30 hover:text-accent transition-colors"
            >
              #{{ tag }}
            </span>
          </div>
        </header>
        
        <!-- Featured image -->
        <div class="aspect-video rounded-2xl overflow-hidden mb-12">
          <img 
            :src="post.image" 
            :alt="`Featured image for ${post.title}`"
            class="w-full h-full object-cover"
            loading="eager"
            width="1200"
            height="675"
          />
        </div>
        
        <!-- Content -->
        <div class="prose">
          <ContentRenderer :value="post" />
        </div>
        
        <!-- Author section -->
        <footer class="mt-16 p-8 glass rounded-2xl">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img 
                src="/me.webp"
                :alt="post.author || 'Aboubakar Sidik Faha'"
                class="w-full h-full object-cover"
                width="64"
                height="64"
              />
            </div>
            <div>
              <div class="font-semibold text-lg">{{ post.author || 'Aboubakar Sidik Faha' }}</div>
              <div class="text-text-secondary">{{ $t('blog.detail.author_role') }}</div>
            </div>
          </div>
        </footer>
      </article>
      
      <!-- Not found -->
      <div v-else class="text-center py-20">
        <Icon name="lucide:file-x" class="w-16 h-16 text-text-muted mx-auto mb-4" aria-hidden="true" />
        <h2 class="text-2xl font-bold mb-2">{{ $t('blog.detail.not_found') }}</h2>
        <p class="text-text-secondary mb-6">{{ $t('blog.detail.not_found_desc') }}</p>
        <NuxtLink 
          :to="localePath('/blog')"
          class="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
        >
          <span>{{ $t('blog.detail.view_all') }}</span>
        </NuxtLink>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const collectionName = computed(() => `blog_${locale.value}`)

const { data: post } = await useAsyncData(
  `blog-${locale.value}-${route.params.slug}`,
  () => queryCollection(collectionName.value)
    .where('stem', 'LIKE', `%${route.params.slug}%`)
    .first(),
  { watch: [locale] }
)

// SEO for blog post
usePageSeo({
  title: post.value ? post.value.title : 'Article Not Found',
  description: post.value ? post.value.description : 'The requested article could not be found.',
  type: 'article',
  image: post.value ? post.value.image : undefined,
  imageAlt: post.value ? post.value.title : undefined,
  publishedTime: post.value ? post.value.date : undefined,
  author: post.value?.author || 'Aboubakar Sidik Faha',
  tags: post.value?.tags || (post.value ? [post.value.category] : []),
  locale: locale.value === 'fr' ? 'fr_FR' : 'en_US',
})

// Breadcrumb schema
useBreadcrumbSchema([
  { name: t('seo.breadcrumb_home'), url: '/' },
  { name: t('nav.blog'), url: '/blog' },
  { name: post.value ? post.value.title : t('blog.subtitle'), url: post.value ? `/blog/${route.params.slug}` : undefined },
])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

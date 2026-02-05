<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Header -->
      <div class="max-w-4xl mb-16">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            {{ $t('blog.subtitle') }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {{ $t('blog.title') }}
        </h1>
        <p class="text-text-secondary text-lg leading-relaxed">
          {{ $t('blog.description') }}
        </p>
      </div>
      
      <!-- Featured post -->
      <div v-if="featuredPost" class="mb-16">
        <NuxtLink :to="localePath(`/blog/${featuredPost.stem.split('/').pop()}`)" class="group block">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="aspect-video rounded-2xl overflow-hidden">
              <img 
                :src="featuredPost.image" 
                :alt="featuredPost.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="px-4 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                  {{ featuredPost.category }}
                </span>
                <span class="text-text-muted text-sm">
                  {{ formatDate(featuredPost.date) }}
                </span>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                {{ featuredPost.title }}
              </h2>
              <p class="text-text-secondary mb-6">
                {{ featuredPost.description }}
              </p>
              <span class="inline-flex items-center gap-2 text-accent font-medium">
                {{ $t('blog.read_more') }}
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
      
      <!-- Blog grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article 
          v-for="post in posts" 
          :key="post.stem"
          class="group"
        >
          <NuxtLink :to="localePath(`/blog/${post.stem.split('/').pop()}`)">
            <div class="aspect-video rounded-xl overflow-hidden mb-4">
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="flex items-center gap-3 mb-3">
              <span class="text-accent text-xs font-mono">
                {{ post.category }}
              </span>
              <span class="text-text-muted text-xs">
                {{ formatDate(post.date) }}
              </span>
            </div>
            <h3 class="text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
              {{ post.title }}
            </h3>
            <p class="text-text-secondary text-sm line-clamp-2">
              {{ post.description }}
            </p>
          </NuxtLink>
        </article>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: `${t('nav.blog')} | Aboubakar Sidik Faha`,
})

const collectionName = computed(() => `blog_${locale.value}`)

const { data: allPosts } = await useAsyncData(
  `blog-posts-${locale.value}`,
  () => queryCollection(collectionName.value).order('date', 'DESC').all(),
  { watch: [locale] }
)

const featuredPost = computed(() => allPosts.value?.[0])
const posts = computed(() => allPosts.value?.slice(1) || [])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

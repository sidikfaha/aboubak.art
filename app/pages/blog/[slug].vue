<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Back button - Pill -->
      <NuxtLink 
        :to="localePath('/blog')"
        class="inline-flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-white hover:bg-slate-800/50 rounded-full transition-all mb-8 border border-transparent hover:border-slate-700/50"
      >
        <Icon name="lucide:arrow-left" class="w-4 h-4" />
        <span>Back to Blog</span>
      </NuxtLink>
      
      <article v-if="post" class="max-w-3xl mx-auto">
        <!-- Header -->
        <header class="mb-12">
          <div class="flex items-center gap-3 mb-6">
            <span class="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
              {{ post.category }}
            </span>
            <span class="text-text-muted">
              {{ formatDate(post.date) }}
            </span>
            <span class="text-text-muted">•</span>
            <span class="text-text-muted">{{ post.readTime }} min read</span>
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {{ post.title }}
          </h1>
          <p class="text-text-secondary text-lg md:text-xl">
            {{ post.description }}
          </p>
        </header>
        
        <!-- Featured image -->
        <div class="aspect-video rounded-2xl overflow-hidden mb-12">
          <img 
            :src="post.image" 
            :alt="post.title"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Content -->
        <div class="prose prose-invert prose-lg max-w-none">
          <ContentRenderer :value="post" />
        </div>
        
        <!-- Author section -->
        <div class="mt-16 p-8 glass rounded-2xl">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Aboubakar Sidik Faha"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <div class="font-semibold text-lg">Aboubakar Sidik Faha</div>
              <div class="text-text-secondary">DevOps Engineer & Software Architect</div>
            </div>
          </div>
        </div>
      </article>
      
      <!-- Not found -->
      <div v-else class="text-center py-20">
        <Icon name="lucide:file-x" class="w-16 h-16 text-text-muted mx-auto mb-4" />
        <h2 class="text-2xl font-bold mb-2">Article Not Found</h2>
        <p class="text-text-secondary mb-6">The article you're looking for doesn't exist.</p>
        <NuxtLink 
          :to="localePath('/blog')"
          class="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          <span>View All Articles</span>
        </NuxtLink>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () => 
  queryContent('blog')
    .where({ 
      _locale: locale.value,
      _path: { $contains: route.params.slug }
    })
    .findOne()
)

useHead({
  title: post.value ? `${post.value.title} | Blog` : 'Article Not Found',
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

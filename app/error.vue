<template>
  <NuxtLayout>
    <main class="min-h-screen flex items-center justify-center pt-20" role="main">
      <div class="text-center px-6">
        <div class="mb-8">
          <Icon name="lucide:alert-triangle" class="w-20 h-20 text-accent mx-auto mb-4" aria-hidden="true" />
          <h1 class="text-6xl md:text-8xl font-bold mb-4">{{ error?.statusCode || 404 }}</h1>
          <p class="text-text-secondary text-xl">{{ error?.statusMessage || 'Page not found' }}</p>
        </div>
        <button
          @click="handleError"
          class="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </button>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}

// SEO for error page - noindex
useHead({
  title: 'Error - Page Not Found',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'googlebot', content: 'noindex, nofollow' },
  ],
})
</script>

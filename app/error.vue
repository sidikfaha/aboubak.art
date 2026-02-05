<template>
  <NuxtLayout>
    <div class="min-h-screen flex items-center justify-center pt-20">
      <div class="text-center px-6">
        <div class="mb-8">
          <Icon name="lucide:alert-triangle" class="w-20 h-20 text-accent mx-auto mb-4" />
          <h1 class="text-6xl md:text-8xl font-bold mb-4">{{ error?.statusCode || 404 }}</h1>
          <p class="text-text-secondary text-xl">{{ error?.statusMessage || 'Page not found' }}</p>
        </div>
        <button
          @click="handleError"
          class="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}

useHead({
  title: 'Error - Page Not Found',
})
</script>

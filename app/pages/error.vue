<template>
  <div class="min-h-screen flex items-center justify-center pt-20">
    <div class="text-center px-6">
      <div class="mb-8">
        <Icon name="lucide:alert-triangle" class="w-20 h-20 text-accent mx-auto mb-4" />
        <h1 class="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p class="text-text-secondary text-xl">{{ $t('error.page_not_found') }}</p>
      </div>
      <NuxtLink
        :to="localePath('/')"
        class="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-all"
      >
        <Icon name="lucide:arrow-left" class="w-4 h-4" />
        <span>{{ $t('error.back_home') }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('error.title'),
})
</script>

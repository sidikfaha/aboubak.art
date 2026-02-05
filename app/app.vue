<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// GSAP setup for animations
onMounted(() => {
  // Initialize any global animation setups
  if (process.client) {
    // Add loaded class for entrance animations
    document.body.classList.add('app-loaded')
  }
})
</script>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

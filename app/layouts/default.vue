<template>
  <div class="relative min-h-screen bg-bg-primary">
    <!-- Background effects -->
    <div class="fixed inset-0 bg-grid pointer-events-none z-0"></div>
    <div class="fixed inset-0 noise-overlay pointer-events-none z-0"></div>
    
    <!-- Ambient glow -->
    <div class="fixed top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
    <div class="fixed bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0"></div>
    
    <!-- Navigation -->
    <AppHeader />
    
    <!-- Main content -->
    <main class="relative z-10">
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Custom cursor (desktop only) -->
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>
  </div>
</template>

<script setup>
// Smooth scroll polyfill for older browsers
useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  }
})
</script>

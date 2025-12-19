<script setup lang="ts">
const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-75"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-75"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 bg-gradient-primary size-16 rounded-full flex items-center justify-center shadow-glow hover:opacity-90 transition-opacity"
      aria-label="Scroll to top"
    >
      <Icon name="heroicons:arrow-up" class="size-5 text-white" />
    </button>
  </Transition>
</template>

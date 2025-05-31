<script setup>
defineProps({
  name: String,
  size: {
    type: Number,
    default: 40,
  },
  iconSize: {
    type: Number,
    default: 16,
  },
});
</script>

<template>
  <button
    v-bind="$attrs"
    class="group relative rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/50 dark:hover:bg-gray-700/50 flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 overflow-hidden"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <!-- Hover glow effect -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    
    <!-- Icon with enhanced interactions -->
    <icon 
      :name 
      :size="iconSize" 
      class="relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
    />
    
    <!-- Indicator slot with enhanced positioning -->
    <div class="absolute top-1 right-1 z-20">
      <slot name="indicator" />
    </div>
    
    <!-- Subtle reflection effect -->
    <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-2xl pointer-events-none"></div>
  </button>
</template>

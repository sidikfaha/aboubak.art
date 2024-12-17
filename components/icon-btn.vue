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
    class="rounded-full hover:bg-gray-100 flex items-center justify-center dark:hover:bg-gray-800 relative"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <icon :name :size="iconSize" />
    <slot name="indicator" />
  </button>
</template>

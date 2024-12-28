<template>
  <div
    class="inline-block p-5 pt-2 rounded-xl mb-4 border border-gray-300 bg-gray-200/30 dark:bg-gray-950/30 dark:border-gray-800"
  >
    <icon name="mdi:format-quote-close" :size="64" class="text-primary-200 dark:text-primary-700" />
    <p class="font-light text-sm text-justify">
      {{ testimony }}
    </p>
    <div class="mt-6 flex items-center gap-4">
      <NuxtImg :src="image" alt="David Ben OTTO" class="rounded-full size-10" />
      <div>
        <h3 class="font-bold">{{ name }}</h3>
        <p class="text-xs text-primary-700 dark:text-primary-300">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  title: String,
  image: String,
  testimony: String,
});
</script>

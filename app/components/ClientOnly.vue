<template>
  <slot v-if="mounted" />
  <slot v-else name="fallback" />
</template>

<script setup>
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>

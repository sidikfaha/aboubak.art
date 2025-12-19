<script setup lang="ts">
const { locale } = useI18n();
const config = useRuntimeConfig();

// Custom Giscus theme URL - hosted on your site
const giscusTheme = computed(() => {
  // Use the full URL to your custom theme CSS
  const baseUrl = config.public.siteUrl || "https://aboubak.art";
  return `${baseUrl}/giscus-theme.css`;
});

// Giscus configuration
// You'll need to set up Giscus at https://giscus.app and replace these values
const giscusConfig = {
  repo: "sidikfaha/aboubak.art", // Replace with your GitHub repo
  repoId: "R_kgDONWdEkw", // Get this from giscus.app
  category: "General",
  categoryId: "DIC_kwDONWdEk84C0BFN", // Get this from giscus.app
  mapping: "pathname",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  lang: computed(() => (locale.value === "fr" ? "fr" : "en")),
  loading: "lazy",
};

// Dynamically load Giscus script
const giscusContainer = ref<HTMLElement | null>(null);

const loadGiscus = () => {
  if (!giscusContainer.value) return;

  // Clear any existing giscus
  giscusContainer.value.innerHTML = "";

  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.setAttribute("data-repo", giscusConfig.repo);
  script.setAttribute("data-repo-id", giscusConfig.repoId);
  script.setAttribute("data-category", giscusConfig.category);
  script.setAttribute("data-category-id", giscusConfig.categoryId);
  script.setAttribute("data-mapping", giscusConfig.mapping);
  script.setAttribute("data-strict", giscusConfig.strict);
  script.setAttribute("data-reactions-enabled", giscusConfig.reactionsEnabled);
  script.setAttribute("data-emit-metadata", giscusConfig.emitMetadata);
  script.setAttribute("data-input-position", giscusConfig.inputPosition);
  script.setAttribute("data-theme", giscusTheme.value);
  script.setAttribute("data-lang", giscusConfig.lang.value);
  script.setAttribute("data-loading", giscusConfig.loading);
  script.crossOrigin = "anonymous";
  script.async = true;

  giscusContainer.value.appendChild(script);
};

// Reload Giscus when locale changes
watch(locale, () => {
  loadGiscus();
});

onMounted(() => {
  loadGiscus();
});
</script>

<template>
  <div class="giscus-wrapper">
    <div ref="giscusContainer" class="giscus" />
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

/* Style Giscus iframe container */
.giscus-wrapper :deep(.giscus-frame) {
  width: 100%;
}
</style>

<script setup lang="ts">
const { locale } = useI18n();

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
const giscusLoaded = ref(false);

const loadGiscus = () => {
  if (!giscusContainer.value || giscusLoaded.value) return;

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
  script.setAttribute("data-lang", giscusConfig.lang.value);
  script.setAttribute("data-loading", giscusConfig.loading);
  script.setAttribute("data-theme", "preferred_color_scheme");
  script.crossOrigin = "anonymous";
  script.async = true;

  giscusContainer.value.appendChild(script);
  giscusLoaded.value = true;
};

// Update Giscus config via postMessage instead of reloading
// This preserves the authentication state
const updateGiscusConfig = () => {
  const iframe = document.querySelector<HTMLIFrameElement>(
    "iframe.giscus-frame"
  );
  if (!iframe?.contentWindow) return;

  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          lang: giscusConfig.lang.value,
        },
      },
    },
    "https://giscus.app"
  );
};

// Update Giscus config when locale changes (without reloading)
watch(locale, () => {
  updateGiscusConfig();
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



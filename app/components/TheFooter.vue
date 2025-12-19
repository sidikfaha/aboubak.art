<script setup lang="ts">
const { t } = useI18n();

const socialLinks = ref([
  { icon: "mdi:linkedin", href: "https://linkedin.com/in/fahasidik", label: "LinkedIn" },
  { icon: "mdi:github", href: "https://github.com/sidikfaha", label: "GitHub" },
  { icon: "mdi:twitter", href: "https://x.com/sidikfaha", label: "Twitter" },
]);
</script>

<template>
  <footer class="glass-card py-12 px-6 md:px-36">
    <div class="container-md">
      <!-- Main Footer Content -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        <!-- Brand -->
        <div class="flex flex-col items-center md:items-start gap-2">
          <span class="font-orbitron font-bold text-2xl text-gradient-primary">
            {{ t("footer.brandName") }}
          </span>
          <span class="font-inter text-text-muted">
            {{ t("footer.tagline") }}
          </span>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-6">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            class="glass-card size-12 rounded-lg flex items-center justify-center hover:bg-surface transition-colors"
          >
            <Icon :name="social.icon" class="size-5 text-text-secondary" />
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-text-dark pt-8">
        <div class="flex flex-col items-center gap-2">
          <div class="flex items-center gap-2">
            <span class="font-inter text-text-muted">
              {{ t("footer.copyright") }}
            </span>
            <Icon name="heroicons:heart-solid" class="size-4 text-secondary" />
          </div>
          <span class="font-inter text-xs text-text-muted">
            RCCM: CI-ABJ-03-2024-A10-02543
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

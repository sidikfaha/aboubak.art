<script setup lang="ts">
const { t } = useI18n();

const features = computed(() => [
  { key: "response", icon: "heroicons:clock" },
  { key: "nda", icon: "heroicons:shield-check" },
  { key: "consultation", icon: "heroicons:chat-bubble-left-right" },
]);
</script>

<template>
  <section id="contact" class="py-24 pb-12">
    <div class="container-sm px-6 text-center">
      <!-- Heading -->
      <h2 class="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-gradient-primary mb-6">
        {{ t("cta.title") }}
      </h2>

      <!-- Subtitle -->
      <p class="font-inter text-xl md:text-2xl text-text-secondary mb-12">
        {{ t("cta.subtitle") }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
        <a
          href="https://calendar.app.google/DeCnXF86SxmiLF6M6"
          target="_blank"
          class="bg-gradient-primary px-10 py-5 rounded-xl font-orbitron font-bold text-lg md:text-xl text-text hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          {{ t("cta.scheduleCall") }}
        </a>
        <a
          href="mailto:me@aboubak.art"
          class="glass-card-strong px-10 py-5 rounded-xl font-orbitron font-bold text-lg md:text-xl text-text hover:bg-background-secondary transition-colors w-full sm:w-auto"
        >
          {{ t("cta.sendEmail") }}
        </a>
      </div>

      <!-- Features -->
      <div class="grid sm:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.key"
          class="glass-card rounded-xl p-6 flex flex-col items-center gap-2"
        >
          <Icon :name="feature.icon" class="size-8 text-primary" />
          <span class="font-inter text-text-secondary">
            {{ t(`cta.features.${feature.key}`) }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

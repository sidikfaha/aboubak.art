<script setup lang="ts">
const { t } = useI18n();

const features = computed(() => [
  { key: "response", icon: "heroicons:clock" },
  { key: "nda", icon: "heroicons:shield-check" },
  { key: "consultation", icon: "heroicons:chat-bubble-left-right" },
]);

const contactMethods = computed(() => [
  {
    icon: "heroicons:envelope",
    label: t("contact.email"),
    value: "me@aboubak.art",
    href: "mailto:me@aboubak.art",
  },
  {
    icon: "heroicons:phone",
    label: t("contact.phone"),
    value: "+225 07 05 21 60 05",
    href: "tel:+2250705216005",
  },
  {
    icon: "heroicons:map-pin",
    label: t("contact.location"),
    value: t("contact.locationValue"),
    href: null,
  },
]);

useSeoMeta({
  title: () => `${t("contact.pageTitle")} - Aboubak'Art`,
  description: () => t("contact.pageDescription"),
});
</script>

<template>
  <div class="min-h-screen pt-32 pb-24">
    <div class="container-sm px-6">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1
          class="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-gradient-primary mb-6"
        >
          {{ t("contact.title") }}
        </h1>
        <p class="font-inter text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
          {{ t("contact.subtitle") }}
        </p>
      </div>

      <!-- Contact Methods -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="method in contactMethods"
          :key="method.label"
          class="glass-card rounded-2xl p-8 text-center"
        >
          <div
            class="inline-flex items-center justify-center size-16 rounded-full bg-gradient-primary mb-6"
          >
            <Icon :name="method.icon" class="size-8 text-text" />
          </div>
          <h3 class="font-orbitron font-bold text-lg text-text mb-2">
            {{ method.label }}
          </h3>
          <component
            :is="method.href ? 'a' : 'span'"
            :href="method.href"
            class="font-inter text-text-secondary hover:text-primary transition-colors"
            :class="{ 'cursor-default': !method.href }"
          >
            {{ method.value }}
          </component>
        </div>
      </div>

      <!-- Main CTA Section -->
      <div class="glass-card-strong rounded-3xl p-12 text-center mb-16">
        <h2 class="font-orbitron font-bold text-2xl md:text-3xl text-text mb-4">
          {{ t("contact.ctaTitle") }}
        </h2>
        <p class="font-inter text-text-secondary mb-8 max-w-xl mx-auto">
          {{ t("contact.ctaDescription") }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://calendar.app.google/DeCnXF86SxmiLF6M6"
            target="_blank"
            class="bg-gradient-primary px-10 py-5 rounded-xl font-orbitron font-bold text-lg text-text hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            {{ t("contact.scheduleCall") }}
          </a>
          <a
            href="mailto:me@aboubak.art"
            class="glass-card px-10 py-5 rounded-xl font-orbitron font-bold text-lg text-text hover:bg-background-secondary transition-colors w-full sm:w-auto"
          >
            {{ t("contact.sendEmail") }}
          </a>
        </div>
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
  </div>
</template>

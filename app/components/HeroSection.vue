<script setup lang="ts">
const { t } = useI18n();

const stats = computed(() => [
  { value: "150+", label: t("hero.stats.projects") },
  { value: "98%", label: t("hero.stats.satisfaction") },
  { value: "7+", label: t("hero.stats.experience") },
]);
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center pt-24 pb-0 overflow-hidden"
  >
    <!-- Background Gradient -->
    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(
          147deg,
          #0f172a 0%,
          #1e293b 50%,
          #0f172a 100%
        );
      "
    />

    <!-- Blur Effects -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div
        class="absolute w-96 h-96 bg-primary rounded-full blur-[128px] top-20 left-40"
      />
      <div
        class="absolute w-96 h-96 bg-secondary rounded-full blur-[128px] bottom-20 right-40"
      />
    </div>

    <!-- Content -->
    <div
      class="relative z-10 container-md px-6 md:px-12 flex flex-col items-center text-center"
    >
      <!-- Avatar -->
      <div class="mb-8">
        <div class="relative inline-block">
          <div class="bg-gradient-primary p-1 rounded-full size-32">
            <div class="rounded-full overflow-hidden size-full bg-background">
              <img
                src="/images/40f2530e23e53f99d2ca8a1288a99418ce79bd7f.webp"
                alt="Aboubakar Sidik Faha"
                class="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Name -->
      <h1 class="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl text-gradient-primary mb-4">
        {{ t("hero.name") }}
      </h1>

      <!-- Title with dividers -->
      <div class="flex items-center justify-center gap-4 mb-6">
        <div
          class="w-16 h-px"
          style="background: linear-gradient(to right, transparent, #06b6d4)"
        />
        <span class="font-inter font-light text-lg md:text-2xl text-text-secondary">
          {{ t("hero.title") }}
        </span>
        <div
          class="w-16 h-px"
          style="background: linear-gradient(to left, transparent, #ec4899)"
        />
      </div>

      <!-- Description -->
      <p
        class="font-inter text-lg md:text-xl text-text-muted max-w-3xl mb-10 leading-relaxed"
      >
        {{ t("hero.description") }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16">
        <NuxtLink
          to="#services"
          class="bg-gradient-primary px-8 py-4 rounded-xl font-inter font-semibold text-lg text-text hover:opacity-90 transition-opacity"
        >
          {{ t("hero.discoverServices") }}
        </NuxtLink>
        <NuxtLink
          to="#portfolio"
          class="glass-card-strong px-8 py-4 rounded-xl font-inter font-semibold text-lg text-text hover:bg-background-secondary transition-colors"
        >
          {{ t("hero.viewPortfolio") }}
        </NuxtLink>
      </div>

      <!-- Stats -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <template v-for="(stat, index) in stats" :key="stat.label">
          <div class="flex flex-col items-center gap-2">
            <span class="font-orbitron font-bold text-3xl md:text-4xl text-gradient-primary">
              {{ stat.value }}
            </span>
            <span class="font-inter text-sm text-text-muted uppercase tracking-wider">
              {{ stat.label }}
            </span>
          </div>
          <!-- Divider -->
          <div
            v-if="index < stats.length - 1"
            class="hidden md:block w-px h-16"
            style="background: linear-gradient(to bottom, #06b6d4, #ec4899)"
          />
        </template>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon name="heroicons:chevron-down" class="size-6 text-text-muted" />
    </div>
  </section>
</template>

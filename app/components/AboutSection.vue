<script setup lang="ts">
const { t } = useI18n();

const skills = computed(() => [
  { key: "development", icon: "heroicons:code-bracket" },
  { key: "aiMl", icon: "heroicons:cpu-chip" },
  { key: "strategy", icon: "heroicons:chart-bar" },
]);

const values = computed(() => [
  {
    key: "innovation",
    icon: "heroicons:light-bulb",
    bgColor: "bg-primary/20",
  },
  {
    key: "collaboration",
    icon: "heroicons:user-group",
    bgColor: "bg-secondary/20",
  },
]);
</script>

<template>
  <section id="about" class="py-24">
    <div class="container-md px-6">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4 mb-16">
        <h2 class="font-orbitron font-bold text-4xl md:text-5xl text-gradient-primary">
          {{ t("about.title") }}
        </h2>
        <div class="w-24 h-1 bg-gradient-primary rounded-full" />
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Image Card -->
        <div class="glass-card-strong rounded-2xl p-8 space-y-6">
          <div class="aspect-square rounded-xl overflow-hidden">
            <img
              src="/images/ec5a3dd22ad2d6706e807c2a11c95e845211383d.png"
              alt="Professional tech consultant"
              class="size-full object-cover"
            />
          </div>

          <!-- Skills Badges -->
          <div class="flex justify-center gap-4">
            <div
              v-for="skill in skills"
              :key="skill.key"
              class="glass-card rounded-lg px-4 py-3 flex flex-col items-center gap-2"
            >
              <Icon :name="skill.icon" class="size-6 text-primary" />
              <span class="font-inter text-xs text-text-muted">
                {{ t(`about.skills.${skill.key}`) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: Text Content -->
        <div class="space-y-6">
          <h3 class="font-orbitron font-bold text-2xl md:text-3xl text-white leading-snug">
            {{ t("about.heading") }}
          </h3>

          <p class="font-inter text-text-secondary leading-relaxed">
            {{ t("about.description1") }}
          </p>

          <p class="font-inter text-text-secondary leading-relaxed">
            {{ t("about.description2") }}
          </p>

          <!-- Values Cards -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div
              v-for="value in values"
              :key="value.key"
              class="glass-card rounded-xl p-6 space-y-3"
            >
              <div class="flex items-center gap-4">
                <div
                  :class="[value.bgColor, 'rounded-lg size-12 flex items-center justify-center']"
                >
                  <Icon :name="value.icon" class="size-5 text-white" />
                </div>
                <h4 class="font-orbitron font-semibold text-lg text-text">
                  {{ t(`about.values.${value.key}.title`) }}
                </h4>
              </div>
              <p class="font-inter text-sm text-text-muted">
                {{ t(`about.values.${value.key}.description`) }}
              </p>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a
              href="https://calendar.app.google/DeCnXF86SxmiLF6M6"
              target="_blank"
              class="bg-gradient-primary px-6 py-3 rounded-lg font-inter font-semibold text-text hover:opacity-90 transition-opacity"
            >
              {{ t("about.cta.discuss") }}
            </a>
            <a
              href="#"
              class="glass-card px-6 py-3 rounded-lg font-inter font-semibold text-text flex items-center gap-2 hover:bg-surface transition-colors"
            >
              <Icon name="heroicons:arrow-down-tray" class="size-4" />
              {{ t("about.cta.downloadCv") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n();

interface Service {
  key: string;
  icon: string;
  gradient: string;
  priceColor: string;
}

const services = ref<Service[]>([
  {
    key: "webDev",
    icon: "heroicons:code-bracket",
    gradient: "bg-gradient-primary",
    priceColor: "text-primary",
  },
  {
    key: "ai",
    icon: "heroicons:cpu-chip",
    gradient: "bg-gradient-ai",
    priceColor: "text-secondary",
  },
  {
    key: "strategy",
    icon: "heroicons:chart-bar",
    gradient: "bg-gradient-strategy",
    priceColor: "text-primary",
  },
  {
    key: "mobile",
    icon: "heroicons:device-phone-mobile",
    gradient: "bg-gradient-mobile",
    priceColor: "text-accent",
  },
]);

const getFeatures = (serviceKey: string): string[] => {
  const features = tm(`services.${serviceKey}.features`) as unknown;
  if (Array.isArray(features)) {
    return features.map((f: unknown) => (typeof f === 'string' ? f : rt(f as Parameters<typeof rt>[0])));
  }
  return [];
};

const currentIndex = ref(0);
const scrollContainer = ref<HTMLElement | null>(null);

const scrollTo = (direction: "prev" | "next") => {
  if (direction === "next" && currentIndex.value < services.value.length - 1) {
    currentIndex.value++;
  } else if (direction === "prev" && currentIndex.value > 0) {
    currentIndex.value--;
  }
  
  if (scrollContainer.value) {
    const cardWidth = 432;
    scrollContainer.value.scrollTo({
      left: currentIndex.value * cardWidth,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <section
    id="services"
    class="py-24"
    style="background: linear-gradient(to bottom, #0f172a, #1e293b)"
  >
    <div class="container-lg px-6 md:px-20">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4 mb-16">
        <h2 class="font-orbitron font-bold text-4xl md:text-5xl text-gradient-primary">
          {{ t("services.title") }}
        </h2>
        <p class="font-inter text-lg md:text-xl text-text-muted text-center max-w-2xl">
          {{ t("services.subtitle") }}
        </p>
        <div class="w-24 h-1 bg-gradient-primary rounded-full" />
      </div>

      <!-- Services Carousel -->
      <div class="relative">
        <!-- Cards Container -->
        <div
          ref="scrollContainer"
          class="flex gap-8 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory"
        >
          <div
            v-for="service in services"
            :key="service.key"
            class="glass-card-strong rounded-2xl p-8 shrink-0 w-85 md:w-100 snap-start flex flex-col"
          >
            <!-- Icon -->
            <div
              :class="[service.gradient, 'size-16 rounded-xl flex items-center justify-center mb-6']"
            >
              <Icon :name="service.icon" class="size-7 text-white" />
            </div>

            <!-- Title -->
            <h3 class="font-orbitron font-bold text-2xl text-white mb-4">
              {{ t(`services.${service.key}.title`) }}
            </h3>

            <!-- Description -->
            <p class="font-inter text-text-muted leading-relaxed mb-6">
              {{ t(`services.${service.key}.description`) }}
            </p>

            <!-- Features List -->
            <ul class="space-y-3 mb-8 grow">
              <li
                v-for="(feature, index) in getFeatures(service.key)"
                :key="index"
                class="flex items-center gap-3"
              >
                <Icon name="heroicons:check-circle" class="size-4 text-primary shrink-0" />
                <span class="font-inter text-text-secondary">{{ feature }}</span>
              </li>
            </ul>

            <!-- Price -->
            <p
              :class="[service.priceColor, 'font-orbitron font-bold text-2xl md:text-3xl mb-6']"
            >
              {{ t("services.startingFrom") }} {{ t(`services.${service.key}.price`) }}
            </p>

            <!-- CTA -->
            <button
              class="glass-card w-full py-3 rounded-lg font-inter font-semibold text-text hover:bg-surface transition-colors"
            >
              {{ t("services.learnMore") }}
            </button>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="scrollTo('prev')"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass-card size-12 rounded-full items-center justify-center hover:bg-surface transition-colors hidden lg:flex"
        >
          <Icon name="heroicons:chevron-left" class="size-5 text-text" />
        </button>
        <button
          @click="scrollTo('next')"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass-card size-12 rounded-full items-center justify-center hover:bg-surface transition-colors hidden lg:flex"
        >
          <Icon name="heroicons:chevron-right" class="size-5 text-text" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

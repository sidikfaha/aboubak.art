<script setup lang="ts">
const { t } = useI18n();

interface Testimonial {
  key: string;
  borderColor: string;
  rating: number;
}

const testimonials = ref<Testimonial[]>([
  {
    key: "osaigbovo",
    borderColor: "border-primary",
    rating: 5,
  },
  {
    key: "david",
    borderColor: "border-secondary",
    rating: 5,
  },
  {
    key: "bruce",
    borderColor: "border-primary",
    rating: 5,
  },
  {
    key: "jim",
    borderColor: "border-secondary",
    rating: 5,
  },
  {
    key: "hermann",
    borderColor: "border-primary",
    rating: 5,
  },
  {
    key: "cabraule",
    borderColor: "border-secondary",
    rating: 5,
  },
]);
</script>

<template>
  <section
    id="testimonials"
    class="py-24"
    style="background: linear-gradient(to bottom, #1e293b, #0f172a)"
  >
    <div class="container-lg px-6 md:px-12">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4 mb-16">
        <h2 class="font-orbitron font-bold text-4xl md:text-5xl text-gradient-primary">
          {{ t("testimonials.title") }}
        </h2>
        <p class="font-inter text-lg md:text-xl text-text-muted text-center">
          {{ t("testimonials.subtitle") }}
        </p>
        <div class="w-24 h-1 bg-gradient-primary rounded-full" />
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.key"
          class="glass-card rounded-2xl p-6"
        >
          <!-- Header -->
          <div class="flex items-start gap-3 mb-4">
            <div
              :class="[testimonial.borderColor, 'size-12 rounded-full border-2 flex items-center justify-center bg-background-secondary shrink-0']"
            >
              <span class="font-orbitron font-bold text-lg text-gradient-primary">
                {{ t(`testimonials.${testimonial.key}.name`).charAt(0) }}
              </span>
            </div>
            <div class="min-w-0">
              <h4 class="font-orbitron font-bold text-white text-sm leading-tight">
                {{ t(`testimonials.${testimonial.key}.name`) }}
              </h4>
              <p class="font-inter text-xs text-text-muted mt-1">
                {{ t(`testimonials.${testimonial.key}.role`) }}
              </p>
            </div>
          </div>

          <!-- Rating -->
          <div class="flex gap-1 mb-3">
            <Icon
              v-for="i in testimonial.rating"
              :key="i"
              name="heroicons:star-solid"
              class="size-3 text-yellow-400"
            />
          </div>

          <!-- Quote -->
          <p class="font-inter text-sm text-text-secondary leading-relaxed line-clamp-5">
            "{{ t(`testimonials.${testimonial.key}.text`) }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

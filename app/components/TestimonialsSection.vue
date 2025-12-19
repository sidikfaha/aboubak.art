<script setup lang="ts">
const { t } = useI18n();

interface Testimonial {
  key: string;
  image: string;
  borderColor: string;
  rating: number;
}

const testimonials = ref<Testimonial[]>([
  {
    key: "client1",
    image: "/images/c77156831b24f052cbcb1b0569370f4cb743f299.png",
    borderColor: "border-primary",
    rating: 5,
  },
  {
    key: "client2",
    image: "/images/5b93f62728c7f9ed348b00b53d5fbe64a02cdcf8.png",
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
    <div class="container-md px-6 md:px-36">
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
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.key"
          class="glass-card rounded-2xl p-8"
        >
          <!-- Header -->
          <div class="flex items-center gap-4 mb-6">
            <div
              :class="[testimonial.borderColor, 'size-16 rounded-full border-2 overflow-hidden']"
            >
              <img
                :src="testimonial.image"
                :alt="t(`testimonials.${testimonial.key}.name`)"
                class="size-full object-cover"
              />
            </div>
            <div>
              <h4 class="font-orbitron font-bold text-white">
                {{ t(`testimonials.${testimonial.key}.name`) }}
              </h4>
              <p class="font-inter text-sm text-text-muted">
                {{ t(`testimonials.${testimonial.key}.role`) }}
              </p>
            </div>
          </div>

          <!-- Rating -->
          <div class="flex gap-1 mb-4">
            <Icon
              v-for="i in testimonial.rating"
              :key="i"
              name="heroicons:star-solid"
              class="size-4 text-yellow-400"
            />
          </div>

          <!-- Quote -->
          <p class="font-inter text-text-secondary leading-relaxed">
            "{{ t(`testimonials.${testimonial.key}.text`) }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

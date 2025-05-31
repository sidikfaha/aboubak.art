<template>
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="container">
      <div class="text-center mb-12 animate-fade-up" ref="titleRef">
        <h2 class="text-4xl lg:text-5xl font-extrabold mb-6">
          {{ $t("home.services.title") }}
        </h2>
        <p class="text-xl font-light max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          {{ $t("home.services.description") }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 stagger-children" ref="servicesRef">
        <div
          v-for="(service, key, index) in services"
          :key="key"
          class="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover-lift hover-glow animate-fade-up border border-gray-200 dark:border-gray-700"
          :style="{ '--index': index }"
        >
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <icon :name="getServiceIcon(key)" class="text-white" :size="20" />
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-primary-400 transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              <ul class="space-y-2">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <icon name="mdi:check-circle" class="text-primary dark:text-primary-400" :size="16" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 animate-fade-up" ref="ctaRef">
        <a
          href="#"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <icon name="mdi:calendar" :size="20" />
          {{ $t("home.hero.cta") }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $t } = useNuxtApp()
const { animateOnScroll } = useScrollAnimation()

const titleRef = ref(null)
const servicesRef = ref(null)
const ctaRef = ref(null)

const services = computed(() => $t('home.services.items'))

const getServiceIcon = (service) => {
  const icons = {
    devops: 'mdi:rocket-launch',
    cloud: 'mdi:cloud-outline',
    development: 'mdi:code-tags',
    consulting: 'mdi:lightbulb-outline'
  }
  return icons[service] || 'mdi:cog'
}

onMounted(() => {
  nextTick(() => {
    if (titleRef.value) {
      animateOnScroll([titleRef.value])
    }
    
    if (servicesRef.value) {
      const serviceCards = servicesRef.value.querySelectorAll('.animate-fade-up')
      serviceCards.forEach((card, index) => {
        card.style.setProperty('--stagger-delay', '200ms')
        card.style.setProperty('--index', index)
      })
      animateOnScroll(serviceCards)
    }

    if (ctaRef.value) {
      animateOnScroll([ctaRef.value])
    }
  })
})
</script>
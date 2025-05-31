<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Background with gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30"></div>
    
    <!-- Floating decorative elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    
    <div class="container relative z-10">
      <!-- Enhanced title section -->
      <div class="text-center mb-16 animate-fade-up" ref="titleRef">
        <div class="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full border border-blue-200/20 dark:border-blue-400/20">
          <span class="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {{ $t("home.common.professionalServices") }}
          </span>
        </div>
        <h2 class="text-5xl lg:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
            {{ $t("home.services.title") }}
          </span>
        </h2>
        <p class="text-xl font-light max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ $t("home.services.description") }}
        </p>
      </div>

      <!-- Enhanced services grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 stagger-children" ref="servicesRef">
        <div
          v-for="(service, index) in services"
          :key="service.key"
          class="group relative p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-up card-3d overflow-hidden"
          :style="{ '--index': index }"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <!-- Animated gradient border -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          <div class="absolute inset-[1px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl"></div>
          
          <!-- Floating particles effect -->
          <div class="absolute inset-0 overflow-hidden rounded-3xl">
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm animate-float"></div>
            <div class="absolute -bottom-4 -right-4 w-6 h-6 bg-indigo-400/30 rounded-full blur-sm animate-float" style="animation-delay: 1s;"></div>
            <div class="absolute top-1/2 -right-2 w-4 h-4 bg-purple-400/30 rounded-full blur-sm animate-float" style="animation-delay: 2s;"></div>
          </div>
          
          <div class="relative z-10 flex items-start gap-6">
            <!-- Enhanced icon with 3D effect -->
            <div class="relative group-hover:scale-110 transition-transform duration-500">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <!-- Icon glow effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-indigo-500/50 rounded-2xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <icon :name="getServiceIcon(service.key)" class="text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" :size="24" />
              </div>
              <!-- Icon reflection -->
              <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-2xl"></div>
            </div>
            
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {{ $t(`home.services.${service.key}.title`) }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                {{ $t(`home.services.${service.key}.description`) }}
              </p>
              
              <!-- Enhanced features list -->
              <ul class="space-y-3">
                <li
                  v-for="(featureKey, idx) in service.features"
                  :key="featureKey"
                  class="flex items-center gap-3 text-gray-700 dark:text-gray-300 group-hover:translate-x-2 transition-transform duration-300"
                  :style="{ 'transition-delay': `${idx * 100}ms` }"
                >
                  <div class="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <icon name="mdi:check" class="text-white" :size="12" />
                  </div>
                  <span class="font-medium">{{ $t(`home.services.${service.key}.${featureKey}`) }}</span>
                </li>
              </ul>
              
              <!-- Service highlight badge -->
              <div class="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300">
                <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                {{ $t("home.common.availableNow") }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced CTA section -->
      <div class="text-center animate-fade-up" ref="ctaRef">
        <div class="inline-block p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-xl">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t("home.common.readyToGetStarted") }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
            {{ $t("home.common.getStartedDescription") }}
          </p>
          <a
            href="#"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 glow-effect group"
          >
            <icon name="mdi:calendar" :size="20" class="group-hover:rotate-12 transition-transform duration-300" />
            {{ $t("home.hero.cta") }}
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-indigo-400/50 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const { animateOnScroll } = useScrollAnimation()

const titleRef = ref(null)
const servicesRef = ref(null)
const ctaRef = ref(null)

const services = [
  { key: 'devops', features: ['feature1', 'feature2', 'feature3', 'feature4'] },
  { key: 'cloud', features: ['feature1', 'feature2', 'feature3', 'feature4'] },
  { key: 'development', features: ['feature1', 'feature2', 'feature3', 'feature4'] },
  { key: 'consulting', features: ['feature1', 'feature2', 'feature3', 'feature4'] }
]

const getServiceIcon = (service) => {
  const icons = {
    devops: 'mdi:rocket-launch',
    cloud: 'mdi:cloud-outline',
    development: 'mdi:code-tags',
    consulting: 'mdi:lightbulb-outline'
  }
  return icons[service] || 'mdi:cog'
}

// Enhanced mouse interaction handlers
const handleMouseEnter = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

const handleMouseLeave = (e) => {
  const card = e.currentTarget
  card.style.removeProperty('--mouse-x')
  card.style.removeProperty('--mouse-y')
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
<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
    
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
    
    <div class="container relative z-10">
      <div class="text-center mb-16 animate-fade-up" ref="titleRef">
        <div class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-600 dark:text-primary-400 font-medium text-sm mb-6">
          <icon name="mdi:star-four-points" class="mr-2" :size="16" />
          Technical Expertise
        </div>
        <h2 class="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
          {{ $t("home.skills.title") }}
        </h2>
        <p class="text-xl font-light max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ $t("home.skills.description") }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children" ref="skillsRef">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.key"
          class="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up overflow-hidden"
          :style="{ '--index': index }"
        >
          <!-- Card background gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Animated border -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-105"></div>
          
          <div class="relative text-center">
            <!-- Enhanced icon container -->
            <div class="relative w-20 h-20 mx-auto mb-6">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              <div class="relative w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <icon :name="getCategoryIcon(category.key)" class="text-white drop-shadow-lg" :size="28" />
              </div>
              <!-- Floating particles -->
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            <h3 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white group-hover:text-primary-100 dark:group-hover:text-primary-400 transition-colors duration-300">
              {{ $t(`home.skills.${category.key}.title`) }}
            </h3>

            <!-- Enhanced skill tags -->
            <div class="flex flex-wrap gap-3 justify-center">
              <span
                v-for="(itemKey, tagIndex) in category.items"
                :key="itemKey"
                class="relative px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300 cursor-default border border-gray-300/50 dark:border-gray-600/50 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-lg group/tag"
                :style="{ 'animation-delay': `${tagIndex * 100}ms` }"
              >
                <!-- Tag glow effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300 -z-10"></div>
                <span class="relative z-10 group-hover/tag:text-primary-600 dark:group-hover/tag:text-primary-400 transition-colors duration-300">
                  {{ $t(`home.skills.${category.key}.${itemKey}`) }}
                </span>
              </span>
            </div>

            <!-- Progress indicator -->
            <div class="mt-6 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                class="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"
                :style="{ 'transition-delay': `${index * 200}ms` }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom decorative element -->
      <div class="text-center mt-16">
        <div class="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          <div class="w-12 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
          <icon name="mdi:code-tags" :size="20" />
          <div class="w-12 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const { animateOnScroll } = useScrollAnimation()

const titleRef = ref(null)
const skillsRef = ref(null)

const skillCategories = [
  { key: 'cloud', items: ['item1', 'item2', 'item3', 'item4'] },
  { key: 'devops', items: ['item1', 'item2', 'item3', 'item4'] },
  { key: 'backend', items: ['item1', 'item2', 'item3', 'item4'] },
  { key: 'frontend', items: ['item1', 'item2', 'item3', 'item4'] }
]

const getCategoryIcon = (category) => {
  const icons = {
    cloud: 'mdi:cloud',
    devops: 'mdi:cog',
    backend: 'mdi:server',
    frontend: 'mdi:web'
  }
  return icons[category] || 'mdi:code-tags'
}

onMounted(() => {
  nextTick(() => {
    if (titleRef.value) {
      animateOnScroll([titleRef.value])
    }
    
    if (skillsRef.value) {
      const skillCards = skillsRef.value.querySelectorAll('.animate-scale-up')
      skillCards.forEach((card, index) => {
        card.style.setProperty('--stagger-delay', `${index * 150}ms`)
        card.style.setProperty('--index', index)
        
        // Add mouse move parallax effect
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = (y - centerY) / 10
          const rotateY = (centerX - x) / 10
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
        })
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
        })
      })
      animateOnScroll(skillCards)
    }
  })
})
</script>
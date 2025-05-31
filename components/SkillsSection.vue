<template>
  <section class="py-16 gradient-bg">
    <div class="container">
      <div class="text-center mb-12 animate-fade-up" ref="titleRef">
        <h2 class="text-4xl lg:text-5xl font-extrabold mb-6">
          {{ $t("home.skills.title") }}
        </h2>
        <p class="text-xl font-light max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          {{ $t("home.skills.description") }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children" ref="skillsRef">
        <div
          v-for="(category, key, index) in skillCategories"
          :key="key"
          class="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover-lift animate-scale-up"
          :style="{ '--index': index }"
        >
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
              <icon :name="getCategoryIcon(key)" class="text-white" :size="24" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {{ category.title }}
            </h3>
            <div class="flex flex-wrap gap-2 justify-center">
              <span
                v-for="skill in category.items"
                :key="skill"
                class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $t } = useNuxtApp()
const { animateOnScroll } = useScrollAnimation()

const titleRef = ref(null)
const skillsRef = ref(null)

const skillCategories = computed(() => $t('home.skills.categories'))

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
        card.style.setProperty('--stagger-delay', '100ms')
        card.style.setProperty('--index', index)
      })
      animateOnScroll(skillCards)
    }
  })
})
</script>
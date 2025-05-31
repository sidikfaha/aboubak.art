<template>
  <span ref="counterRef">{{ displayValue }}</span>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  suffix: {
    type: String,
    default: '+'
  },
  duration: {
    type: Number,
    default: 2000
  }
})

const { animateCounter } = useScrollAnimation()
const counterRef = ref(null)
const displayValue = ref('0' + props.suffix)
const hasAnimated = ref(false)

onMounted(() => {
  nextTick(() => {
    if (counterRef.value) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            hasAnimated.value = true
            animateCounterValue()
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.5 })

      observer.observe(counterRef.value)
    }
  })
})

const animateCounterValue = () => {
  const startValue = 0
  const startTime = performance.now()

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const currentValue = Math.floor(startValue + (props.value - startValue) * easeOutQuart)
    
    displayValue.value = currentValue + props.suffix
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    }
  }

  requestAnimationFrame(updateCounter)
}
</script>
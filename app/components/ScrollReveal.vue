<template>
  <div ref="element" :class="[$attrs.class]">
    <slot />
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
  animation: {
    type: String,
    default: 'fadeInUp'
  },
  delay: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 0.8
  },
  y: {
    type: Number,
    default: 30
  },
  stagger: {
    type: Number,
    default: 0
  }
})

const element = ref(null)
let trigger = null

onMounted(() => {
  if (process.server) return
  
  gsap.registerPlugin(ScrollTrigger)
  
  const el = element.value
  
  // Set initial state
  gsap.set(el, { 
    opacity: 0, 
    y: props.y 
  })
  
  // Create scroll trigger
  trigger = ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: props.duration,
        delay: props.delay,
        ease: 'power3.out'
      })
    }
  })
})

onUnmounted(() => {
  if (trigger) {
    trigger.kill()
  }
})
</script>

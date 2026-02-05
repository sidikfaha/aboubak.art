<template>
  <section ref="sectionRef" class="py-24 lg:py-32 relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0">
      <div ref="glowRef" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] opacity-0"></div>
    </div>
    
    <Container class="relative z-10">
      <div ref="contentRef" class="max-w-4xl mx-auto text-center opacity-0">
        <!-- Label -->
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            Let's Connect
          </span>
          <div class="w-12 h-px bg-accent"></div>
        </div>
        
        <!-- Heading -->
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {{ $t('cta.title') }}
        </h2>
        
        <!-- Description -->
        <p class="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {{ $t('cta.description') }}
        </p>
        
        <!-- CTA Button -->
        <NuxtLink
          :to="localePath('/contact')"
          class="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white text-lg font-medium rounded-xl transition-all hover:shadow-2xl hover:shadow-accent/25 hover:-translate-y-1 magnetic-btn"
        >
          <span>{{ $t('cta.button') }}</span>
          <Icon name="lucide:calendar" class="w-5 h-5" />
        </NuxtLink>
        
        <!-- Features -->
        <div class="flex flex-wrap justify-center gap-8 mt-12">
          <div class="flex items-center gap-2 text-text-secondary">
            <Icon name="lucide:clock" class="w-5 h-5 text-accent" />
            <span class="text-sm">{{ $t('cta.response') }}</span>
          </div>
          <div class="flex items-center gap-2 text-text-secondary">
            <Icon name="lucide:shield-check" class="w-5 h-5 text-accent" />
            <span class="text-sm">{{ $t('cta.nda') }}</span>
          </div>
          <div class="flex items-center gap-2 text-text-secondary">
            <Icon name="lucide:globe" class="w-5 h-5 text-accent" />
            <span class="text-sm">Remote Worldwide</span>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const localePath = useLocalePath()

const sectionRef = ref(null)
const contentRef = ref(null)
const glowRef = ref(null)

onMounted(() => {
  if (process.server) return
  
  gsap.registerPlugin(ScrollTrigger)
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true
    }
  })
  
  tl.to(glowRef.value, {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: 'power2.out'
  })
  .to(contentRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  
  // Set initial states
  gsap.set(glowRef.value, { opacity: 0, scale: 0.8 })
  gsap.set(contentRef.value, { opacity: 0, y: 40 })
})
</script>

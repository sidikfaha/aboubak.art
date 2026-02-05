<template>
  <section id="services" ref="sectionRef" class="py-24 lg:py-32 relative">
    <div class="w-full px-6 lg:px-12">
      <!-- Section header -->
      <div ref="headerRef" class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 opacity-0">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-px bg-accent"></div>
            <span class="text-accent font-mono text-sm uppercase tracking-widest">
              {{ $t('services.subtitle') }}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {{ $t('services.title') }}
          </h2>
          <p class="text-text-secondary text-lg">
            {{ $t('services.description') }}
          </p>
        </div>
        
        <NuxtLink 
          :to="localePath('/services')"
          class="group flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
        >
          <span class="font-medium">View all services</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
      </div>
      
      <!-- Services list -->
      <div ref="servicesRef" class="space-y-4">
        <div 
          v-for="(service, i) in services" 
          :key="i"
          class="group relative opacity-0"
          :data-service-index="i"
          @mouseenter="activeService = i"
          @mouseleave="activeService = null"
        >
          <div 
            class="relative p-6 lg:p-8 rounded-2xl border transition-all duration-500 overflow-hidden"
            :class="activeService === i 
              ? 'bg-white/[0.03] border-accent/30' 
              : 'bg-transparent border-border hover:border-white/20'"
          >
            <!-- Background gradient on hover -->
            <div 
              class="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 transition-opacity duration-500"
              :class="{ 'opacity-100': activeService === i }"
            ></div>
            
            <div class="relative flex flex-col lg:flex-row lg:items-center gap-6">
              <!-- Number -->
              <span 
                class="font-mono text-4xl font-bold transition-all duration-300"
                :class="activeService === i ? 'text-accent' : 'text-text-muted/30'"
              >
                0{{ i + 1 }}
              </span>
              
              <!-- Content -->
              <div class="flex-1">
                <h3 
                  class="text-xl lg:text-2xl font-semibold mb-2 transition-transform duration-300"
                  :class="{ 'translate-x-4': activeService === i }"
                >
                  {{ $t(service.title) }}
                </h3>
                <p 
                  class="text-text-secondary transition-all duration-300 max-w-2xl"
                  :class="activeService === i ? 'opacity-100' : 'opacity-70'"
                >
                  {{ $t(service.desc) }}
                </p>
              </div>
              
              <!-- Arrow -->
              <div 
                class="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300"
                :class="activeService === i 
                  ? 'bg-accent border-accent rotate-0' 
                  : 'border-border -rotate-45 group-hover:border-white/30'"
              >
                <Icon 
                  name="lucide:arrow-up-right" 
                  class="w-5 h-5 transition-colors"
                  :class="activeService === i ? 'text-white' : 'text-text-secondary'"
                />
              </div>
            </div>
            
            <!-- Progress line -->
            <div class="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-700 ease-out"
              :class="activeService === i ? 'w-full' : 'w-0'"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const localePath = useLocalePath()
const activeService = ref(null)

const sectionRef = ref(null)
const headerRef = ref(null)
const servicesRef = ref(null)

onMounted(() => {
  if (process.server) return
  
  gsap.registerPlugin(ScrollTrigger)
  
  // Header animation
  ScrollTrigger.create({
    trigger: headerRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(headerRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    }
  })
  
  // Services stagger animation
  const services = servicesRef.value?.querySelectorAll('[data-service-index]')
  if (services) {
    ScrollTrigger.create({
      trigger: servicesRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(services, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        })
      }
    })
    
    // Set initial state
    gsap.set(services, { opacity: 0, y: 30 })
  }
  
  // Set initial header state
  gsap.set(headerRef.value, { opacity: 0, y: 30 })
})

const services = [
  { title: 'services.items.web_dev.title', desc: 'services.items.web_dev.desc' },
  { title: 'services.items.cloud.title', desc: 'services.items.cloud.desc' },
  { title: 'services.items.ai.title', desc: 'services.items.ai.desc' },
  { title: 'services.items.devops.title', desc: 'services.items.devops.desc' },
]
</script>

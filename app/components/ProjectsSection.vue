<template>
  <section id="projects" ref="sectionRef" class="py-24 lg:py-32">
    <Container>
      <!-- Section header -->
      <div ref="headerRef" class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 opacity-0">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-px bg-accent"></div>
            <span class="text-accent font-mono text-sm uppercase tracking-widest">
              {{ $t('projects.subtitle') }}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {{ $t('projects.title') }}
          </h2>
          <p class="text-text-secondary text-lg">
            {{ $t('projects.description') }}
          </p>
        </div>
        
        <NuxtLink 
          :to="localePath('/projects')"
          class="group flex items-center gap-2 px-5 py-2.5 text-accent hover:text-white hover:bg-accent/10 border border-accent/30 hover:border-accent/50 rounded-full transition-all"
        >
          <span class="font-medium">{{ $t('projects.view_all') }}</span>
          <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
      </div>
      
      <!-- Projects grid -->
      <div ref="projectsRef" class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div 
          v-for="(project, i) in projects" 
          :key="i"
          class="group relative opacity-0"
          :data-project-index="i"
        >
          <NuxtLink :to="localePath(`/projects/${project.slug}`)" class="block h-full">
            <div class="relative h-full rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700/30 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-slate-800/50 group-hover:shadow-xl group-hover:shadow-black/20">
              <!-- Image -->
              <div class="relative aspect-16/10 overflow-hidden">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
                
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- View Button -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                    <Icon name="lucide:arrow-up-right" class="w-6 h-6 text-slate-900" />
                  </div>
                </div>
                
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1.5 bg-slate-950/80 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-slate-700/50">
                    {{ project.category }}
                  </span>
                </div>
                
                <!-- Role Badge -->
                <div v-if="project.role" class="absolute top-4 right-4">
                  <span class="px-3 py-1.5 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                    {{ project.role }}
                  </span>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-text-secondary text-sm line-clamp-2 mb-4">
                  {{ project.description }}
                </p>
                
                <!-- Tech stack -->
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.tech.slice(0, 4)" 
                    :key="tech"
                    class="px-2.5 py-1 text-xs text-text-muted bg-slate-900/50 rounded-md border border-slate-700/30"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="mt-16 text-center">
        <NuxtLink 
          :to="localePath('/projects')"
          class="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-full transition-all border border-slate-700/50 hover:border-accent/30 group"
        >
          <span class="font-medium">View All Projects</span>
          <div class="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
            <Icon name="lucide:arrow-right" class="w-4 h-4 text-accent group-hover:text-white transition-colors" />
          </div>
        </NuxtLink>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const localePath = useLocalePath()

const sectionRef = ref(null)
const headerRef = ref(null)
const projectsRef = ref(null)

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
  
  // Projects stagger animation
  const projects = projectsRef.value?.querySelectorAll('[data-project-index]')
  if (projects) {
    ScrollTrigger.create({
      trigger: projectsRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(projects, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        })
      }
    })
    
    // Set initial state
    gsap.set(projects, { opacity: 0, y: 40 })
  }
  
  // Set initial header state
  gsap.set(headerRef.value, { opacity: 0, y: 30 })
})

const projects = [
  {
    slug: 'kika',
    title: 'KIKA',
    description: 'A pan-African mobile application for managing modern tontines (savings circles) with mobile money integration, automated reminders, and real-time tracking.',
    category: 'Fintech',
    role: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    slug: 'fiddeal',
    title: 'Fiddeal',
    description: 'Digital loyalty platform connecting merchants and customers through QR code-based rewards. Features Fiddeal Pro for business owners with CRM automation.',
    category: 'Fintech',
    role: 'Owner',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'Firebase']
  },
  {
    slug: 'copaa',
    title: 'COPAA',
    description: 'Pan-African social network built to connect people across Africa. A sovereign, solidarity-based microblogging platform with exclusive honor-code access.',
    category: 'Social',
    role: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    tech: ['Nuxt.js', 'Node.js', 'PostgreSQL', 'WebSockets']
  },
  {
    slug: 'zawaj-sounnah',
    title: 'Zawaj Sounnah',
    description: 'Islamic matrimonial platform helping Muslims find spouses in accordance with Quran and Sunnah. 24/7 moderation and mahram-protected communication.',
    category: 'Social',
    role: 'DevOps',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    tech: ['Docker', 'Kubernetes', 'CI/CD', 'AWS']
  }
]
</script>

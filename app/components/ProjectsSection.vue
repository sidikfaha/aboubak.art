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
      
      <!-- Loading State -->
      <div v-if="status === 'pending'" class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div v-for="i in 4" :key="i" class="animate-pulse">
          <div class="aspect-16/10 bg-slate-800/50 rounded-2xl mb-4"></div>
          <div class="h-6 bg-slate-800/50 rounded w-1/2 mb-2"></div>
          <div class="h-4 bg-slate-800/50 rounded w-3/4"></div>
        </div>
      </div>
      
      <!-- Projects grid -->
      <div v-else ref="projectsRef" class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div 
          v-for="(project, i) in featuredProjects" 
          :key="getProjectSlug(project)"
          class="group relative opacity-0"
          :data-project-index="i"
        >
          <NuxtLink :to="localePath(`/projects/${getProjectSlug(project)}`)" class="block h-full">
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
          <span class="font-medium">{{ $t('projects.view_all') }}</span>
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
const { locale } = useI18n()

const sectionRef = ref(null)
const headerRef = ref(null)
const projectsRef = ref(null)

// Helper function to extract slug from path
const getProjectSlug = (project) => {
  if (!project || !project.path) return ''
  const parts = project.path.split('/')
  return parts[parts.length - 1]
}

// Fetch projects from Nuxt Content
const { data: projects, status } = await useAsyncData(`home-projects-${locale.value}`, async () => {
  const collection = locale.value === 'fr' ? 'projects_fr' : 'projects_en'
  return await queryCollection(collection)
    .limit(4)
    .all()
})

const featuredProjects = computed(() => projects.value || [])

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
  const projectElements = projectsRef.value?.querySelectorAll('[data-project-index]')
  if (projectElements) {
    ScrollTrigger.create({
      trigger: projectsRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(projectElements, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        })
      }
    })
    
    // Set initial state
    gsap.set(projectElements, { opacity: 0, y: 40 })
  }
  
  // Set initial header state
  gsap.set(headerRef.value, { opacity: 0, y: 30 })
})
</script>

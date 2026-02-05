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
          class="group flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
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
          <NuxtLink :to="localePath(`/projects/${project.slug}`)" class="block">
            <!-- Image container -->
            <div class="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-60"></div>
              
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- View button -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div class="w-20 h-20 rounded-full bg-accent flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <span class="text-white text-sm font-medium">{{ $t('projects.view_project') }}</span>
                </div>
              </div>
              
              <!-- Category badge -->
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1.5 glass rounded-full text-xs font-mono text-text-secondary">
                  {{ project.category }}
                </span>
              </div>
            </div>
            
            <!-- Content -->
            <div class="space-y-2">
              <h3 class="text-xl font-semibold group-hover:text-accent transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-text-secondary text-sm line-clamp-2">
                {{ project.description }}
              </p>
              
              <!-- Tech stack -->
              <div class="flex flex-wrap gap-2 pt-2">
                <span 
                  v-for="tech in project.tech" 
                  :key="tech"
                  class="text-xs text-text-muted font-mono"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </NuxtLink>
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
    slug: 'cloud-infrastructure',
    title: 'Enterprise Cloud Infrastructure',
    description: 'Designed and implemented a scalable cloud infrastructure for a fintech company, handling millions of transactions daily with 99.99% uptime.',
    category: 'Cloud Architecture',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    tech: ['AWS', 'Terraform', 'Kubernetes', 'Docker']
  },
  {
    slug: 'ai-platform',
    title: 'AI-Powered Analytics Platform',
    description: 'Built a comprehensive analytics platform leveraging machine learning to provide actionable insights for e-commerce businesses.',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tech: ['Python', 'TensorFlow', 'React', 'Node.js']
  },
  {
    slug: 'devops-automation',
    title: 'DevOps Automation Suite',
    description: 'Developed a complete CI/CD automation suite reducing deployment time by 80% and improving team productivity significantly.',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    tech: ['GitHub Actions', 'Jenkins', 'Ansible', 'Prometheus']
  },
  {
    slug: 'microservices-platform',
    title: 'Microservices Platform',
    description: 'Architected a microservices-based platform enabling rapid feature deployment and improved system resilience for a logistics company.',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    tech: ['Node.js', 'gRPC', 'Redis', 'PostgreSQL']
  }
]
</script>

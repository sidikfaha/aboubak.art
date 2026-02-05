<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Header -->
      <div class="max-w-4xl mb-16">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            {{ $t('projects.subtitle') }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {{ $t('projects.title') }}
        </h1>
        <p class="text-text-secondary text-lg leading-relaxed">
          {{ $t('projects.description') }}
        </p>
      </div>
      
      <!-- Filters -->
      <div class="flex flex-wrap gap-2 mb-12">
        <button
          v-for="filter in filters" 
          :key="filter"
          @click="activeFilter = filter"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all"
          :class="activeFilter === filter 
            ? 'bg-accent text-white' 
            : 'glass text-text-secondary hover:text-white hover:bg-white/5'"
        >
          {{ filter }}
        </button>
      </div>
      
      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(project, i) in filteredProjects" 
          :key="i"
          class="group relative"
        >
          <NuxtLink :to="localePath(`/projects/${project.slug}`)" class="block">
            <!-- Image container -->
            <div class="relative aspect-4/3 rounded-2xl overflow-hidden mb-4">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-linear-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-60"></div>
              <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- View button -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div class="w-20 h-20 rounded-full bg-accent flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <span class="text-white text-sm font-medium">{{ $t('projects.view_project') }}</span>
                </div>
              </div>
              
              <!-- Category badge - Pill -->
              <div class="absolute top-4 left-4">
                <span class="px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-medium text-text-secondary border border-slate-700/50">
                  {{ project.category }}
                </span>
              </div>
            </div>
            
            <!-- Content -->
            <h3 class="text-xl font-semibold group-hover:text-accent transition-colors mb-2">
              {{ project.title }}
            </h3>
            <p class="text-text-secondary text-sm line-clamp-2 mb-3">
              {{ project.description }}
            </p>
            <!-- Tech stack - Pills -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.tech" 
                :key="tech"
                class="px-3 py-1 text-xs text-text-muted bg-slate-800/50 rounded-full border border-slate-700/30"
              >
                {{ tech }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: `${t('nav.projects')} | Aboubakar Sidik Faha`,
})

const activeFilter = ref('All')
const filters = ['All', 'Cloud', 'AI/ML', 'DevOps', 'Web']

const projects = [
  {
    slug: 'cloud-infrastructure',
    title: 'Enterprise Cloud Infrastructure',
    description: 'Designed and implemented a scalable cloud infrastructure for a fintech company, handling millions of transactions daily with 99.99% uptime.',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    tech: ['AWS', 'Terraform', 'Kubernetes', 'Docker']
  },
  {
    slug: 'ai-platform',
    title: 'AI-Powered Analytics Platform',
    description: 'Built a comprehensive analytics platform leveraging machine learning to provide actionable insights for e-commerce businesses.',
    category: 'AI/ML',
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
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    tech: ['Node.js', 'gRPC', 'Redis', 'PostgreSQL']
  },
  {
    slug: 'ecommerce-redesign',
    title: 'E-commerce Platform Redesign',
    description: 'Complete overhaul of an e-commerce platform resulting in 40% increase in conversion rates and improved user experience.',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tech: ['Nuxt.js', 'Stripe', 'PostgreSQL', 'Redis']
  },
  {
    slug: 'nlp-chatbot',
    title: 'Enterprise NLP Chatbot',
    description: 'Developed an intelligent customer support chatbot using NLP that reduced support ticket volume by 60%.',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    tech: ['Python', 'OpenAI', 'FastAPI', 'MongoDB']
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

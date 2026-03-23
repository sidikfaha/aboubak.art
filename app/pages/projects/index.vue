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
      
      <!-- Featured Project -->
      <div v-if="featuredProject" class="mb-20">
        <div class="flex items-center gap-3 mb-6">
          <Icon name="lucide:sparkles" class="w-5 h-5 text-accent" />
          <span class="text-sm font-medium text-accent uppercase tracking-wider">Featured Project</span>
        </div>
        <NuxtLink :to="localePath(`/projects/${featuredProject.slug}`)" class="group block">
          <div class="relative rounded-3xl overflow-hidden bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30">
            <div class="grid lg:grid-cols-2 gap-0">
              <!-- Image -->
              <div class="relative aspect-video lg:aspect-auto overflow-hidden">
                <img 
                  :src="featuredProject.image" 
                  :alt="featuredProject.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-linear-to-r from-transparent to-slate-900/80 hidden lg:block"></div>
                <div class="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent lg:hidden"></div>
                
                <!-- Featured Badge -->
                <div class="absolute top-6 left-6">
                  <span class="px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white shadow-lg">
                    {{ featuredProject.category }}
                  </span>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <h2 class="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {{ featuredProject.title }}
                </h2>
                <p class="text-text-secondary text-lg leading-relaxed mb-6">
                  {{ featuredProject.description }}
                </p>
                
                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-8">
                  <span 
                    v-for="tech in featuredProject.tech.slice(0, 4)" 
                    :key="tech"
                    class="px-3 py-1.5 text-sm text-text-secondary bg-slate-800/80 rounded-lg border border-slate-700/50"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <!-- CTA -->
                <div class="flex items-center gap-2 text-accent font-medium">
                  <span>View Case Study</span>
                  <Icon name="lucide:arrow-right" class="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      
      <!-- Filters & Stats -->
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
        <!-- Filters -->
        <div 
          class="flex flex-wrap gap-2" 
          role="group" 
          aria-label="Filter projects by category"
        >
          <button
            v-for="filter in filters" 
            :key="filter"
            @click="activeFilter = filter"
            class="px-5 py-2.5 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
            :class="activeFilter === filter 
              ? 'bg-accent text-white shadow-lg shadow-accent/25' 
              : 'glass text-text-secondary hover:text-white hover:bg-white/5'"
            :aria-pressed="activeFilter === filter"
          >
            {{ filter }}
          </button>
        </div>
        
        <!-- Project Count -->
        <div class="text-text-muted text-sm">
          Showing <span class="text-white font-medium">{{ filteredProjects.length }}</span> projects
        </div>
      </div>
      
      <!-- Projects Grid -->
      <div 
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
        role="list" 
        aria-label="Portfolio projects"
      >
        <article 
          v-for="(project, i) in filteredProjects" 
          :key="i"
          class="group relative"
          role="listitem"
        >
          <NuxtLink :to="localePath(`/projects/${project.slug}`)" class="block h-full">
            <div class="relative h-full rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700/30 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-slate-800/50">
              <!-- Image -->
              <div class="relative aspect-4/3 overflow-hidden">
                <img 
                  :src="project.image" 
                  :alt="`Screenshot of ${project.title} project`"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80"></div>
                
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- View Button -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                    <Icon name="lucide:arrow-up-right" class="w-6 h-6 text-slate-900" aria-hidden="true" />
                  </div>
                </div>
                
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1.5 bg-slate-950/80 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-slate-700/50">
                    {{ project.category }}
                  </span>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <h2 class="text-xl font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-1">
                  {{ project.title }}
                </h2>
                <p class="text-text-secondary text-sm line-clamp-2 mb-4">
                  {{ project.description }}
                </p>
                
                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="tech in project.tech.slice(0, 3)" 
                    :key="tech"
                    class="px-2.5 py-1 text-xs text-text-muted bg-slate-900/50 rounded-md border border-slate-700/30"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="project.tech.length > 3" class="px-2.5 py-1 text-xs text-text-muted">
                    +{{ project.tech.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
      
      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <Icon name="lucide:search-x" class="w-16 h-16 text-text-muted mx-auto mb-4" />
        <h3 class="text-xl font-semibold mb-2">No projects found</h3>
        <p class="text-text-secondary mb-6">Try selecting a different filter</p>
        <button 
          @click="activeFilter = 'All'"
          class="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white rounded-full transition-all"
        >
          Show All Projects
        </button>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

// SEO for projects page
usePageSeo({
  title: 'Portfolio | DevOps & Software Projects',
  description: 'Explore my portfolio of cloud infrastructure, DevOps automation, fintech solutions, and full-stack web development projects. Enterprise-grade solutions for global clients.',
  type: 'website',
  locale: locale.value === 'fr' ? 'fr_FR' : 'en_US',
})

// Breadcrumb schema
useBreadcrumbSchema([
  { name: t('seo.breadcrumb_home'), url: '/' },
  { name: t('nav.projects'), url: '/projects' },
])

const activeFilter = ref('All')
const filters = computed(() => [t('projects.filters.all'), 'Fintech', 'Social', 'EdTech', 'DevOps', 'PropTech'])

const projects = [
  {
    slug: 'kika',
    title: 'KIKA',
    description: 'A pan-African mobile application for managing modern tontines (savings circles) with mobile money integration, automated reminders, and real-time tracking.',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Mobile Money APIs', 'AWS']
  },
  {
    slug: 'fiddeal',
    title: 'Fiddeal',
    description: 'Digital loyalty platform connecting merchants and customers through QR code-based rewards. Features Fiddeal Pro for business owners with CRM automation.',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'QR Code API', 'Firebase'],
    featured: true
  },
  {
    slug: 'copaa',
    title: 'COPAA',
    description: 'Pan-African social network built to connect people across Africa. A sovereign, solidarity-based microblogging platform with exclusive honor-code access.',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    tech: ['Nuxt.js', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets']
  },
  {
    slug: 'schoolgood',
    title: 'SchoolGood',
    description: 'English learning platform offering intensive coaching with live courses, personalized sessions, and community access for French-speaking students.',
    category: 'EdTech',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'WebRTC', 'Stripe', 'PostgreSQL']
  },
  {
    slug: 'jackwestin',
    title: 'Jack Westin',
    description: 'MCAT exam preparation platform providing daily practice passages, question banks, and personalized learning resources for medical school aspirants.',
    category: 'EdTech',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    tech: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis']
  },
  {
    slug: 'drbalcony',
    title: 'DrBalcony',
    description: 'California balcony inspection platform for SB326 and SB721 compliance. AI-powered inspection management system for HOAs and property managers.',
    category: 'PropTech',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'AI/ML']
  },
  {
    slug: 'zawaj-sounnah',
    title: 'Zawaj Sounnah',
    description: 'Islamic matrimonial platform helping Muslims find spouses in accordance with Quran and Sunnah. 24/7 moderation and mahram-protected communication.',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    tech: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring']
  }
]

const featuredProject = computed(() => projects.find(p => p.featured))

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects.filter(p => !p.featured)
  return projects.filter(p => p.category === activeFilter.value && !p.featured)
})
</script>

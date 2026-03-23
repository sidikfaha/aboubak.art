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
      <div 
        class="flex flex-wrap gap-2 mb-12" 
        role="group" 
        aria-label="Filter projects by category"
      >
        <button
          v-for="filter in filters" 
          :key="filter"
          @click="activeFilter = filter"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
          :class="activeFilter === filter 
            ? 'bg-accent text-white' 
            : 'glass text-text-secondary hover:text-white hover:bg-white/5'"
          :aria-pressed="activeFilter === filter"
        >
          {{ filter }}
        </button>
      </div>
      
      <!-- Projects grid -->
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
          <NuxtLink :to="localePath(`/projects/${project.slug}`)" class="block">
            <!-- Image container -->
            <div class="relative aspect-4/3 rounded-2xl overflow-hidden mb-4">
              <img 
                :src="project.image" 
                :alt="`Screenshot of ${project.title} project`"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width="800"
                height="600"
              />
              <div class="absolute inset-0 bg-linear-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-60"></div>
              <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- View button -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div class="w-14 h-14 rounded-full bg-accent flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <Icon name="lucide:arrow-right" class="w-6 h-6 text-white" aria-hidden="true" />
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
            <h2 class="text-xl font-semibold group-hover:text-accent transition-colors mb-2">
              {{ project.title }}
            </h2>
            <p class="text-text-secondary text-sm line-clamp-2 mb-3">
              {{ project.description }}
            </p>
            <!-- Tech stack - Pills -->
            <div class="flex flex-wrap gap-2" aria-label="Technologies used">
              <span 
                v-for="tech in project.tech" 
                :key="tech"
                class="px-3 py-1 text-xs text-text-muted bg-slate-800/50 rounded-full border border-slate-700/30"
              >
                {{ tech }}
              </span>
            </div>
          </NuxtLink>
        </article>
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
const filters = computed(() => [t('projects.filters.all'), t('projects.filters.cloud'), t('projects.filters.ai_ml'), t('projects.filters.devops'), t('projects.filters.web')])

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
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'QR Code API', 'Firebase']
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
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    tech: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring']
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

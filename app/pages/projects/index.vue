<template>
  <div>
    <section class="pt-32 pb-20">
      <Container>
        <!-- Header -->
        <div ref="headerRef" class="max-w-4xl mb-16 opacity-0">
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
        
        <!-- Loading State -->
        <div v-if="status === 'pending'" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="i in 6" :key="i" class="animate-pulse">
            <div class="aspect-4/3 bg-slate-800/50 rounded-2xl mb-4"></div>
            <div class="h-6 bg-slate-800/50 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-slate-800/50 rounded w-full"></div>
          </div>
        </div>
        
        <!-- Error State -->
        <div v-else-if="status === 'error'" class="text-center py-20">
          <Icon name="lucide:alert-circle" class="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ $t('common.error') }}</h3>
          <p class="text-text-secondary">{{ $t('projects.load_error') }}</p>
        </div>
        
        <!-- Content -->
        <template v-else>
          <!-- Featured Project -->
          <div v-if="featuredProject" ref="featuredRef" class="mb-20 opacity-0">
            <div class="flex items-center gap-3 mb-6">
              <Icon name="lucide:sparkles" class="w-5 h-5 text-accent" />
              <span class="text-sm font-medium text-accent uppercase tracking-wider">{{ $t('projects.featured') }}</span>
            </div>
            <NuxtLink :to="localePath(`/projects/${getProjectSlug(featuredProject)}`)" class="group block">
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
                      <span>{{ $t('projects.view_case_study') }}</span>
                      <Icon name="lucide:arrow-right" class="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          
          <!-- Filters & Stats -->
          <div ref="filtersRef" class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 opacity-0">
            <!-- Filters -->
            <div 
              class="flex flex-wrap gap-2" 
              role="group" 
              aria-label="Filter projects by category"
            >
              <button
                v-for="filter in filters" 
                :key="filter.value"
                @click="activeFilter = filter.value"
                class="px-5 py-2.5 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
                :class="activeFilter === filter.value 
                  ? 'bg-accent text-white shadow-lg shadow-accent/25' 
                  : 'glass text-text-secondary hover:text-white hover:bg-white/5'"
                :aria-pressed="activeFilter === filter.value"
              >
                {{ filter.label }}
              </button>
            </div>
            
            <!-- Project Count -->
            <div class="text-text-muted text-sm">
              {{ $t('projects.showing') }} <span class="text-white font-medium">{{ filteredProjects.length }}</span> {{ $t('projects.projects') }}
            </div>
          </div>
          
          <!-- Projects Grid -->
          <div 
            ref="projectsRef"
            class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
            role="list" 
            aria-label="Portfolio projects"
          >
            <article 
              v-for="project in filteredProjects" 
              :key="getProjectSlug(project)"
              class="group relative opacity-0"
              role="listitem"
            >
              <NuxtLink :to="localePath(`/projects/${getProjectSlug(project)}`)" class="block h-full">
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
            <h3 class="text-xl font-semibold mb-2">{{ $t('projects.no_results') }}</h3>
            <p class="text-text-secondary mb-6">{{ $t('projects.try_different_filter') }}</p>
            <button 
              @click="activeFilter = 'All'"
              class="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white rounded-full transition-all"
            >
              {{ $t('projects.show_all') }}
            </button>
          </div>
        </template>
      </Container>
    </section>

    <!-- Process Section -->
    <section ref="processSectionRef" class="py-24 lg:py-32 relative overflow-hidden">
      <!-- Background accent -->
      <div class="absolute inset-0 bg-linear-to-b from-transparent via-accent/5 to-transparent"></div>
      
      <Container class="relative z-10">
        <!-- Section Header -->
        <div ref="processHeaderRef" class="text-center max-w-2xl mx-auto mb-16 opacity-0">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-px bg-accent"></div>
            <span class="text-accent font-mono text-sm uppercase tracking-widest">
              {{ $t('projects.process.subtitle') }}
            </span>
            <div class="w-12 h-px bg-accent"></div>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {{ $t('projects.process.title') }}
          </h2>
          <p class="text-text-secondary text-lg">
            {{ $t('projects.process.description') }}
          </p>
        </div>
        
        <!-- Process Steps -->
        <div ref="processStepsRef" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.key"
            class="group relative opacity-0"
            :data-step-index="index"
          >
            <!-- Connector Line -->
            <div v-if="index < processSteps.length - 1" class="hidden lg:block absolute top-12 left-full w-full h-px bg-linear-to-r from-accent/30 to-transparent z-0"></div>
            
            <div class="relative z-10 p-6 lg:p-8 rounded-2xl glass border border-white/10 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white/5 h-full">
              <!-- Step Number -->
              <div class="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <Icon :name="step.icon" class="w-6 h-6 text-accent" />
              </div>
              
              <!-- Step Number Badge -->
              <div class="absolute top-6 right-6 text-5xl font-bold text-white/5 group-hover:text-accent/10 transition-colors">
                0{{ index + 1 }}
              </div>
              
              <h3 class="text-xl font-semibold mb-3">{{ step.title }}</h3>
              <p class="text-text-secondary text-sm leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Stats/Impact Section -->
    <section ref="statsSectionRef" class="py-24 lg:py-32 relative overflow-hidden">
      <Container class="relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Left Content -->
          <div ref="statsContentRef" class="opacity-0">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-px bg-accent"></div>
              <span class="text-accent font-mono text-sm uppercase tracking-widest">
                {{ $t('projects.impact.subtitle') }}
              </span>
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {{ $t('projects.impact.title') }}
            </h2>
            <p class="text-text-secondary text-lg leading-relaxed mb-8">
              {{ $t('projects.impact.description') }}
            </p>
            
            <!-- Key Benefits -->
            <div class="space-y-4">
              <div v-for="benefit in impactBenefits" :key="benefit" class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-accent" />
                </div>
                <span class="text-text-secondary">{{ benefit }}</span>
              </div>
            </div>
          </div>
          
          <!-- Stats Grid -->
          <div ref="statsGridRef" class="grid grid-cols-2 gap-4 lg:gap-6">
            <div 
              v-for="(stat, index) in stats" 
              :key="stat.key"
              class="group p-6 lg:p-8 rounded-2xl glass border border-white/10 text-center opacity-0"
              :data-stat-index="index"
              :class="index === 0 ? 'bg-accent/10 border-accent/20' : ''"
            >
              <div class="text-4xl lg:text-5xl font-bold mb-2" :class="index === 0 ? 'text-accent' : 'text-white'">
                <span ref="statNumbersRef">{{ stat.value }}</span>
                <span v-if="stat.suffix" class="text-accent">{{ stat.suffix }}</span>
              </div>
              <div class="text-text-secondary text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Testimonials Section -->
    <section ref="testimonialsSectionRef" class="py-24 lg:py-32 relative overflow-hidden">
      <Container class="relative z-10">
        <!-- Section header -->
        <div ref="testimonialsHeaderRef" class="text-center max-w-2xl mx-auto mb-16 opacity-0">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-px bg-accent"></div>
            <span class="text-accent font-mono text-sm uppercase tracking-widest">
              {{ $t('testimonials.subtitle') }}
            </span>
            <div class="w-12 h-px bg-accent"></div>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold">
            {{ $t('testimonials.title') }}
          </h2>
        </div>
        
        <!-- Testimonials carousel -->
        <div ref="testimonialsCarouselRef" class="relative max-w-4xl mx-auto opacity-0">
          <!-- Navigation buttons -->
          <button 
            @click="prevTestimonial"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/5 transition-all"
          >
            <Icon name="lucide:chevron-left" class="w-6 h-6" />
          </button>
          
          <button 
            @click="nextTestimonial"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/5 transition-all"
          >
            <Icon name="lucide:chevron-right" class="w-6 h-6" />
          </button>
          
          <!-- Cards container -->
          <div class="relative h-100 md:h-87.5">
            <div 
              v-for="(testimonial, i) in testimonials" 
              :key="i"
              class="absolute inset-0 transition-all duration-700 ease-out"
              :class="getTestimonialCardClasses(i)"
            >
              <div class="h-full p-8 lg:p-12 rounded-3xl glass flex flex-col justify-center border border-white/10">
                <!-- Quote icon -->
                <div class="mb-6">
                  <Icon name="lucide:quote" class="w-10 h-10 text-accent/30" />
                </div>
                
                <!-- Quote text -->
                <blockquote class="text-lg lg:text-xl text-text-secondary leading-relaxed mb-8">
                  "{{ testimonial.quote }}"
                </blockquote>
                
                <!-- Author -->
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span class="text-accent font-semibold">{{ testimonial.initials }}</span>
                  </div>
                  <div>
                    <div class="font-semibold">{{ testimonial.name }}</div>
                    <div class="text-sm text-text-muted">{{ testimonial.role }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Dots indicator -->
          <div class="flex justify-center gap-2 mt-8">
            <button 
              v-for="(_, i) in testimonials" 
              :key="i"
              @click="goToTestimonial(i)"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="i === activeTestimonialIndex ? 'w-8 bg-accent' : 'bg-white/20 hover:bg-white/40'"
            ></button>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA Section -->
    <section ref="ctaSectionRef" class="py-24 lg:py-32 relative overflow-hidden">
      <!-- Background effects -->
      <div class="absolute inset-0">
        <div ref="ctaGlowRef" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/10 rounded-full blur-[150px] opacity-0"></div>
      </div>
      
      <Container class="relative z-10">
        <div ref="ctaContentRef" class="max-w-4xl mx-auto text-center opacity-0">
          <!-- Label -->
          <div class="flex items-center justify-center gap-3 mb-6">
            <div class="w-12 h-px bg-accent"></div>
            <span class="text-accent font-mono text-sm uppercase tracking-widest">
              {{ $t('projects.cta.subtitle') }}
            </span>
            <div class="w-12 h-px bg-accent"></div>
          </div>
          
          <!-- Heading -->
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {{ $t('projects.cta.title') }}
          </h2>
          
          <!-- Description -->
          <p class="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {{ $t('projects.cta.description') }}
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              :to="localePath('/contact')"
              class="group inline-flex items-center gap-3 px-10 py-4 bg-accent hover:bg-accent-dark text-white text-lg font-medium rounded-full transition-all hover:shadow-2xl hover:shadow-accent/25 hover:-translate-y-1"
            >
              <span>{{ $t('projects.cta.button_primary') }}</span>
              <Icon name="lucide:calendar" class="w-5 h-5" />
            </NuxtLink>
            
            <NuxtLink
              :to="localePath('/services')"
              class="group inline-flex items-center gap-3 px-10 py-4 glass hover:bg-white/5 text-white text-lg font-medium rounded-full transition-all hover:-translate-y-1 border border-white/10 hover:border-accent/30"
            >
              <span>{{ $t('projects.cta.button_secondary') }}</span>
              <Icon name="lucide:arrow-right" class="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </NuxtLink>
          </div>
          
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
              <span class="text-sm">{{ $t('cta.remote') }}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { t, locale } = useI18n()
const localePath = useLocalePath()

// SEO for projects page
usePageSeo({
  title: () => t('seo.projects_title'),
  description: () => t('seo.projects_desc'),
  type: 'website',
  locale: locale.value === 'fr' ? 'fr_FR' : 'en_US',
})

// Breadcrumb schema
useBreadcrumbSchema([
  { name: t('seo.breadcrumb_home'), url: '/' },
  { name: t('nav.projects'), url: '/projects' },
])

const activeFilter = ref('All')
const activeTestimonialIndex = ref(0)
let autoplayInterval = null

const filters = computed(() => [
  { value: 'All', label: t('projects.filters.all') },
  { value: 'Fintech', label: t('projects.filters.fintech') || 'Fintech' },
  { value: 'Social', label: t('projects.filters.social') || 'Social' },
  { value: 'EdTech', label: t('projects.filters.edtech') || 'EdTech' },
  { value: 'DevOps', label: t('projects.filters.devops') || 'DevOps' },
  { value: 'PropTech', label: t('projects.filters.proptech') || 'PropTech' },
])

// Helper function to extract slug from path
const getProjectSlug = (project) => {
  if (!project || !project.path) return ''
  // Extract slug from path like '/projects/en/kika' -> 'kika'
  const parts = project.path.split('/')
  return parts[parts.length - 1]
}

// Fetch projects from Nuxt Content
const { data: allProjects, status } = await useAsyncData(`projects-${locale.value}`, async () => {
  const collection = locale.value === 'fr' ? 'projects_fr' : 'projects_en'
  return await queryCollection(collection)
    .order('featured', 'DESC')
    .order('year', 'DESC')
    .all()
})

const featuredProject = computed(() => 
  allProjects.value?.find(p => p.featured)
)

const filteredProjects = computed(() => {
  const projects = allProjects.value || []
  if (activeFilter.value === 'All') {
    return projects.filter(p => !p.featured)
  }
  return projects.filter(p => p.category === activeFilter.value && !p.featured)
})

// Process Steps
const processSteps = computed(() => [
  {
    key: 'discovery',
    icon: 'lucide:search',
    title: t('projects.process.steps.discovery.title'),
    description: t('projects.process.steps.discovery.desc')
  },
  {
    key: 'strategy',
    icon: 'lucide:lightbulb',
    title: t('projects.process.steps.strategy.title'),
    description: t('projects.process.steps.strategy.desc')
  },
  {
    key: 'development',
    icon: 'lucide:code-2',
    title: t('projects.process.steps.development.title'),
    description: t('projects.process.steps.development.desc')
  },
  {
    key: 'delivery',
    icon: 'lucide:rocket',
    title: t('projects.process.steps.delivery.title'),
    description: t('projects.process.steps.delivery.desc')
  }
])

// Impact Stats
const stats = computed(() => [
  { key: 'projects', value: '50', suffix: '+', label: t('projects.impact.stats.projects') },
  { key: 'satisfaction', value: '100', suffix: '%', label: t('projects.impact.stats.satisfaction') },
  { key: 'delivery', value: '99', suffix: '%', label: t('projects.impact.stats.delivery') },
  { key: 'support', value: '24/7', suffix: '', label: t('projects.impact.stats.support') }
])

// Impact Benefits
const impactBenefits = computed(() => [
  t('projects.impact.benefits.scalable'),
  t('projects.impact.benefits.performant'),
  t('projects.impact.benefits.secure'),
  t('projects.impact.benefits.maintainable')
])

// Testimonials
const testimonials = [
  {
    initials: 'OI',
    name: 'Osaigbovo Idada',
    role: 'Web Development',
    quote: "His ability to translate complex requirements into smooth, user-friendly interfaces was truly impressive. He has a keen eye for design, a deep understanding of frontend technologies, and a problem-solving mindset that made our collaboration seamless."
  },
  {
    initials: 'DB',
    name: 'David Ben Otto',
    role: 'AWS Cloud Engineer at KodeCloud Inc',
    quote: "I've worked with Aboubakar in a very innovative project around connected vehicles. On the technical side, Aboubakar was just a guru: we worked hours on CI-CD pipelines with GitHub Actions and integration of microservices using API."
  },
  {
    initials: 'KB',
    name: "Kwiringira Bruce Hervé",
    role: 'Cloud Engineer',
    quote: "It's rare that you come across a standout talent like Aboubakar. Incredibly multi talented, a fully fledged full stack engineer capable of coding in multiple JavaScript frameworks and a fully fledged DevOps engineer."
  },
  {
    initials: 'JN',
    name: 'Jim Carlson Ngnintedem',
    role: 'Terraform & Agile Certified',
    quote: "Curious, responsible, highly involved and naturally endowed with a critical and analytical mind, Sidik Aboubakar is a driving force who loves challenges and investing in new projects."
  },
  {
    initials: 'JH',
    name: "Jean-François Hermann N'Guessan Angora",
    role: 'Entrepreneur - Mobile Developer',
    quote: "I've known people who know their field, but Sidik, in addition to being super talented in DevOps, knows so many other areas including mobile. I love collaborating with him, he's helpful and hardworking."
  }
]

const getTestimonialCardClasses = (index) => {
  const diff = index - activeTestimonialIndex.value
  const total = testimonials.length
  
  // Handle wrapping
  let normalizedDiff = diff
  if (diff > total / 2) normalizedDiff = diff - total
  if (diff < -total / 2) normalizedDiff = diff + total
  
  if (normalizedDiff === 0) {
    return 'opacity-100 scale-100 z-20 translate-x-0'
  } else if (normalizedDiff === 1 || normalizedDiff === -(total - 1)) {
    return 'opacity-40 scale-90 z-10 translate-x-[60%] blur-[2px]'
  } else if (normalizedDiff === -1 || normalizedDiff === (total - 1)) {
    return 'opacity-40 scale-90 z-10 -translate-x-[60%] blur-[2px]'
  } else {
    return 'opacity-0 scale-80 z-0'
  }
}

const nextTestimonial = () => {
  activeTestimonialIndex.value = (activeTestimonialIndex.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  activeTestimonialIndex.value = (activeTestimonialIndex.value - 1 + testimonials.length) % testimonials.length
}

const goToTestimonial = (index) => {
  activeTestimonialIndex.value = index
}

// Refs for animations
const headerRef = ref(null)
const featuredRef = ref(null)
const filtersRef = ref(null)
const projectsRef = ref(null)
const processSectionRef = ref(null)
const processHeaderRef = ref(null)
const processStepsRef = ref(null)
const statsSectionRef = ref(null)
const statsContentRef = ref(null)
const statsGridRef = ref(null)
const testimonialsSectionRef = ref(null)
const testimonialsHeaderRef = ref(null)
const testimonialsCarouselRef = ref(null)
const ctaSectionRef = ref(null)
const ctaContentRef = ref(null)
const ctaGlowRef = ref(null)

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
  gsap.set(headerRef.value, { opacity: 0, y: 30 })
  
  // Featured project animation
  if (featuredRef.value) {
    ScrollTrigger.create({
      trigger: featuredRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(featuredRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(featuredRef.value, { opacity: 0, y: 30 })
  }
  
  // Filters animation
  ScrollTrigger.create({
    trigger: filtersRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(filtersRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
      })
    }
  })
  gsap.set(filtersRef.value, { opacity: 0, y: 20 })
  
  // Projects grid stagger animation
  const projectElements = projectsRef.value?.querySelectorAll('[role="listitem"]')
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
          stagger: 0.1,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(projectElements, { opacity: 0, y: 40 })
  }
  
  // Process Section Animations
  ScrollTrigger.create({
    trigger: processHeaderRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(processHeaderRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    }
  })
  gsap.set(processHeaderRef.value, { opacity: 0, y: 30 })
  
  // Process steps stagger animation
  const stepElements = processStepsRef.value?.querySelectorAll('[data-step-index]')
  if (stepElements) {
    ScrollTrigger.create({
      trigger: processStepsRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(stepElements, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(stepElements, { opacity: 0, y: 40 })
  }
  
  // Stats Section Animations
  ScrollTrigger.create({
    trigger: statsContentRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(statsContentRef.value, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    }
  })
  gsap.set(statsContentRef.value, { opacity: 0, x: -30 })
  
  // Stats grid stagger animation
  const statElements = statsGridRef.value?.querySelectorAll('[data-stat-index]')
  if (statElements) {
    ScrollTrigger.create({
      trigger: statsGridRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(statElements, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(statElements, { opacity: 0, y: 30 })
  }
  
  // Testimonials Section Animations
  ScrollTrigger.create({
    trigger: testimonialsHeaderRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(testimonialsHeaderRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    }
  })
  gsap.set(testimonialsHeaderRef.value, { opacity: 0, y: 30 })
  
  ScrollTrigger.create({
    trigger: testimonialsCarouselRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(testimonialsCarouselRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
      })
    }
  })
  gsap.set(testimonialsCarouselRef.value, { opacity: 0, y: 30 })
  
  // CTA Section Animations
  const ctaTl = gsap.timeline({
    scrollTrigger: {
      trigger: ctaSectionRef.value,
      start: 'top 70%',
      once: true
    }
  })
  
  ctaTl.to(ctaGlowRef.value, {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: 'power2.out'
  })
  .to(ctaContentRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  
  gsap.set(ctaGlowRef.value, { opacity: 0, scale: 0.8 })
  gsap.set(ctaContentRef.value, { opacity: 0, y: 40 })
  
  // Autoplay testimonials
  autoplayInterval = setInterval(nextTestimonial, 6000)
})

onUnmounted(() => {
  if (autoplayInterval) clearInterval(autoplayInterval)
})
</script>

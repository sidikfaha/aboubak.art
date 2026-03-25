<template>
  <div>
    <div class="pt-32 pb-20">
      <Container>
        <!-- Back button -->
        <NuxtLink 
          :to="localePath('/projects')"
          class="inline-flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-white hover:bg-slate-800/50 rounded-full transition-all mb-8 border border-transparent hover:border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
          aria-label="Back to all projects"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4" aria-hidden="true" />
          <span>{{ $t('projects.detail.back') }}</span>
        </NuxtLink>
        
        <!-- Loading State -->
        <div v-if="status === 'pending'" class="max-w-5xl mx-auto">
          <div class="animate-pulse space-y-8">
            <div class="h-8 bg-slate-800/50 rounded w-1/4"></div>
            <div class="h-16 bg-slate-800/50 rounded w-3/4"></div>
            <div class="aspect-21/9 bg-slate-800/50 rounded-3xl"></div>
            <div class="grid md:grid-cols-4 gap-4">
              <div v-for="i in 4" :key="i" class="h-24 bg-slate-800/50 rounded-2xl"></div>
            </div>
          </div>
        </div>
        
        <!-- Error State -->
        <div v-else-if="status === 'error' || !project" class="text-center py-20">
          <div class="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-6">
            <Icon name="lucide:file-x" class="w-10 h-10 text-text-muted" aria-hidden="true" />
          </div>
          <h2 class="text-2xl font-bold mb-2">{{ $t('projects.detail.not_found') }}</h2>
          <p class="text-text-secondary mb-8 max-w-md mx-auto">{{ $t('projects.detail.not_found_desc') }}</p>
          <NuxtLink 
            :to="localePath('/projects')"
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
          >
            <Icon name="lucide:grid-3x3" class="w-4 h-4" />
            <span>{{ $t('projects.view_all') }}</span>
          </NuxtLink>
        </div>
        
        <!-- Project content -->
        <article v-else class="max-w-5xl mx-auto">
          <!-- Header Section -->
          <header ref="headerRef" class="mb-12 opacity-0">
            <div class="flex flex-wrap items-center gap-3 mb-6">
              <span class="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
                {{ project.category }}
              </span>
              <span v-if="project.role" class="px-4 py-1.5 bg-slate-800/50 text-text-secondary text-sm rounded-full border border-slate-700/50">
                {{ project.role }}
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{{ project.title }}</h1>
            <p class="text-text-secondary text-xl leading-relaxed max-w-3xl">{{ project.description }}</p>
          </header>
          
          <!-- Hero Image -->
          <div ref="heroImageRef" class="relative aspect-21/9 rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-black/20 opacity-0">
            <img 
              :src="project.image" 
              :alt="`Screenshot of ${project.title} project`"
              class="w-full h-full object-cover"
              loading="eager"
              width="1200"
              height="514"
            />
            <div class="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
            
            <!-- External Link Button -->
            <a 
              v-if="project.url" 
              :href="project.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="absolute bottom-6 right-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-100 transition-all shadow-lg"
            >
              <span>{{ $t('projects.visit_site') }}</span>
              <Icon name="lucide:external-link" class="w-4 h-4" />
            </a>
          </div>
          
          <!-- Project Meta Grid -->
          <div ref="metaGridRef" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div 
              v-for="(meta, index) in projectMeta" 
              :key="meta.key"
              class="glass rounded-2xl p-6 text-center md:text-left opacity-0"
              :data-meta-index="index"
            >
              <div class="flex items-center justify-center md:justify-start gap-2 text-text-muted text-sm mb-2">
                <Icon :name="meta.icon" class="w-4 h-4" />
                <span>{{ meta.label }}</span>
              </div>
              <div v-if="meta.isStatus" class="font-semibold text-emerald-400 flex items-center justify-center md:justify-start gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {{ meta.value }}
              </div>
              <div v-else class="font-semibold">{{ meta.value }}</div>
            </div>
          </div>
          
          <div class="grid lg:grid-cols-3 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-2 space-y-12">
              <!-- Description -->
              <section ref="descriptionRef" class="opacity-0" aria-labelledby="description-heading">
                <h2 id="description-heading" class="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="lucide:file-text" class="w-4 h-4 text-accent" />
                  </div>
                  {{ $t('projects.detail.description_title') }}
                </h2>
                <div class="prose prose-invert prose-lg max-w-none text-text-secondary leading-relaxed">
                  <ContentRenderer :value="project" />
                </div>
              </section>
              
              <!-- Challenges & Solutions -->
              <section v-if="project.challenges || project.solutions" ref="challengesRef" class="opacity-0">
                <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="lucide:target" class="w-4 h-4 text-accent" />
                  </div>
                  {{ $t('projects.detail.challenges_title') }}
                </h2>
                
                <div class="space-y-6">
                  <!-- Challenges -->
                  <div v-if="project.challenges?.length" class="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30">
                    <h3 class="text-lg font-semibold mb-4 flex items-center gap-2 text-red-400">
                      <Icon name="lucide:alert-circle" class="w-5 h-5" />
                      {{ $t('projects.detail.challenges') }}
                    </h3>
                    <ul class="space-y-3">
                      <li v-for="(challenge, i) in project.challenges" :key="i" class="flex items-start gap-3">
                        <Icon name="lucide:x-circle" class="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" />
                        <span class="text-text-secondary">{{ challenge }}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Solutions -->
                  <div v-if="project.solutions?.length" class="p-6 rounded-2xl bg-linear-to-br from-accent/5 to-transparent border border-accent/10">
                    <h3 class="text-lg font-semibold mb-4 flex items-center gap-2 text-accent">
                      <Icon name="lucide:check-circle-2" class="w-5 h-5" />
                      {{ $t('projects.detail.solutions') }}
                    </h3>
                    <ul class="space-y-3">
                      <li v-for="(solution, i) in project.solutions" :key="i" class="flex items-start gap-3">
                        <div class="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon name="lucide:check" class="w-3 h-3 text-accent" />
                        </div>
                        <span class="text-text-secondary">{{ solution }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <!-- Key Features -->
              <section v-if="project.features?.length" ref="featuresRef" class="opacity-0">
                <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="lucide:sparkles" class="w-4 h-4 text-accent" />
                  </div>
                  {{ $t('projects.detail.features_title') }}
                </h2>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div 
                    v-for="(feature, i) in project.features" 
                    :key="i"
                    class="group p-5 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/30 transition-all hover:bg-slate-800/50"
                  >
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Icon :name="feature.icon || 'lucide:zap'" class="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 class="font-semibold mb-1">{{ feature.title }}</h3>
                        <p class="text-text-secondary text-sm">{{ feature.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <!-- Results/Impact -->
              <section v-if="project.results?.length" ref="resultsRef" class="p-8 rounded-2xl bg-linear-to-br from-accent/5 to-transparent border border-accent/10 opacity-0" aria-labelledby="results-heading">
                <h2 id="results-heading" class="text-xl font-bold mb-6 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Icon name="lucide:trending-up" class="w-4 h-4 text-accent" />
                  </div>
                  {{ $t('projects.detail.results_title') }}
                </h2>
                <ul class="space-y-4">
                  <li v-for="(result, i) in project.results" :key="i" class="flex items-start gap-4">
                    <div class="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="lucide:check" class="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    </div>
                    <span class="text-text-secondary">{{ result }}</span>
                  </li>
                </ul>
              </section>
            </div>
            
            <!-- Sidebar -->
            <aside ref="sidebarRef" class="space-y-8 opacity-0">
              <!-- Tech Stack -->
              <section class="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30" aria-labelledby="tech-heading">
                <h2 id="tech-heading" class="text-lg font-bold mb-4 flex items-center gap-2">
                  <Icon name="lucide:code-2" class="w-5 h-5 text-accent" />
                  {{ $t('projects.detail.tech_title') }}
                </h2>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.tech" 
                    :key="tech"
                    class="px-3 py-1.5 bg-slate-900/50 text-text-secondary rounded-lg text-sm border border-slate-700/50 hover:border-accent/30 transition-colors"
                  >
                    {{ tech }}
                  </span>
                </div>
              </section>
              
              <!-- Quick Links -->
              <section v-if="project.url" class="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30">
                <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
                  <Icon name="lucide:link" class="w-5 h-5 text-accent" />
                  {{ $t('projects.quick_links') }}
                </h2>
                <a 
                  :href="project.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors group"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon name="lucide:globe" class="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div class="font-medium">{{ $t('projects.live_website') }}</div>
                      <div class="text-xs text-text-muted">{{ $t('projects.visit_project') }}</div>
                    </div>
                  </div>
                  <Icon name="lucide:arrow-up-right" class="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
                </a>
              </section>
              
              <!-- Share Project -->
              <section class="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30">
                <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
                  <Icon name="lucide:share-2" class="w-5 h-5 text-accent" />
                  {{ $t('projects.share') }}
                </h2>
                <div class="flex gap-2">
                  <a 
                    :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.title)}&url=${encodeURIComponent(project.url || '')}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors flex items-center justify-center"
                  >
                    <Icon name="lucide:twitter" class="w-5 h-5" />
                  </a>
                  <a 
                    :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(project.url || '')}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors flex items-center justify-center"
                  >
                    <Icon name="lucide:linkedin" class="w-5 h-5" />
                  </a>
                  <button 
                    @click="copyLink"
                    class="flex-1 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors flex items-center justify-center"
                  >
                    <Icon name="lucide:copy" class="w-5 h-5" />
                  </button>
                </div>
              </section>
            </aside>
          </div>
          
          <!-- Project Navigation -->
          <nav v-if="prevProject || nextProject" ref="navigationRef" class="mt-20 pt-12 border-t border-slate-800 opacity-0">
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Previous Project -->
              <NuxtLink 
                v-if="prevProject"
                :to="localePath(`/projects/${getProjectSlug(prevProject)}`)"
                class="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/30 transition-all"
              >
                <div class="flex items-center gap-2 text-text-muted text-sm mb-3">
                  <Icon name="lucide:arrow-left" class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>{{ $t('projects.prev_project') }}</span>
                </div>
                <h3 class="text-lg font-semibold group-hover:text-accent transition-colors">{{ prevProject.title }}</h3>
                <p class="text-text-muted text-sm mt-1 line-clamp-1">{{ prevProject.category }}</p>
              </NuxtLink>
              <div v-else class="hidden md:block"></div>
              
              <!-- Next Project -->
              <NuxtLink 
                v-if="nextProject"
                :to="localePath(`/projects/${getProjectSlug(nextProject)}`)"
                class="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/30 transition-all text-right"
              >
                <div class="flex items-center justify-end gap-2 text-text-muted text-sm mb-3">
                  <span>{{ $t('projects.next_project') }}</span>
                  <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
                <h3 class="text-lg font-semibold group-hover:text-accent transition-colors">{{ nextProject.title }}</h3>
                <p class="text-text-muted text-sm mt-1 line-clamp-1">{{ nextProject.category }}</p>
              </NuxtLink>
            </div>
          </nav>
          
          <!-- Related Projects -->
          <section v-if="relatedProjects.length > 0" ref="relatedRef" class="mt-20 opacity-0">
            <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:folder-open" class="w-4 h-4 text-accent" />
              </div>
              {{ $t('projects.more_projects') }}
            </h2>
            <div class="grid md:grid-cols-3 gap-6">
              <NuxtLink 
                v-for="relProject in relatedProjects" 
                :key="getProjectSlug(relProject)"
                :to="localePath(`/projects/${getProjectSlug(relProject)}`)"
                class="group"
              >
                <div class="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <img 
                    :src="relProject.image" 
                    :alt="relProject.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
                  <div class="absolute bottom-4 left-4 right-4">
                    <span class="text-xs text-text-muted">{{ relProject.category }}</span>
                    <h3 class="font-semibold text-white group-hover:text-accent transition-colors">{{ relProject.title }}</h3>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </section>
        </article>
      </Container>
    </div>

    <!-- Client Testimonial Section -->
    <section v-if="projectTestimonial" ref="testimonialSectionRef" class="py-24 lg:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-b from-transparent via-accent/5 to-transparent"></div>
      
      <Container class="relative z-10">
        <div ref="testimonialContentRef" class="max-w-4xl mx-auto opacity-0">
          <!-- Section Label -->
          <div class="flex items-center justify-center gap-3 mb-8">
            <div class="w-12 h-px bg-accent"></div>
            <span class="text-accent font-mono text-sm uppercase tracking-widest">
              {{ $t('projects.detail.client_feedback') }}
            </span>
            <div class="w-12 h-px bg-accent"></div>
          </div>
          
          <!-- Testimonial Card -->
          <div class="relative p-8 lg:p-12 rounded-3xl glass border border-white/10">
            <!-- Quote Icon -->
            <div class="absolute -top-6 left-12">
              <div class="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Icon name="lucide:quote" class="w-6 h-6 text-white" />
              </div>
            </div>
            
            <!-- Quote Text -->
            <blockquote class="text-xl lg:text-2xl text-text-secondary leading-relaxed mb-8 pt-4">
              "{{ projectTestimonial.quote }}"
            </blockquote>
            
            <!-- Author -->
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <span class="text-accent font-semibold text-lg">{{ projectTestimonial.initials }}</span>
              </div>
              <div>
                <div class="font-semibold text-lg">{{ projectTestimonial.name }}</div>
                <div class="text-text-muted">{{ projectTestimonial.role }}</div>
              </div>
            </div>
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
              {{ $t('projects.detail.cta.subtitle') }}
            </span>
            <div class="w-12 h-px bg-accent"></div>
          </div>
          
          <!-- Heading -->
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {{ $t('projects.detail.cta.title') }}
          </h2>
          
          <!-- Description -->
          <p class="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {{ $t('projects.detail.cta.description') }}
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              :to="localePath('/contact')"
              class="group inline-flex items-center gap-3 px-10 py-4 bg-accent hover:bg-accent-dark text-white text-lg font-medium rounded-full transition-all hover:shadow-2xl hover:shadow-accent/25 hover:-translate-y-1"
            >
              <span>{{ $t('projects.detail.cta.button_primary') }}</span>
              <Icon name="lucide:calendar" class="w-5 h-5" />
            </NuxtLink>
            
            <NuxtLink
              :to="localePath('/projects')"
              class="group inline-flex items-center gap-3 px-10 py-4 glass hover:bg-white/5 text-white text-lg font-medium rounded-full transition-all hover:-translate-y-1 border border-white/10 hover:border-accent/30"
            >
              <span>{{ $t('projects.detail.cta.button_secondary') }}</span>
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
const route = useRoute()

const slug = route.params.slug

// Helper function to extract slug from path
const getProjectSlug = (project) => {
  if (!project || !project.path) return ''
  const parts = project.path.split('/')
  return parts[parts.length - 1]
}

// Fetch current project with server-side rendering enabled
const { data: project, status, error: projectError } = await useAsyncData(`project-${slug}-${locale.value}`, async () => {
  try {
    const collection = locale.value === 'fr' ? 'projects_fr' : 'projects_en'
    const result = await queryCollection(collection).path(`/projects/${locale.value}/${slug}`).first()
    return result
  } catch (err) {
    console.error('Error fetching project:', err)
    return null
  }
}, {
  server: true
})

// Handle 404 for missing projects
if (!project.value && status.value !== 'pending') {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found',
    message: 'The requested project could not be found.'
  })
}

// Fetch all projects for navigation
const { data: allProjects } = await useAsyncData(`all-projects-${locale.value}`, async () => {
  try {
    const collection = locale.value === 'fr' ? 'projects_fr' : 'projects_en'
    return await queryCollection(collection).all()
  } catch (err) {
    console.error('Error fetching all projects:', err)
    return []
  }
}, {
  server: true
})

// Get current index based on path
const currentIndex = computed(() => {
  if (!allProjects.value) return -1
  return allProjects.value.findIndex(p => getProjectSlug(p) === slug)
})

// Navigation
const prevProject = computed(() => {
  const idx = currentIndex.value
  if (idx > 0 && allProjects.value) {
    return allProjects.value[idx - 1]
  }
  return null
})

const nextProject = computed(() => {
  const idx = currentIndex.value
  if (idx >= 0 && idx < (allProjects.value?.length - 1) && allProjects.value) {
    return allProjects.value[idx + 1]
  }
  return null
})

// Related projects (same category, excluding current)
const relatedProjects = computed(() => {
  if (!project.value || !allProjects.value) return []
  return allProjects.value
    .filter(p => getProjectSlug(p) !== slug && p.category === project.value.category)
    .slice(0, 3)
})

// Project testimonial (could be specific to project or general)
const projectTestimonial = computed(() => {
  // If project has a specific testimonial, use it
  if (project.value?.testimonial) {
    return project.value.testimonial
  }
  // Otherwise return null - section won't show
  return null
})

// Project metadata for the grid
const projectMeta = computed(() => {
  if (!project.value) return []
  return [
    { key: 'client', icon: 'lucide:building-2', label: t('projects.detail.client'), value: project.value.client },
    { key: 'year', icon: 'lucide:calendar', label: t('projects.detail.year'), value: project.value.year },
    { key: 'duration', icon: 'lucide:clock', label: t('projects.detail.duration'), value: project.value.duration },
    { key: 'status', icon: 'lucide:globe', label: t('projects.status'), value: t('projects.live'), isStatus: true }
  ]
})

// Copy link to clipboard
const copyLink = () => {
  const url = project.value?.url || window.location.href
  navigator.clipboard.writeText(url)
}

// SEO - use computed values resolved from project data
const seoTitle = computed(() => project.value ? `${project.value.title} | ${t('projects.case_study')}` : t('projects.detail.not_found'))
const seoDescription = computed(() => project.value ? project.value.description : t('projects.detail.not_found_desc'))
const seoImage = computed(() => project.value?.image)
const seoImageAlt = computed(() => project.value?.title)
const seoPublishedTime = computed(() => project.value ? `${project.value.year}-01-01T00:00:00Z` : undefined)
const seoTags = computed(() => project.value?.tech || [])

// Watch for project changes and update SEO
watchEffect(() => {
  if (!project.value) return
  
  usePageSeo({
    title: seoTitle.value,
    description: seoDescription.value,
    type: 'article',
    image: seoImage.value,
    imageAlt: seoImageAlt.value,
    publishedTime: seoPublishedTime.value,
    author: 'Aboubakar Sidik Faha',
    tags: seoTags.value,
    locale: locale.value === 'fr' ? 'fr_FR' : 'en_US',
  })
})

// Breadcrumb schema
useBreadcrumbSchema([
  { name: t('seo.breadcrumb_home'), url: '/' },
  { name: t('nav.projects'), url: '/projects' },
  { name: project.value?.title || t('nav.projects'), url: project.value ? `/projects/${slug}` : undefined },
])

// Refs for animations
const headerRef = ref(null)
const heroImageRef = ref(null)
const metaGridRef = ref(null)
const descriptionRef = ref(null)
const challengesRef = ref(null)
const featuresRef = ref(null)
const resultsRef = ref(null)
const sidebarRef = ref(null)
const navigationRef = ref(null)
const relatedRef = ref(null)
const testimonialSectionRef = ref(null)
const testimonialContentRef = ref(null)
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
  
  // Hero image animation
  ScrollTrigger.create({
    trigger: heroImageRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(heroImageRef.value, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out'
      })
    }
  })
  gsap.set(heroImageRef.value, { opacity: 0, scale: 0.95 })
  
  // Meta grid stagger animation
  const metaElements = metaGridRef.value?.querySelectorAll('[data-meta-index]')
  if (metaElements) {
    ScrollTrigger.create({
      trigger: metaGridRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(metaElements, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(metaElements, { opacity: 0, y: 20 })
  }
  
  // Description animation
  ScrollTrigger.create({
    trigger: descriptionRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(descriptionRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    }
  })
  gsap.set(descriptionRef.value, { opacity: 0, y: 30 })
  
  // Challenges & Solutions animation
  if (challengesRef.value) {
    ScrollTrigger.create({
      trigger: challengesRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(challengesRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(challengesRef.value, { opacity: 0, y: 30 })
  }
  
  // Features animation
  if (featuresRef.value) {
    ScrollTrigger.create({
      trigger: featuresRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(featuresRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(featuresRef.value, { opacity: 0, y: 30 })
  }
  
  // Results animation
  if (resultsRef.value) {
    ScrollTrigger.create({
      trigger: resultsRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(resultsRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(resultsRef.value, { opacity: 0, y: 30 })
  }
  
  // Sidebar animation
  ScrollTrigger.create({
    trigger: sidebarRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(sidebarRef.value, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    }
  })
  gsap.set(sidebarRef.value, { opacity: 0, x: 30 })
  
  // Navigation animation
  if (navigationRef.value) {
    ScrollTrigger.create({
      trigger: navigationRef.value,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(navigationRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(navigationRef.value, { opacity: 0, y: 30 })
  }
  
  // Related projects animation
  if (relatedRef.value) {
    ScrollTrigger.create({
      trigger: relatedRef.value,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(relatedRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(relatedRef.value, { opacity: 0, y: 30 })
  }
  
  // Testimonial section animation
  if (testimonialContentRef.value) {
    ScrollTrigger.create({
      trigger: testimonialSectionRef.value,
      start: 'top 70%',
      once: true,
      onEnter: () => {
        gsap.to(testimonialContentRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        })
      }
    })
    gsap.set(testimonialContentRef.value, { opacity: 0, y: 40 })
  }
  
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
})
</script>

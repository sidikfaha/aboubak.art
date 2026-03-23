<template>
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
        <header class="mb-12">
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
        <div class="relative aspect-21/9 rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-black/20">
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
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div class="glass rounded-2xl p-6 text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-2 text-text-muted text-sm mb-2">
              <Icon name="lucide:building-2" class="w-4 h-4" />
              <span>{{ $t('projects.detail.client') }}</span>
            </div>
            <div class="font-semibold">{{ project.client }}</div>
          </div>
          <div class="glass rounded-2xl p-6 text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-2 text-text-muted text-sm mb-2">
              <Icon name="lucide:calendar" class="w-4 h-4" />
              <span>{{ $t('projects.detail.year') }}</span>
            </div>
            <div class="font-semibold">{{ project.year }}</div>
          </div>
          <div class="glass rounded-2xl p-6 text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-2 text-text-muted text-sm mb-2">
              <Icon name="lucide:clock" class="w-4 h-4" />
              <span>{{ $t('projects.detail.duration') }}</span>
            </div>
            <div class="font-semibold">{{ project.duration }}</div>
          </div>
          <div class="glass rounded-2xl p-6 text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-2 text-text-muted text-sm mb-2">
              <Icon name="lucide:globe" class="w-4 h-4" />
              <span>{{ $t('projects.status') }}</span>
            </div>
            <div class="font-semibold text-emerald-400 flex items-center justify-center md:justify-start gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {{ $t('projects.live') }}
            </div>
          </div>
        </div>
        
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-12">
            <!-- Description -->
            <section aria-labelledby="description-heading">
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
            
            <!-- Results/Impact -->
            <section v-if="project.results?.length" class="p-8 rounded-2xl bg-linear-to-br from-accent/5 to-transparent border border-accent/10" aria-labelledby="results-heading">
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
          <aside class="space-y-8">
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
        <nav v-if="prevProject || nextProject" class="mt-20 pt-12 border-t border-slate-800">
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
        <section v-if="relatedProjects.length > 0" class="mt-20">
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
</template>

<script setup>
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

// Fetch current project
const { data: project, status } = await useAsyncData(`project-${slug}-${locale.value}`, async () => {
  const collection = locale.value === 'fr' ? 'projects_fr' : 'projects_en'
  return await queryCollection(collection).path(`/projects/${locale.value}/${slug}`).first()
})

// Fetch all projects for navigation
const { data: allProjects } = await useAsyncData(`all-projects-${locale.value}`, async () => {
  const collection = locale.value === 'fr' ? 'projects_fr' : 'projects_en'
  return await queryCollection(collection).all()
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
</script>

<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Hero Header -->
      <div ref="headerRef" class="max-w-5xl mb-20 opacity-0">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            {{ $t('about.subtitle') }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {{ $t('about.title') }}
        </h1>
        <p class="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl">
          {{ $t('about.description') }}
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Left Column: Profile & Quick Info -->
        <div class="lg:col-span-5 space-y-8 sticky top-20 self-start">
          <!-- Profile Image -->
          <div ref="imageRef" class="relative opacity-0">
            <div class="aspect-4/5 rounded-2xl overflow-hidden group">
              <img 
                src="/me.webp"
                :alt="$t('hero.name') + ' - ' + $t('hero.title')"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                width="800"
                height="1000"
              />
              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-linear-to-t from-bg-primary/60 via-transparent to-transparent"></div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10"></div>
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10"></div>
            
            <!-- Floating badge -->
            <div class="absolute bottom-6 left-6 glass rounded-xl px-4 py-3">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span class="text-sm font-medium">{{ $t('about.available_for_projects') }}</span>
              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div ref="statsRef" class="grid grid-cols-3 gap-4 opacity-0">
            <div 
              v-for="(stat, i) in stats" 
              :key="i"
              class="text-center p-5 glass rounded-xl group hover:border-accent/30 transition-all duration-300"
            >
              <div class="text-3xl font-bold text-accent mb-1">{{ stat.value }}</div>
              <div class="text-xs text-text-muted">{{ $t(stat.label) }}</div>
            </div>
          </div>

          <!-- Location & Contact Card -->
          <div class="glass rounded-2xl p-6 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:map-pin" class="w-5 h-5 text-accent" />
              </div>
              <div>
                <div class="text-sm text-text-muted">{{ $t('contact.info.location') }}</div>
                <div class="font-medium">{{ $t('hero.location') }}</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:mail" class="w-5 h-5 text-accent" />
              </div>
              <div>
                <div class="text-sm text-text-muted">{{ $t('contact.info.email') }}</div>
                <div class="font-medium">me@aboubak.art</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:phone" class="w-5 h-5 text-accent" />
              </div>
              <div>
                <div class="text-sm text-text-muted">{{ $t('contact.info.phone') }}</div>
                <div class="font-medium">+225 07 05 21 60 05</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Detailed Content -->
        <div class="lg:col-span-7 space-y-16">
          <!-- Bio Section -->
          <section ref="bioRef" aria-labelledby="bio-heading" class="opacity-0">
            <h2 id="bio-heading" class="text-2xl font-bold mb-6 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:user" class="w-4 h-4 text-accent" />
              </div>
              {{ $t('about.story_title') }}
            </h2>
            <div class="space-y-4 text-text-secondary leading-relaxed">
              <p>
                <span v-html="$t('about.bio.p1', { 
                  role: `<strong class='text-white'>${$t('about.bio.role')}</strong>` 
                })"></span>
              </p>
              <p>
                <span v-html="$t('about.bio.p2', { 
                  degree: `<strong class='text-white'>${$t('about.bio.degree')}</strong>`,
                  school: $t('about.bio.school')
                })"></span>
              </p>
              <p>
                <span v-html="$t('about.bio.p3', { 
                  current_role: `<strong class='text-white'>${$t('about.bio.current_role')}</strong>` 
                })"></span>
              </p>
            </div>
          </section>

          <!-- What I Do -->
          <section ref="expertiseRef" aria-labelledby="expertise-heading" class="opacity-0">
            <h2 id="expertise-heading" class="text-2xl font-bold mb-6 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:briefcase" class="w-4 h-4 text-accent" />
              </div>
              {{ $t('about.what_i_do') }}
            </h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div 
                v-for="i in 7" 
                :key="i"
                class="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/30 hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <div class="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <Icon name="lucide:check" class="w-3.5 h-3.5 text-accent" />
                </div>
                <span class="text-text-secondary text-sm leading-relaxed">{{ $t(`about.expertise.item${i}`) }}</span>
              </div>
            </div>
          </section>

          <!-- Skills Section -->
          <section ref="skillsRef" aria-labelledby="skills-heading" class="opacity-0">
            <h2 id="skills-heading" class="text-2xl font-bold mb-6 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:cpu" class="w-4 h-4 text-accent" />
              </div>
              {{ $t('about.skills_title') }}
            </h2>
            <div class="grid sm:grid-cols-2 gap-6">
              <div v-for="(category, key) in skillCategories" :key="key" class="space-y-3">
                <h3 class="text-sm font-medium text-text-muted uppercase tracking-wider">{{ $t(`about.skills.${key}`) }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(skill, j) in category" 
                    :key="j"
                    class="px-3 py-1.5 text-sm rounded-full bg-slate-800/50 border border-slate-700/50 text-text-secondary hover:border-accent/30 hover:text-white transition-all cursor-default"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Experience Timeline -->
          <section ref="experienceRef" aria-labelledby="experience-heading" class="opacity-0">
            <h2 id="experience-heading" class="text-2xl font-bold mb-6 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:clock" class="w-4 h-4 text-accent" />
              </div>
              {{ $t('about.experience_title') }}
            </h2>
            <div class="space-y-6">
              <div 
                v-for="(jobKey, i) in experienceKeys" 
                :key="jobKey"
                class="relative pl-8 pb-6 border-l border-border last:pb-0 group"
              >
                <!-- Timeline dot -->
                <div class="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-1.5 ring-4 ring-bg-primary group-hover:ring-accent/20 transition-all"></div>
                
                <div class="space-y-2">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="text-accent font-mono text-sm px-2 py-0.5 rounded bg-accent/10">{{ $t(`about.experience.${jobKey}.period`) }}</span>
                    <span v-if="i < 1" class="text-xs text-green-400 px-2 py-0.5 rounded bg-green-400/10 border border-green-400/20">{{ $t('about.current') }}</span>
                  </div>
                  <h3 class="font-semibold text-lg">{{ $t(`about.experience.${jobKey}.role`) }}</h3>
                  <p class="text-text-muted">{{ $t(`about.experience.${jobKey}.company`) }}</p>
                  <ul class="space-y-1 mt-3">
                    <li v-for="h in 4" :key="h" class="text-sm text-text-secondary flex items-start gap-2">
                      <template v-if="$t(`about.experience.${jobKey}.highlight${h}`) !== `about.experience.${jobKey}.highlight${h}`">
                        <Icon name="lucide:minus" class="w-3 h-3 text-accent mt-1.5 shrink-0" />
                        <span>{{ $t(`about.experience.${jobKey}.highlight${h}`) }}</span>
                      </template>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Education Section -->
          <section ref="educationRef" aria-labelledby="education-heading" class="opacity-0">
            <h2 id="education-heading" class="text-2xl font-bold mb-6 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:graduation-cap" class="w-4 h-4 text-accent" />
              </div>
              {{ $t('about.education_title') }}
            </h2>
            <div class="space-y-4">
              <div 
                v-for="eduKey in educationKeys" 
                :key="eduKey"
                class="p-5 rounded-xl glass hover:border-accent/30 transition-all duration-300"
              >
                <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 class="font-semibold">{{ $t(`about.education.${eduKey}.degree`) }}</h3>
                  <span class="text-xs text-text-muted font-mono">{{ $t(`about.education.${eduKey}.period`) }}</span>
                </div>
                <p class="text-text-secondary text-sm">{{ $t(`about.education.${eduKey}.school`) }}</p>
                <p class="text-text-muted text-sm mt-1">{{ $t(`about.education.${eduKey}.location`) }}</p>
              </div>
            </div>
          </section>

          <!-- Notable Projects from CV -->
          <section ref="projectsRef" aria-labelledby="projects-heading" class="opacity-0">
            <h2 id="projects-heading" class="text-2xl font-bold mb-6 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon name="lucide:folder-open" class="w-4 h-4 text-accent" />
              </div>
              {{ $t('about.notable_projects') }}
            </h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div 
                v-for="projKey in projectKeys" 
                :key="projKey"
                class="p-5 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/30 hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <div class="flex items-start justify-between gap-2 mb-3">
                  <h3 class="font-semibold group-hover:text-accent transition-colors">{{ $t(`about.projects.${projKey}.name`) }}</h3>
                  <a 
                    v-if="projectLinks[projKey]" 
                    :href="projectLinks[projKey]" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-text-muted hover:text-accent transition-colors"
                    :aria-label="`Visit ${$t(`about.projects.${projKey}.name`)}`"
                  >
                    <Icon name="lucide:external-link" class="w-4 h-4" />
                  </a>
                </div>
                <p class="text-sm text-text-secondary mb-3 leading-relaxed">{{ $t(`about.projects.${projKey}.description`) }}</p>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="(tech, j) in projectTechs[projKey]" 
                    :key="j"
                    class="text-xs px-2 py-0.5 rounded bg-accent/5 text-accent"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- CTA -->
          <div ref="ctaRef" class="flex flex-wrap gap-4 pt-4 opacity-0">
            <NuxtLink
              :to="localePath('/contact')"
              class="flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
              :aria-label="$t('contact.get_in_touch') + ' - Contact page'"
            >
              <span>{{ $t('contact.get_in_touch') }}</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-7 py-3.5 bg-slate-800/50 hover:bg-slate-800 text-white font-medium rounded-full transition-all border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
              :aria-label="$t('contact.download_cv') + ' - Opens in new tab'"
            >
              <span>{{ $t('contact.download_cv') }}</span>
              <Icon name="lucide:download" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { t, locale } = useI18n()
const localePath = useLocalePath()

// Refs for animations
const headerRef = ref(null)
const imageRef = ref(null)
const statsRef = ref(null)
const bioRef = ref(null)
const expertiseRef = ref(null)
const skillsRef = ref(null)
const experienceRef = ref(null)
const educationRef = ref(null)
const projectsRef = ref(null)
const ctaRef = ref(null)

// SEO
usePageSeo({
  title: t('seo.about_title'),
  description: t('seo.about_desc'),
  type: 'profile',
  locale: locale.value === 'fr' ? 'fr_FR' : 'en_US',
})

// Breadcrumb schema
useBreadcrumbSchema([
  { name: t('seo.breadcrumb_home'), url: '/' },
  { name: t('nav.about'), url: '/about' },
])

// Stats data
const stats = [
  { value: '20+', label: 'about.stats_projects' },
  { value: '7+', label: 'about.stats_years' },
  { value: '10+', label: 'about.stats_clients' },
]

// Skills organized by category
const skillCategories = {
  languages: ['Golang (Go)', 'TypeScript', 'Python', 'Dart', 'Shell / Bash', 'HCL'],
  frameworks: ['Gin', 'Nuxt.js', 'NestJS', 'Flutter', 'Next.js', 'FastAPI'],
  cloud_devops: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'CI/CD'],
  databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Redis'],
  tools: ['Git', 'GitHub', 'GitLab', 'Jenkins', 'Firebase'],
  methodologies: ['Agile/Scrum', 'UML', 'MERISE', 'SOLID', 'Microservices']
}

// Experience keys for iteration
const experienceKeys = ['asernum', 'everest', 'primus', 'afriqasoft', 'lagence', 'geospace', 'saamea', 'gohze']

// Education keys
const educationKeys = ['bachelor', 'hnd']

// Project keys
const projectKeys = ['jackwestin', 'nkaba', 'syotimambay', 'schoolgood', 'osscameroon']

// Project links
const projectLinks = {
  jackwestin: 'https://jackwestin.com',
  nkaba: '#',
  syotimambay: '#',
  schoolgood: 'https://schoolgood.cm',
  osscameroon: 'https://osscameroon.com'
}

// Project techs (these are technical terms, keeping as-is)
const projectTechs = {
  jackwestin: ['Vue.js', 'Laravel', 'MongoDB', 'Docker', 'GitLab CI'],
  nkaba: ['Flutter', 'NestJS', 'MongoDB', 'Cloud Run', 'Docker'],
  syotimambay: ['Flutter', 'Firebase', 'Vue.js', 'GCP', 'Cloud Run'],
  schoolgood: ['Vue.js', 'Node.js', 'MongoDB', 'Firebase'],
  osscameroon: ['Python', 'TypeScript', 'Go', 'React', 'Vue.js']
}

// GSAP Animations
onMounted(() => {
  if (process.server) return
  
  gsap.registerPlugin(ScrollTrigger)

  // Header animation
  gsap.to(headerRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.1
  })

  // Image animation
  gsap.to(imageRef.value, {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.2
  })

  // Stats animation
  gsap.to(statsRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
    delay: 0.3
  })

  // Set initial states for scroll animations
  const sections = [bioRef, expertiseRef, skillsRef, experienceRef, educationRef, projectsRef, ctaRef]
  sections.forEach(section => {
    gsap.set(section.value, { opacity: 0, y: 30 })
  })

  // Scroll-triggered animations
  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section.value,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(section.value, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: index * 0.05
        })
      }
    })
  })
})
</script>

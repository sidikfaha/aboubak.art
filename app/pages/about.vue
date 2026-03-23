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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face"
                alt="Aboubakar Sidik Faha - DevOps Engineer and Software Architect"
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
                <span class="text-sm font-medium">{{ $t('hero.available') }} for projects</span>
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
                <div class="font-medium">Abidjan, Côte d'Ivoire</div>
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
                Based in Abidjan, Côte d'Ivoire, I'm a passionate <strong class="text-white">DevOps Engineer and Software Architect</strong> 
                with over 7 years of experience transforming complex technical challenges into elegant, 
                scalable solutions.
              </p>
              <p>
                I hold a <strong class="text-white">Professional Bachelor's degree in Software Engineering</strong> from 
                Institut Universitaire de la Côte (IUC), Douala, Cameroon. My journey began with a fascination 
                for how things work under the hood, which led me to specialize in cloud infrastructure (AWS, GCP), 
                Kubernetes orchestration, CI/CD automation, and modern software architecture.
              </p>
              <p>
                Currently, I'm a <strong class="text-white">Backend DevOps Engineer at Everest Consulting (USA)</strong> 
                while also serving as a part-time DevOps Instructor at Primus Learning, mentoring the next generation 
                of engineers. I'm also a regular contributor to open-source projects with OSS Cameroon.
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
                v-for="(item, i) in expertise" 
                :key="i"
                class="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/30 hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <div class="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <Icon name="lucide:check" class="w-3.5 h-3.5 text-accent" />
                </div>
                <span class="text-text-secondary text-sm leading-relaxed">{{ item }}</span>
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
              <div v-for="(category, i) in skillCategories" :key="i" class="space-y-3">
                <h3 class="text-sm font-medium text-text-muted uppercase tracking-wider">{{ category.name }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(skill, j) in category.skills" 
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
                v-for="(job, i) in experience" 
                :key="i" 
                class="relative pl-8 pb-6 border-l border-border last:pb-0 group"
              >
                <!-- Timeline dot -->
                <div class="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-1.5 ring-4 ring-bg-primary group-hover:ring-accent/20 transition-all"></div>
                
                <div class="space-y-2">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="text-accent font-mono text-sm px-2 py-0.5 rounded bg-accent/10">{{ job.period }}</span>
                    <span v-if="job.current" class="text-xs text-green-400 px-2 py-0.5 rounded bg-green-400/10 border border-green-400/20">Current</span>
                  </div>
                  <h3 class="font-semibold text-lg">{{ job.role }}</h3>
                  <p class="text-text-muted">{{ job.company }}</p>
                  <ul v-if="job.highlights" class="space-y-1 mt-3">
                    <li v-for="(highlight, j) in job.highlights" :key="j" class="text-sm text-text-secondary flex items-start gap-2">
                      <Icon name="lucide:minus" class="w-3 h-3 text-accent mt-1.5 shrink-0" />
                      <span>{{ highlight }}</span>
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
                v-for="(edu, i) in education" 
                :key="i"
                class="p-5 rounded-xl glass hover:border-accent/30 transition-all duration-300"
              >
                <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 class="font-semibold">{{ edu.degree }}</h3>
                  <span class="text-xs text-text-muted font-mono">{{ edu.period }}</span>
                </div>
                <p class="text-text-secondary text-sm">{{ edu.school }}</p>
                <p class="text-text-muted text-sm mt-1">{{ edu.location }}</p>
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
                v-for="(project, i) in notableProjects" 
                :key="i"
                class="p-5 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/30 hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <div class="flex items-start justify-between gap-2 mb-3">
                  <h3 class="font-semibold group-hover:text-accent transition-colors">{{ project.name }}</h3>
                  <a 
                    v-if="project.link" 
                    :href="project.link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-text-muted hover:text-accent transition-colors"
                    :aria-label="`Visit ${project.name}`"
                  >
                    <Icon name="lucide:external-link" class="w-4 h-4" />
                  </a>
                </div>
                <p class="text-sm text-text-secondary mb-3 leading-relaxed">{{ project.description }}</p>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="(tech, j) in project.tech.slice(0, 4)" 
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
              aria-label="Get in touch - Contact page"
            >
              <span>{{ $t('contact.get_in_touch') }}</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </NuxtLink>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-7 py-3.5 bg-slate-800/50 hover:bg-slate-800 text-white font-medium rounded-full transition-all border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
              aria-label="Download CV - Opens in new tab"
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

// Expertise data
const expertise = [
  'Design and implement scalable cloud infrastructure on AWS and GCP (IAC with Terraform, Pulumi, Ansible)',
  'Build and optimize CI/CD pipelines using GitLab CI, GitHub Actions, and Jenkins',
  'Orchestrate containerized applications with Kubernetes (EKS, GKE)',
  'Architect microservices and distributed systems using NestJS, FastAPI, and Go',
  'Develop full-stack applications with Vue.js, React, Flutter, and Node.js',
  'Lead development teams as Scrum Master and establish engineering best practices',
  'Provide technical consulting, training, and digital transformation strategy',
]

// Skills organized by category (from CV)
const skillCategories = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'Python', 'Go', 'Dart', 'Shell / Bash']
  },
  {
    name: 'Frameworks',
    skills: ['Vue.js', 'NestJS', 'Flutter', 'React', 'FastAPI']
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'CI/CD']
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Redis']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'GitLab', 'Jenkins', 'Firebase']
  },
  {
    name: 'Methodologies',
    skills: ['Agile/Scrum', 'UML', 'MERISE', 'SOLID', 'Microservices']
  }
]

// Experience data (from CV)
const experience = [
  {
    period: 'Aug 2023 - Present',
    role: 'Backend DevOps Engineer',
    company: 'Everest Consulting, USA (Remote)',
    current: true,
    highlights: [
      'Backend development with NestJS',
      'Writing CI/CD Pipelines and code quality checks',
      'Infrastructure management on AWS (IAC, monitoring, cost optimization)',
      'Kubernetes orchestration on EKS'
    ]
  },
  {
    period: 'Jun 2023 - Present',
    role: 'Part-time DevOps Instructor',
    company: 'Primus Learning, USA (Remote)',
    current: true,
    highlights: [
      'Live teaching DevOps to students (Docker, CI-CD, Python)',
      'Mentoring students on best practices'
    ]
  },
  {
    period: 'Jan 2023 - July 2023',
    role: 'DevOps Engineer & R&D Manager',
    company: 'AFRIQASOFT, Abidjan',
    highlights: [
      'Project Management as Scrum Master',
      'CI/CD on GitLab CI and GitHub Actions',
      'Kubernetes cluster management (GKE and EKS)',
      'Mobile Development (Flutter) and microservices (FastAPI, NestJS, Go)'
    ]
  },
  {
    period: 'June 2022 - August 2022',
    role: 'Development Team Lead',
    company: "L'Agence Digitale, Douala",
    highlights: [
      'Structured source code architecture',
      'Code review and error correction',
      'Published app to Play Store (internal test)'
    ]
  },
  {
    period: 'July 2020 - December 2022',
    role: 'DevOps Engineer',
    company: 'GEOSPACE AFRICA LTD, Douala',
    highlights: [
      'Deployed local development environment (GitLab, Docker, Nginx)',
      'Deployed mail server and private cloud with NextCloud',
      'Maintained IT infrastructure and SEO optimization'
    ]
  },
  {
    period: 'February 2021 - March 2022',
    role: 'IT Specialist | DevOps Engineer',
    company: 'SAAMEA SARL, Douala',
    highlights: [
      'E-commerce site audit and technical improvements',
      'Technology consulting and team training',
      'Infrastructure modeling and CI/CD pipeline setup'
    ]
  },
  {
    period: 'November 2019 - December 2021',
    role: 'Junior DevOps Engineer',
    company: 'GOHZE, Douala',
    highlights: [
      'Agile scrum development environment',
      'Web application development and Docker containerization',
      'Data analysis and microservices development'
    ]
  }
]

// Education data (from CV)
const education = [
  {
    degree: "Professional Bachelor's Degree in Software Engineering",
    school: 'Institut Universitaire de la Côte (IUC)',
    location: 'Douala, Cameroon',
    period: '2020 - 2021'
  },
  {
    degree: 'Higher National Diploma (HND) in Information Systems Management',
    school: 'Institut Universitaire de la Côte (IUC)',
    location: 'Douala, Cameroon',
    period: '2018 - 2020'
  }
]

// Notable projects from CV
const notableProjects = [
  {
    name: 'Jackwestin',
    link: 'https://jackwestin.com',
    description: 'Web application for medical exam preparation with courses, exercises, and tutoring sessions.',
    tech: ['Vue.js', 'Laravel', 'MongoDB', 'Docker', 'GitLab CI']
  },
  {
    name: 'Nkaba',
    link: '#',
    description: 'Mobile app for managing social groups, tracking finances, contributions, loans, and savings.',
    tech: ['Flutter', 'NestJS', 'MongoDB', 'Cloud Run', 'Docker']
  },
  {
    name: 'Syo Ti-Mambay',
    link: '#',
    description: 'Mobile app collecting religious songs in Mambay language with 200+ lyrics.',
    tech: ['Flutter', 'Firebase', 'Vue.js', 'GCP', 'Cloud Run']
  },
  {
    name: 'School Good',
    link: 'https://schoolgood.cm',
    description: 'E-learning platform for English training and exam preparation classes.',
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'Firebase']
  },
  {
    name: 'OSS Cameroon',
    link: 'https://osscameroon.com',
    description: 'Regular contributor to Cameroonian developer community open-source projects.',
    tech: ['Python', 'TypeScript', 'Go', 'React', 'Vue.js']
  }
]

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

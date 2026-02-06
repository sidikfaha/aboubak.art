<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Header -->
      <div class="max-w-4xl mb-20">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            {{ $t('about.subtitle') }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {{ $t('about.title') }}
        </h1>
        <p class="text-text-secondary text-lg leading-relaxed">
          {{ $t('about.description') }}
        </p>
      </div>
      
      <!-- Two column layout -->
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left: Image and quick info -->
        <div class="space-y-8">
          <div class="relative">
            <div class="aspect-4/5 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face"
                alt="Aboubakar Sidik Faha - DevOps Engineer and Software Architect"
                class="w-full h-full object-cover"
                loading="eager"
                width="800"
                height="1000"
              />
            </div>
            <!-- Decorative elements -->
            <div class="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10"></div>
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10"></div>
          </div>
          
          <!-- Quick stats -->
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center p-4 glass rounded-xl">
              <div class="text-2xl font-bold text-accent">20+</div>
              <div class="text-xs text-text-muted">{{ $t('about.stats_projects') }}</div>
            </div>
            <div class="text-center p-4 glass rounded-xl">
              <div class="text-2xl font-bold text-accent">7+</div>
              <div class="text-xs text-text-muted">{{ $t('about.stats_years') }}</div>
            </div>
            <div class="text-center p-4 glass rounded-xl">
              <div class="text-2xl font-bold text-accent">10+</div>
              <div class="text-xs text-text-muted">{{ $t('about.stats_clients') }}</div>
            </div>
          </div>
        </div>
        
        <!-- Right: Detailed content -->
        <div class="space-y-12">
          <!-- Bio -->
          <section aria-labelledby="bio-heading">
            <h2 id="bio-heading" class="text-2xl font-bold mb-4">{{ $t('about.story_title') }}</h2>
            <div class="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Based in Abidjan, Côte d'Ivoire, I'm a passionate DevOps Engineer and Software Architect 
                with over 7 years of experience transforming complex technical challenges into elegant, 
                scalable solutions. I hold a Professional Bachelor's degree in Software Engineering from 
                Institut Universitaire de la Côte (IUC), Douala, Cameroon.
              </p>
              <p>
                My journey began with a fascination for how things work under the hood, which led me 
                to specialize in cloud infrastructure (AWS, GCP), Kubernetes orchestration, CI/CD automation, 
                and modern software architecture. Today, I help businesses of all sizes—from innovative 
                startups to established enterprises in the USA and Africa—leverage technology to achieve their goals.
              </p>
              <p>
                I currently work as a Backend DevOps Engineer at Everest Consulting (USA) while also 
                serving as a part-time DevOps Instructor at Primus Learning, mentoring the next generation 
                of engineers. I'm also a regular contributor to open-source projects with OSS Cameroon.
              </p>
            </div>
          </section>
          
          <!-- What I do -->
          <section aria-labelledby="expertise-heading">
            <h2 id="expertise-heading" class="text-2xl font-bold mb-4">{{ $t('about.what_i_do') }}</h2>
            <ul class="space-y-3">
              <li v-for="(item, i) in expertise" :key="i" class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="lucide:check" class="w-3.5 h-3.5 text-accent" />
                </div>
                <span class="text-text-secondary">{{ item }}</span>
              </li>
            </ul>
          </section>
          
          <!-- Experience -->
          <section aria-labelledby="experience-heading">
            <h2 id="experience-heading" class="text-2xl font-bold mb-4">{{ $t('about.experience_title') }}</h2>
            <div class="space-y-6">
              <div v-for="(job, i) in experience" :key="i" class="relative pl-6 border-l border-border">
                <div class="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent -translate-x-1.25"></div>
                <div class="mb-1">
                  <span class="text-accent font-mono text-sm">{{ job.period }}</span>
                </div>
                <h3 class="font-semibold">{{ job.role }}</h3>
                <p class="text-text-muted text-sm">{{ job.company }}</p>
              </div>
            </div>
          </section>
          
          <!-- CTA - Pills -->
          <div class="flex flex-wrap gap-4 pt-4">
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
const { t, locale } = useI18n()
const localePath = useLocalePath()

// SEO for about page
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

const expertise = [
  'Design and implement scalable cloud infrastructure on AWS and GCP (IAC with Terraform, Pulumi, Ansible)',
  'Build and optimize CI/CD pipelines using GitLab CI, GitHub Actions, and Jenkins',
  'Orchestrate containerized applications with Kubernetes (EKS, GKE)',
  'Architect microservices and distributed systems using NestJS, FastAPI, and Go',
  'Develop full-stack applications with Vue.js, React, Flutter, and Node.js',
  'Lead development teams as Scrum Master and establish engineering best practices',
  'Provide technical consulting, training, and digital transformation strategy',
]

const experience = [
  {
    period: 'Aug 2023 - Aug 2025',
    role: 'Backend DevOps Engineer',
    company: 'Everest Consulting, Abidjan'
  },
  {
    period: 'Jun 2023 - Present',
    role: 'Part-time DevOps Instructor',
    company: 'Primus Learning, USA'
  },
  {
    period: 'Jan 2023 - July 2023',
    role: 'DevOps Engineer & R&D Manager',
    company: 'AFRIQASOFT, Abidjan'
  },
  {
    period: 'June 2022 - August 2022',
    role: 'Development Team Lead',
    company: "L'Agence Digitale, Douala"
  },
  {
    period: 'July 2020 - December 2022',
    role: 'DevOps Engineer',
    company: 'GEOSPACE AFRICA LTD, Douala'
  },
  {
    period: 'February 2021 - March 2022',
    role: 'IT Specialist | DevOps Engineer',
    company: 'SAAMEA SARL, Douala'
  },
  {
    period: 'November 2019 - December 2021',
    role: 'Junior DevOps Engineer',
    company: 'GOHZE, Douala'
  }
]
</script>

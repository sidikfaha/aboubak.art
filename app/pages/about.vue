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
              <div class="text-2xl font-bold text-accent">150+</div>
              <div class="text-xs text-text-muted">{{ $t('about.stats_projects') }}</div>
            </div>
            <div class="text-center p-4 glass rounded-xl">
              <div class="text-2xl font-bold text-accent">7+</div>
              <div class="text-xs text-text-muted">{{ $t('about.stats_years') }}</div>
            </div>
            <div class="text-center p-4 glass rounded-xl">
              <div class="text-2xl font-bold text-accent">50+</div>
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
                scalable solutions.
              </p>
              <p>
                My journey began with a fascination for how things work under the hood, which led me 
                to specialize in cloud infrastructure, automation, and modern software architecture. 
                Today, I help businesses of all sizes—from innovative startups to established enterprises—
                leverage technology to achieve their goals.
              </p>
              <p>
                With an RCCM-registered business in Abidjan, I offer professional freelance services 
                both locally and internationally, delivering enterprise-grade solutions with a personal touch.
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
  'Design and implement scalable cloud infrastructure on AWS, Azure, and GCP',
  'Build and optimize CI/CD pipelines for faster, more reliable deployments',
  'Architect microservices and distributed systems for enterprise applications',
  'Integrate AI/ML solutions into existing business workflows',
  'Provide technical consulting and digital transformation strategy',
  'Lead development teams and establish engineering best practices',
]

const experience = [
  {
    period: '2022 - Present',
    role: 'Senior DevOps Engineer & Architect',
    company: 'Freelance / Consultant'
  },
  {
    period: '2020 - 2022',
    role: 'Cloud Architect',
    company: 'Tech Solutions Company'
  },
  {
    period: '2018 - 2020',
    role: 'Full Stack Developer',
    company: 'Digital Agency'
  },
  {
    period: '2017 - 2018',
    role: 'Junior Developer',
    company: 'Startup'
  }
]
</script>

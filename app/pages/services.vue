<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Header -->
      <div class="max-w-4xl mb-20">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            {{ $t('services.subtitle') }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {{ $t('services.title') }}
        </h1>
        <p class="text-text-secondary text-lg leading-relaxed">
          {{ $t('services.description') }}
        </p>
      </div>
      
      <!-- Services grid -->
      <div class="grid md:grid-cols-2 gap-6 mb-20">
        <div 
          v-for="(service, i) in services" 
          :key="i"
          class="group relative p-8 rounded-2xl glass glass-hover transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Icon -->
          <div class="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
            <Icon :name="service.icon" class="w-8 h-8 text-accent" />
          </div>
          
          <!-- Content -->
          <h2 class="text-2xl font-bold mb-4">{{ $t(service.title) }}</h2>
          <p class="text-text-secondary leading-relaxed mb-6">{{ $t(service.desc) }}</p>
          
          <!-- Features -->
          <ul class="space-y-2 mb-6">
            <li v-for="(feature, fi) in service.features" :key="fi" class="flex items-center gap-2 text-sm text-text-secondary">
              <Icon name="lucide:check-circle" class="w-4 h-4 text-accent flex-shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>
          
          <!-- Link -->
          <NuxtLink 
            :to="localePath('/contact')"
            class="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
          >
            <span class="font-medium">Discuss your project</span>
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
      
      <!-- Process section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-center mb-12">How I Work</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="(step, i) in process" :key="i" class="relative text-center">
            <!-- Number -->
            <div class="w-16 h-16 mx-auto rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
              <span class="text-2xl font-bold text-accent">0{{ i + 1 }}</span>
            </div>
            <!-- Connector line -->
            <div v-if="i < 3" class="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/50 to-transparent"></div>
            <!-- Content -->
            <h3 class="font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-sm text-text-secondary">{{ step.desc }}</p>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-4">Ready to start your project?</h2>
        <p class="text-text-secondary mb-8">Let's discuss how I can help you achieve your goals.</p>
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          <span>Schedule a Consultation</span>
          <Icon name="lucide:calendar" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: `${t('nav.services')} | Aboubakar Sidik Faha`,
})

const services = [
  {
    icon: 'lucide:code-2',
    title: 'services.items.web_dev.title',
    desc: 'services.items.web_dev.desc',
    features: [
      'Full-stack web application development',
      'API design and development',
      'Database architecture',
      'Frontend with modern frameworks'
    ]
  },
  {
    icon: 'lucide:cloud',
    title: 'services.items.cloud.title',
    desc: 'services.items.cloud.desc',
    features: [
      'Multi-cloud strategy (AWS, Azure, GCP)',
      'Infrastructure as Code (Terraform)',
      'Serverless architecture',
      'Cost optimization'
    ]
  },
  {
    icon: 'lucide:brain',
    title: 'services.items.ai.title',
    desc: 'services.items.ai.desc',
    features: [
      'Machine Learning model integration',
      'Natural Language Processing',
      'Predictive analytics',
      'AI-powered automation'
    ]
  },
  {
    icon: 'lucide:git-branch',
    title: 'services.items.devops.title',
    desc: 'services.items.devops.desc',
    features: [
      'CI/CD pipeline implementation',
      'Containerization (Docker, K8s)',
      'Monitoring & observability',
      'Security best practices'
    ]
  }
]

const process = [
  {
    title: 'Discovery',
    desc: 'Understanding your needs, goals, and constraints through in-depth consultation.'
  },
  {
    title: 'Strategy',
    desc: 'Designing a tailored solution architecture that aligns with your objectives.'
  },
  {
    title: 'Implementation',
    desc: 'Building your solution with regular updates and iterative feedback.'
  },
  {
    title: 'Support',
    desc: 'Ongoing maintenance, optimization, and knowledge transfer.'
  }
]
</script>

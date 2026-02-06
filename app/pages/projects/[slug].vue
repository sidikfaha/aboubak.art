<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Back button - Pill -->
      <NuxtLink 
        :to="localePath('/projects')"
        class="inline-flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-white hover:bg-slate-800/50 rounded-full transition-all mb-8 border border-transparent hover:border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
        aria-label="Back to all projects"
      >
        <Icon name="lucide:arrow-left" class="w-4 h-4" aria-hidden="true" />
        <span>{{ $t('projects.detail.back') }}</span>
      </NuxtLink>
      
      <!-- Project content -->
      <article v-if="project" class="max-w-4xl mx-auto">
        <!-- Header -->
        <header class="mb-8">
          <span class="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 mb-4">
            {{ project.category }}
          </span>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ project.title }}</h1>
          <p class="text-text-secondary text-lg">{{ project.description }}</p>
        </header>
        
        <!-- Hero image -->
        <div class="aspect-video rounded-2xl overflow-hidden mb-12">
          <img 
            :src="project.image" 
            :alt="`Screenshot of ${project.title} project`"
            class="w-full h-full object-cover"
            loading="eager"
            width="1200"
            height="675"
          />
        </div>
        
        <!-- Project details -->
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="glass rounded-xl p-6">
            <div class="text-text-muted text-sm mb-2">{{ $t('projects.detail.client') }}</div>
            <div class="font-medium">{{ project.client }}</div>
          </div>
          <div class="glass rounded-xl p-6">
            <div class="text-text-muted text-sm mb-2">{{ $t('projects.detail.year') }}</div>
            <div class="font-medium">{{ project.year }}</div>
          </div>
          <div class="glass rounded-xl p-6">
            <div class="text-text-muted text-sm mb-2">{{ $t('projects.detail.duration') }}</div>
            <div class="font-medium">{{ project.duration }}</div>
          </div>
        </div>
        
        <!-- Tech stack -->
        <section class="mb-12" aria-labelledby="tech-heading">
          <h2 id="tech-heading" class="text-xl font-bold mb-4">{{ $t('projects.detail.tech_title') }}</h2>
          <!-- Tech stack - Pills -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="px-4 py-2 bg-slate-800/50 text-text-secondary rounded-full text-sm border border-slate-700/50"
            >
              {{ tech }}
            </span>
          </div>
        </section>
        
        <!-- Full description -->
        <section class="prose prose-invert prose-lg max-w-none" aria-labelledby="description-heading">
          <h2 id="description-heading" class="sr-only">{{ $t('projects.detail.description_title') }}</h2>
          <div v-html="project.fullDescription"></div>
        </section>
        
        <!-- Results/Impact -->
        <section v-if="project.results" class="mt-12 p-8 glass rounded-2xl" aria-labelledby="results-heading">
          <h2 id="results-heading" class="text-xl font-bold mb-4">{{ $t('projects.detail.results_title') }}</h2>
          <ul class="space-y-3">
            <li v-for="(result, i) in project.results" :key="i" class="flex items-start gap-3">
              <Icon name="lucide:trending-up" class="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <span>{{ result }}</span>
            </li>
          </ul>
        </section>
      </article>
      
      <!-- Not found -->
      <div v-else class="text-center py-20">
        <Icon name="lucide:file-x" class="w-16 h-16 text-text-muted mx-auto mb-4" aria-hidden="true" />
        <h2 class="text-2xl font-bold mb-2">{{ $t('projects.detail.not_found') }}</h2>
        <p class="text-text-secondary mb-6">{{ $t('projects.detail.not_found_desc') }}</p>
        <NuxtLink 
          :to="localePath('/projects')"
          class="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
        >
          <span>{{ $t('projects.view_all') }}</span>
        </NuxtLink>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const projects = {
  'cloud-infrastructure': {
    title: 'Enterprise Cloud Infrastructure',
    description: 'Designed and implemented a scalable cloud infrastructure for a fintech company, handling millions of transactions daily with 99.99% uptime.',
    category: 'Cloud Architecture',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop',
    client: 'Fintech Startup',
    year: '2024',
    duration: '4 months',
    tech: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana'],
    fullDescription: `
      <p>A leading fintech company approached me to redesign their entire cloud infrastructure to handle rapid growth and ensure compliance with financial regulations.</p>
      <h3>The Challenge</h3>
      <p>The existing infrastructure was struggling with:</p>
      <ul>
        <li>Scaling issues during peak transaction periods</li>
        <li>Security vulnerabilities</li>
        <li>High operational costs</li>
        <li>Complex deployment processes</li>
      </ul>
      <h3>The Solution</h3>
      <p>I designed a modern, microservices-based architecture using AWS ECS Fargate for container orchestration, Terraform for infrastructure as code, and implemented comprehensive monitoring with Prometheus and Grafana.</p>
    `,
    results: [
      'Achieved 99.99% uptime with multi-AZ deployment',
      'Reduced infrastructure costs by 35%',
      'Decreased deployment time from hours to minutes',
      'Passed all security audits with zero critical findings'
    ]
  },
  'ai-platform': {
    title: 'AI-Powered Analytics Platform',
    description: 'Built a comprehensive analytics platform leveraging machine learning to provide actionable insights for e-commerce businesses.',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop',
    client: 'E-commerce Company',
    year: '2024',
    duration: '6 months',
    tech: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    fullDescription: `
      <p>Developed an end-to-end analytics platform that uses machine learning to predict customer behavior and optimize inventory management.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Real-time sales forecasting</li>
        <li>Customer segmentation and targeting</li>
        <li>Inventory optimization recommendations</li>
        <li>Interactive dashboards and reports</li>
      </ul>
    `,
    results: [
      'Improved sales forecasting accuracy by 85%',
      'Reduced inventory holding costs by 25%',
      'Increased customer retention by 20%'
    ]
  },
  'devops-automation': {
    title: 'DevOps Automation Suite',
    description: 'Developed a complete CI/CD automation suite reducing deployment time by 80% and improving team productivity significantly.',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=675&fit=crop',
    client: 'SaaS Company',
    year: '2023',
    duration: '3 months',
    tech: ['GitHub Actions', 'Jenkins', 'Ansible', 'Prometheus', 'ELK Stack'],
    fullDescription: `
      <p>Implemented a comprehensive DevOps transformation for a growing SaaS company struggling with manual deployment processes.</p>
    `,
    results: [
      'Deployment frequency increased from weekly to multiple times per day',
      '80% reduction in deployment-related incidents',
      'Developer productivity improved by 40%'
    ]
  },
  'microservices-platform': {
    title: 'Microservices Platform',
    description: 'Architected a microservices-based platform enabling rapid feature deployment and improved system resilience for a logistics company.',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop',
    client: 'Logistics Company',
    year: '2023',
    duration: '8 months',
    tech: ['Node.js', 'gRPC', 'Redis', 'PostgreSQL', 'Kubernetes', 'Istio'],
    fullDescription: `
      <p>Led the architectural transformation from a monolithic application to a modern microservices architecture.</p>
    `,
    results: [
      'Feature deployment time reduced from weeks to days',
      'System availability improved to 99.95%',
      'Successfully handled 10x traffic increase'
    ]
  },
  'ecommerce-redesign': {
    title: 'E-commerce Platform Redesign',
    description: 'Complete overhaul of an e-commerce platform resulting in 40% increase in conversion rates and improved user experience.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop',
    client: 'Retail Brand',
    year: '2023',
    duration: '5 months',
    tech: ['Nuxt.js', 'Stripe', 'PostgreSQL', 'Redis', 'TailwindCSS'],
    fullDescription: `<p>Redesigned and rebuilt a complete e-commerce platform with modern technologies and UX best practices.</p>`,
    results: [
      '40% increase in conversion rates',
      '60% improvement in page load times',
      '50% reduction in cart abandonment'
    ]
  },
  'nlp-chatbot': {
    title: 'Enterprise NLP Chatbot',
    description: 'Developed an intelligent customer support chatbot using NLP that reduced support ticket volume by 60%.',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=675&fit=crop',
    client: 'Telecommunications',
    year: '2024',
    duration: '4 months',
    tech: ['Python', 'OpenAI', 'FastAPI', 'MongoDB', 'Docker'],
    fullDescription: `<p>Built an enterprise-grade chatbot capable of handling complex customer inquiries.</p>`,
    results: [
      '60% reduction in support ticket volume',
      '85% customer satisfaction rate',
      'Available 24/7 with instant responses'
    ]
  }
}

const project = computed(() => projects[route.params.slug])

// SEO for project detail page
usePageSeo({
  title: project.value ? `${project.value.title} | Case Study` : 'Project Not Found',
  description: project.value ? project.value.description : 'The requested project could not be found.',
  type: 'article',
  image: project.value ? project.value.image : undefined,
  imageAlt: project.value ? project.value.title : undefined,
  publishedTime: project.value ? `${project.value.year}-01-01T00:00:00Z` : undefined,
  author: 'Aboubakar Sidik Faha',
  tags: project.value ? project.value.tech : [],
  locale: locale.value === 'fr' ? 'fr_FR' : 'en_US',
})

// Breadcrumb schema
useBreadcrumbSchema([
  { name: t('seo.breadcrumb_home'), url: '/' },
  { name: t('nav.projects'), url: '/projects' },
  { name: project.value ? project.value.title : t('nav.projects'), url: project.value ? `/projects/${route.params.slug}` : undefined },
])
</script>

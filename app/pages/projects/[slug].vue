<template>
  <div class="pt-32 pb-20">
    <div class="w-full px-6 lg:px-12">
      <!-- Back button -->
      <NuxtLink 
        :to="localePath('/projects')"
        class="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8"
      >
        <Icon name="lucide:arrow-left" class="w-4 h-4" />
        <span>Back to Projects</span>
      </NuxtLink>
      
      <!-- Project content -->
      <article v-if="project" class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
          <span class="inline-block px-3 py-1 glass rounded-full text-sm font-mono text-accent mb-4">
            {{ project.category }}
          </span>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ project.title }}</h1>
          <p class="text-text-secondary text-lg">{{ project.description }}</p>
        </div>
        
        <!-- Hero image -->
        <div class="aspect-video rounded-2xl overflow-hidden mb-12">
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Project details -->
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="glass rounded-xl p-6">
            <div class="text-text-muted text-sm mb-2">Client</div>
            <div class="font-medium">{{ project.client }}</div>
          </div>
          <div class="glass rounded-xl p-6">
            <div class="text-text-muted text-sm mb-2">Year</div>
            <div class="font-medium">{{ project.year }}</div>
          </div>
          <div class="glass rounded-xl p-6">
            <div class="text-text-muted text-sm mb-2">Duration</div>
            <div class="font-medium">{{ project.duration }}</div>
          </div>
        </div>
        
        <!-- Tech stack -->
        <div class="mb-12">
          <h2 class="text-xl font-bold mb-4">Technologies Used</h2>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="px-4 py-2 glass rounded-lg text-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        
        <!-- Full description -->
        <div class="prose prose-invert prose-lg max-w-none">
          <div v-html="project.fullDescription"></div>
        </div>
        
        <!-- Results/Impact -->
        <div v-if="project.results" class="mt-12 p-8 glass rounded-2xl">
          <h2 class="text-xl font-bold mb-4">Results & Impact</h2>
          <ul class="space-y-3">
            <li v-for="(result, i) in project.results" :key="i" class="flex items-start gap-3">
              <Icon name="lucide:trending-up" class="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>{{ result }}</span>
            </li>
          </ul>
        </div>
      </article>
      
      <!-- Not found -->
      <div v-else class="text-center py-20">
        <Icon name="lucide:file-x" class="w-16 h-16 text-text-muted mx-auto mb-4" />
        <h2 class="text-2xl font-bold mb-2">Project Not Found</h2>
        <p class="text-text-secondary mb-6">The project you're looking for doesn't exist.</p>
        <NuxtLink 
          :to="localePath('/projects')"
          class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg"
        >
          <span>View All Projects</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()
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

useHead({
  title: project.value ? `${project.value.title} | Projects` : 'Project Not Found',
})
</script>

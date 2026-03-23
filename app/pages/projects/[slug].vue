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
      
      <!-- Project content -->
      <article v-if="project" class="max-w-5xl mx-auto">
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
            <span>Visit Live Site</span>
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
              <span>Status</span>
            </div>
            <div class="font-semibold text-emerald-400 flex items-center justify-center md:justify-start gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live
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
              <div class="prose prose-invert prose-lg max-w-none text-text-secondary leading-relaxed" v-html="project.fullDescription"></div>
            </section>
            
            <!-- Results/Impact -->
            <section v-if="project.results" class="p-8 rounded-2xl bg-linear-to-br from-accent/5 to-transparent border border-accent/10" aria-labelledby="results-heading">
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
            
            <!-- Screenshots Gallery -->
            <section v-if="project.screenshots" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" class="text-2xl font-bold mb-6 flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon name="lucide:image" class="w-4 h-4 text-accent" />
                </div>
                Project Gallery
              </h2>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(screenshot, i) in project.screenshots" :key="i" class="aspect-video rounded-xl overflow-hidden group cursor-pointer">
                  <img 
                    :src="screenshot" 
                    :alt="`${project.title} screenshot ${i + 1}`"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
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
                Quick Links
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
                    <div class="font-medium">Live Website</div>
                    <div class="text-xs text-text-muted">Visit the project</div>
                  </div>
                </div>
                <Icon name="lucide:arrow-up-right" class="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
              </a>
            </section>
            
            <!-- Share Project -->
            <section class="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30">
              <h2 class="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="lucide:share-2" class="w-5 h-5 text-accent" />
                Share Project
              </h2>
              <div class="flex gap-2">
                <button class="flex-1 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors flex items-center justify-center">
                  <Icon name="lucide:twitter" class="w-5 h-5" />
                </button>
                <button class="flex-1 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors flex items-center justify-center">
                  <Icon name="lucide:linkedin" class="w-5 h-5" />
                </button>
                <button class="flex-1 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors flex items-center justify-center">
                  <Icon name="lucide:copy" class="w-5 h-5" />
                </button>
              </div>
            </section>
          </aside>
        </div>
        
        <!-- Project Navigation -->
        <nav class="mt-20 pt-12 border-t border-slate-800">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Previous Project -->
            <NuxtLink 
              v-if="prevProject"
              :to="localePath(`/projects/${prevProject.slug}`)"
              class="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/30 transition-all"
            >
              <div class="flex items-center gap-2 text-text-muted text-sm mb-3">
                <Icon name="lucide:arrow-left" class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Previous Project</span>
              </div>
              <h3 class="text-lg font-semibold group-hover:text-accent transition-colors">{{ prevProject.title }}</h3>
              <p class="text-text-muted text-sm mt-1 line-clamp-1">{{ prevProject.category }}</p>
            </NuxtLink>
            <div v-else class="hidden md:block"></div>
            
            <!-- Next Project -->
            <NuxtLink 
              v-if="nextProject"
              :to="localePath(`/projects/${nextProject.slug}`)"
              class="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/30 transition-all text-right"
            >
              <div class="flex items-center justify-end gap-2 text-text-muted text-sm mb-3">
                <span>Next Project</span>
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
            More Projects
          </h2>
          <div class="grid md:grid-cols-3 gap-6">
            <NuxtLink 
              v-for="relProject in relatedProjects" 
              :key="relProject.slug"
              :to="localePath(`/projects/${relProject.slug}`)"
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
      
      <!-- Not found -->
      <div v-else class="text-center py-20">
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
    </Container>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const projects = {
  'kika': {
    title: 'KIKA',
    description: 'A pan-African mobile application for managing modern tontines (savings circles) with mobile money integration, automated reminders, and real-time tracking.',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=675&fit=crop',
    url: 'https://kika.africa',
    client: 'Bakar Entreprises SARL',
    year: '2024',
    duration: '12 months',
    role: 'Full Stack Developer',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Mobile Money APIs', 'AWS', 'Docker'],
    fullDescription: `
      <p>KIKA is a mobile application designed to modernize the traditional African tontine system. It enables users to create, manage, and participate in savings circles with complete transparency and security.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Digital tontine creation with customizable contribution amounts and frequencies</li>
        <li>Mobile Money integration (Orange, MTN, Wave) for seamless payments</li>
        <li>Automated reminders and payment tracking</li>
        <li>Role-based access control for tontine administrators</li>
        <li>Real-time notifications and activity feeds</li>
        <li>Secure fund distribution based on defined rotation order</li>
      </ul>
      <h3>Technical Implementation</h3>
      <p>Built a cross-platform mobile application using React Native with a robust Node.js backend. Integrated multiple mobile money APIs for pan-African coverage. Implemented real-time updates using WebSockets and ensured data security with end-to-end encryption.</p>
    `,
    results: [
      'Successfully launched in Cameroon and Côte d\'Ivoire',
      'Partnered with BGFI Bank for financial inclusion',
      'Processed thousands of secure transactions daily',
      'Achieved 99.9% uptime with AWS infrastructure'
    ]
  },
  'fiddeal': {
    title: 'Fiddeal',
    description: 'Digital loyalty platform connecting merchants and customers through QR code-based rewards. Features Fiddeal Pro for business owners with CRM automation.',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=675&fit=crop',
    url: 'https://fiddeal.app',
    client: 'Fiddeal (Owner)',
    year: '2023-2024',
    duration: 'Ongoing',
    role: 'Founder & Full Stack Developer',
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'QR Code API', 'Firebase', 'Docker'],
    fullDescription: `
      <p>Fiddeal reinvents customer loyalty for local businesses in Africa. The platform replaces traditional paper punch cards with a seamless digital experience accessible via smartphone.</p>
      <h3>For Consumers</h3>
      <ul>
        <li>Unique QR Code identifier for instant recognition</li>
        <li>Digital wallet for all loyalty cards in one place</li>
        <li>Real-time points tracking and reward notifications</li>
        <li>Quick 30-second registration with phone number</li>
      </ul>
      <h3>For Merchants (Fiddeal Pro)</h3>
      <ul>
        <li>Ultra-fast QR code scanner for customer identification</li>
        <li>Automatic CRM with customer segmentation</li>
        <li>Automated reward calculations and alerts</li>
        <li>"Ghost accounts" to save points for customers without the app</li>
      </ul>
      <h3>Technical Highlights</h3>
      <p>Architected as a scalable PWA with offline capabilities. Implemented real-time synchronization using Firebase. Built a sophisticated analytics engine for merchant insights.</p>
    `,
    results: [
      '500+ partner merchants onboarded',
      'Designed for restaurants, barbershops, beauty institutes',
      'Significant improvement in customer retention rates',
      'Eliminated paper waste from traditional loyalty cards'
    ]
  },
  'copaa': {
    title: 'COPAA',
    description: 'Pan-African social network built to connect people across Africa. A sovereign, solidarity-based microblogging platform with exclusive honor-code access.',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=675&fit=crop',
    url: 'https://copaa.africa',
    client: 'COPAA Project',
    year: '2024',
    duration: 'Ongoing',
    role: 'Full Stack Developer',
    tech: ['Nuxt.js', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS'],
    fullDescription: `
      <p>COPAA (Connecting People Across Africa) is the first pan-African microblogging platform built on principles of honor, solidarity, and digital sovereignty. Access is exclusively granted through an honor code system obtained by purchasing the founding book.</p>
      <h3>Core Principles</h3>
      <ul>
        <li><strong>Digital Sovereignty:</strong> African-owned and operated platform</li>
        <li><strong>Solidarity Model:</strong> Community-funded through book purchases</li>
        <li><strong>Honor Code:</strong> Exclusive access ensures quality community engagement</li>
        <li><strong>Pan-African Vision:</strong> Connecting Africans across the continent and diaspora</li>
      </ul>
      <h3>Community Features</h3>
      <ul>
        <li>Interest-based communities (Culture, Tech, Entrepreneurship, Music, etc.)</li>
        <li>Real-time microblogging with rich media support</li>
        <li>Verified profiles and moderated discussions</li>
        <li>Events and networking opportunities</li>
      </ul>
      <h3>Technical Implementation</h3>
      <p>Built with Nuxt.js for SSR and optimal performance across Africa's varying network conditions. Implemented real-time features using WebSockets. Scalable architecture supporting thousands of concurrent users.</p>
    `,
    results: [
      'First African microblogging platform with independent funding model',
      'Growing community of engaged readers and contributors',
      '100% digital sovereignty - no foreign platform dependency',
      'Fostering pan-African dialogue and collaboration'
    ]
  },
  'schoolgood': {
    title: 'SchoolGood',
    description: 'English learning platform offering intensive coaching with live courses, personalized sessions, and community access for French-speaking students.',
    category: 'EdTech',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=675&fit=crop',
    url: 'https://schoolgood.fr',
    client: 'SchoolGood',
    year: '2023',
    duration: '6 months',
    role: 'Frontend Developer',
    tech: ['React', 'Node.js', 'WebRTC', 'Stripe', 'PostgreSQL', 'AWS'],
    fullDescription: `
      <p>SchoolGood is an intensive English learning platform designed specifically for French-speaking students in Africa. It combines live interactive courses with personalized coaching to deliver rapid language proficiency improvements.</p>
      <h3>Learning Experience</h3>
      <ul>
        <li>10 live 1-hour courses per week with native English teachers</li>
        <li>Weekly private coaching sessions for personalized feedback</li>
        <li>Unlimited access to premium video, text, and quiz content</li>
        <li>Weekly oral and written challenges with personalized corrections</li>
        <li>Private community for peer support and daily practice</li>
      </ul>
      <h3>Platform Features</h3>
      <ul>
        <li>Real-time video conferencing for live classes</li>
        <li>Progressive difficulty levels with certification at each stage</li>
        <li>Interactive quizzes and assessments</li>
        <li>Mobile-responsive design for learning on any device</li>
      </ul>
      <h3>My Role</h3>
      <p>Led frontend development, implementing the React-based learning interface with real-time features. Integrated WebRTC for live video classes and Stripe for subscription payments. Optimized performance for users with varying internet speeds.</p>
    `,
    results: [
      'Significant student progress within first month of enrollment',
      'High engagement rates with live session attendance',
      'Seamless video streaming across various network conditions',
      'Scalable subscription management system'
    ]
  },
  'jackwestin': {
    title: 'Jack Westin',
    description: 'MCAT exam preparation platform providing daily practice passages, question banks, and personalized learning resources for medical school aspirants.',
    category: 'EdTech',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=675&fit=crop',
    url: 'https://jackwestin.com',
    client: 'Jack Westin',
    year: '2023',
    duration: '8 months',
    role: 'Frontend Developer',
    tech: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
    fullDescription: `
      <p>Jack Westin is a comprehensive MCAT preparation platform trusted by thousands of medical school aspirants. The platform specializes in CARS (Critical Analysis and Reasoning Skills) and science sections with original practice passages.</p>
      <h3>Platform Features</h3>
      <ul>
        <li>Daily free MCAT passages delivered to user inboxes</li>
        <li>Comprehensive Question Bank with topic-based filtering</li>
        <li>Personalized study plans and progress tracking</li>
        <li>Flashcards for quick review sessions</li>
        <li>Detailed analytics on performance by topic area</li>
      </ul>
      <h3>Learning Methodology</h3>
      <p>The platform emphasizes critical thinking and fundamental science knowledge - the perfect blend required to excel on the MCAT. All materials are designed to mirror the actual exam format and difficulty level.</p>
      <h3>My Role</h3>
      <p>Developed frontend components using Vue.js, implemented interactive question interfaces with real-time feedback. Built analytics dashboards for student progress tracking. Optimized platform performance for high-traffic periods during exam seasons.</p>
    `,
    results: [
      'Served thousands of MCAT students worldwide',
      'Significant improvement in student CARS scores',
      'High user retention with daily engagement features',
      'Scalable infrastructure handling exam season traffic spikes'
    ]
  },
  'drbalcony': {
    title: 'DrBalcony',
    description: 'California balcony inspection platform for SB326 and SB721 compliance. AI-powered inspection management system for HOAs and property managers.',
    category: 'PropTech',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=675&fit=crop',
    url: 'https://drbalcony.com',
    client: 'DrBalcony',
    year: '2023-2024',
    duration: '10 months',
    role: 'Frontend Developer',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'AI/ML', 'Docker'],
    fullDescription: `
      <p>DrBalcony is a comprehensive inspection services platform helping California property owners comply with SB326 and SB721 balcony safety laws. The platform leverages AI technology to streamline inspections and deliver faster, more accurate results.</p>
      <h3>Compliance Services</h3>
      <ul>
        <li>SB326 Inspections for condominiums and HOAs</li>
        <li>SB721 Inspections for apartment buildings</li>
        <li>Section 604 Inspections for San Francisco properties</li>
        <li>Multiple property portfolio management</li>
        <li>Engineered repair design services</li>
      </ul>
      <h3>Platform Features</h3>
      <ul>
        <li>Free instant cost calculator for property estimates</li>
        <li>Online project tracking from inspection to completion</li>
        <li>AI-enhanced inspection accuracy</li>
        <li>Quick report turnaround with detailed findings</li>
        <li>Statewide coverage across all California cities</li>
      </ul>
      <h3>My Role</h3>
      <p>Led frontend development of the inspection management dashboard. Implemented React components for project tracking, report visualization, and client communication. Integrated AI-powered image analysis features for preliminary damage assessment.</p>
    `,
    results: [
      '5,000+ inspections completed across California',
      '50+ cities served from Los Angeles to San Francisco',
      'Significant reduction in inspection scheduling time',
      'AI-powered analysis improving inspection accuracy'
    ]
  },
  'zawaj-sounnah': {
    title: 'Zawaj Sounnah',
    description: 'Islamic matrimonial platform helping Muslims find spouses in accordance with Quran and Sunnah. 24/7 moderation and mahram-protected communication.',
    category: 'Social Platform',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=675&fit=crop',
    url: 'https://zawaj-sounnah.com',
    client: 'Zawaj Sounnah',
    year: '2021-2024',
    duration: 'Ongoing',
    role: 'DevOps Engineer',
    tech: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring', 'PostgreSQL'],
    fullDescription: `
      <p>Zawaj Sounnah is the first 100% halal matrimonial platform for French-speaking Muslims. Launched in 2021, it has helped nearly 1,400 marriages while maintaining strict adherence to Islamic principles with 24/7 moderation.</p>
      <h3>Platform Values</h3>
      <ul>
        <li><strong>Islamic Compliance:</strong> All interactions follow Quran and Sunnah teachings</li>
        <li><strong>Mahram Protection:</strong> No direct contact without guardian involvement</li>
        <li><strong>24/7 Moderation:</strong> Team of 10+ moderators reviewing all messages</li>
        <li><strong>Privacy First:</strong> Strict profile confidentiality and data protection</li>
      </ul>
      <h3>How It Works</h3>
      <ul>
        <li>Detailed application with trust contract signing</li>
        <li>Profile review by moderation team for compliance</li>
        <li>Private profile browsing with filter options</li>
        <li>Supervised messaging (35 messages/day limit)</li>
        <li>Mahram contact exchange for external meetings</li>
      </ul>
      <h3>My Role - DevOps</h3>
      <p>Responsible for the entire infrastructure and deployment pipeline. Implemented containerized architecture with Docker and Kubernetes. Set up automated CI/CD pipelines for seamless deployments. Configured comprehensive monitoring and alerting systems. Ensured 99.9% uptime for a platform serving thousands of daily active users.</p>
    `,
    results: [
      '2,000+ registered members seeking marriage',
      'Nearly 1,400 successful marriages facilitated',
      '24/7 platform availability with robust monitoring',
      'Zero data breaches with enterprise-grade security',
      'Automated deployments reducing release time by 80%'
    ]
  }
}

const projectSlugs = Object.keys(projects)
const currentIndex = computed(() => projectSlugs.indexOf(route.params.slug))
const project = computed(() => projects[route.params.slug])

// Navigation
const prevProject = computed(() => {
  const prevIndex = currentIndex.value - 1
  if (prevIndex >= 0) {
    const slug = projectSlugs[prevIndex]
    return { slug, ...projects[slug] }
  }
  return null
})

const nextProject = computed(() => {
  const nextIndex = currentIndex.value + 1
  if (nextIndex < projectSlugs.length) {
    const slug = projectSlugs[nextIndex]
    return { slug, ...projects[slug] }
  }
  return null
})

// Related projects (same category, excluding current)
const relatedProjects = computed(() => {
  if (!project.value) return []
  return projectSlugs
    .filter(slug => slug !== route.params.slug && projects[slug].category === project.value.category)
    .slice(0, 3)
    .map(slug => ({ slug, ...projects[slug] }))
})

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

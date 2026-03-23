<template>
  <section id="about" ref="sectionRef" class="py-24 lg:py-32">
    <Container>
      <!-- Section header -->
      <div ref="headerRef" class="max-w-3xl mb-16 opacity-0">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            {{ $t('about.subtitle') }}
          </span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {{ $t('about.title') }}
        </h2>
        <p class="text-text-secondary text-lg leading-relaxed">
          {{ $t('about.description') }}
        </p>
      </div>
      
      <!-- Cards grid -->
      <div ref="cardsRef" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(card, i) in cards" 
          :key="i"
          class="group relative p-6 rounded-2xl glass glass-hover transition-all duration-500 hover:-translate-y-2 opacity-0"
          :class="{ 'lg:translate-y-8': i === 1 || i === 4 }"
          :style="{ animationDelay: `${i * 0.1}s` }"
          :data-card-index="i"
        >
          <!-- Icon - Pill -->
          <div class="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
            <Icon :name="card.icon" class="w-5 h-5 text-accent" />
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-semibold mb-2">{{ $t(card.title) }}</h3>
          <p class="text-text-secondary text-sm leading-relaxed">{{ $t(card.desc) }}</p>
          
          <!-- Hover indicator -->
          <div class="absolute top-6 right-6 w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Icon name="lucide:plus" class="w-4 h-4 text-accent transition-transform group-hover:rotate-90" />
          </div>
          
          <!-- Corner accent -->
          <div class="absolute bottom-0 right-0 w-24 h-24 bg-accent/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
      
      <!-- Skills row -->
      <div ref="skillsRef" class="mt-24 opacity-0">
        <div class="text-center mb-10">
          <h3 class="text-text-muted text-sm font-mono uppercase tracking-widest mb-2">
            {{ $t('about.tech_title') }}
          </h3>
          <div class="w-16 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent mx-auto"></div>
        </div>
        
        <!-- Skills Grid -->
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          <div 
            v-for="(skill, i) in skills" 
            :key="i"
            class="skill-item group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-accent/40 hover:bg-slate-800/60 transition-all duration-500 cursor-default"
            :class="{ 'sm:col-span-2 md:col-span-1': i === 0 || i === 6 }"
            :style="{ animationDelay: `${i * 50}ms` }"
          >
            <!-- Glow effect on hover -->
            <div class="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <!-- Icon container -->
            <div class="relative mb-3 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
              <div class="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-accent/10 flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/20">
                <Icon 
                  :name="skill.icon"
                  :size="28"
                  class="text-text-secondary group-hover:text-accent transition-all duration-500" 
                />
              </div>
            </div>
            
            <!-- Skill name -->
            <span class="relative text-xs font-medium text-text-muted group-hover:text-white transition-colors duration-300 text-center">{{ skill.name }}</span>
            
            <!-- Corner accent -->
            <div class="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent/60 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref(null)
const headerRef = ref(null)
const cardsRef = ref(null)
const skillsRef = ref(null)

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
  
  // Cards stagger animation
  const cards = cardsRef.value?.querySelectorAll('[data-card-index]')
  if (cards) {
    ScrollTrigger.create({
      trigger: cardsRef.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out'
        })
      }
    })
    
    // Set initial state
    gsap.set(cards, { opacity: 0, y: 40 })
  }
  
  // Set initial header state
  gsap.set(headerRef.value, { opacity: 0, y: 30 })
  
  // Skills section animation
  const skillItems = skillsRef.value?.querySelectorAll('.skill-item')
  if (skillItems) {
    gsap.set(skillsRef.value, { opacity: 1 })
    gsap.set(skillItems, { opacity: 0, y: 20, scale: 0.9 })
    
    ScrollTrigger.create({
      trigger: skillsRef.value,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(skillItems, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.5)'
        })
      }
    })
  }
})

const cards = [
  { icon: 'lucide:lightbulb', title: 'about.cards.innovation.title', desc: 'about.cards.innovation.desc' },
  { icon: 'lucide:users', title: 'about.cards.collaboration.title', desc: 'about.cards.collaboration.desc' },
  { icon: 'lucide:code-2', title: 'about.cards.development.title', desc: 'about.cards.development.desc' },
  { icon: 'lucide:brain', title: 'about.cards.ai_ml.title', desc: 'about.cards.ai_ml.desc' },
  { icon: 'lucide:target', title: 'about.cards.strategy.title', desc: 'about.cards.strategy.desc' },
  { icon: 'lucide:award', title: 'about.cards.excellence.title', desc: 'about.cards.excellence.desc' },
]

const skills = [
  { name: 'AWS', icon: 'devicon:amazonwebservices-wordmark' },
  { name: 'Docker', icon: 'devicon:docker-wordmark' },
  { name: 'Kubernetes', icon: 'devicon:kubernetes' },
  { name: 'Terraform', icon: 'devicon:terraform' },
  { name: 'Go', icon: 'devicon:go' },
  { name: 'Node.js', icon: 'devicon:nodejs' },
  { name: 'Python', icon: 'devicon:python' },
  { name: 'React', icon: 'devicon:react' },
  { name: 'Vue.js', icon: 'devicon:vuejs' },
  { name: 'PostgreSQL', icon: 'devicon:postgresql' },
  { name: 'MongoDB', icon: 'devicon:mongodb' },
  { name: 'Redis', icon: 'devicon:redis' },
]
</script>

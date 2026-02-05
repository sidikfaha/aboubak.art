<template>
  <section ref="sectionRef" class="py-24 lg:py-32 relative overflow-hidden">
    <Container>
      <!-- Section header -->
      <div ref="headerRef" class="text-center max-w-2xl mx-auto mb-16 opacity-0">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            {{ $t('testimonials.subtitle') }}
          </span>
          <div class="w-12 h-px bg-accent"></div>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold">
          {{ $t('testimonials.title') }}
        </h2>
      </div>
      
      <!-- Testimonials carousel -->
      <div ref="carouselRef" class="relative max-w-4xl mx-auto opacity-0">
        <!-- Navigation buttons -->
        <button 
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/5 transition-all"
        >
          <Icon name="lucide:chevron-left" class="w-6 h-6" />
        </button>
        
        <button 
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/5 transition-all"
        >
          <Icon name="lucide:chevron-right" class="w-6 h-6" />
        </button>
        
        <!-- Cards container -->
        <div class="relative h-[400px] md:h-[350px]">
          <div 
            v-for="(testimonial, i) in testimonials" 
            :key="i"
            class="absolute inset-0 transition-all duration-700 ease-out"
            :class="getCardClasses(i)"
          >
            <div class="h-full p-8 lg:p-12 rounded-3xl glass flex flex-col justify-center">
              <!-- Quote icon -->
              <div class="mb-6">
                <Icon name="lucide:quote" class="w-10 h-10 text-accent/30" />
              </div>
              
              <!-- Quote text -->
              <blockquote class="text-lg lg:text-xl text-text-secondary leading-relaxed mb-8">
                "{{ testimonial.quote }}"
              </blockquote>
              
              <!-- Author -->
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span class="text-accent font-semibold">{{ testimonial.initials }}</span>
                </div>
                <div>
                  <div class="font-semibold">{{ testimonial.name }}</div>
                  <div class="text-sm text-text-muted">{{ testimonial.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Dots indicator -->
        <div class="flex justify-center gap-2 mt-8">
          <button 
            v-for="(_, i) in testimonials" 
            :key="i"
            @click="goTo(i)"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="i === activeIndex ? 'w-8 bg-accent' : 'bg-white/20 hover:bg-white/40'"
          ></button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const activeIndex = ref(0)
let autoplayInterval = null

const sectionRef = ref(null)
const headerRef = ref(null)
const carouselRef = ref(null)

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
  
  // Carousel animation
  ScrollTrigger.create({
    trigger: carouselRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(carouselRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
      })
    }
  })
  
  // Set initial states
  gsap.set(headerRef.value, { opacity: 0, y: 30 })
  gsap.set(carouselRef.value, { opacity: 0, y: 30 })
  
  // Autoplay
  autoplayInterval = setInterval(next, 6000)
})

onUnmounted(() => {
  if (autoplayInterval) clearInterval(autoplayInterval)
})

const testimonials = [
  {
    initials: 'OI',
    name: 'Osaigbovo Idada',
    role: 'Web Development',
    quote: "His ability to translate complex requirements into smooth, user-friendly interfaces was truly impressive. He has a keen eye for design, a deep understanding of frontend technologies, and a problem-solving mindset that made our collaboration seamless."
  },
  {
    initials: 'DB',
    name: 'David Ben Otto',
    role: 'AWS Cloud Engineer at KodeCloud Inc',
    quote: "I've worked with Aboubakar in a very innovative project around connected vehicles. On the technical side, Aboubakar was just a guru: we worked hours on CI-CD pipelines with GitHub Actions and integration of microservices using API."
  },
  {
    initials: 'KB',
    name: "Kwiringira Bruce Hervé",
    role: 'Cloud Engineer',
    quote: "It's rare that you come across a standout talent like Aboubakar. Incredibly multi talented, a fully fledged full stack engineer capable of coding in multiple JavaScript frameworks and a fully fledged DevOps engineer."
  },
  {
    initials: 'JN',
    name: 'Jim Carlson Ngnintedem',
    role: 'Terraform & Agile Certified',
    quote: "Curious, responsible, highly involved and naturally endowed with a critical and analytical mind, Sidik Aboubakar is a driving force who loves challenges and investing in new projects."
  },
  {
    initials: 'JH',
    name: "Jean-François Hermann N'Guessan Angora",
    role: 'Entrepreneur - Mobile Developer',
    quote: "I've known people who know their field, but Sidik, in addition to being super talented in DevOps, knows so many other areas including mobile. I love collaborating with him, he's helpful and hardworking."
  }
]

const getCardClasses = (index) => {
  const diff = index - activeIndex.value
  const total = testimonials.length
  
  // Handle wrapping
  let normalizedDiff = diff
  if (diff > total / 2) normalizedDiff = diff - total
  if (diff < -total / 2) normalizedDiff = diff + total
  
  if (normalizedDiff === 0) {
    return 'opacity-100 scale-100 z-20 translate-x-0'
  } else if (normalizedDiff === 1 || normalizedDiff === -(total - 1)) {
    return 'opacity-40 scale-90 z-10 translate-x-[60%] blur-[2px]'
  } else if (normalizedDiff === -1 || normalizedDiff === (total - 1)) {
    return 'opacity-40 scale-90 z-10 -translate-x-[60%] blur-[2px]'
  } else {
    return 'opacity-0 scale-80 z-0'
  }
}

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + testimonials.length) % testimonials.length
}

const goTo = (index) => {
  activeIndex.value = index
}
</script>

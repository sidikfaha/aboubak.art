<template>
  <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
    <!-- Animated background -->
    <div class="absolute inset-0 z-0">
      <!-- Gradient orbs -->
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse-glow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" style="animation-delay: 1s;"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-grid opacity-50"></div>
      
      <!-- Animated lines -->
      <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0" />
            <stop offset="50%" stop-color="#3b82f6" stop-opacity="1" />
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#line-gradient)" stroke-width="1" class="animate-pulse" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#line-gradient)" stroke-width="1" class="animate-pulse" style="animation-delay: 0.5s;" />
      </svg>
    </div>
    
    <Container class="relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <!-- Left: Content -->
        <div class="order-2 lg:order-1">
          <!-- Greeting -->
          <div class="flex items-center gap-3 mb-6 opacity-0 animate-fade-in" style="animation-delay: 0.2s; animation-fill-mode: forwards;">
            <div class="w-12 h-px bg-accent"></div>
            <span class="text-accent font-mono text-sm uppercase tracking-widest">
              {{ $t('hero.greeting') }}
            </span>
          </div>
          
          <!-- Name -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
            <span 
              v-for="(word, i) in nameWords" 
              :key="i"
              class="inline-block opacity-0 animate-slide-up"
              :style="{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'forwards' }"
            >
              {{ word }}{{ i < nameWords.length - 1 ? '\u00A0' : '' }}
            </span>
          </h1>
          
          <!-- Title -->
          <p 
            class="text-xl md:text-2xl text-text-secondary mb-4 opacity-0 animate-fade-in"
            style="animation-delay: 0.6s; animation-fill-mode: forwards;"
          >
            {{ $t('hero.title') }}
          </p>
          
          <!-- Location -->
          <div 
            class="flex items-center gap-2 text-text-muted mb-6 opacity-0 animate-fade-in"
            style="animation-delay: 0.7s; animation-fill-mode: forwards;"
          >
            <Icon name="lucide:map-pin" class="w-4 h-4" />
            <span class="text-sm">{{ $t('hero.location') }}</span>
          </div>
          
          <!-- Description -->
          <p 
            class="text-text-secondary max-w-lg mb-8 text-base leading-relaxed opacity-0 animate-fade-in"
            style="animation-delay: 0.8s; animation-fill-mode: forwards;"
          >
            {{ $t('hero.description') }}
          </p>
          
          <!-- CTA Buttons -->
          <div 
            class="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-in"
            style="animation-delay: 0.9s; animation-fill-mode: forwards;"
          >
            <NuxtLink
              :to="localePath('/contact')"
              class="group flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              <span>{{ $t('hero.cta_primary') }}</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/projects')"
              class="group flex items-center gap-2 px-7 py-3.5 bg-slate-800/50 hover:bg-slate-800 text-white font-medium rounded-full transition-all hover:-translate-y-0.5 border border-slate-700/50"
            >
              <span>{{ $t('hero.cta_secondary') }}</span>
              <Icon name="lucide:briefcase" class="w-4 h-4" />
            </NuxtLink>
          </div>
          
          <!-- Stats -->
          <div 
            class="flex flex-wrap gap-8 opacity-0 animate-fade-in"
            style="animation-delay: 1s; animation-fill-mode: forwards;"
          >
            <div v-for="(stat, i) in stats" :key="i" class="flex flex-col">
              <span class="text-2xl md:text-3xl font-bold text-white">{{ stat.value }}</span>
              <span class="text-sm text-text-muted">{{ $t(stat.label) }}</span>
            </div>
          </div>
        </div>
        
        <!-- Right: Image/Visual -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div 
            class="relative opacity-0 animate-scale-in"
            style="animation-delay: 0.5s; animation-fill-mode: forwards;"
          >
            <!-- Decorative ring -->
            <div class="absolute inset-0 rounded-full border border-accent/20 animate-spin-slow" style="animation-duration: 30s;"></div>
            <div class="absolute inset-4 rounded-full border border-accent/10 animate-spin-slow" style="animation-duration: 25s; animation-direction: reverse;"></div>
            
            <!-- Main image container -->
            <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <!-- Glow effect -->
              <div class="absolute inset-0 rounded-full bg-accent/20 blur-3xl"></div>
              
              <!-- Image -->
              <div class="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30 glow">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face"
                  alt="Aboubakar Sidik Faha"
                  class="w-full h-full object-cover"
                />
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent"></div>
              </div>
              
              <!-- Floating badges -->
              <div class="absolute -top-4 -right-4 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center gap-2 animate-float border border-slate-700/50 shadow-lg">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-xs text-text-secondary font-medium">Available</span>
              </div>
              
              <div class="absolute -bottom-2 -left-4 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-full animate-float border border-slate-700/50 shadow-lg" style="animation-delay: 0.5s;">
                <div class="flex items-center gap-1.5">
                  <Icon name="lucide:code-2" class="w-3.5 h-3.5 text-accent" />
                  <span class="text-xs text-text-secondary font-medium">DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style="animation-delay: 1.2s; animation-fill-mode: forwards;">
      <span class="text-xs text-text-muted font-mono uppercase tracking-widest">Scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-accent to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

const nameWords = computed(() => t('hero.name').split(' '))

const stats = [
  { value: '150+', label: 'hero.stats_projects' },
  { value: '98%', label: 'hero.stats_satisfaction' },
  { value: '7+', label: 'hero.stats_experience' },
]
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from { 
    opacity: 0;
    transform: scale(0.9);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.animate-scale-in {
  animation: scale-in 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
</style>

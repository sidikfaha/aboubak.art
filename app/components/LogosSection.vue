<template>
  <section class="py-16 border-y border-border overflow-hidden">
    <Container>
      <p class="text-center text-text-muted text-sm font-mono uppercase tracking-widest mb-8">
        {{ $t('logos.title') }}
      </p>
    </Container>
    
    <!-- Infinite marquee -->
    <div class="relative">
      <!-- Fade edges -->
      <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10"></div>
      
      <div class="flex animate-marquee">
        <!-- First set -->
        <div class="flex items-center gap-16 px-8">
          <div v-for="(logo, i) in logos" :key="`1-${i}`" class="flex items-center justify-center min-w-[150px] opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <div class="flex items-center gap-3 text-text-secondary hover:text-white transition-colors">
              <Icon :name="logo.icon" class="w-8 h-8" />
              <span class="font-semibold text-lg">{{ logo.name }}</span>
            </div>
          </div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="flex items-center gap-16 px-8">
          <div v-for="(logo, i) in logos" :key="`2-${i}`" class="flex items-center justify-center min-w-[150px] opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <div class="flex items-center gap-3 text-text-secondary hover:text-white transition-colors">
              <Icon :name="logo.icon" class="w-8 h-8" />
              <span class="font-semibold text-lg">{{ logo.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  { name: 'TechCorp', icon: 'lucide:building-2' },
  { name: 'StartupX', icon: 'lucide:rocket' },
  { name: 'InnovateLab', icon: 'lucide:flask-conical' },
  { name: 'CloudSys', icon: 'lucide:cloud' },
  { name: 'DataFlow', icon: 'lucide:database' },
  { name: 'AIVentures', icon: 'lucide:brain' },
  { name: 'NetSecure', icon: 'lucide:shield' },
]
</script>

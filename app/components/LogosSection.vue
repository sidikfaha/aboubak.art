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
      <div class="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-bg-primary to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-bg-primary to-transparent z-10"></div>
      
      <div class="flex animate-marquee">
        <!-- First set -->
        <div class="flex items-center gap-16 px-8">
          <div v-for="(logo, i) in logos" :key="`1-${i}`" class="flex items-center justify-center min-w-37.5 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <img :src="logo.src" :alt="logo.name" class="h-8 w-auto object-contain" />
          </div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="flex items-center gap-16 px-8">
          <div v-for="(logo, i) in logos" :key="`2-${i}`" class="flex items-center justify-center min-w-37.5 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <img :src="logo.src" :alt="logo.name" class="h-8 w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  { name: 'Bicici', src: '/images/clients/bicici.webp' },
  { name: 'Digit Com', src: '/images/clients/digit-com.webp' },
  { name: 'Dr Balcony', src: '/images/clients/dr-balcony.webp' },
  { name: 'Everest Consulting', src: '/images/clients/everest-consulting.webp' },
  { name: 'Jack Westin', src: '/images/clients/jackwestin.svg' },
  { name: 'JMF', src: '/images/clients/jmf.webp' },
  { name: 'Paynah', src: '/images/clients/paynah.svg' },
  { name: 'Zawaj Sunnah', src: '/images/clients/zawaj-sunnah.webp' },
]
</script>

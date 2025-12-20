<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const { t } = useI18n();

const handleError = () => clearError({ redirect: "/" });

// Floating particles animation
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
}));

// Glitch text effect
const glitchText = computed(() => {
  if (props.error.statusCode === 404) return "404";
  if (props.error.statusCode === 500) return "500";
  return props.error.statusCode?.toString() || "ERR";
});

// Error messages based on status code
const errorTitle = computed(() => {
  if (props.error.statusCode === 404) return t("error.notFound");
  if (props.error.statusCode === 500) return t("error.serverError");
  return t("error.generic");
});

const errorDescription = computed(() => {
  if (props.error.statusCode === 404) return t("error.notFoundDesc");
  if (props.error.statusCode === 500) return t("error.serverErrorDesc");
  return props.error.message || t("error.genericDesc");
});
</script>

<template>
  <div class="min-h-screen bg-background overflow-hidden relative flex items-center justify-center px-4">
    <!-- Animated Background Gradient -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-1/4 w-150 h-150 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div class="absolute bottom-1/4 -right-1/4 w-125 h-125 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-accent/10 rounded-full blur-[80px] animate-float" />
    </div>

    <!-- Floating Particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="particle in particles"
        :key="particle.id"
        class="absolute rounded-full bg-primary/30"
        :style="{
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          left: `${particle.x}%`,
          top: '100%',
          animation: `float-up ${particle.duration}s linear infinite`,
          animationDelay: `${particle.delay}s`,
        }"
      />
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5" />

    <!-- Main Content -->
    <div class="relative z-10 text-center max-w-2xl mx-auto">
      <!-- Glitch Error Code -->
      <div class="relative mb-8">
        <h1 class="font-orbitron text-[120px] sm:text-[180px] font-bold leading-none select-none glitch-wrapper">
          <span class="glitch-text text-gradient-primary" :data-text="glitchText">
            {{ glitchText }}
          </span>
        </h1>
        
        <!-- Scanning Line Effect -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="scan-line" />
        </div>
      </div>

      <!-- Error Icon with Pulse -->
      <div class="relative inline-flex mb-6">
        <div class="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
        <div class="relative glass-card rounded-full p-4">
          <Icon
            :name="error.statusCode === 404 ? 'heroicons:map' : 'heroicons:exclamation-triangle'"
            class="size-12 text-primary animate-bounce-slow"
          />
        </div>
      </div>

      <!-- Error Title -->
      <h2 class="font-orbitron text-2xl sm:text-3xl font-bold text-text mb-4 animate-fade-in">
        {{ errorTitle }}
      </h2>

      <!-- Error Description -->
      <p class="font-inter text-text-secondary text-lg mb-8 max-w-md mx-auto animate-fade-in animation-delay-200">
        {{ errorDescription }}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
        <button
          @click="handleError"
          class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-inter font-semibold text-background bg-gradient-primary rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
        >
          <span class="relative z-10 flex items-center gap-2">
            <Icon name="heroicons:home" class="size-5" />
            {{ t('error.backHome') }}
          </span>
          <div class="absolute inset-0 bg-gradient-primary-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <button
          @click="$router.back()"
          class="group inline-flex items-center justify-center gap-2 px-8 py-4 font-inter font-semibold text-text glass-card rounded-xl transition-all duration-300 hover:scale-105 hover:border-primary"
        >
          <Icon name="heroicons:arrow-left" class="size-5 group-hover:-translate-x-1 transition-transform" />
          {{ t('error.goBack') }}
        </button>
      </div>

      <!-- Fun Robot Animation for 404 -->
      <div v-if="error.statusCode === 404" class="mt-12 animate-fade-in animation-delay-600">
        <div class="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-text-muted text-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          {{ t('error.searching') }}
        </div>
      </div>
    </div>

    <!-- Decorative Corner Elements -->
    <div class="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-lg animate-pulse" />
    <div class="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30 rounded-tr-lg animate-pulse animation-delay-500" />
    <div class="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-secondary/30 rounded-bl-lg animate-pulse animation-delay-1000" />
    <div class="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-secondary/30 rounded-br-lg animate-pulse animation-delay-1500" />
  </div>
</template>

<style scoped>
/* Glitch Effect */
.glitch-wrapper {
  position: relative;
}

.glitch-text {
  position: relative;
  display: inline-block;
  animation: glitch-skew 4s infinite linear alternate-reverse;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #ec4899;
  clip: rect(24px, 550px, 90px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(135deg, #06b6d4 0%, #ec4899 100%);
}

.glitch-text::after {
  left: -2px;
  text-shadow: -2px 0 #06b6d4, 2px 2px #a855f7;
  clip: rect(85px, 550px, 140px, 0);
  animation: glitch-anim2 2s infinite linear alternate-reverse;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(135deg, #06b6d4 0%, #ec4899 100%);
}

@keyframes glitch-anim {
  0% { clip: rect(42px, 9999px, 44px, 0); transform: skew(0.5deg); }
  5% { clip: rect(12px, 9999px, 59px, 0); transform: skew(0.5deg); }
  10% { clip: rect(48px, 9999px, 29px, 0); transform: skew(0.5deg); }
  15% { clip: rect(42px, 9999px, 73px, 0); transform: skew(0.5deg); }
  20% { clip: rect(63px, 9999px, 27px, 0); transform: skew(0.5deg); }
  25% { clip: rect(34px, 9999px, 55px, 0); transform: skew(0.5deg); }
  30% { clip: rect(86px, 9999px, 73px, 0); transform: skew(0.5deg); }
  35% { clip: rect(20px, 9999px, 20px, 0); transform: skew(0.5deg); }
  40% { clip: rect(26px, 9999px, 60px, 0); transform: skew(0.5deg); }
  45% { clip: rect(25px, 9999px, 66px, 0); transform: skew(0.5deg); }
  50% { clip: rect(57px, 9999px, 98px, 0); transform: skew(0.5deg); }
  55% { clip: rect(5px, 9999px, 46px, 0); transform: skew(0.5deg); }
  60% { clip: rect(82px, 9999px, 31px, 0); transform: skew(0.5deg); }
  65% { clip: rect(54px, 9999px, 27px, 0); transform: skew(0.5deg); }
  70% { clip: rect(28px, 9999px, 99px, 0); transform: skew(0.5deg); }
  75% { clip: rect(45px, 9999px, 69px, 0); transform: skew(0.5deg); }
  80% { clip: rect(23px, 9999px, 85px, 0); transform: skew(0.5deg); }
  85% { clip: rect(54px, 9999px, 84px, 0); transform: skew(0.5deg); }
  90% { clip: rect(45px, 9999px, 47px, 0); transform: skew(0.5deg); }
  95% { clip: rect(37px, 9999px, 20px, 0); transform: skew(0.5deg); }
  100% { clip: rect(4px, 9999px, 91px, 0); transform: skew(0.5deg); }
}

@keyframes glitch-anim2 {
  0% { clip: rect(65px, 9999px, 99px, 0); transform: skew(0.5deg); }
  5% { clip: rect(52px, 9999px, 74px, 0); transform: skew(0.5deg); }
  10% { clip: rect(79px, 9999px, 85px, 0); transform: skew(0.5deg); }
  15% { clip: rect(75px, 9999px, 5px, 0); transform: skew(0.5deg); }
  20% { clip: rect(67px, 9999px, 61px, 0); transform: skew(0.5deg); }
  25% { clip: rect(14px, 9999px, 79px, 0); transform: skew(0.5deg); }
  30% { clip: rect(1px, 9999px, 66px, 0); transform: skew(0.5deg); }
  35% { clip: rect(86px, 9999px, 30px, 0); transform: skew(0.5deg); }
  40% { clip: rect(23px, 9999px, 98px, 0); transform: skew(0.5deg); }
  45% { clip: rect(85px, 9999px, 72px, 0); transform: skew(0.5deg); }
  50% { clip: rect(71px, 9999px, 75px, 0); transform: skew(0.5deg); }
  55% { clip: rect(2px, 9999px, 48px, 0); transform: skew(0.5deg); }
  60% { clip: rect(30px, 9999px, 16px, 0); transform: skew(0.5deg); }
  65% { clip: rect(59px, 9999px, 50px, 0); transform: skew(0.5deg); }
  70% { clip: rect(41px, 9999px, 62px, 0); transform: skew(0.5deg); }
  75% { clip: rect(2px, 9999px, 82px, 0); transform: skew(0.5deg); }
  80% { clip: rect(47px, 9999px, 73px, 0); transform: skew(0.5deg); }
  85% { clip: rect(3px, 9999px, 27px, 0); transform: skew(0.5deg); }
  90% { clip: rect(26px, 9999px, 55px, 0); transform: skew(0.5deg); }
  95% { clip: rect(42px, 9999px, 25px, 0); transform: skew(0.5deg); }
  100% { clip: rect(38px, 9999px, 49px, 0); transform: skew(0.5deg); }
}

@keyframes glitch-skew {
  0% { transform: skew(-1deg); }
  10% { transform: skew(0deg); }
  20% { transform: skew(1deg); }
  30% { transform: skew(0deg); }
  40% { transform: skew(-0.5deg); }
  50% { transform: skew(0deg); }
  60% { transform: skew(0.5deg); }
  70% { transform: skew(0deg); }
  80% { transform: skew(-1deg); }
  90% { transform: skew(0.5deg); }
  100% { transform: skew(0deg); }
}

/* Scanning Line Effect */
.scan-line {
  position: absolute;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.8), transparent);
  animation: scan 3s linear infinite;
}

@keyframes scan {
  0% { top: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

/* Floating Particles */
@keyframes float-up {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  5% {
    opacity: 0.8;
  }
  95% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-120vh) rotate(720deg);
    opacity: 0;
  }
}

/* Custom Animations */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-30px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

/* Animation Delays */
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-500 { animation-delay: 500ms; }
.animation-delay-600 { animation-delay: 600ms; }
.animation-delay-1000 { animation-delay: 1000ms; }
.animation-delay-1500 { animation-delay: 1500ms; }
.animation-delay-2000 { animation-delay: 2000ms; }

/* Grid Pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>

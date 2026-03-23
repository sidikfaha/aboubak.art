<template>
  <NuxtLayout>
    <main class="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden" role="main">
      <!-- Animated Background Grid -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div class="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" />
      </div>

      <Container class="relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Error Code with Glitch Effect -->
          <div class="text-center mb-12">
            <div class="relative inline-block">
              <!-- Glitch layers -->
              <span 
                class="absolute top-0 left-0 -ml-1 text-[120px] md:text-[180px] font-bold text-red-500/50 opacity-0 glitch-layer-1 select-none"
                aria-hidden="true"
              >
                {{ errorCode }}
              </span>
              <span 
                class="absolute top-0 left-0 ml-1 text-[120px] md:text-[180px] font-bold text-blue-500/50 opacity-0 glitch-layer-2 select-none"
                aria-hidden="true"
              >
                {{ errorCode }}
              </span>
              <!-- Main code -->
              <h1 
                class="text-[120px] md:text-[180px] font-bold leading-none bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent glitch-main"
              >
                {{ errorCode }}
              </h1>
            </div>
            
            <!-- Error Heading -->
            <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-4">
              {{ errorHeading }}
            </h2>
            
            <!-- Error Message -->
            <p class="text-text-secondary text-lg md:text-xl max-w-lg mx-auto mb-8">
              {{ errorMessage }}
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center justify-center gap-4">
              <button
                v-if="isErrorPage"
                @click="handleClearError"
                class="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary group"
              >
                <Icon name="lucide:refresh-cw" class="w-4 h-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
                <span>{{ $t('error.try_again') }}</span>
              </button>
              
              <NuxtLink
                :to="localePath('/blog')"
                class="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium rounded-full transition-all border border-slate-700/50 hover:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
              >
                <Icon name="lucide:book-open" class="w-4 h-4" aria-hidden="true" />
                <span>{{ $t('error.browse_blog') }}</span>
              </NuxtLink>

              <NuxtLink
                :to="localePath('/projects')"
                class="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium rounded-full transition-all border border-slate-700/50 hover:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
              >
                <Icon name="lucide:folder-open" class="w-4 h-4" aria-hidden="true" />
                <span>{{ $t('error.view_projects') }}</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Useful Links Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <!-- Quick Navigation -->
            <div class="p-6 glass rounded-2xl hover:border-accent/20 transition-colors">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name="lucide:compass" class="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 class="font-semibold">{{ $t('error.useful_links') }}</h3>
              </div>
              <nav class="space-y-2">
                <NuxtLink 
                  :to="localePath('/')" 
                  class="flex items-center gap-2 text-text-secondary hover:text-white transition-colors py-1 group"
                >
                  <Icon name="lucide:home" class="w-4 h-4 group-hover:text-accent transition-colors" aria-hidden="true" />
                  <span>{{ $t('nav.home') }}</span>
                </NuxtLink>
                <NuxtLink 
                  :to="localePath('/about')" 
                  class="flex items-center gap-2 text-text-secondary hover:text-white transition-colors py-1 group"
                >
                  <Icon name="lucide:user" class="w-4 h-4 group-hover:text-accent transition-colors" aria-hidden="true" />
                  <span>{{ $t('nav.about') }}</span>
                </NuxtLink>
                <NuxtLink 
                  :to="localePath('/services')" 
                  class="flex items-center gap-2 text-text-secondary hover:text-white transition-colors py-1 group"
                >
                  <Icon name="lucide:briefcase" class="w-4 h-4 group-hover:text-accent transition-colors" aria-hidden="true" />
                  <span>{{ $t('nav.services') }}</span>
                </NuxtLink>
                <NuxtLink 
                  :to="localePath('/contact')" 
                  class="flex items-center gap-2 text-text-secondary hover:text-white transition-colors py-1 group"
                >
                  <Icon name="lucide:mail" class="w-4 h-4 group-hover:text-accent transition-colors" aria-hidden="true" />
                  <span>{{ $t('error.contact_me') }}</span>
                </NuxtLink>
              </nav>
            </div>

            <!-- Search Suggestion -->
            <div class="p-6 glass rounded-2xl hover:border-accent/20 transition-colors">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name="lucide:search" class="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 class="font-semibold">{{ $t('projects.title') }}</h3>
              </div>
              <p class="text-text-secondary text-sm mb-4">
                {{ $t('projects.description') }}
              </p>
              <NuxtLink
                :to="localePath('/projects')"
                class="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors group"
              >
                <span>{{ $t('projects.view_all') }}</span>
                <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="flex items-center justify-center gap-8 mt-12 text-text-muted">
            <div class="h-px w-16 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <Icon name="lucide:code-2" class="w-5 h-5" aria-hidden="true" />
            <div class="h-px w-16 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
        </div>
      </Container>
    </main>
  </NuxtLayout>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

const props = defineProps({
  error: Object
})

// Computed error code based on statusCode
const errorCode = computed(() => {
  return props.error?.statusCode || '404'
})

// Check if it's an actual error page (not just 404)
const isErrorPage = computed(() => {
  return props.error?.statusCode && props.error.statusCode >= 500
})

// Dynamic heading based on error type
const errorHeading = computed(() => {
  const code = props.error?.statusCode
  if (code === 404) return t('error.404_heading')
  if (code >= 500) return t('error.500_heading')
  return t('error.default_heading')
})

// Dynamic message based on error type
const errorMessage = computed(() => {
  const code = props.error?.statusCode
  if (code === 404) return t('error.404_message')
  if (code >= 500) return t('error.500_message')
  return props.error?.statusMessage || t('error.default_message')
})

// Handle clearing the error
const handleClearError = () => {
  clearError({ redirect: '/' })
}

// SEO for error page - noindex
useHead(() => ({
  title: `${errorCode.value} | ${t('error.title')}`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'googlebot', content: 'noindex, nofollow' },
    { name: 'description', content: errorMessage.value },
  ],
}))

// Add glitch animation styles
useHead({
  style: [{
    children: `
      @keyframes glitch-1 {
        0%, 100% { opacity: 0; transform: translate(0); }
        20% { opacity: 0.8; transform: translate(-2px, 2px); }
        40% { opacity: 0; transform: translate(0); }
        60% { opacity: 0.8; transform: translate(2px, -2px); }
        80% { opacity: 0; transform: translate(0); }
      }
      @keyframes glitch-2 {
        0%, 100% { opacity: 0; transform: translate(0); }
        20% { opacity: 0.8; transform: translate(2px, -2px); }
        40% { opacity: 0; transform: translate(0); }
        60% { opacity: 0.8; transform: translate(-2px, 2px); }
        80% { opacity: 0; transform: translate(0); }
      }
      .glitch-main {
        animation: glitch-main 0.3s ease-in-out;
      }
      .glitch-layer-1 {
        animation: glitch-1 2s infinite;
        animation-delay: 0.5s;
      }
      .glitch-layer-2 {
        animation: glitch-2 2s infinite;
        animation-delay: 0.7s;
      }
      @keyframes glitch-main {
        0%, 100% { transform: translate(0); }
        20% { transform: translate(-1px, 1px); }
        40% { transform: translate(1px, -1px); }
        60% { transform: translate(-1px, -1px); }
        80% { transform: translate(1px, 1px); }
      }
    `
  }]
})
</script>

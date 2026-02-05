<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="{ 
      'py-8': !isScrolled, 
      'py-4': isScrolled 
    }"
  >
    <Container>
      <div class="flex items-center justify-between lg:justify-center gap-6">
        <!-- Logo -->
        <NuxtLink 
          :to="localePath('/')" 
          class="relative z-50 flex items-center gap-2 group lg:hidden"
        >
          <div class="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <span class="text-accent font-bold text-lg font-mono">SF</span>
          </div>
          <span class="hidden sm:block text-white font-semibold tracking-tight">
            Faha
          </span>
        </NuxtLink>
        
        <!-- Desktop Navigation - Pills -->
        <nav class="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="localePath(item.path)"
            class="px-5 py-2 text-sm font-medium rounded-full transition-all duration-300"
            :class="isActiveRoute(item.path)
              ? 'bg-accent text-white shadow-lg shadow-accent/25'
              : 'text-text-secondary hover:text-white hover:bg-slate-800/50'
            "
          >
            {{ $t(item.label) }}
          </NuxtLink>
        </nav>
        
        <!-- Right side -->
        <div class="flex items-center gap-3">
          <!-- Language switcher - Pills -->
          <div class="hidden sm:flex items-center gap-1 p-1 rounded-full bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
            <button
              v-for="locale in availableLocales"
              :key="locale.code"
              @click="switchLocale(locale.code)"
              class="px-3 py-1.5 text-xs font-medium rounded-full transition-all"
              :class="currentLocale === locale.code 
                ? 'bg-slate-700 text-white' 
                : 'text-text-muted hover:text-white hover:bg-slate-800/50'"
            >
              {{ locale.code.toUpperCase() }}
            </button>
          </div>
          
          <!-- CTA Button - Pill -->
          <NuxtLink
            :to="localePath('/contact')"
            class="hidden md:flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            <span>{{ $t('hero.cta_primary') }}</span>
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </NuxtLink>
          
          <!-- Mobile menu button -->
          <button 
            class="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-800/50 transition-colors"
            @click="isMenuOpen = !isMenuOpen"
          >
            <div class="w-5 h-4 relative flex flex-col justify-between">
              <span 
                class="w-full h-0.5 bg-white transition-all origin-center"
                :class="isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''"
              ></span>
              <span 
                class="w-full h-0.5 bg-white transition-all"
                :class="isMenuOpen ? 'opacity-0' : ''"
              ></span>
              <span 
                class="w-full h-0.5 bg-white transition-all origin-center"
                :class="isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </Container>
    
    <!-- Mobile Menu - Pills -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMenuOpen" 
        class="fixed inset-0 bg-bg-primary/98 backdrop-blur-xl z-40 lg:hidden"
      >
        <div class="flex flex-col items-center justify-center h-full gap-3">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="localePath(item.path)"
            class="px-8 py-3 text-lg font-medium rounded-full transition-all"
            :class="isActiveRoute(item.path)
              ? 'bg-accent text-white shadow-lg shadow-accent/25'
              : 'text-white hover:text-accent hover:bg-slate-800/50'"
            @click="isMenuOpen = false"
          >
            {{ $t(item.label) }}
          </NuxtLink>
          
          <NuxtLink
            :to="localePath('/contact')"
            class="mt-4 px-8 py-3 bg-accent text-white font-medium rounded-full shadow-lg shadow-accent/25"
            @click="isMenuOpen = false"
          >
            {{ $t('hero.cta_primary') }}
          </NuxtLink>
          
          <!-- Language switcher - Pills -->
          <div class="flex items-center gap-2 mt-8 p-1 rounded-full bg-slate-900/50 border border-slate-800/50">
            <button
              v-for="locale in availableLocales"
              :key="locale.code"
              @click="switchLocale(locale.code)"
              class="px-4 py-2 text-sm font-medium rounded-full transition-all"
              :class="currentLocale === locale.code 
                ? 'bg-slate-700 text-white' 
                : 'text-text-muted hover:text-white'"
            >
              {{ locale.name }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)

const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/about', label: 'nav.about' },
  { path: '/services', label: 'nav.services' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/blog', label: 'nav.blog' },
]

const isActiveRoute = (path) => {
  if (path === '/') {
    return route.path === localePath('/')
  }
  return route.path.startsWith(localePath(path))
}

const switchLocale = async (code) => {
  await setLocale(code)
  isMenuOpen.value = false
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <footer class="relative border-t border-border mt-20">
    <div class="w-full px-6 lg:px-12 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span class="text-accent font-bold text-lg font-mono">SF</span>
            </div>
            <span class="text-white font-semibold tracking-tight">
              Aboubakar Sidik Faha
            </span>
          </NuxtLink>
          <p class="text-text-secondary max-w-sm mb-6">
            {{ $t('hero.description') }}
          </p>
          <div class="flex items-center gap-4">
            <a 
              href="https://github.com/sidikfaha" 
              target="_blank" 
              rel="noopener"
              class="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/5 transition-all"
            >
              <Icon name="lucide:github" class="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/fahasidik" 
              target="_blank" 
              rel="noopener"
              class="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/5 transition-all"
            >
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/fahasidik" 
              target="_blank" 
              rel="noopener"
              class="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/5 transition-all"
            >
              <Icon name="lucide:twitter" class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">{{ $t('nav.home') }}</h4>
          <ul class="space-y-3">
            <li v-for="item in quickLinks" :key="item.path">
              <NuxtLink 
                :to="localePath(item.path)"
                class="text-text-secondary hover:text-white transition-colors text-sm"
              >
                {{ $t(item.label) }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold mb-4">{{ $t('nav.contact') }}</h4>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-text-secondary text-sm">
              <Icon name="lucide:mail" class="w-4 h-4 text-accent" />
              <a href="mailto:hello@aboubak.art" class="hover:text-white transition-colors">
                hello@aboubak.art
              </a>
            </li>
            <li class="flex items-center gap-2 text-text-secondary text-sm">
              <Icon name="lucide:map-pin" class="w-4 h-4 text-accent" />
              <span>Abidjan, Côte d'Ivoire</span>
            </li>
            <li class="flex items-center gap-2 text-text-secondary text-sm">
              <Icon name="lucide:clock" class="w-4 h-4 text-accent" />
              <span>UTC / GMT</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom bar -->
      <div class="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-text-muted text-sm">
          © {{ new Date().getFullYear() }} Aboubakar Sidik Faha. {{ $t('footer.rights') }}.
        </p>
        <p class="text-text-muted text-sm">
          {{ $t('footer.designed') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()

const quickLinks = [
  { path: '/about', label: 'nav.about' },
  { path: '/services', label: 'nav.services' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/blog', label: 'nav.blog' },
  { path: '/contact', label: 'nav.contact' },
]
</script>

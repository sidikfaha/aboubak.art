<template>
  <footer class="relative border-t border-border mt-20" role="contentinfo">
    <Container class="py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-2 mb-4" aria-label="Home">
            <img 
              src="/me.webp" 
              alt="Aboubakar Sidik Faha" 
              class="w-10 h-10 rounded-full object-cover border border-accent/20"
            />
            <span class="text-white font-semibold tracking-tight">
              Aboubakar Sidik Faha
            </span>
          </NuxtLink>
          <p class="text-text-secondary max-w-sm mb-6">
            {{ $t('hero.description') }}
          </p>
          <!-- Social Links - Pills -->
          <nav aria-label="Social media links">
            <div class="flex items-center gap-3">
              <a 
                href="https://github.com/sidikfaha" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
                aria-label="GitHub - opens in new tab"
              >
                <Icon name="lucide:github" class="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/fahasidik" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
                aria-label="LinkedIn - opens in new tab"
              >
                <Icon name="lucide:linkedin" class="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/sidikfaha" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
                aria-label="Twitter - opens in new tab"
              >
                <Icon name="lucide:twitter" class="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
        
        <!-- Quick Links -->
        <nav aria-labelledby="quick-links-heading">
          <h4 id="quick-links-heading" class="text-white font-semibold mb-4">{{ $t('nav.home') }}</h4>
          <ul class="space-y-3">
            <li v-for="item in quickLinks" :key="item.path">
              <NuxtLink 
                :to="localePath(item.path)"
                class="text-text-secondary hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary rounded"
              >
                {{ $t(item.label) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        
        <!-- Contact -->
        <section aria-labelledby="contact-heading">
          <h4 id="contact-heading" class="text-white font-semibold mb-4">{{ $t('nav.contact') }}</h4>
          <ul class="space-y-3">
            <li class="flex items-center gap-2 text-text-secondary text-sm">
              <Icon name="lucide:mail" class="w-4 h-4 text-accent" aria-hidden="true" />
              <a href="mailto:me@aboubak.art" class="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary rounded">
                me@aboubak.art
              </a>
            </li>
            <li class="flex items-center gap-2 text-text-secondary text-sm">
              <Icon name="lucide:map-pin" class="w-4 h-4 text-accent" aria-hidden="true" />
              <span>Abidjan, Côte d'Ivoire</span>
            </li>
            <li class="flex items-center gap-2 text-text-secondary text-sm">
              <Icon name="lucide:clock" class="w-4 h-4 text-accent" aria-hidden="true" />
              <span>UTC / GMT</span>
            </li>
            <li class="flex items-center gap-2 text-text-secondary text-sm">
              <Icon name="lucide:building-2" class="w-4 h-4 text-accent" aria-hidden="true" />
              <span>RCCM: CI-ABJ-03-2024-A10-02543</span>
            </li>
          </ul>
        </section>
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
    </Container>
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

<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Header -->
      <div class="max-w-4xl mb-16">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            {{ $t('contact.subtitle') }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {{ $t('contact.title') }}
        </h1>
        <p class="text-text-secondary text-lg leading-relaxed">
          {{ $t('contact.description') }}
        </p>
      </div>
      
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Contact info -->
        <div class="space-y-8">
          <div class="glass rounded-2xl p-6">
            <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Icon name="lucide:mail" class="w-6 h-6 text-accent" />
            </div>
            <h3 class="font-semibold mb-1">{{ $t('contact.info.email') }}</h3>
            <a href="mailto:hello@aboubak.art" class="text-text-secondary hover:text-accent transition-colors">
              hello@aboubak.art
            </a>
          </div>
          
          <div class="glass rounded-2xl p-6">
            <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Icon name="lucide:map-pin" class="w-6 h-6 text-accent" />
            </div>
            <h3 class="font-semibold mb-1">{{ $t('contact.info.location') }}</h3>
            <p class="text-text-secondary">
              Abidjan, Côte d'Ivoire<br>
              <span class="text-sm">(RCCM Registered)</span>
            </p>
          </div>
          
          <div class="glass rounded-2xl p-6">
            <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Icon name="lucide:clock" class="w-6 h-6 text-accent" />
            </div>
            <h3 class="font-semibold mb-1">{{ $t('contact.info.availability') }}</h3>
            <p class="text-text-secondary">
              Monday - Friday<br>
              9:00 AM - 6:00 PM GMT
            </p>
          </div>
          
          <!-- Social links - Pills -->
          <div class="flex items-center gap-3">
            <a 
              href="https://github.com/sidikfaha" 
              target="_blank"
              class="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all"
            >
              <Icon name="lucide:github" class="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/fahasidik" 
              target="_blank"
              class="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all"
            >
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/fahasidik" 
              target="_blank"
              class="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all"
            >
              <Icon name="lucide:twitter" class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <!-- Contact form -->
        <div class="lg:col-span-2">
          <form @submit.prevent="handleSubmit" class="glass rounded-2xl p-8">
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium mb-2">
                  {{ $t('contact.form.name') }}
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-5 py-3.5 bg-white/5 border border-border rounded-full focus:border-accent focus:outline-none transition-colors text-white placeholder-text-muted"
                  :placeholder="$t('contact.form.name')"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">
                  {{ $t('contact.form.email') }}
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-5 py-3.5 bg-white/5 border border-border rounded-full focus:border-accent focus:outline-none transition-colors text-white placeholder-text-muted"
                  :placeholder="$t('contact.form.email')"
                />
              </div>
            </div>
            
            <div class="mb-6">
              <label class="block text-sm font-medium mb-2">
                {{ $t('contact.form.subject') }}
              </label>
              <input
                v-model="form.subject"
                type="text"
                required
                class="w-full px-5 py-3.5 bg-white/5 border border-border rounded-full focus:border-accent focus:outline-none transition-colors text-white placeholder-text-muted"
                :placeholder="$t('contact.form.subject')"
              />
            </div>
            
            <div class="mb-6">
              <label class="block text-sm font-medium mb-2">
                {{ $t('contact.form.message') }}
              </label>
              <textarea
                v-model="form.message"
                rows="6"
                required
                class="w-full px-5 py-3.5 bg-white/5 border border-border rounded-2xl focus:border-accent focus:outline-none transition-colors text-white placeholder-text-muted resize-none"
                :placeholder="$t('contact.form.message')"
              ></textarea>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full md:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-accent hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              <Icon v-if="isSubmitting" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
              <Icon v-else name="lucide:send" class="w-5 h-5" />
              <span>{{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}</span>
            </button>
            
            <!-- Success/Error messages -->
            <div v-if="submitStatus" class="mt-4 p-4 rounded-lg" :class="submitStatus.success ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'">
              <div class="flex items-center gap-2">
                <Icon :name="submitStatus.success ? 'lucide:check-circle' : 'lucide:alert-circle'" class="w-5 h-5" />
                <span>{{ submitStatus.message }}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: `${t('nav.contact')} | Aboubakar Sidik Faha`,
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // For demo purposes, show success
  // In production, you'd integrate with a service like Formspree, Getform, or your own API
  submitStatus.value = {
    success: true,
    message: t('contact.form.success')
  }
  
  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  
  isSubmitting.value = false
}
</script>

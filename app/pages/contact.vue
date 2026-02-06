<template>
  <div class="pt-32 pb-20">
    <Container>
      <!-- Header -->
      <div class="max-w-4xl mb-16">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-px bg-accent"></div>
          <span class="text-accent font-mono text-sm uppercase tracking-widest">
            {{ $t("contact.subtitle") }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {{ $t("contact.title") }}
        </h1>
        <p class="text-text-secondary text-lg leading-relaxed">
          {{ $t("contact.description") }}
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Contact info -->
        <section class="space-y-8" aria-labelledby="contact-info-heading">
          <h2 id="contact-info-heading" class="sr-only">Contact Information</h2>

          <div class="glass rounded-2xl p-6">
            <div
              class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4"
              aria-hidden="true"
            >
              <Icon name="lucide:mail" class="w-6 h-6 text-accent" />
            </div>
            <h3 class="font-semibold mb-1">{{ $t("contact.info.email") }}</h3>
            <a
              href="mailto:me@aboubak.art"
              class="text-text-secondary hover:text-accent transition-colors"
            >
              me@aboubak.art
            </a>
          </div>

          <div class="glass rounded-2xl p-6">
            <div
              class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4"
              aria-hidden="true"
            >
              <Icon name="lucide:map-pin" class="w-6 h-6 text-accent" />
            </div>
            <h3 class="font-semibold mb-1">
              {{ $t("contact.info.location") }}
            </h3>
            <p class="text-text-secondary">
              Abidjan, Côte d'Ivoire<br />
              <span class="text-sm"> RCCM: CI-ABJ-03-2024-A10-02543 </span>
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <div
              class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4"
              aria-hidden="true"
            >
              <Icon name="lucide:clock" class="w-6 h-6 text-accent" />
            </div>
            <h3 class="font-semibold mb-1">
              {{ $t("contact.info.availability") }}
            </h3>
            <p class="text-text-secondary">
              Monday - Friday<br />
              9:00 AM - 6:00 PM GMT
            </p>
          </div>

          <!-- Social links - Pills -->
          <nav aria-label="Social media links">
            <div class="flex items-center gap-3">
              <a
                href="https://github.com/sidikfaha"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
                aria-label="GitHub profile"
              >
                <Icon name="lucide:github" class="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/fahasidik"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
                aria-label="LinkedIn profile"
              >
                <Icon name="lucide:linkedin" class="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/sidikfaha"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
                aria-label="Twitter profile"
              >
                <Icon name="lucide:twitter" class="w-5 h-5" />
              </a>
            </div>
          </nav>
        </section>

        <!-- Contact form -->
        <section class="lg:col-span-2" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" class="sr-only">Contact Form</h2>
          <form @submit.prevent="handleSubmit" class="glass rounded-2xl p-8">
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">
                  {{ $t("contact.form.name") }}
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  autocomplete="name"
                  class="w-full px-5 py-3.5 bg-white/5 border border-border rounded-full focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors text-white placeholder-text-muted"
                  :placeholder="$t('contact.form.name')"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium mb-2">
                  {{ $t("contact.form.email") }}
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  autocomplete="email"
                  class="w-full px-5 py-3.5 bg-white/5 border border-border rounded-full focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors text-white placeholder-text-muted"
                  :placeholder="$t('contact.form.email')"
                />
              </div>
            </div>

            <div class="mb-6">
              <label for="subject" class="block text-sm font-medium mb-2">
                {{ $t("contact.form.subject") }}
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-5 py-3.5 bg-white/5 border border-border rounded-full focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors text-white placeholder-text-muted"
                :placeholder="$t('contact.form.subject')"
              />
            </div>

            <div class="mb-6">
              <label for="message" class="block text-sm font-medium mb-2">
                {{ $t("contact.form.message") }}
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                class="w-full px-5 py-3.5 bg-white/5 border border-border rounded-2xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors text-white placeholder-text-muted resize-none"
                :placeholder="$t('contact.form.message')"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full md:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-accent hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
            >
              <Icon
                v-if="isSubmitting"
                name="lucide:loader-2"
                class="w-5 h-5 animate-spin"
                aria-hidden="true"
              />
              <Icon
                v-else
                name="lucide:send"
                class="w-5 h-5"
                aria-hidden="true"
              />
              <span>{{
                isSubmitting
                  ? $t("contact.form.sending")
                  : $t("contact.form.send")
              }}</span>
            </button>

            <!-- Success/Error messages -->
            <div
              v-if="submitStatus"
              role="alert"
              class="mt-4 p-4 rounded-lg"
              :class="
                submitStatus.success
                  ? 'bg-green-500/10 text-green-400'
                  : 'bg-red-500/10 text-red-400'
              "
            >
              <div class="flex items-center gap-2">
                <Icon
                  :name="
                    submitStatus.success
                      ? 'lucide:check-circle'
                      : 'lucide:alert-circle'
                  "
                  class="w-5 h-5"
                  aria-hidden="true"
                />
                <span>{{ submitStatus.message }}</span>
              </div>
            </div>
          </form>
        </section>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();

// SEO for contact page
usePageSeo({
  title: "Contact | Get in Touch",
  description:
    "Get in touch with Aboubakar Sidik Faha for DevOps consulting, cloud architecture projects, or software development inquiries. Based in Abidjan, Ivory Coast.",
  type: "website",
  locale: locale.value === "fr" ? "fr_FR" : "en_US",
});

// Breadcrumb schema
useBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
]);

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // For demo purposes, show success
  // In production, you'd integrate with a service like Formspree, Getform, or your own API
  submitStatus.value = {
    success: true,
    message: t("contact.form.success"),
  };

  // Reset form
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";

  isSubmitting.value = false;
};
</script>

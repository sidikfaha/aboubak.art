<template>
  <div>
    <HeroSection />
    <LogosSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>

<script setup>
const { t, locale } = useI18n()

// SEO for home page
usePageSeo({
  title: t('hero.name') + ' | DevOps & Software Architect',
  description: t('hero.description'),
  type: 'profile',
  locale: locale.value === 'fr' ? 'fr_FR' : 'en_US',
  alternateLocales: ['en_US', 'fr_FR'],
})

// Local business schema for the home page
useLocalBusinessSchema()

// Breadcrumb schema
useBreadcrumbSchema([
  { name: 'Home', url: '/' },
])
</script>

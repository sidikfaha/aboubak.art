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
  title: t('hero.name') + ' | DevOps & Solution Architect',
  description: t('hero.description'),
  image: '/me.webp',
  type: 'profile',
  locale: locale.value === 'fr' ? 'fr_FR' : 'en_US',
  alternateLocales: ['en_US', 'fr_FR'],
})

// Local business schema for the home page
useLocalBusinessSchema()

// Breadcrumb schema
useBreadcrumbSchema([
  { name: t('seo.breadcrumb_home'), url: '/' },
])
</script>

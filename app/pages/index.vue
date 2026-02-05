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
const { t } = useI18n()

useHead({
  title: `${t('hero.name')} | DevOps & Software Architect`,
  meta: [
    { name: 'description', content: t('hero.description') }
  ]
})
</script>

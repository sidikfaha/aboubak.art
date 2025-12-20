<script setup lang="ts">
const { t } = useI18n();

const ogImage = "/images/40f2530e23e53f99d2ca8a1288a99418ce79bd7f.webp";
</script>

<template>
  <div>
    <Title>{{ $t("home.meta.title") }}</Title>
    <Meta name="description" :content="$t('home.meta.description')" />
    <Meta name="keywords" :content="$t('home.meta.keywords')" />
    <Meta name="author" content="Aboubakar Sidik Faha" />
    <Meta name="robots" content="index, follow" />
    <Meta property="og:title" :content="$t('home.meta.title')" />
    <Meta property="og:description" :content="$t('home.meta.description')" />
    <Meta property="og:image" :content="`https://aboubak.art${ogImage}`" />
    <Meta property="og:url" content="https://aboubak.art" />
    <Meta property="og:type" content="website" />
    <Meta property="og:site_name" content="Aboubak'Art" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@sidikfaha" />
    <Meta name="twitter:creator" content="@sidikfaha" />
    <Meta name="twitter:title" :content="$t('home.meta.title')" />
    <Meta name="twitter:description" :content="$t('home.meta.description')" />
    <Meta name="twitter:image" :content="`https://aboubak.art${ogImage}`" />

    <HeroSection />
    <TrustedBySection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <TestimonialsSection />
    <CtaSection />
  </div>
</template>

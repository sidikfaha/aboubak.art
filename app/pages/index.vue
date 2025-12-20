<script setup lang="ts">
const { t } = useI18n();

const ogImage = "https://aboubak.art/images/40f2530e23e53f99d2ca8a1288a99418ce79bd7f.webp";

useSeoMeta({
  title: () => t("home.meta.title"),
  description: () => t("home.meta.description"),
  keywords: () => t("home.meta.keywords"),
  author: "Aboubakar Sidik Faha",
  robots: "index, follow",
  ogTitle: () => t("home.meta.title"),
  ogDescription: () => t("home.meta.description"),
  ogImage: ogImage,
  ogUrl: "https://aboubak.art",
  ogType: "website",
  ogSiteName: "Aboubak'Art",
  twitterCard: "summary_large_image",
  twitterSite: "@sidikfaha",
  twitterCreator: "@sidikfaha",
  twitterTitle: () => t("home.meta.title"),
  twitterDescription: () => t("home.meta.description"),
  twitterImage: ogImage,
});
</script>

<template>
  <div>
    <HeroSection />
    <TrustedBySection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <TestimonialsSection />
    <CtaSection />
  </div>
</template>

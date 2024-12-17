// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: { enabled: true },

  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-gtag",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
  ],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  image: {
    formats: ["webp", "avif"],
  },

  i18n: {
    langDir: "locales/",
    defaultLocale: "fr",
    locales: [
      { code: "en", iso: "en-US", file: "en.json" },
      { code: "fr", iso: "fr-FR", file: "fr.json" },
    ],
  },
});

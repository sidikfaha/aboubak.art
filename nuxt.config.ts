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
  ],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  image: {
    formats: ["webp", "avif"],
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
});

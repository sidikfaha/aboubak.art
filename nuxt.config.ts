// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: { enabled: true },

  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    'nuxt-gtag',
  ],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  gtag: {
    id: "G-2C0YD2E13F",
  },
});

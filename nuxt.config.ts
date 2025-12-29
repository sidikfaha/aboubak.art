import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "nuxt-gtag",
  ],
  site: {
    url: "https://aboubak.art",
  },
  sitemap: {
    sources: ["/api/_sitemap-urls"],
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://aboubak.art",
      firebase: {
        apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      },
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
          langs: [
            "javascript",
            "typescript",
            "vue",
            "html",
            "css",
            "json",
            "bash",
            "python",
          ],
        },
      },
    },
  },
  routeRules: {
    "/blog/**": { isr: 3600 },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["@/assets/css/tailwind.css"],
  i18n: {
    locales: [
      { code: "fr", name: "Français", file: "fr.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    defaultLocale: "fr",
    // lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
  },
  icon: {
    serverBundle: {
      collections: ["heroicons", "mdi"],
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
});
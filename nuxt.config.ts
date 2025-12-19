import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/icon", "@nuxtjs/i18n"],
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
    head: {
      title: "Aboubak'Art - Consultant Digital & Entrepreneur Tech",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Transformez votre vision digitale en réalité avec des solutions innovantes et sur-mesure.",
        },
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

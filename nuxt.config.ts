import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/i18n",
  ],
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: false
    },
    build: {
      sourcemap: false
    }
  },
  css: ["~/assets/css/tailwind.css"],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
  content: {
    renderer: {
      anchorLinks: false
    }
  },

  app: {
    head: {
      title: 'Aboubakar Sidik Faha | DevOps & Software Architect',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'DevOps Engineer & Software Architect based in Abidjan, Ivory Coast. Transforming digital visions into reality with innovative solutions.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  }
});

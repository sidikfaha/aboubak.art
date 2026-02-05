# Aboubakar Sidik Faha - Portfolio

A modern, professional portfolio website built with Nuxt 4, Tailwind CSS 4, and Nuxt Content.

## Features

- **🎨 Modern Design**: Dark theme with elegant animations and glassmorphism effects
- **🌍 Internationalization**: Support for English and French (i18n)
- **📝 Blog**: Markdown-based blog using Nuxt Content
- **⚡ Performance**: Optimized for speed with lazy loading and code splitting
- **📱 Responsive**: Fully responsive design for all devices
- **🎭 Animations**: Smooth GSAP-powered animations and transitions

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Content**: [Nuxt Content](https://content.nuxt.com)
- **i18n**: [@nuxtjs/i18n](https://i18n.nuxtjs.org)
- **Animations**: [GSAP](https://greensock.com/gsap)
- **Icons**: [Nuxt Icon](https://icon.nuxtjs.org)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate
```

### Project Structure

```
├── app/
│   ├── components/     # Vue components
│   ├── composables/    # Vue composables
│   ├── layouts/        # Nuxt layouts
│   ├── locales/        # i18n translations
│   ├── pages/          # Nuxt pages
│   └── assets/         # Static assets
├── content/            # Nuxt Content (blog posts)
├── public/             # Public static files
└── nuxt.config.ts      # Nuxt configuration
```

## Customization

### Colors

The color scheme is defined in `app/assets/css/tailwind.css`:

- Primary Background: `#010304`
- Accent Color: `#3b82f6`
- Text Primary: `#ffffff`
- Text Secondary: `rgba(255, 255, 255, 0.7)`

### Content

Update your personal information in:
- `app/locales/en.json` - English translations
- `app/locales/fr.json` - French translations
- `app/pages/about.vue` - About page content
- `app/pages/projects/` - Project details
- `content/blog/` - Blog posts (Markdown)

## Deployment

This project can be deployed to any static hosting platform:

```bash
# Generate static files
npm run generate

# Deploy the .output/public folder
```

Recommended platforms:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by Aboubakar Sidik Faha

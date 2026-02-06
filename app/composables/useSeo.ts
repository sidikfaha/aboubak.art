import type { UseSeoMetaInput } from '@unhead/vue'
import { useRoute, useHead, useSeoMeta } from '#imports'

interface SeoOptions {
  title: string
  description: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
  noindex?: boolean
  nofollow?: boolean
  canonical?: string
  locale?: string
  alternateLocales?: string[]
}

export function usePageSeo(options: SeoOptions) {
  const route = useRoute()
  const siteUrl = 'https://aboubak.art'
  const pageUrl = `${siteUrl}${route.path}`
  
  const seoImageAlt = options.imageAlt || options.title
  const currentLocale = options.locale || 'en_US'
  
  // Use custom image if provided, otherwise fallback to me.webp
  const ogImageUrl = options.image 
    ? (options.image.startsWith('http') ? options.image : `${siteUrl}${options.image}`)
    : `${siteUrl}/me.webp`
  
  // Build robots directive
  const robotsValue = options.noindex 
    ? 'noindex, nofollow' 
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  
  // Base meta tags
  const metaTags: UseSeoMetaInput = {
    // Basic
    title: options.title,
    description: options.description,
    
    // Robots
    robots: robotsValue,
    
    // Open Graph
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: options.type || 'website',
    ogUrl: pageUrl,
    ogSiteName: 'Aboubakar Sidik Faha',
    ogLocale: currentLocale,
    ogImageAlt: seoImageAlt,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: 'image/png',
    
    // Twitter
    twitterCard: 'summary_large_image',
    twitterSite: '@sidikfaha',
    twitterCreator: '@sidikfaha',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImageAlt: seoImageAlt,
  }
  
  // Article-specific meta tags
  if (options.type === 'article') {
    if (options.publishedTime) {
      metaTags.articlePublishedTime = options.publishedTime
    }
    if (options.modifiedTime) {
      metaTags.articleModifiedTime = options.modifiedTime
    }
    // Author is set in structured data JSON-LD, not needed in meta tags
    // Tags are included in keywords field of structured data, not needed here
  }
  
  // Profile-specific meta tags
  if (options.type === 'profile') {
    metaTags.profileFirstName = 'Aboubakar'
    metaTags.profileLastName = 'Sidik Faha'
    metaTags.profileUsername = 'sidikfaha'
  }
  
  // Alternate locales - must be string array
  if (options.alternateLocales && options.alternateLocales.length > 0) {
    metaTags.ogLocaleAlternate = options.alternateLocales
  }
  
  // Set OG images
  metaTags.ogImage = ogImageUrl
  metaTags.twitterImage = ogImageUrl
  
  useSeoMeta(metaTags)
  
  // Set canonical URL separately
  useHead({
    link: [
      {
        rel: 'canonical',
        href: options.canonical || pageUrl,
      }
    ]
  })
  
  // Add structured data
  const structuredData = generateStructuredData(options, pageUrl)
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData),
      }
    ]
  })
  
  return {
    metaTags,
    structuredData,
  }
}

function generateStructuredData(options: SeoOptions, pageUrl: string) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': options.type === 'article' ? 'BlogPosting' : options.type === 'profile' ? 'ProfilePage' : 'WebPage',
    url: pageUrl,
    name: options.title,
    description: options.description,
    inLanguage: options.locale || 'en',
  }
  
  // Person/Organization data
  const personData = {
    '@type': 'Person',
    name: 'Aboubakar Sidik Faha',
    givenName: 'Aboubakar',
    familyName: 'Sidik Faha',
    url: 'https://aboubak.art',
    jobTitle: 'DevOps Engineer & Software Architect',
    worksFor: {
      '@type': 'Organization',
      name: 'Aboubakar Sidik Faha - Freelance',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abidjan',
      addressCountry: 'CI',
    },
    sameAs: [
      'https://github.com/sidikfaha',
      'https://linkedin.com/in/fahasidik',
      'https://twitter.com/sidikfaha',
    ],
  }
  
  // Article-specific structured data
  if (options.type === 'article') {
    return {
      ...baseData,
      headline: options.title,
      datePublished: options.publishedTime,
      dateModified: options.modifiedTime || options.publishedTime,
      author: personData,
      publisher: personData,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl,
      },
      keywords: options.tags?.join(', ') || '',
    }
  }
  
  // Profile-specific structured data
  if (options.type === 'profile') {
    return {
      ...baseData,
      mainEntity: personData,
    }
  }
  
  // Default WebPage with breadcrumb
  return {
    ...baseData,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://aboubak.art',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: options.title,
          item: pageUrl,
        },
      ],
    },
  }
}

// Composable for breadcrumb structured data
export function useBreadcrumbSchema(items: Array<{ name: string; url?: string }>) {
  const baseUrl = 'https://aboubak.art'
  
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${baseUrl}${item.url}` : undefined,
    })),
  }
  
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(breadcrumbData),
      }
    ]
  })
  
  return breadcrumbData
}

// Composable for local business structured data
export function useLocalBusinessSchema() {
  const businessData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Aboubakar Sidik Faha - DevOps & Software Architecture',
    description: 'Professional DevOps and Software Architecture services based in Abidjan, Ivory Coast.',
    url: 'https://aboubak.art',
    email: 'me@aboubak.art',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Abidjan',
      addressLocality: 'Abidjan',
      addressCountry: 'CI',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.3600,
      longitude: -4.0083,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: ['DevOps Consulting', 'Cloud Architecture', 'Software Development', 'AI/ML Solutions'],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://github.com/sidikfaha',
      'https://linkedin.com/in/fahasidik',
      'https://twitter.com/sidikfaha',
    ],
  }
  
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(businessData),
      }
    ]
  })
  
  return businessData
}

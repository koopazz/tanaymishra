import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogType?: 'website' | 'article'
  ogImage?: string
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    section?: string
    tags?: string[]
  }
  structuredData?: object
}

const BASE_URL = 'https://tanaymishra.com'
const DEFAULT_TITLE = 'Tanay Mishra - Clay Expert & Lindy AI Certified Partner | AI Automation Consultant'
const DEFAULT_DESCRIPTION = 'Hire a certified Clay expert and Lindy AI partner for AI agent implementation, business automation, and outbound sales automation. Helping businesses save 50-90% time with intelligent AI agents and workflow automation.'
const DEFAULT_KEYWORDS = 'Clay consultant, Clay expert, Clay coach, Clay automation, Lindy AI, Lindy AI partner, Lindy AI certified, AI agents, AI automation consultant, business automation, workflow automation, AI agent implementation, outbound automation, sales automation, revenue operations, chatbot marketing, ManyChat expert'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  article,
  structuredData,
}: SEOProps) {
  const fullTitle = title ? `${title} | Tanay Mishra` : DEFAULT_TITLE
  const fullCanonicalUrl = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL

  useEffect(() => {
    // Update title
    document.title = fullTitle

    // Helper to update or create meta tag
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, name)
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    // Helper to update or create link tag
    const setLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = rel
        document.head.appendChild(link)
      }
      link.href = href
    }

    // Primary meta tags
    setMeta('title', fullTitle)
    setMeta('description', description)
    setMeta('keywords', keywords)

    // Canonical URL
    setLink('canonical', fullCanonicalUrl)

    // Open Graph
    setMeta('og:type', ogType, true)
    setMeta('og:url', fullCanonicalUrl, true)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:image', ogImage, true)
    setMeta('og:site_name', 'Tanay Mishra - AI Automation Consultant', true)

    // Twitter
    setMeta('twitter:card', 'summary_large_image', true)
    setMeta('twitter:url', fullCanonicalUrl, true)
    setMeta('twitter:title', fullTitle, true)
    setMeta('twitter:description', description, true)
    setMeta('twitter:image', ogImage, true)

    // Article-specific meta tags
    if (article) {
      if (article.publishedTime) {
        setMeta('article:published_time', article.publishedTime, true)
      }
      if (article.modifiedTime) {
        setMeta('article:modified_time', article.modifiedTime, true)
      }
      if (article.author) {
        setMeta('article:author', article.author, true)
      }
      if (article.section) {
        setMeta('article:section', article.section, true)
      }
      article.tags?.forEach((tag, index) => {
        setMeta(`article:tag:${index}`, tag, true)
      })
    }

    // Update or inject structured data
    if (structuredData) {
      let script = document.querySelector('script[data-seo="dynamic"]') as HTMLScriptElement
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seo', 'dynamic')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(structuredData)
    }

    // Cleanup function
    return () => {
      // Remove dynamic structured data on unmount
      const script = document.querySelector('script[data-seo="dynamic"]')
      if (script) {
        script.remove()
      }
    }
  }, [fullTitle, description, keywords, fullCanonicalUrl, ogType, ogImage, article, structuredData])

  return null
}

// Pre-built structured data generators for GEO optimization
export const generatePersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tanay Mishra',
  url: BASE_URL,
  jobTitle: 'AI & Automation Consultant',
  description: 'Clay expert, Lindy AI certified partner, and AI automation consultant helping businesses implement AI agents, automate outbound sales with Clay, and optimize business processes.',
  image: `${BASE_URL}/tanay-mishra.jpg`,
  knowsAbout: [
    'Clay Automation',
    'Clay Data Enrichment',
    'Clay Outbound Sales',
    'Lindy AI',
    'Lindy AI Agents',
    'AI Agent Implementation',
    'Business Process Automation',
    'Workflow Automation',
    'Revenue Operations',
    'Outbound Sales Automation',
    'Chatbot Marketing',
    'ManyChat',
    'Lead Generation Automation',
    'CRM Automation',
    'Sales Automation',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Clay Expert & Coach',
      description: 'Certified Clay automation expert specializing in outbound sales automation, data enrichment, and go-to-market workflows',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Lindy AI Certified Service Partner',
      description: 'Official Lindy AI certified partner for AI agent implementation and workflow automation',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bali',
    addressCountry: 'Indonesia',
  },
  sameAs: [
    'https://www.linkedin.com/in/tanay-mishra-ai-automation/',
    'https://www.youtube.com/@tanaymishra7002',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Clay Automation & Outbound Sales',
        description: 'Expert Clay implementation for automated outbound sales, data enrichment, and revenue operations optimization',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Lindy AI Agent Implementation',
        description: 'Certified Lindy AI partner services for building custom AI agents that automate business workflows',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI Agent Strategy & Implementation',
        description: 'End-to-end AI agent implementation to cut manual workloads by up to 90%',
      },
    },
  ],
})

export const generateArticleSchema = (article: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  url: `${BASE_URL}${article.url}`,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  image: article.image || DEFAULT_IMAGE,
  author: {
    '@type': 'Person',
    name: 'Tanay Mishra',
    url: BASE_URL,
    jobTitle: 'AI & Automation Consultant',
  },
  publisher: {
    '@type': 'Person',
    name: 'Tanay Mishra',
    url: BASE_URL,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${BASE_URL}${article.url}`,
  },
})

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const generateServiceSchema = (services: Array<{
  name: string
  description: string
  provider?: string
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI & Automation Consulting',
  provider: {
    '@type': 'Person',
    name: 'Tanay Mishra',
    url: BASE_URL,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Automation Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
      position: index + 1,
    })),
  },
})

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  })),
})

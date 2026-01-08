import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug } from '../data/articles'
import SEO, { generateArticleSchema, generateBreadcrumbSchema } from '../components/SEO'
import type { ReactNode } from 'react'

// SEO metadata for each article
const articleSEO: Record<string, { description: string; keywords: string }> = {
  'top-rated-lindy-certified-partner-for-hire': {
    description: 'Looking for a Lindy AI certified partner? Hire a top-rated Lindy AI expert for AI agent implementation, workflow automation, and business process optimization. Prices start from $1000.',
    keywords: 'Lindy AI partner, Lindy AI certified partner, hire Lindy AI expert, Lindy AI consultant, Lindy AI implementation, AI agent developer, Lindy AI pricing, Lindy automation expert',
  },
  '5-most-effective-automations-for-online-businesses': {
    description: 'Discover the 5 most effective AI automations for online businesses: customer support automation, email classification, meeting summaries, document extraction, and operations automation.',
    keywords: 'business automation, AI automation for business, customer support automation, email automation AI, meeting transcription AI, document automation, operations automation, save time with AI',
  },
  'pre-qualification': {
    description: 'Learn how to explode your sales copy conversion rate by 2x, 3x or 10x using pre-qualification and framing techniques. A proven psychological approach to close more high-ticket clients.',
    keywords: 'sales conversion, pre-qualification, sales psychology, high ticket sales, conversion optimization, sales funnel optimization, qualify prospects, sales copy tips',
  },
  'the-perfect-customer-lifecycle': {
    description: 'A complete blueprint for attracting, converting and retaining customers. Learn the Acquire, Convert, and Leverage framework used by 7-figure businesses.',
    keywords: 'customer lifecycle, sales funnel, lead generation, customer acquisition, conversion optimization, customer retention, marketing automation, business growth strategy',
  },
}

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl mb-8">Article Not Found</h1>
        <p className="mb-6">The article you're looking for doesn't exist.</p>
        <Link to="/articles" className="link">
          Back to Articles
        </Link>
      </div>
    )
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: ReactNode[] = []
    let currentList: string[] = []
    let listType: 'ul' | 'ol' | null = null

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType
        elements.push(
          <ListTag key={elements.length} className={listType === 'ul' ? 'list-disc pl-6 mb-6 space-y-2' : 'list-decimal pl-6 mb-6 space-y-2'}>
            {currentList.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
            ))}
          </ListTag>
        )
        currentList = []
        listType = null
      }
    }

    const parseInline = (text: string): string => {
      return text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="underline underline-offset-4 hover:text-muted" target="_blank" rel="noopener noreferrer">$1</a>')
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={elements.length} className="text-2xl mt-10 mb-4 font-serif">
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={elements.length} className="text-xl mt-8 mb-3 font-serif">
            {line.replace('### ', '')}
          </h3>
        )
      } else if (line.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList()
          listType = 'ul'
        }
        currentList.push(line.replace('- ', ''))
      } else if (/^\d+\. /.test(line)) {
        if (listType !== 'ol') {
          flushList()
          listType = 'ol'
        }
        currentList.push(line.replace(/^\d+\. /, ''))
      } else if (line.trim() === '') {
        flushList()
      } else {
        flushList()
        elements.push(
          <p key={elements.length} className="mb-6" dangerouslySetInnerHTML={{ __html: parseInline(line) }} />
        )
      }
    }

    flushList()
    return elements
  }

  // Get SEO data for this article
  const seoData = slug ? articleSEO[slug] : undefined

  // Parse date for structured data (convert "February 26, 2025" to ISO format)
  const parseDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toISOString().split('T')[0]
  }

  const structuredData = article ? {
    '@context': 'https://schema.org',
    '@graph': [
      generateArticleSchema({
        title: article.title,
        description: seoData?.description || article.excerpt,
        url: `/articles/${slug}`,
        datePublished: parseDate(article.date),
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/articles' },
        { name: article.title, url: `/articles/${slug}` },
      ]),
    ],
  } : undefined

  return (
    <article className="max-w-2xl mx-auto">
      {article && (
        <SEO
          canonicalUrl={`/articles/${slug}`}
          title={article.title}
          description={seoData?.description || article.excerpt}
          keywords={seoData?.keywords || 'AI automation, business automation, Clay, Lindy AI'}
          ogType="article"
          article={{
            publishedTime: parseDate(article.date),
            author: 'Tanay Mishra',
            section: 'AI Automation',
            tags: ['AI Automation', 'Clay', 'Lindy AI', 'Business Automation'],
          }}
          structuredData={structuredData}
        />
      )}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
          {article.title}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted">
          <div className="flex items-center gap-4">
            <span>Published</span>
            <span className="font-mono">{article.date}</span>
          </div>
          <span className="hidden sm:inline text-border-dark">|</span>
          <div className="flex items-center gap-4">
            <span>Email</span>
            <a href="mailto:mail@tanaymishra.com" className="font-mono link">
              mail@tanaymishra.com
            </a>
          </div>
        </div>
      </header>

      <div className="prose text-base leading-relaxed">
        {renderContent(article.content)}
      </div>

      <footer className="mt-16 pt-8 border-t border-border">
        <div className="bg-highlight border border-black p-6">
          <h3 className="text-xl mb-3 font-serif">Want to discuss this topic?</h3>
          <p className="text-sm text-muted mb-4">
            I'm always happy to chat about automation, AI agents, and business optimization.
          </p>
          <a
            href="mailto:mail@tanaymishra.com"
            className="inline-block bg-black text-background px-6 py-3 text-sm font-medium hover:bg-foreground/80 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-8">
          <Link to="/articles" className="text-sm link">
            &larr; Back to Articles
          </Link>
        </div>
      </footer>
    </article>
  )
}

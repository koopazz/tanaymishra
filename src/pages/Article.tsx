import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug } from '../data/articles'
import type { ReactNode } from 'react'

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

  return (
    <article className="max-w-2xl mx-auto">
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

import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function Articles() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12">Articles</h1>

      <div className="space-y-1">
        {/* Timeline gradient cap */}
        <div className="flex items-stretch">
          <div className="w-2 flex-shrink-0 mr-4">
            <div className="w-full h-4 bg-gradient-to-b from-background to-gray-300 rounded-t-full"></div>
          </div>
        </div>

        {/* Articles */}
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            className="flex items-stretch group"
          >
            <div className="w-2 flex-shrink-0 mr-4 flex flex-col items-center">
              <div className="w-0.5 flex-1 bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-black flex-shrink-0 my-1"></div>
              <div className="w-0.5 flex-1 bg-gray-300"></div>
            </div>
            <div className={`flex-1 py-3 ${article.featured ? 'bg-highlight border border-black shadow-[3px_3px_0px_#000] group-hover:shadow-[5px_5px_0px_#000] transition-shadow p-4 my-2' : 'border-l-2 border-transparent group-hover:border-black pl-4 transition-colors'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="font-medium">{article.title}</span>
                <span className="text-sm text-muted flex-shrink-0">{article.date}</span>
              </div>
              <p className="text-sm text-muted mt-1">{article.excerpt}</p>
            </div>
          </Link>
        ))}

        {/* Timeline gradient cap bottom */}
        <div className="flex items-stretch">
          <div className="w-2 flex-shrink-0 mr-4">
            <div className="w-full h-4 bg-gradient-to-t from-background to-gray-300 rounded-b-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

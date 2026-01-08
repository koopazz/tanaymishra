import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <section className="mb-16">
        <p className="text-base md:text-lg leading-relaxed">
          I'm an AI and automation consultant. I help businesses save time, grow sales, and become more productive by connecting the systems they're building to the outcomes they actually want.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-4">
          I care deeply about my clients' results. That's why I'm selective about who I work with, and why most relationships span years, not projects. I'm a strategic partner, not a pair of hands.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-4">
          Based in <strong>Bali, Indonesia</strong>. Working globally.
        </p>
      </section>

      {/* What I Do section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl mb-6">What I Do</h2>
        <div className="space-y-4 text-base">
          <div className="border-l-2 border-black pl-4">
            <strong>AI Agent Implementation</strong>
            <p className="text-muted mt-1">Cut manual workloads by up to 90%. Lindy AI certified partner.</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <strong>Clay Automation & Outbound</strong>
            <p className="text-muted mt-1">Expert Clay coaching and implementation for go-to-market teams.</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <strong>Business Process Automation</strong>
            <p className="text-muted mt-1">Identify bottlenecks, design workflows, eliminate repetitive tasks.</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <strong>Chatbot Marketing</strong>
            <p className="text-muted mt-1">High-converting Instagram and Messenger funnels with ManyChat.</p>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl">Recent Articles</h2>
          <Link to="/articles" className="text-sm link">
            View all
          </Link>
        </div>

        <div className="space-y-1">
          {/* Timeline gradient cap */}
          <div className="flex items-stretch">
            <div className="w-2 flex-shrink-0 mr-4">
              <div className="w-full h-4 bg-gradient-to-b from-background to-gray-300 rounded-t-full"></div>
            </div>
          </div>

          {/* Articles */}
          {articles.slice(0, 4).map((article) => (
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
                  <span className="text-sm text-muted">{article.date}</span>
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
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl mb-6">Certifications & Expertise</h2>
        <ul className="space-y-2 text-base">
          <li>
            <a href="https://lindy.ai" target="_blank" rel="noopener noreferrer" className="link">
              Lindy AI Certified Partner
            </a>
          </li>
          <li>
            <a href="https://claybootcamp.com/" target="_blank" rel="noopener noreferrer" className="link">
              Clay Expert, Operator & Coach
            </a>
          </li>
          <li>Infusionsoft/Keap Specialist</li>
          <li>ManyChat Chatbot Marketing Expert</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-highlight border border-black p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl mb-4">Ready to Automate?</h2>
        <p className="mb-6">
          If you're drowning in manual work, spending hours on repetitive tasks, or know your business could run smoother — let's talk.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-black text-background px-6 py-3 text-sm font-medium hover:bg-foreground/80 transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}

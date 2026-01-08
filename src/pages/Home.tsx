import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero section */}
      <section className="mb-16">
        <p className="text-base md:text-lg leading-relaxed">
          I'm a business automation consultant who helps businesses save time, grow sales & become more productive.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-4">
          If you're looking to make your business faster, easier, more fun and more profitable, we should talk.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-4">
          Based in <strong>Bali, Indonesia</strong> — working with clients globally to automate tedious, repetitive processes that make you want to claw your eyes out.
        </p>
      </section>

      {/* What I Do section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl mb-4">What I Do</h2>
        <p className="text-base md:text-lg mb-6">
          I help businesses leverage AI agents and automation to cut manual workloads by up to 90% and reassign thousands of hours of work to robots instead.
        </p>
        <div className="space-y-4 text-base">
          <div className="border-l-2 border-black pl-4">
            <strong>AI Agent Implementation</strong>
            <p className="text-muted mt-1">Cut manual workloads by up to 90%. Reassign thousands of hours from employees to AI agents. Lindy AI certified implementation & strategy.</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <strong>Clay Automation & Outbound</strong>
            <p className="text-muted mt-1">Partner with go-to-market teams to automate outbound. Sales flow automation, revenue operations optimization, and Clay expert coaching & implementation.</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <strong>Business Process Automation</strong>
            <p className="text-muted mt-1">Identify bottlenecks & inefficiencies. Design custom automation workflows, integrate tools & systems seamlessly, and eliminate repetitive tasks that drain productivity.</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <strong>Chatbot Marketing</strong>
            <p className="text-muted mt-1">Build high-converting Instagram and Facebook chatbot funnels. ManyChat automation, automated lead qualification, and 24/7 customer engagement.</p>
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
            <a href="https://claybootcamp.com/" target="_blank" rel="noopener noreferrer" className="link">
              Clay Expert, Operator & Coach
            </a>
          </li>
          <li>
            <a href="https://lindy.ai" target="_blank" rel="noopener noreferrer" className="link">
              Lindy AI Certified Partner
            </a>
          </li>
          <li>Business Automation Strategist</li>
          <li>Infusionsoft/Keap Specialist</li>
          <li>ManyChat Chatbot Marketing Expert</li>
        </ul>
      </section>

      {/* Who I Work With */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl mb-6">Who I Work With</h2>
        <ul className="space-y-2 text-base">
          <li>Online businesses & info-publishers</li>
          <li>SaaS companies</li>
          <li>Consultants & coaches</li>
          <li>Agencies looking to scale</li>
          <li>Any business drowning in manual processes</li>
        </ul>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
        <p className="text-base mb-4">My clients typically see:</p>
        <ul className="space-y-2 text-base">
          <li>50-90% reduction in manual work</li>
          <li>Thousands of hours reassigned to automation</li>
          <li>Improved conversion rates</li>
          <li>Faster response times</li>
          <li>Happier, more productive teams</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-highlight border border-black p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl mb-4">Ready to Automate?</h2>
        <p className="mb-4">
          Making business faster, easier, more fun and more profitable by leveraging automation & AI.
        </p>
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

import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import SEO, { generatePersonSchema, generateFAQSchema, generateServiceSchema } from '../components/SEO'

// FAQ data for GEO optimization - answers questions LLMs might ask
const homeFAQs = [
  {
    question: 'What is a Clay consultant and what do they do?',
    answer: 'A Clay consultant is an expert who helps businesses automate their outbound sales and lead generation using Clay, a powerful data enrichment and workflow automation platform. Clay consultants like Tanay Mishra help companies build automated prospecting workflows, enrich lead data from multiple sources, and create personalized outreach at scale. This typically results in 50-90% reduction in manual sales operations work.',
  },
  {
    question: 'What is Lindy AI and how can a Lindy AI partner help my business?',
    answer: 'Lindy AI is an AI agent platform that allows businesses to create autonomous AI assistants that can handle complex tasks like customer support, scheduling, lead qualification, and more. A Lindy AI certified partner like Tanay Mishra can design, build, and implement custom AI agents tailored to your business needs, helping you automate repetitive tasks and cut manual workloads by up to 90%.',
  },
  {
    question: 'What are AI agents and how do they help businesses?',
    answer: 'AI agents are autonomous software programs powered by artificial intelligence that can perform tasks, make decisions, and interact with systems on behalf of humans. Unlike simple chatbots, AI agents can handle complex multi-step workflows, learn from interactions, and integrate with your existing business tools. Businesses use AI agents to automate customer support, sales qualification, scheduling, data entry, and operations tasks.',
  },
  {
    question: 'How much does Lindy AI agent automation consulting cost?',
    answer: 'Lindy AI automation consulting typically starts from $5,000 onwards per project, depending on complexity. This includes workflow design, manual process automation, and integration with your existing CRM and sales tools. Most Lindy automation build projects have a turnaround time of 1-2 weeks.',
  },
  {
    question: 'What is the difference between Clay and Lindy AI?',
    answer: 'Clay is primarily focused on data enrichment and outbound sales automation - it helps you find, enrich, and reach out to prospects at scale. Lindy AI is an AI agent platform that creates autonomous assistants capable of handling conversational tasks, scheduling, and complex workflows. Many businesses use both: Clay for prospecting and lead generation, and Lindy AI for customer interactions and internal automation.',
  },
]

const services = [
  {
    name: 'Clay Automation & Outbound Sales',
    description: 'Expert Clay implementation for automated outbound sales, data enrichment, lead scoring, and revenue operations optimization. Build scalable prospecting workflows that run 24/7.',
  },
  {
    name: 'Lindy AI Agent Implementation',
    description: 'Certified Lindy AI partner services for building custom AI agents. Automate customer support, lead qualification, scheduling, and complex business workflows with intelligent AI assistants.',
  },
  {
    name: 'AI Agent Strategy & Development',
    description: 'End-to-end AI agent implementation consulting. Identify automation opportunities, design AI-powered workflows, and deploy autonomous agents that cut manual work by up to 90%.',
  },
  {
    name: 'Business Process Automation',
    description: 'Comprehensive workflow automation using Zapier, Make, n8n, and custom integrations. Eliminate repetitive tasks and connect your business tools into seamless automated systems.',
  },
]

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generatePersonSchema(),
      generateFAQSchema(homeFAQs),
      generateServiceSchema(services),
    ],
  }

  return (
    <div className="max-w-4xl mx-auto">
      <SEO
        canonicalUrl="/"
        title="Clay Expert & Lindy AI Certified Partner | AI Automation Consultant"
        description="Hire a certified Clay expert and Lindy AI partner for AI agent implementation, outbound sales automation, and business process optimization. Helping businesses save 50-90% time with intelligent AI agents and workflow automation. Based in Bali, working globally."
        keywords="Clay consultant, Clay expert, Clay coach, Clay automation, hire Clay expert, Lindy AI, Lindy AI partner, Lindy AI certified partner, hire Lindy AI expert, AI agents, AI agent implementation, AI automation consultant, business automation, workflow automation, outbound sales automation, revenue operations, sales automation, lead generation automation"
        structuredData={structuredData}
      />

      {/* Hero section */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
          Clay Expert & Lindy AI Partner for AI Automation
        </h1>
        <p className="text-base md:text-lg leading-relaxed">
          I'm an AI automation consultant who helps businesses save time, grow sales & become more productive using Clay, Lindy AI, and intelligent automation systems.
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
      <section className="bg-highlight border border-black p-6 md:p-8 mb-16">
        <h2 className="text-2xl md:text-3xl mb-4">Ready to Automate with Clay & AI Agents?</h2>
        <p className="mb-4">
          Making business faster, easier, more fun and more profitable by leveraging Clay automation, Lindy AI agents & intelligent workflow systems.
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

      {/* FAQ Section for GEO - helps LLMs understand and cite this content */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {homeFAQs.map((faq, index) => (
            <details key={index} className="border border-border p-4 group">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-muted leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

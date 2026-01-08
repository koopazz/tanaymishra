import SEO, { generateBreadcrumbSchema } from '../components/SEO'

export default function Contact() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]),
      {
        '@type': 'ContactPage',
        name: 'Contact Tanay Mishra - AI Automation Consultant',
        description: 'Get in touch for Clay automation consulting, Lindy AI implementation, or AI agent development services.',
        url: 'https://tanaymishra.com/contact',
        mainEntity: {
          '@type': 'Person',
          name: 'Tanay Mishra',
          email: 'mail@tanaymishra.com',
          telephone: '+62-813-182-32445',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bali',
            addressCountry: 'Indonesia',
          },
        },
      },
    ],
  }

  return (
    <div className="max-w-2xl mx-auto">
      <SEO
        canonicalUrl="/contact"
        title="Contact | Hire a Clay Expert & Lindy AI Partner"
        description="Contact Tanay Mishra for Clay automation consulting, Lindy AI implementation, and AI agent development. Based in Bali, working with clients globally. Schedule a free consultation."
        keywords="hire Clay consultant, contact Clay expert, Lindy AI consultation, AI automation quote, hire AI agent developer, business automation consultation, Clay expert contact"
        structuredData={structuredData}
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">Hire a Clay & AI Automation Expert</h1>

      <div className="mb-12 text-base md:text-lg leading-relaxed">
        <p className="mb-4">
          If you're drowning in manual work, spending hours on repetitive tasks, or just know your business could run smoother — let's talk.
        </p>
        <p>
          I'm selective about who I work with because I invest deeply in every client relationship. If we're a good fit, we'll likely work together for years.
        </p>
      </div>

      {/* Contact methods */}
      <div className="space-y-6 mb-12">
        <div className="border-l-2 border-black pl-4">
          <h3 className="font-medium mb-1">Email</h3>
          <a href="mailto:mail@tanaymishra.com" className="link">
            mail@tanaymishra.com
          </a>
        </div>

        <div className="border-l-2 border-black pl-4">
          <h3 className="font-medium mb-1">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/tanay-mishra-ai-automation/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            tanay-mishra-ai-automation
          </a>
        </div>

        <div className="border-l-2 border-black pl-4">
          <h3 className="font-medium mb-1">WhatsApp</h3>
          <a href="https://wa.me/6281318232445" className="link">
            +62 813 182 32445
          </a>
        </div>

        <div className="border-l-2 border-black pl-4">
          <h3 className="font-medium mb-1">YouTube</h3>
          <a
            href="https://www.youtube.com/@tanaymishra7002"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Tech Tutorials & Automation Tips
          </a>
        </div>
      </div>

      {/* What happens next */}
      <div className="bg-highlight border border-black p-6 md:p-8 mb-12">
        <h2 className="text-2xl mb-6 font-serif">What Happens Next?</h2>
        <ol className="space-y-4 text-base">
          <li className="flex gap-4">
            <span className="font-bold text-lg">1.</span>
            <div>
              <strong>Consultation Call</strong>
              <p className="text-muted text-sm mt-1">
                We'll discuss your biggest automation opportunities and see if we're a good fit.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-lg">2.</span>
            <div>
              <strong>Automation Blueprint</strong>
              <p className="text-muted text-sm mt-1">
                I'll outline exactly how I can help and what results to expect.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-lg">3.</span>
            <div>
              <strong>Implementation</strong>
              <p className="text-muted text-sm mt-1">
                We build and deploy your automation systems together.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-lg">4.</span>
            <div>
              <strong>Ongoing Support</strong>
              <p className="text-muted text-sm mt-1">
                Continuous optimization and support to ensure everything runs smoothly.
              </p>
            </div>
          </li>
        </ol>
      </div>

      {/* Location note */}
      <div className="text-center text-muted">
        <p className="mb-2">
          Based in <strong className="text-foreground">Bali, Indonesia</strong>
        </p>
        <p className="text-sm">
          Working with clients globally. Timezone differences have never been an issue.
        </p>
      </div>
    </div>
  )
}

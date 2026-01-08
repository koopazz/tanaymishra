import { testimonials } from '../data/testimonials'
import SEO, { generateBreadcrumbSchema } from '../components/SEO'

export default function References() {
  const featured = testimonials.filter(t => t.featured)
  const others = testimonials.filter(t => !t.featured)

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'References', url: '/references' },
      ]),
      {
        '@type': 'WebPage',
        name: 'Client Testimonials - AI Automation Consultant',
        description: 'Client testimonials and references for Tanay Mishra, Clay expert and Lindy AI certified partner.',
        url: 'https://tanaymishra.com/references',
      },
    ],
  }

  return (
    <div className="max-w-4xl mx-auto">
      <SEO
        canonicalUrl="/references"
        title="Client Testimonials | Clay & AI Automation Results"
        description="Read testimonials from clients who have worked with Tanay Mishra on Clay automation, Lindy AI implementation, and business process automation. Real results from real businesses."
        keywords="Clay consultant testimonials, AI automation reviews, Lindy AI partner reviews, business automation results, client testimonials, automation consultant reviews"
        structuredData={structuredData}
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">Client References & Testimonials</h1>

      {/* Positioning statement */}
      <div className="mb-16 text-base md:text-lg leading-relaxed">
        <p className="mb-4">
          I care a lot about my clients' results. Probably too much. That's why I'm selective about who I work with, and why I stick around — most of these relationships span years, not projects.
        </p>
        <p>
          I'm a strategic partner, not a pair of hands. My clients tend to be looking for the same.
        </p>
      </div>

      {/* Featured testimonials */}
      <div className="space-y-8 mb-16">
        {featured.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white border border-black p-6 md:p-8 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-shadow"
          >
            <blockquote className="text-xl md:text-2xl font-serif mb-4 leading-snug">
              "{testimonial.highlight}"
            </blockquote>
            <p className="text-muted text-sm mb-4">
              {testimonial.quote}
            </p>
            <footer className="text-sm">
              <strong>{testimonial.name}</strong>
              <span className="text-muted"> — {testimonial.title}, {testimonial.company}</span>
            </footer>
          </div>
        ))}
      </div>

      {/* Other testimonials */}
      {others.length > 0 && (
        <>
          <h2 className="text-2xl md:text-3xl mb-8">More Kind Words</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-border p-5 hover:border-black transition-colors"
              >
                <blockquote className="text-base font-serif mb-3 leading-snug">
                  "{testimonial.highlight}"
                </blockquote>
                <p className="text-muted text-sm mb-3">
                  {testimonial.quote}
                </p>
                <footer className="text-sm">
                  <strong>{testimonial.name}</strong>
                  <span className="text-muted block">{testimonial.title}, {testimonial.company}</span>
                </footer>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Privacy notice */}
      <p className="text-center text-sm text-muted mt-16">
        Please do not contact any of my past or current clients without my express permission.
      </p>
    </div>
  )
}

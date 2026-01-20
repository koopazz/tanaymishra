import { useState } from 'react'
import SEO, { generateCourseSchema, generateFAQSchema } from '../components/SEO'
import SignupModal from '../components/SignupModal'

const courseFAQs = [
  {
    question: 'Do I need to know how to code?',
    answer: "No. This course is specifically designed for non-technical professionals. If you can build a VLOOKUP, you can do this.",
  },
  {
    question: 'Do I need a Claude subscription?',
    answer: 'Yes. Claude Code requires Claude Pro ($20/month) or Claude Max ($100-200/month). The course walks you through setup.',
  },
  {
    question: 'Why is this free?',
    answer: "I run paid workshops for teams who want hands-on training. This free course is how people discover my work. Straightforward.",
  },
  {
    question: 'How long does it take to complete?',
    answer: "Most people finish in a weekend if they're focused. The goal is getting you to a working automation quickly, not overwhelming you with content.",
  },
  {
    question: 'What if I get stuck?',
    answer: "Connect with me on LinkedIn. I'm active there and happy to help.",
  },
]

export default function ClaudeCodeForGTMEngineers() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateCourseSchema({
        name: 'Claude Code for GTM Engineers',
        description: 'A free course teaching non-technical GTM, RevOps, and Sales Ops professionals how to use Claude Code.',
        url: '/claude-code-for-gtm-engineers',
      }),
      generateFAQSchema(courseFAQs),
    ],
  }

  return (
    <div className="max-w-3xl mx-auto">
      <SEO
        canonicalUrl="/claude-code-for-gtm-engineers"
        title="Claude Code for GTM Engineers | Free Course for Non-Technical Professionals"
        description="A free course teaching non-technical GTM, RevOps, and Sales Ops professionals how to use Claude Code - the AI coding agent everyone's talking about. Learn to automate lead enrichment, connect to your GTM stack, and build workflows without coding."
        keywords="Claude Code, Claude Code course, Claude Code tutorial, GTM engineers, RevOps automation, Sales Ops automation, AI automation, non-technical automation, Claude Code for beginners, lead enrichment automation, HubSpot automation, Salesforce automation"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
          Claude Code for GTM Engineers
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed">
          A free course teaching non-technical GTM, RevOps, and Sales Ops professionals how to use Claude Code — the tool everyone's talking about but few know how to actually use.
        </p>
      </header>

      {/* Opening Quote */}
      <blockquote className="border-l-4 border-black pl-6 py-2 my-10 italic text-muted">
        "Wait, you're not using Claude Code yet? Our SDR just automated our entire lead enrichment workflow last week..."
      </blockquote>

      {/* Intro Section */}
      <section className="mb-12">
        <p className="text-base leading-relaxed mb-6">
          If you've seen people on LinkedIn posting about Claude Code and felt that twinge of <em>I should probably figure this out</em> — you're in the right place.
        </p>
        <p className="text-base leading-relaxed mb-6">
          I'm <a href="https://www.linkedin.com/in/tanaymishra/" target="_blank" rel="noopener noreferrer" className="link">Tanay Mishra</a>. I'm not a developer. I'm a GTM engineer who coaches at Clay Bootcamp and has spent 10+ years in marketing automation.
        </p>
        <p className="text-base leading-relaxed mb-6">
          When Claude Code dropped, I had the same reaction you probably did: <strong>this looks powerful, but I have no idea where to start.</strong>
        </p>
        <p className="text-base leading-relaxed">
          So I figured it out. And now I'm teaching it to other non-technical GTM people — because this is too useful to let developers gatekeep.
        </p>
      </section>

      {/* Primary CTA */}
      <section className="bg-highlight border border-black p-6 md:p-8 mb-12 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-black text-background px-8 py-4 text-lg font-medium hover:bg-foreground/80 transition-colors"
        >
          Get the Free Course
        </button>
        <p className="text-sm text-muted mt-4">Join 500+ GTM professionals learning Claude Code</p>
      </section>

      <hr className="border-border my-12" />

      {/* What Is Claude Code */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl mb-6">What Is Claude Code?</h2>
        <p className="text-base leading-relaxed mb-6">
          Claude Code is Anthropic's AI coding agent that runs in your terminal. Unlike ChatGPT or regular Claude, it can actually <em>do things</em> on your computer: read files, write code, browse the web, connect to your tools, and execute multi-step workflows.
        </p>
        <p className="text-base leading-relaxed mb-6">
          For GTM teams, this means automations that were previously "we need engineering for that" are now "I built it this afternoon."
        </p>
        <p className="text-base leading-relaxed">
          The catch? It runs in a terminal. It uses commands. It looks intimidating if you've never touched a command line.
        </p>
        <p className="text-base leading-relaxed mt-6">
          <strong>That's what this course fixes.</strong>
        </p>
      </section>

      <hr className="border-border my-12" />

      {/* Why GTM People Are Paying Attention */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl mb-6">Why GTM People Are Paying Attention</h2>
        <p className="text-base leading-relaxed mb-6">
          Here's the uncomfortable truth: the RevOps and Sales Ops people who figure out Claude Code now are going to have a significant advantage over those who don't.
        </p>
        <p className="text-base leading-relaxed mb-6">
          Not because the tool itself is magic. But because:
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-black pl-4">
            <strong>You'll stop waiting on engineering.</strong>
            <p className="text-muted mt-1">That CRM automation sitting in the backlog? You'll build it yourself. The custom lead scoring model? Done in an afternoon.</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <strong>You'll automate the stuff Zapier can't handle.</strong>
            <p className="text-muted mt-1">Conditional logic. Dynamic decisions. Workflows that require actual judgment. The things that hit the wall with traditional no-code tools.</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <strong>You'll become the person who can build things.</strong>
            <p className="text-muted mt-1">In every team, there's someone who "just figures it out." With Claude Code, that person can be you.</p>
          </div>
        </div>

        <blockquote className="border-l-4 border-black pl-6 py-2 italic text-muted">
          Six months from now, Claude Code proficiency will be on job descriptions. The question is whether you'll be ahead of that curve or scrambling to catch up.
        </blockquote>
      </section>

      <hr className="border-border my-12" />

      {/* What You'll Learn */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl mb-6">What You'll Learn</h2>

        <div className="space-y-8">
          <div className="border border-border p-6">
            <h3 className="text-xl font-medium mb-3">Module 1: Installation & First Conversation</h3>
            <p className="text-muted">
              Get Claude Code running on your machine (Mac, Windows, or Linux) and have your first productive conversation. We'll cover the "Socratic approach" to prompting that gets dramatically better results than just telling Claude what to build.
            </p>
          </div>

          <div className="border border-border p-6">
            <h3 className="text-xl font-medium mb-3">Module 2: Your First GTM Automation</h3>
            <p className="text-muted">
              Build a real lead enrichment workflow from scratch. You'll take a raw lead list and automatically add company domains, employee counts, time zones, and LinkedIn URLs — work that would take hours done in minutes.
            </p>
          </div>

          <div className="border border-border p-6">
            <h3 className="text-xl font-medium mb-3">Module 3: Teaching Claude Your Workflow (CLAUDE.md)</h3>
            <p className="text-muted">
              Create a configuration file that makes Claude instantly productive on YOUR specific workflows. Your CRM field names, your data conventions, your preferences — encoded once, remembered forever.
            </p>
          </div>

          <div className="border border-border p-6">
            <h3 className="text-xl font-medium mb-3">Module 4: Connecting to Your GTM Stack (MCPs)</h3>
            <p className="text-muted">
              Connect Claude directly to HubSpot, Salesforce, Slack, and other tools. No more exporting CSVs and importing them back. Claude talks to your systems in real-time.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-border my-12" />

      {/* Who This Is For */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl mb-6">Who This Is For</h2>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-black font-bold mt-0.5">-</span>
            <span><strong>Sales Ops, Marketing Ops, and RevOps professionals</strong> who see automation opportunities everywhere but don't code.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-black font-bold mt-0.5">-</span>
            <span><strong>GTM engineers and Clay users</strong> who want to expand beyond the Clay ecosystem into more flexible tooling.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-black font-bold mt-0.5">-</span>
            <span><strong>Anyone who's tired of waiting on engineering</strong> to build automations that should take hours, not sprints.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-black font-bold mt-0.5">-</span>
            <span><strong>Non-technical professionals who are "technical enough"</strong> — you can build complex spreadsheet formulas, you understand data, you just never learned to code.</span>
          </li>
        </ul>

        <p className="text-base leading-relaxed mt-6">
          If you've been meaning to "figure out Claude Code" and just haven't gotten around to it, this is your shortcut.
        </p>
      </section>

      <hr className="border-border my-12" />

      {/* About Your Instructor */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl mb-6">About Your Instructor</h2>

        <div className="border-l-2 border-black pl-6">
          <h3 className="text-xl font-medium mb-2">Tanay Mishra</h3>
          <p className="text-muted leading-relaxed">
            GTM Engineer. Clay Bootcamp Coach. 10+ years in marketing automation (Infusionsoft → ManyChat → Zapier → Make → n8n → Clay → Claude Code). I'm not a developer — I just figure things out and teach others how to do the same.
          </p>
          <a
            href="https://www.linkedin.com/in/tanaymishra/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 link"
          >
            Follow me on LinkedIn
          </a>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="bg-highlight border border-black p-6 md:p-8 mb-12 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-black text-background px-8 py-4 text-lg font-medium hover:bg-foreground/80 transition-colors"
        >
          Get the Free Course
        </button>
        <p className="text-sm text-muted mt-4">4 modules. Hands-on projects. Built for non-technical GTM professionals.</p>
      </section>

      <hr className="border-border my-12" />

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl mb-6">FAQ</h2>
        <div className="space-y-4">
          {courseFAQs.map((faq, index) => (
            <div key={index} className="border border-border">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <span className={`text-muted transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-4 pb-4 text-muted leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-border my-12" />

      {/* Closing Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl mb-6">The GTM Teams That Automate Will Win</h2>
        <p className="text-base leading-relaxed mb-6">
          A year ago, knowing Clay was a differentiator. Now it's table stakes.
        </p>
        <p className="text-base leading-relaxed mb-6">
          Claude Code is following the same trajectory — except faster.
        </p>
        <p className="text-base leading-relaxed mb-6">
          The window to be "early" is closing. The people who figure this out now will have a head start that compounds. The people who wait will be playing catch-up.
        </p>
        <p className="text-base leading-relaxed">
          I'd rather you be in the first group.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-highlight border border-black p-6 md:p-8 mb-12 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-black text-background px-8 py-4 text-lg font-medium hover:bg-foreground/80 transition-colors"
        >
          Start Learning Claude Code Today
        </button>
        <p className="text-sm text-muted mt-4">Free course. No fluff. Built for GTM professionals.</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted py-8 border-t border-border">
        <p>
          Built by{' '}
          <a
            href="https://www.linkedin.com/in/tanaymishra/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Tanay Mishra
          </a>
          {' '}| Claude Code Academy
        </p>
      </footer>

      {/* Signup Modal */}
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

import { useState, useEffect } from 'react';
import { Search, ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './App.css';

interface Note {
  id: string;
  emoji: string;
  title: string;
  date: string;
  preview: string;
  content: string;
  section: 'pinned' | 'today' | 'yesterday' | 'previous7';
}

const notes: Note[] = [
  {
    id: '1',
    emoji: '👋',
    title: 'About Tanay Mishra',
    date: '10/3/2025',
    preview: 'Business automation consultant...',
    section: 'pinned',
    content: `I'm a business automation consultant who helps businesses **save time, grow sales & become more productive**.

If you're looking to make your business faster, easier, more fun and more profitable, we should talk.

### What I Do

I help businesses leverage AI agents and automation to cut manual workloads by up to 90% and reassign thousands of hours of work to robots instead.

Based in **Bali, Indonesia** 🌴

I work with clients globally to automate tedious, repetitive processes that make you want to claw your eyes out.

### Certifications & Expertise

- Clay expert, operator & [coach](https://claybootcamp.com/)
- [Lindy AI certified partner](https://lindy.ai)
- Business automation strategist
- Infusionsoft/Keap specialist
- ManyChat chatbot marketing expert

### Let's Connect

- [Email](mailto:mail@tanaymishra.com)
- [LinkedIn](https://www.linkedin.com/in/tanay-mishra-ai-automation/)
- [YouTube Tech Tutorials](https://www.youtube.com/@tanaymishra7002)`
  },
  {
    id: '2',
    emoji: '🚀',
    title: 'What I Do',
    date: '10/3/2025',
    preview: 'How I help businesses grow...',
    section: 'pinned',
    content: `Making business faster, easier, more fun and more profitable by leveraging automation & AI.

### Core Services

**AI Agent Implementation**
- Cut manual workloads by up to 90%
- Reassign thousands of hours from employees to AI agents
- Lindy AI certified implementation & strategy

**Clay Automation & Outbound**
- Partner with go-to-market teams to automate outbound
- Sales flow automation
- Revenue operations optimization
- Clay expert coaching & implementation

**Business Process Automation**
- Identify bottlenecks & inefficiencies
- Design custom automation workflows
- Integrate tools & systems seamlessly
- Eliminate repetitive tasks that drain productivity

**Chatbot Marketing**
- Build high-converting Instagram and Facebook chatbot funnels
- ManyChat Instagram & Messenger automation
- Automated lead qualification
- 24/7 customer engagement

### Who I Work With

- Online businesses & info-publishers
- SaaS companies
- Consultants & coaches
- Agencies looking to scale
- Any business drowning in manual processes

### Results

My clients typically see:
- 50-90% reduction in manual work
- Thousands of hours reassigned to automation
- Improved conversion rates
- Faster response times
- Happier, more productive teams

[Schedule a Consultation](mailto:mail@tanaymishra.com)`
  },
  {
    id: '3',
    emoji: '💼',
    title: 'Experience',
    date: '10/3/2025',
    preview: 'Career & background...',
    section: 'today',
    content: `### Current

**Business Automation Consultant**
*2013 - Present | Global (based in Bali)*

- Help businesses automate operations & implement AI agents
- Lindy AI certified partner
- Clay expert, operator & coach
- Specialize in Infusionsoft/Keap, chatbots, & business process automation

### Previous Roles

**Data Management Analyst**
*2011 - 2013 | Accenture, India*

- Worked as business data management analyst & database manager
- Large USA insurance client (Allstate)
- Gained foundation in data systems & process optimization

### Key Achievements

- Helped clients save thousands of hours through automation
- Implemented AI agents that cut workloads by 90%
- Built 100+ automation systems for clients worldwide
- Certified partner with leading automation platforms
- Maintained 100% client satisfaction across 10+ years

### Industries Served

- Info-commerce & online education
- SaaS & software
- Professional services
- Healthcare
- Financial services
- E-commerce

### Technical Stack

- Lindy AI
- Clay
- Infusionsoft/Keap
- ManyChat & chatbot platforms
- Zapier & Make
- Stripe & payment systems
- Various CRM & marketing automation tools`
  },
  {
    id: '4',
    emoji: '💬',
    title: 'Client Love',
    date: '10/3/2025',
    preview: 'What people say...',
    section: 'today',
    content: `### Dane Maxwell
*Founder, thefoundation.com*

"Tanay is one of the hardest working people I know. This is a man you can trust. His work ethic is insanely high. You can give him anything and he'll do it. You can completely trust Tanay with nearly any business project and count on it being completed, either by him, or by someone he will find, without you even having to think about it."

### Michelle Avis
*Co-owner, Verge Permaculture CA*

"We've worked with Tanay for well over 3 years now. He first helped us get Infusionsoft setup and get business automation really working for our business and in no time I realised that his skills extended far beyond the application of Infusionsoft - that he was a much bigger strategist. We've since continued to bring Tanay into our business for projects where we really want to think about how to best strategies our marketing & automation strategy to make things run smoothly. He's delivered tons of value & we really appreciate bringing him on to our team."

### Bill Powell
*Co-founder, The Goodness Factory*

"Hiring Tanay was the single most important reason we could expand our business and be innovative as we know any idea we come up with Tanay has a solution in short order. I trust Tanay implicitly with any technical conundrum we could come up with. Under pressure Tanay delivers time and time again with a better technical solution than I could ever come up with on time every time."

### Natasha Takahashi
*Co-founder, School of Bots | CMO, Ineffable Marketing*

"Tanay worked with me to create chatbot marketing campaigns for our clients, who are industry leaders in the infocommerce world. He was such a pleasure to work with -- very organized, moves fast to get things done effectively, constantly overdelivering, and strategic in his thought process."

### Marina Pearson
*International TEDx Speaker, Author, Coach*

"I want to put a big shout out to Tanay Mishra. Wow. He is amazing. I seriously don't know where I would be if Tanay wasn't on the team. His dedication and expertise in creating campaigns in Infusionsoft, as well as his willingness to throw himself into his role for the team, is something that I have never quite experienced."

[See All Testimonials](https://tanaymishra.com/references)`
  },
  {
    id: '5',
    emoji: '📬',
    title: "Let's Connect",
    date: '10/2/2025',
    preview: 'Ready to automate your business?...',
    section: 'yesterday',
    content: `### Ready to Make Your Business Faster, Easier & More Profitable?

If you're drowning in manual work, spending hours on repetitive tasks, or just know your business could run smoother... let's talk.

### How to Reach Me

**Email**
[mail@tanaymishra.com](mailto:mail@tanaymishra.com)

**LinkedIn**
[tanay-mishra-ai-automation](https://www.linkedin.com/in/tanay-mishra-ai-automation/)

**Phone/WhatsApp**
+62 813 182 32445

### What Happens Next?

1. **Consultation Call** - We'll discuss your biggest automation opportunities
2. **Automation Blueprint** - I'll outline exactly how I can help & what results to expect
3. **Implementation** - We build & deploy your automation systems
4. **Support** - Ongoing optimization & support to ensure everything runs smoothly

### Based in Bali, Working Globally

While I'm based in beautiful Bali, Indonesia, I work with clients all over the world. Timezone differences have never been an issue - I'm flexible and responsive.

### Let's Work Together

Whether you need:
- AI agent implementation
- Clay automation & outbound
- Chatbot marketing funnels
- Business process optimization
- Custom automation solutions

I'd love to help you save time, increase productivity & grow your business.

[Start a Project](mailto:mail@tanaymishra.com)`
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState('1');
  const [showMobileNote, setShowMobileNote] = useState(false);

  const selectedNote = notes.find(n => n.id === selectedNoteId) || notes[0];

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedNotes = {
    pinned: filteredNotes.filter(n => n.section === 'pinned'),
    today: filteredNotes.filter(n => n.section === 'today'),
    yesterday: filteredNotes.filter(n => n.section === 'yesterday'),
    previous7: filteredNotes.filter(n => n.section === 'previous7'),
  };

  const handleNoteClick = (noteId: string) => {
    setSelectedNoteId(noteId);
    setShowMobileNote(true);
    // Push state to browser history for mobile back navigation
    if (window.innerWidth < 768) {
      window.history.pushState({ noteId }, '', `#${noteId}`);
    }
  };

  const handleBackClick = () => {
    setShowMobileNote(false);
    // Use browser back if there's history
    if (window.history.state?.noteId) {
      window.history.back();
    }
  };

  // Handle browser back button and swipe navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.noteId) {
        setSelectedNoteId(event.state.noteId);
        setShowMobileNote(true);
      } else {
        setShowMobileNote(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased">
      <div className="h-screen flex bg-white">
        {/* Sidebar - hidden on mobile when note is showing */}
        <div className={`w-full md:w-[320px] border-r border-[#d4d4d4] h-screen flex flex-col bg-[#fafaf8] ${showMobileNote ? 'hidden md:flex' : 'flex'}`}>
          {/* Header with traffic lights and compose button */}
          <div className="w-full md:w-[320px]">
            <div className="px-4 py-2.5 flex items-center justify-between">
              {/* Traffic light buttons */}
              <div className="flex items-center gap-2">
                <button
                  className="cursor-pointer group relative"
                  aria-label="Close tab"
                >
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] group-hover:bg-[#FF5F57]/90"></div>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none text-[10px] font-bold">
                    <span className="text-[#8B0000]">×</span>
                  </span>
                </button>
                <button className="group relative cursor-default">
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] group-hover:bg-[#FEBC2E]/90"></div>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none text-[10px] font-bold">
                    <span className="text-[#8B6508]">−</span>
                  </span>
                </button>
                <button className="group relative cursor-default">
                  <div className="w-3 h-3 rounded-full bg-[#28C840] group-hover:bg-[#28C840]/90"></div>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none text-[10px] font-bold">
                    <span className="text-[#006400]">+</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-4 pb-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                <Search className="text-[#8e8e93]" size={13} strokeWidth={2.5} />
              </div>
              <input
                id="search"
                placeholder="Search"
                className="w-full pl-8 pr-3 py-1.5 rounded-md text-[13px] placeholder:text-[#8e8e93] focus:outline-none bg-white border border-[#d1d1d6]"
                aria-label="Search notes"
                autoComplete="off"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Notes list */}
          <div className="flex-1 overflow-auto">
            {groupedNotes.pinned.length > 0 && (
              <div className="mb-1">
                <div className="px-4 py-1.5 flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-[#8e8e93] tracking-wider">📌 Pinned</span>
                </div>
                {groupedNotes.pinned.map(note => (
                  <div
                    key={note.id}
                    onClick={() => handleNoteClick(note.id)}
                    className={`px-4 py-2.5 cursor-pointer border-b border-[#e5e5e5] ${
                      selectedNoteId === note.id ? 'bg-[#FFD960]' : 'hover:bg-[#f0f0ee]'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-base leading-none mt-0.5">{note.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[15px] text-black truncate">{note.title}</div>
                        <div className="text-[12px] text-[#8e8e93] mt-0.5">
                          <span className="font-medium">{note.date}</span>
                          <span className="ml-1 font-normal">{note.preview}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {groupedNotes.today.length > 0 && (
              <div className="mb-1">
                <div className="px-4 py-1.5">
                  <span className="text-[11px] font-bold text-[#8e8e93] tracking-wider">Today</span>
                </div>
                {groupedNotes.today.map(note => (
                  <div
                    key={note.id}
                    onClick={() => handleNoteClick(note.id)}
                    className={`px-4 py-2.5 cursor-pointer border-b border-[#e5e5e5] ${
                      selectedNoteId === note.id ? 'bg-[#FFD960]' : 'hover:bg-[#f0f0ee]'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-base leading-none mt-0.5">{note.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[15px] text-black truncate">{note.title}</div>
                        <div className="text-[12px] text-[#8e8e93] mt-0.5">
                          <span className="font-medium">{note.date}</span>
                          <span className="ml-1 font-normal">{note.preview}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {groupedNotes.yesterday.length > 0 && (
              <div className="mb-1">
                <div className="px-4 py-1.5">
                  <span className="text-[11px] font-bold text-[#8e8e93] tracking-wider">Yesterday</span>
                </div>
                {groupedNotes.yesterday.map(note => (
                  <div
                    key={note.id}
                    onClick={() => handleNoteClick(note.id)}
                    className={`px-4 py-2.5 cursor-pointer border-b border-[#e5e5e5] ${
                      selectedNoteId === note.id ? 'bg-[#FFD960]' : 'hover:bg-[#f0f0ee]'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-base leading-none mt-0.5">{note.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[15px] text-black truncate">{note.title}</div>
                        <div className="text-[12px] text-[#8e8e93] mt-0.5">
                          <span className="font-medium">{note.date}</span>
                          <span className="ml-1 font-normal">{note.preview}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {groupedNotes.previous7.length > 0 && (
              <div className="mb-1">
                <div className="px-4 py-1.5">
                  <span className="text-[11px] font-bold text-[#8e8e93] tracking-wider">Previous 7 Days</span>
                </div>
                {groupedNotes.previous7.map(note => (
                  <div
                    key={note.id}
                    onClick={() => handleNoteClick(note.id)}
                    className={`px-4 py-2.5 cursor-pointer border-b border-[#e5e5e5] ${
                      selectedNoteId === note.id ? 'bg-[#FFD960]' : 'hover:bg-[#f0f0ee]'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-base leading-none mt-0.5">{note.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[15px] text-black truncate">{note.title}</div>
                        <div className="text-[12px] text-[#8e8e93] mt-0.5">
                          <span className="font-medium">{note.date}</span>
                          <span className="ml-1 font-normal">{note.preview}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main content area - shown on desktop always, on mobile only when note is selected */}
        <div className={`flex-1 h-screen overflow-auto bg-white ${!showMobileNote ? 'hidden md:block' : 'block'}`}>
          <div className="w-full px-4 md:px-6 py-6">
            {/* Back button - only visible on mobile */}
            <button
              onClick={handleBackClick}
              className="md:hidden flex items-center gap-1 text-[#FF9500] mb-4 hover:opacity-70 transition-opacity"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
              <span className="text-[15px] font-medium">Back</span>
            </button>

            {/* Date and title */}
            <div className="mb-6">
              <div className="flex justify-center items-center mb-3">
                <p className="text-[#8e8e93] text-[11px] font-medium">October 3, 2025 at 8:24 AM</p>
              </div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="text-[28px]">{selectedNote.emoji}</span>
                <h1 className="text-[28px] font-bold text-black leading-tight">{selectedNote.title}</h1>
              </div>
            </div>

            {/* Markdown content */}
            <div className="markdown-body text-[14px] leading-[1.6]">
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a {...props} target="_blank" rel="noopener noreferrer" />
                  ),
                }}
              >
                {selectedNote.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { Search, SquarePen, ChevronLeft } from 'lucide-react';
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
    title: 'about tanay mishra',
    date: '10/3/2025',
    preview: 'business automation consultant...',
    section: 'pinned',
    content: `i'm a business automation consultant who helps businesses **save time, grow sales & become more productive**

if you're looking to make your business faster, easier, more fun and more profitable, we should talk

### what i do

i help businesses leverage AI agents and automation to cut manual workloads by up to 90% and reassign thousands of hours of work to robots instead

based in **bali, indonesia** 🌴

i work with clients globally to automate tedious, repetitive processes that make you want to claw your eyes out

### certifications & expertise

- clay expert, operator & [coach](https://claybootcamp.com/)
- [lindy ai certified partner](https://lindy.ai)
- business automation strategist
- infusionsoft/keap specialist
- manychat chatbot marketing expert

### let's connect

- [email](mailto:mail@tanaymishra.com)
- [linkedin](https://www.linkedin.com/in/tanay-mishra-ai-automation/)
- [youtube tech tutorials](https://www.youtube.com/@tanaymishra7002)`
  },
  {
    id: '2',
    emoji: '🚀',
    title: 'what i do',
    date: '10/3/2025',
    preview: 'how i help businesses grow...',
    section: 'pinned',
    content: `making business faster, easier, more fun and more profitable by leveraging automation & ai

### core services

**ai agent implementation**
- cut manual workloads by up to 90%
- reassign thousands of hours from employees to AI agents
- lindy ai certified implementation & strategy

**clay automation & outbound**
- partner with go-to-market teams to automate outbound
- sales flow automation
- revenue operations optimization
- clay expert coaching & implementation

**business process automation**
- identify bottlenecks & inefficiencies
- design custom automation workflows
- integrate tools & systems seamlessly
- eliminate repetitive tasks that drain productivity

**chatbot marketing**
- build high-converting instagram and facebook chatbot funnels
- manychat instagram & messenger automation
- automated lead qualification
- 24/7 customer engagement

### who i work with

- online businesses & info-publishers
- saas companies
- consultants & coaches
- agencies looking to scale
- any business drowning in manual processes

### results

my clients typically see:
- 50-90% reduction in manual work
- thousands of hours reassigned to automation
- improved conversion rates
- faster response times
- happier, more productive teams

[schedule a consultation](mailto:mail@tanaymishra.com)`
  },
  {
    id: '3',
    emoji: '💼',
    title: 'experience',
    date: '10/3/2025',
    preview: 'career & background...',
    section: 'today',
    content: `### current

**business automation consultant**
*2013 - present | global (based in bali)*

- help businesses automate operations & implement AI agents
- lindy ai certified partner
- clay expert, operator & coach
- specialize in infusionsoft/keap, chatbots, & business process automation

### previous roles

**data management analyst**
*2011 - 2013 | accenture, india*

- worked as business data management analyst & database manager
- large usa insurance client (allstate)
- gained foundation in data systems & process optimization

### key achievements

- helped clients save thousands of hours through automation
- implemented AI agents that cut workloads by 90%
- built 100+ automation systems for clients worldwide
- certified partner with leading automation platforms
- maintained 100% client satisfaction across 10+ years

### industries served

- info-commerce & online education
- saas & software
- professional services
- healthcare
- financial services
- e-commerce

### technical stack

- lindy ai
- clay
- infusionsoft/keap
- manychat & chatbot platforms
- zapier & make
- stripe & payment systems
- various crm & marketing automation tools`
  },
  {
    id: '4',
    emoji: '💬',
    title: 'client love',
    date: '10/3/2025',
    preview: 'what people say...',
    section: 'today',
    content: `### dane maxwell
*founder, thefoundation.com*

"tanay is one of the hardest working people i know. this is a man you can trust. his work ethic is insanely high. you can give him anything and he'll do it. you can completely trust tanay with nearly any business project and count on it being completed, either by him, or by someone he will find, without you even having to think about it."

### michelle avis
*co-owner, verge permaculture ca*

"we've worked with tanay for well over 3 years now. he first helped us get infusionsoft setup and get business automation really working for our business and in no time i realised that his skills extended far beyond the application of infusionsoft - that he was a much bigger strategist. we've since continued to bring tanay into our business for projects where we really want to think about how to best strategies our marketing & automation strategy to make things run smoothly. he's delivered tons of value & we really appreciate bringing him on to our team."

### bill powell
*co-founder, the goodness factory*

"hiring tanay was the single most important reason we could expand our business and be innovative as we know any idea we come up with tanay has a solution in short order. i trust tanay implicitly with any technical conundrum we could come up with. under pressure tanay delivers time and time again with a better technical solution than i could ever come up with on time every time."

### natasha takahashi
*co-founder, school of bots | cmo, ineffable marketing*

"tanay worked with me to create chatbot marketing campaigns for our clients, who are industry leaders in the infocommerce world. he was such a pleasure to work with -- very organized, moves fast to get things done effectively, constantly overdelivering, and strategic in his thought process."

### marina pearson
*international tedx speaker, author, coach*

"i want to put a big shout out to tanay mishra. wow. he is amazing. i seriously don't know where i would be if tanay wasn't on the team. his dedication and expertise in creating campaigns in infusionsoft, as well as his willingness to throw himself into his role for the team, is something that i have never quite experienced."

[see all testimonials](https://references.tanaymishra.com/)`
  },
  {
    id: '5',
    emoji: '📬',
    title: "let's connect",
    date: '10/2/2025',
    preview: 'ready to automate your business?...',
    section: 'yesterday',
    content: `### ready to make your business faster, easier & more profitable?

if you're drowning in manual work, spending hours on repetitive tasks, or just know your business could run smoother... let's talk

### how to reach me

**email**
[mail@tanaymishra.com](mailto:mail@tanaymishra.com)

**linkedin**
[tanay-mishra-ai-automation](https://www.linkedin.com/in/tanay-mishra-ai-automation/)

**phone/whatsapp**
+62 813 182 32445

### what happens next?

1. **consultation call** - we'll discuss your biggest automation opportunities
2. **automation blueprint** - i'll outline exactly how i can help & what results to expect
3. **implementation** - we build & deploy your automation systems
4. **support** - ongoing optimization & support to ensure everything runs smoothly

### based in bali, working globally

while i'm based in beautiful bali, indonesia, i work with clients all over the world. timezone differences have never been an issue - i'm flexible and responsive.

### let's work together

whether you need:
- ai agent implementation
- clay automation & outbound
- chatbot marketing funnels
- business process optimization
- custom automation solutions

i'd love to help you save time, increase productivity & grow your business

[start a project](mailto:mail@tanaymishra.com)`
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

              {/* Compose button */}
              <button
                aria-label="Create new note"
                className="p-2 hover:bg-[#e8e8e6] rounded-md transition-colors"
              >
                <SquarePen className="text-[#8e8e93]" size={16} strokeWidth={1.5} />
              </button>
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
                  <span className="text-[11px] font-bold text-[#8e8e93] uppercase tracking-wider">📌 Pinned</span>
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
                  <span className="text-[11px] font-bold text-[#8e8e93] uppercase tracking-wider">Today</span>
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
                  <span className="text-[11px] font-bold text-[#8e8e93] uppercase tracking-wider">Yesterday</span>
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
                  <span className="text-[11px] font-bold text-[#8e8e93] uppercase tracking-wider">Previous 7 Days</span>
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
              <span className="text-[15px] font-medium">back</span>
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

export interface Testimonial {
  name: string
  title: string
  company: string
  quote: string
  highlight: string
  image?: string
  featured?: boolean
}

export const testimonials: Testimonial[] = [
  {
    name: 'Dane Maxwell',
    title: 'Founder',
    company: 'TheFoundation.com',
    highlight: 'Tanay is one of the hardest working people I know. This is a man you can trust.',
    quote: 'His work ethic is insanely high. You can give him anything and he\'ll do it. You can completely trust Tanay with nearly any business project and count on it being completed, either by him, or by someone he will find, without you even having to think about it.',
    featured: true
  },
  {
    name: 'Michelle Avis',
    title: 'Co-Owner',
    company: 'Verge Permaculture CA',
    highlight: 'His skills extended far beyond the application - he was a much bigger strategist.',
    quote: 'We\'ve worked with Tanay for well over 3 years now. He first helped us get Infusionsoft setup and get business automation really working for our business and in no time I realised that his skills extended far beyond the application of Infusionsoft - that he was a much bigger strategist. He\'s delivered tons of value & we really appreciate bringing him on to our team.',
    featured: true
  },
  {
    name: 'Bill Powell',
    title: 'Co-Founder',
    company: 'The Goodness Factory',
    highlight: 'Hiring Tanay was the single most important reason we could expand our business.',
    quote: 'As a small marketing agency it is important that every single team member wears multiple hats, be able to adapt on the fly to the needs of the client, and trust that they can get it done no matter what. I trust Tanay implicitly with any technical conundrum we could come up with. Under pressure Tanay delivers time and time again with a better technical solution than I could ever come up with on time every time.',
    featured: true
  },
  {
    name: 'Natasha Takahashi',
    title: 'Co-Founder, School of Bots | CMO',
    company: 'Ineffable Marketing',
    highlight: 'Very organized, moves fast to get things done effectively, constantly overdelivering.',
    quote: 'Tanay worked with me to create chatbot marketing campaigns for our clients, who are industry leaders in the infocommerce world. He was such a pleasure to work with -- very organized, moves fast to get things done effectively, constantly overdelivering, and strategic in his thought process. If you have the opportunity to work with him on chatbot projects, take it!',
    featured: true
  },
  {
    name: 'Dylan Bartram',
    title: 'Mortgage Loan Advisor',
    company: 'NMLS# 1428415',
    highlight: 'Tanay is able to take the ideas that you have and put those into actual systems that make you money.',
    quote: 'Before I started working with Tanay, I would have these ideas on what I would want to do to make my business grow with more automation. Tanay is able to take the ideas that you have (as a creative & as an entrepreneur) and put those into actual systems that make you money - by streamlining your time & streamlining your efficiency.',
    featured: true
  },
  {
    name: 'Marina Pearson',
    title: 'International TEDx Speaker, Author',
    company: 'Coach',
    highlight: 'I seriously don\'t know where I would be if Tanay wasn\'t on the team.',
    quote: 'His dedication and expertise in creating campaigns in Infusionsoft, as well as his willingness to throw himself into his role for the team, is something that I have never quite experienced.',
    featured: false
  },
  {
    name: 'Andrew Pancholi',
    title: 'Founder',
    company: 'CyclesAnalysis.com',
    highlight: 'Not only did he deliver what we asked for, he also showed us ways for optimizing our systems.',
    quote: 'He is efficient, courteous and very easy to work with. We are looking forward to the next phase of working with him!',
    featured: false
  },
  {
    name: 'Ronald Allen',
    title: 'CEO',
    company: 'Exigo Business Solutions',
    highlight: 'An excellent resource to help build out my Infusionsoft campaign.',
    quote: 'Not only did he complete it on time, his explanation helped me be able to follow the complex tagging requirements of the campaign. The campaign is running great, and as a result of the tagging process, I am able to get clear and insightful updates on my Infusionsoft dashboard.',
    featured: false
  },
  {
    name: 'Princess D Love',
    title: 'CFO & COO',
    company: 'FrontierTrainings.com',
    highlight: 'Tanay has been very proactive, highly supportive and extremely organised.',
    quote: 'He goes out of his way to find solutions for his clients. He has saved me time, effort and a lot of stress in my otherwise busy work life. I highly recommend him and his services.',
    featured: false
  }
]

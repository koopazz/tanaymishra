# Apple Notes Clone - UI/UX Documentation

## Project Goal
Redesign tanaymishra.com into an Apple Notes-inspired interface with pixel-perfect attention to detail.

## Design System

### Colors
- **Sidebar Background**: `#fafaf8` (warm cream/beige)
- **Main Content Background**: `#ffffff` (pure white)
- **Border Colors**:
  - Sidebar border: `#d4d4d4`
  - Note item borders: `#e5e5e5`
  - Search input border: `#d1d1d6`
- **Text Colors**:
  - Primary text: `#1d1d1f` (near black)
  - Secondary/muted text: `#8e8e93` (gray)
- **Accent Colors**:
  - Selected note highlight: `#FFD960` (yellow)
  - Hyperlinks: `#e2a727` (golden orange)
  - Back button: `#FF9500` (iOS orange)
  - Hover background: `#f0f0ee` (light beige), `#e8e8e6` (darker beige for buttons)
- **macOS Traffic Lights**:
  - Red: `#FF5F57`
  - Yellow: `#FEBC2E`
  - Green: `#28C840`

### Typography
- **Font Family**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif`
- **Sidebar Fonts**:
  - Section headers: 11px, bold, uppercase, wide tracking
  - Note titles: 15px, semi-bold
  - Note previews: 12px (date is medium weight, preview text is normal)
  - Search placeholder: 13px
- **Main Content Fonts**:
  - Date timestamp: 11px, medium weight
  - Note title: 28px, bold
  - Body text: 14px
  - Headings (h3): 17px (1.0625rem), semi-bold
  - Links: 14px, underlined

### Spacing & Layout
- **Sidebar Width**: 320px (fixed)
- **Content Padding**:
  - Sidebar horizontal: 16px (px-4)
  - Main content: 16px mobile, 24px desktop (px-4 md:px-6)
  - Main content is full-width (no max-width constraint)
- **Vertical Spacing**:
  - Traffic lights section: py-2.5 (10px)
  - Search bar: pb-2 (8px)
  - Note items: py-2.5 (10px)
  - Section headers: py-1.5 (6px)
  - Content top: py-6 (24px)

### Components

#### 1. macOS Traffic Light Buttons
- **Size**: 12px diameter circles
- **Spacing**: 8px gap between buttons
- **Behavior**:
  - Show symbols (×, −, +) on hover
  - Symbol opacity transitions from 0 to 1
  - Background opacity reduces to 90% on hover
  - Red button has cursor-pointer, others cursor-default

#### 2. Sidebar
- **Structure**:
  - Fixed width (320px)
  - Warm cream background (#fafaf8)
  - Contains: traffic lights, compose button, search, note list
- **Note List Sections** (in order):
  1. 📌 Pinned
  2. Today
  3. Yesterday
  4. Previous 7 Days
- **Note Item Layout**:
  - Emoji (16px baseline) + Title + Preview
  - Selected state: Yellow highlight (#FFD960)
  - Hover state: Light beige (#f0f0ee)
  - Border-bottom on each item

#### 3. Search Bar
- **Style**:
  - White background
  - Rounded corners (rounded-md)
  - Left-aligned search icon (13px, gray)
  - 13px placeholder text
  - Padding: py-1.5, pl-8, pr-3
  - Border: 1px solid #d1d1d6

#### 4. Compose Button
- **Position**: Top right of sidebar header
- **Icon**: Square pen (SquarePen from lucide-react)
- **Size**: 16px icon with 1.5px stroke width
- **Hover**: Background changes to #e8e8e6

#### 5. Main Content Area
- **Structure**:
  - Full width container (no max-width)
  - Minimal left padding (starts close to sidebar)
  - Pure white background
- **Content Hierarchy**:
  1. Date/timestamp (centered, 11px, gray)
  2. Title with emoji (28px, bold, left-aligned)
  3. Markdown body content (14px)

#### 6. Markdown Content Styling
- **Paragraphs**: 14px, 1rem bottom margin, #1d1d1f color
- **Headings (h3)**: 17px, semi-bold, 1.5rem top margin, 0.75rem bottom margin
- **Lists**:
  - Disc bullet style
  - 1.5rem left padding
  - 0.5rem spacing between items
- **Links**:
  - Color: #e2a727 (golden orange)
  - Always underlined
  - Opens in new tab (_blank)
  - Hover: maintains underline

#### 7. Scrollbar Styling
- **Width**: 10px
- **Track**: Transparent
- **Thumb**: rgba(0, 0, 0, 0.15), 5px border-radius
- **Thumb Hover**: rgba(0, 0, 0, 0.25)

### Responsive Design

#### Desktop (≥768px)
- Two-column layout: Sidebar (320px) + Content (flex-1)
- Both columns always visible
- Sidebar fixed width
- Content area flexible

#### Mobile (<768px)
- **Default View**: Directory only (notes list)
- **Note View**: Full-screen note with back button
- **Navigation**:
  - Click note → Shows note, hides directory
  - Click back arrow → Shows directory, hides note
  - Back button format: `< Notes` in iOS orange (#FF9500)
  - Back button positioned at top-left of content area

### Interaction Patterns

1. **Note Selection**:
   - Click note → Background turns yellow (#FFD960)
   - Content updates to show selected note
   - On mobile: Switches to note view

2. **Hover States**:
   - Traffic lights: Show symbols
   - Compose button: Background lightens
   - Note items: Background lightens to #f0f0ee
   - Links: Underline persists

3. **Search**:
   - Filters notes by title or content
   - Real-time filtering
   - Case-insensitive

4. **Mobile Navigation**:
   - Directory → Note: Smooth transition
   - Back button returns to directory
   - No sidebar visible when viewing note

### Technical Implementation

#### Stack
- React 19 with TypeScript
- Vite for build tooling
- Tailwind CSS v3 for styling
- react-markdown for content rendering
- lucide-react for icons

#### Key Features
- **State Management**: useState for search, selected note, mobile view toggle
- **Responsive Classes**: Tailwind's `md:` prefix for breakpoint-specific styles
- **Note Data Structure**:
  ```typescript
  interface Note {
    id: string;
    emoji: string;
    title: string;
    date: string;
    preview: string;
    content: string; // Markdown format
    section: 'pinned' | 'today' | 'yesterday' | 'previous7';
  }
  ```

## Design Principles Applied

1. **Minimalism**: Clean, uncluttered interface with ample whitespace
2. **Consistency**: Unified color palette, consistent spacing rhythm
3. **Readability**: Optimized typography with proper line-height and font sizes
4. **Hierarchy**: Clear visual hierarchy through size, weight, and color
5. **Responsiveness**: Thoughtful mobile experience with simplified navigation
6. **Apple Aesthetic**: Warm neutrals, precise spacing, subtle interactions
7. **Accessibility**: Proper ARIA labels, semantic HTML, keyboard navigation

## Content Structure

The site features 5 strategically designed notes with real content:

1. **👋 about me** (pinned)
   - Personal introduction and background
   - Current role and expertise

2. **🚀 what i do** (pinned)
   - Services offered (growth strategies, automation, AI integration)
   - Value proposition and approach

3. **💼 experience** (today)
   - Professional background
   - Key achievements and skills

4. **💬 client love** (today)
   - Client testimonials and case studies
   - Proof of results and impact

5. **📬 let's connect** (yesterday)
   - Contact information and collaboration opportunities
   - Links to other platforms

## SEO Optimization

Comprehensive SEO implementation for maximum discoverability:

- **Meta Tags**: Title, description, keywords, author, robots directive
- **Open Graph Protocol**: Rich previews for Facebook, LinkedIn sharing
- **Twitter Cards**: Optimized Twitter sharing with summary cards
- **JSON-LD Structured Data**: Schema.org Person markup for Google Knowledge Graph
- **robots.txt**: Search engine crawling instructions
- **sitemap.xml**: Complete site structure for search engines
- **Canonical URLs**: Prevents duplicate content issues
- **Theme Color**: Matches sidebar color (#fafaf8) for browser UI

## Deployment

- **Version Control**: Git repository with descriptive commits
- **GitHub Repository**: https://github.com/koopazz/tanaymishra
- **Authentication**: SSH key-based authentication for secure pushes
- **Hosting**: Cloudflare Pages (free tier)
- **Live URL**: https://tanaymishra.com
- **CI/CD**: Automatic deployment on git push to main branch
- **Build Configuration**:
  - Build command: `npm run build`
  - Output directory: `dist`
  - Framework: Vite

## Future Enhancements

- Add dark mode support
- Implement smooth page transitions
- Add custom domain (tanaymishra.com)
- Consider adding analytics (privacy-focused)
- Add more interactive elements
- Implement lazy loading for performance

## Design Decisions & Rationale

- **Why warm cream sidebar?** Creates visual separation without harsh contrast
- **Why yellow selection?** Matches macOS Notes app, high visibility
- **Why minimal padding?** Maximizes reading area, feels spacious
- **Why underlined links?** Clear affordance, better accessibility
- **Why mobile directory-first?** Natural hierarchy - browse then read
- **Why no max-width?** Content flows naturally, adapts to any screen size

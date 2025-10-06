# Design Guidelines: Associação Resgatados para Resgatar

## Design Approach: Custom Brand-Centered Design
This is a faith-based non-profit institution requiring a warm, trustworthy, and inspiring visual identity that communicates hope and credibility.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Dark Blue: `#1E3A8A` (212 78% 33%) - Main brand color for headers, CTAs, trust elements
- White: `#FFFFFF` - Clean backgrounds, text on dark areas
- Soft Gold: `#D4AF37` (45 56% 53%) - Accent for highlights, achievements, divine touch

**Supporting Colors:**
- Light Blue: `#DBEAFE` (219 95% 95%) - Section backgrounds, cards
- Dark Text: `#1F2937` (220 39% 18%) - Body text
- Gray: `#6B7280` (220 14% 46%) - Secondary text

### B. Typography
**Font Family:** Inter or Poppins (Google Fonts via CDN)

**Hierarchy:**
- Hero Headlines: text-5xl to text-6xl, font-bold
- Section Titles: text-3xl to text-4xl, font-semibold
- Card Titles: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg, font-normal
- Captions: text-sm, font-light

### C. Layout System
**Spacing Units:** Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Card spacing: p-6 to p-8
- Component gaps: gap-6 to gap-8

**Container Widths:**
- max-w-7xl for main sections
- max-w-4xl for text-heavy content
- max-w-6xl for card grids

### D. Component Specifications

**Hero Section (Home):**
- Full-width background image (rescue/community work scene)
- Dark overlay (bg-black/50) for text readability
- Centered content with main headline and dual CTAs
- Hero buttons with blur backdrop (backdrop-blur-sm bg-white/10) when on images
- Height: min-h-[600px] to min-h-[700px]

**Cards (Projects/Testimonials):**
- White background with subtle shadow: shadow-lg hover:shadow-xl
- Rounded corners: rounded-xl
- Image aspect ratio: aspect-video for project cards
- Hover lift effect: transition-transform hover:-translate-y-1

**Navigation:**
- Fixed top navbar: sticky top-0 z-50
- Dark blue background with white text
- Logo on left (cross icon + text)
- Responsive hamburger menu for mobile
- Active state with gold underline

**Footer:**
- Dark blue background (#1E3A8A)
- Multi-column layout: contact info, quick links, social media
- Gold divider line above
- Newsletter signup field
- Scroll-to-top button (gold, bottom-right)

**Donation Section:**
- Prominent PIX QR code display
- Card payment form with Stripe styling
- Recurring donation toggle with gold accent
- Trust indicators (security badges, transparency message)

**Forms (Partner/Contact):**
- Clean, spacious inputs with border-gray-300
- Focus state: ring-2 ring-blue-600
- Submit button: bg-blue-900 with gold hover effect
- Success/error states with appropriate colors

### E. Images & Media

**Required Images:**
1. **Hero Banner** (Home): Community/rescue scene, warm and hopeful tone
2. **Mission Section**: Team working together, helping people
3. **Project Cards**: Various rescue operations, community events (6-8 images)
4. **Team Photos** (About): Staff/volunteers in action
5. **Partner Logos**: Placeholder grids for church/business partners
6. **Testimonial Photos**: Before/after or portrait shots
7. **Contact Page**: Office/facility exterior

**Image Treatment:**
- Rounded corners on all images (rounded-lg to rounded-xl)
- Subtle border on standalone images
- Overlay gradients on hero/background images
- Optimized loading with placeholder backgrounds

### F. Animations & Interactions
**Framer Motion Usage (Minimal):**
- Fade-in on scroll for section reveals
- Gentle scale on card hover
- Smooth page transitions
- Modal slide-in for project details
- No distracting auto-play animations

**Transition Classes:**
- transition-all duration-300 for most interactions
- hover:scale-105 for cards
- hover:shadow-2xl for elevated elements

### G. Accessibility & Responsiveness
- Mobile-first approach with sm:, md:, lg:, xl: breakpoints
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Touch-friendly button sizes (min 44px height)
- High contrast text ratios
- Focus indicators on all interactive elements

### H. Special Features
- WhatsApp floating button (green, bottom-right on mobile)
- Newsletter modal with EmailJS integration
- Filterable project grid with category pills (gold active state)
- Google Maps iframe with rounded corners and shadow
- Downloadable statute with document icon

### I. Content Tone & Messaging
- **Voice:** Compassionate, hopeful, faith-centered
- **Headlines:** Action-oriented, inspiring
- **CTAs:** Clear, urgent ("Doe Agora", "Seja um Parceiro")
- **Body:** Storytelling approach with transformation narratives
- **Credibility:** Display certifications, statistics, partner logos

## Key Design Principles
1. **Trust Through Transparency:** Clear donation tracking, visible impact metrics
2. **Emotional Connection:** Use authentic photography, real testimonials
3. **Spiritual Identity:** Subtle cross elements, scripture references, faith-based language
4. **Action-Oriented:** Multiple conversion paths (donate, partner, volunteer)
5. **Mobile-Optimized:** Most donors/visitors will be on mobile devices
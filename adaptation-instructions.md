# Landio Template Adaptation Guide for Agent Y

**Version:** 1.0  
**Purpose:** Adapt the Landio landing page template with Agent Y content while preserving design integrity  
**Target:** AI Agents performing template adaptation tasks  
**Prerequisites:** Completed content extraction from Agent Y product page

---

## Table of Contents

1. [Overview](#overview)
2. [Template Architecture](#template-architecture)
3. [Design System & Preservation Rules](#design-system--preservation-rules)
4. [Pre-Adaptation Checklist](#pre-adaptation-checklist)
5. [Section-by-Section Adaptation Guide](#section-by-section-adaptation-guide)
6. [Component Usage Guidelines](#component-usage-guidelines)
7. [Animation & Motion Patterns](#animation--motion-patterns)
8. [Content Adaptation Best Practices](#content-adaptation-best-practices)
9. [Testing & Quality Assurance](#testing--quality-assurance)
10. [Common Pitfalls & Solutions](#common-pitfalls--solutions)
11. [Post-Adaptation Checklist](#post-adaptation-checklist)

---

## Overview

### Mission Statement

Transform the Landio AI Agency landing page template into Agent Y's product page by replacing content while **preserving 100% of the design system, component structure, and animation patterns**.

### Core Principles

1. **Content Fidelity**: Agent Y's message, features, and brand voice must be accurately represented
2. **Design Preservation**: Landio's visual identity remains completely intact
3. **Component Reuse**: Use existing components without modification
4. **Animation Integrity**: Maintain all Framer Motion animations
5. **Responsive Design**: Preserve mobile, tablet, and desktop layouts
6. **Hybrid Flexibility**: Keep all sections but adapt content density

### What Gets Changed

✅ Text content (headlines, descriptions, body copy)  
✅ Feature lists and descriptions  
✅ Pricing tiers and values  
✅ Testimonials and reviews  
✅ FAQ questions and answers  
✅ Company/team information  
✅ CTA button text and URLs  
✅ Navigation links and labels  

### What NEVER Changes

❌ Design system (colors, typography, spacing)  
❌ Component APIs and prop structures  
❌ Framer Motion animation configurations  
❌ Layout grids and breakpoints  
❌ CSS classes and Tailwind utilities  
❌ Component file structure  
❌ UI component implementations  
❌ Build configuration  

---

## Template Architecture

### Project Structure

```
d:\Work\agenty-website\
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Navigation header (MODIFY: nav links, brand name, CTAs)
│   │   │   ├── Footer.jsx          # Site footer (MODIFY: links, copyright, contact)
│   │   │   └── index.js            # Exports
│   │   ├── sections/
│   │   │   ├── Hero.jsx            # Hero section (MODIFY: headline, subheadline, CTAs)
│   │   │   ├── DataAnalysis.jsx    # Quote/testimonial (MODIFY: quote, attribution)
│   │   │   ├── Benefits.jsx        # Benefits cards (MODIFY: titles, descriptions)
│   │   │   ├── Services.jsx        # Service offerings (MODIFY: service content)
│   │   │   ├── Features.jsx        # Features grid (MODIFY: features list)
│   │   │   ├── Process.jsx         # Process steps (MODIFY: step content)
│   │   │   ├── Clients.jsx         # Success stories (MODIFY: client stories)
│   │   │   ├── Integrations.jsx    # Integration icons (MODIFY: tool names)
│   │   │   ├── Reviews.jsx         # Testimonials (MODIFY: reviews)
│   │   │   ├── Pricing.jsx         # Pricing tiers (MODIFY: plans, prices, features)
│   │   │   ├── FAQ.jsx             # FAQ accordion (MODIFY: questions, answers)
│   │   │   ├── Comparison.jsx      # Us vs Others (MODIFY: comparison points)
│   │   │   ├── Team.jsx            # Team members (MODIFY: names, roles, photos)
│   │   │   ├── CTA.jsx             # Final CTA (MODIFY: CTA content)
│   │   │   └── index.js            # Exports
│   │   └── ui/
│   │       ├── Button.jsx          # Button component (DO NOT MODIFY)
│   │       ├── Card.jsx            # Card component (DO NOT MODIFY)
│   │       ├── Badge.jsx           # Badge component (DO NOT MODIFY)
│   │       ├── Toggle.jsx          # Toggle component (DO NOT MODIFY)
│   │       ├── Accordion.jsx       # Accordion component (DO NOT MODIFY)
│   │       ├── SectionHeader.jsx   # Section header (DO NOT MODIFY)
│   │       └── index.js            # Exports
│   ├── App.jsx                     # Main app (MODIFY ONLY: section order if needed)
│   ├── main.jsx                    # Entry point (DO NOT MODIFY)
│   └── index.css                   # Global styles (DO NOT MODIFY)
├── tailwind.config.js              # Tailwind config (DO NOT MODIFY)
├── package.json                    # Dependencies (DO NOT MODIFY)
└── README.md                       # Documentation (UPDATE: reflect Agent Y)
```

### Technology Stack

- **React 18**: UI library (component-based architecture)
- **Vite 4**: Build tool and dev server
- **Tailwind CSS 3**: Utility-first styling framework
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library (500+ icons available)

### File Modification Strategy

**Files You'll Modify:**
- All section components in `src/components/sections/`
- Layout components: `Header.jsx`, `Footer.jsx`
- `App.jsx` (only if changing section order)
- `README.md` (to reflect Agent Y branding)

**Files You'll NEVER Touch:**
- All UI components in `src/components/ui/`
- `index.css`, `tailwind.config.js`, `vite.config.js`
- `main.jsx`, `package.json`

---

## Design System & Preservation Rules

### Color Palette

**DO NOT MODIFY** - These are hardcoded in components:

```css
/* Background Colors */
--bg-primary: #0a0a0a      /* Main background */
--bg-secondary: #111111    /* Alternate sections */
--bg-card: #1a1a1a         /* Card backgrounds */
--bg-hover: #262626        /* Hover states */

/* Border Colors */
--border: #262626          /* Default borders */
--border-subtle: #1f1f1f   /* Subtle borders */

/* Text Colors */
--text-primary: #ffffff    /* Primary text */
--text-secondary: #e5e5e5  /* Secondary text */
--text-muted: #9ca3af      /* Muted text */
--text-subtle: #6b7280     /* Subtle text */

/* Accent Colors */
--accent: #22d3ee          /* Cyan accent */
--accent-dark: #06b6d4     /* Darker cyan */
```

### Typography

**DO NOT MODIFY** - Font families and hierarchy:

```css
/* Fonts */
--font-sans: 'Inter'           /* Primary font for UI */
--font-serif: 'Playfair Display' /* Accent font for emphasis */

/* Type Scale (maintain these relative sizes) */
- Hero Headline: text-5xl md:text-6xl lg:text-7xl (48-72px)
- Section Title: text-4xl md:text-5xl (36-48px)
- Card Title: text-xl md:text-2xl (20-24px)
- Body Text: text-base (16px)
- Small Text: text-sm (14px)
```

### Spacing System

**DO NOT MODIFY** - Consistent spacing:

```css
/* Section Padding */
py-24 (96px vertical padding on sections)

/* Card Padding Options */
p-6  (24px all sides - default)
p-8  (32px all sides - medium)
p-10 (40px all sides - large)

/* Grid Gaps */
gap-6 (24px gap between grid items)
gap-8 (32px gap - for larger grids)
```

### Border Radius

**DO NOT MODIFY**:

```css
rounded-2xl  /* Cards, containers (16px) */
rounded-xl   /* Smaller elements (12px)*/
rounded-lg   /* Buttons, small cards (8px) */
rounded-full /* Pills, avatars */
```

### Component Patterns

All components follow these patterns:

1. **Card-based Design**: Content grouped in cards with subtle borders
2. **Hover Effects**: Cards lift up slightly on hover (`-4px` translate)
3. **Glass Morphism**: Subtle backdrop blur on some elements
4. **Gradient Accents**: Soft cyan glows for emphasis
5. **Icon Pairs**: Features often show two related icons

---

## Pre-Adaptation Checklist

Before starting adaptation, ensure you have:

- [ ] **Extracted Content JSON**: Complete extraction from Agent Y page
- [ ] **Template Understanding**: Reviewed all 15 section files
- [ ] **Icon Mapping**: Identified appropriate Lucide icons for features
- [ ] **Content Length Review**: Checked if Agent Y content fits character limits
- [ ] **URL Inventory**: Compiled all CTA destinations and links
- [ ] **Image Assets**: Identified placeholder images that need URLs
- [ ] **Brand Name**: Confirmed Agent Y's official brand name
- [ ] **Development Environment**: Local dev server running (`npm run dev`)
- [ ] **Backup Created**: Original template backed up

---

## Section-by-Section Adaptation Guide

### 1. Hero Section (`src/components/sections/Hero.jsx`)

**File Location**: `src/components/sections/Hero.jsx`  
**Current Purpose**: Primary landing area with headline, CTA, and social links  
**Lines to Modify**: Content variables only (lines 49-114)

#### Content Structure

```javascript
// Current template content (DO NOT COPY - this is just reference)
badge_text: "NEW GEN AI AUTOMATION PARTNER"
headline: "Automate Smarter. Grow Faster."
headline_emphasis: "With AI."
subheadline: "AI Automation for Modern Businesses Made Simple"
primary_cta: "Book A Free Call"
```

#### Adaptation Steps

**STEP 1: Extract Agent Y Hero Content**

From your extraction JSON, locate:
```json
{
  "sections": {
    "hero": {
      "badge_text": "...",
      "headline": "...",
      "headline_emphasis": "...",
      "subheadline": "...",
      "primary_cta": { "text": "...", "url": "..." }
    }
  }
}
```

**STEP 2: Modify Badge Text**

Locate line ~58 in Hero.jsx:
```javascript
// FIND THIS:
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a]/50 border border-[#262626] text-sm text-gray-400">
  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
  NEW GEN AI AUTOMATION PARTNER
</span>

// CHANGE ONLY THE TEXT:
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a]/50 border border-[#262626] text-sm text-gray-400">
  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
  {Agent Y badge_text here}
</span>
```

**⚠️ PRESERVATION RULES:**
- Keep ALL className attributes unchanged
- Preserve the pulsing dot `<span>` before text
- Do NOT modify any styling classes

**STEP 3: Modify Headline**

Locate lines ~67-72:
```javascript
// FIND THIS:
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-4"
>
  Automate Smarter. Grow Faster.
  <br />
  <span className="font-serif italic text-gray-400">With AI.</span>
</motion.h1>

// CHANGE TO:
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-4"
>
  {Agent Y headline - main part}
  <br />
  <span className="font-serif italic text-gray-400">{Agent Y headline emphasis}</span>
</motion.h1>
```

**⚠️ PRESERVATION RULES:**
- Keep ALL motion animation props (`initial`, `animate`, `transition`)
- Preserve the `<br />` tag for line break
- Keep the `font-serif italic` span for emphasis word/phrase
- Do NOT change delay timings or duration

**Content Guidelines:**
- Main headline: 40-60 characters ideal
- Emphasis phrase: 2-5 words, usually the "special" part
- Use `<br />` to create visual rhythm (typically after first sentence)

**STEP 4: Modify Subheadline**

Locate lines ~75-82:
```javascript
// CHANGE ONLY THE TEXT CONTENT:
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto"
>
  {Agent Y subheadline}
</motion.p>
```

**Content Guidelines:**
- Length: 100-150 characters
- Should support the headline, not repeat it
- End without punctuation for cleaner look

**STEP 5: Modify Primary CTA**

Locate lines ~85-94:
```javascript
// FIND THIS:
<Button variant="primary" size="lg" withArrow>
  Book A Free Call
</Button>

// CHANGE TO:
<Button variant="primary" size="lg" withArrow>
  {Agent Y primary_cta.text}
</Button>
```

**IMPORTANT**: Also update the CTA destination. If the Button is wrapped in a link or has onClick, update that:

```javascript
// If it's a link:
<a href={Agent Y primary_cta.url}>
  <Button variant="primary" size="lg" withArrow>
    {Agent Y primary_cta.text}
  </Button>
</a>

// Or add onClick if it's a modal/action:
<Button 
  variant="primary" 
  size="lg" 
  withArrow
  onClick={() => window.location.href = Agent Y primary_cta.url}
>
  {Agent Y primary_cta.text}
</Button>
```

**⚠️ PRESERVATION RULES:**
- Keep `variant="primary"` (white background)
- Keep `size="lg"` (large button)
- Keep `withArrow` prop (shows arrow icon)
- Do NOT change Button component props

**STEP 6: Social Links (Optional)**

Locate lines ~97-114 for social media links. Replace placeholder URLs:

```javascript
<a href={Agent Y Twitter URL} className="text-gray-500 hover:text-white transition-colors">
  <Twitter className="w-5 h-5" />
</a>
```

If Agent Y doesn't have certain social profiles, **remove those links entirely** but keep the structure for others.

**STEP 7: Logo Icon (Advanced - Optional)**

The animated logo at the top (lines 28-47) uses an SVG. You can:
- **Option A**: Keep the existing generic logo
- **Option B**: Replace with Agent Y logo (requires SVG code)
- **Option C**: Use a simple icon from Lucide React

Example using Lucide icon:
```javascript
import { Zap } from 'lucide-react';

// Replace the entire SVG section with:
<div className="w-20 h-20 rounded-2xl bg-[#1a1a1a] border border-[#262626] flex items-center justify-center shadow-xl">
  <Zap className="w-10 h-10 text-white" />
</div>
```

---

### 2. DataAnalysis Section (`src/components/sections/DataAnalysis.jsx`)

**File Location**: `src/components/sections/DataAnalysis.jsx`  
**Current Purpose**: Quote/testimonial section with attribution  

This section is typically a featured quote or testimonial. Adapt it to Agent Y's most impactful testimonial or key message.

#### Adaptation Steps

**Note**: Read the file first to understand its structure. Typically it contains:
- A quote text
- Attribution (name, company, role)
- Optional statistics or metrics

Replace content while maintaining the layout structure.

---

### 3. Benefits Section (`src/components/sections/Benefits.jsx`)

**File Location**: `src/components/sections/Benefits.jsx`  
**Lines to Modify**: 6-22 (benefits array)

#### Current Structure

```javascript
const benefits = [
  {
    title: 'Real-Time Intelligence',
    description: 'Access accurate, real-time data to drive smarter decisions',
    illustration: 'gauge',
  },
  // ... more benefits
];
```

#### Adaptation Steps

**STEP 1: Map Agent Y Benefits**

From extraction JSON:
```json
{
  "sections": {
    "benefits": {
      "benefits_list": [
        {
          "title": "...",
          "description": "...",
          "visual_type": "gauge/chart/connect/..."
        }
      ]
    }
  }
}
```

**STEP 2: Update Benefits Array**

```javascript
const benefits = [
  {
    title: '{Agent Y benefit 1 title}',
    description: '{Agent Y benefit 1 description}',
    illustration: '{visual_type}', // Must be 'gauge', 'chart', or 'connect'
  },
  {
    title: '{Agent Y benefit 2 title}',
    description: '{Agent Y benefit 2 description}',
    illustration: '{visual_type}',
  },
  {
    title: '{Agent Y benefit 3 title}',
    description: '{Agent Y benefit 3 description}',
    illustration: '{visual_type}',
  },
];
```

**⚠️ PRESERVATION RULES:**
- Keep exactly **3 benefits** (the illustrations are built for 3)
- Use ONLY these illustration types: `'gauge'`, `'chart'`, `'connect'`
- These map to specific SVG animations defined in the file
- Do NOT add new illustration types

**STEP 3: Update Section Header**

Locate the `<SectionHeader>` component usage (around line 136):

```javascript
<SectionHeader
  badge="BENEFITS"  // Keep or change to "WHY AGENT Y" or similar
  badgeIcon={Sparkles}  // Keep the icon
  title="Why Choose"  // Change to Agent Y's benefit headline
  titleAccent="Us?"  // Change to emphasized word
  description="Everything you need to automate, optimize, and scale"  // Change to Agent Y description
/>
```

**Visual Type Guidelines:**
- **gauge**: Best for speed, real-time, performance benefits
- **chart**: Best for growth, analytics, data-driven benefits
- **connect**: Best for integration, collaboration, seamless benefits

---

### 4. Services Section (`src/components/sections/Services.jsx`)

**File Location**: `src/components/sections/Services.jsx`  
**Lines to Modify**: 18-55 (services array)

This section has complex visuals (task lists, code snippets, search bars). It's one of the most content-heavy sections.

#### Current Structure

```javascript
const services = [
  {
    id: 'automate',
    title: 'Automate repetitive tasks',
    description: 'We help you streamline...',
    tasks: [
      { icon: DollarSign, label: 'Cost Management', status: 'pending' },
      // ...
    ],
  },
  // ... more services
];
```

#### Adaptation Steps

**STEP 1: Review Agent Y Services**

From extraction, you should have 3-5 distinct service offerings.

**STEP 2: Map Services to Visual Types**

The template supports these visual types:
- **Task List**: Shows checklist of items (good for feature lists)
- **Code Snippet**: Shows code (good for technical services, API, custom development)
- **Search Visual**: Shows search/research (good for intelligence, analysis services)
- **Workflow**: Generic workflow diagram

**STEP 3: Update Services Array**

For each service, match it to the closest existing visual type:

```javascript
const services = [
  {
    id: 'service1',
    title: '{Agent Y Service 1 Title}',
    description: '{Agent Y Service 1 Description}',
    tasks: [  // If using task list visual
      { icon: {AppropriateIcon}, label: '{Task 1}', status: 'done' },
      { icon: {AppropriateIcon}, label: '{Task 2}', status: 'pending' },
      { icon: {AppropriateIcon}, label: '{Task 3}', status: 'done' },
      { icon: {AppropriateIcon}, label: '{Task 4}', status: 'pending' },
    ],
  },
  // ... continue for each service
];
```

**⚠️ PRESERVATION RULES:**
- Icons must be imported from `lucide-react` at the top of the file
- Keep `status: 'done'` or `status: 'pending'` (controls checkmark vs. loading icon)
- Do NOT modify the visual component functions (TaskList, CodeVisual, etc.)
- Keep the existing grid layout structure

**Icon Selection Guide:**
```javascript
// Import at top of file:
import { 
  DollarSign,    // Finance, cost
  Clock,         // Time, scheduling
  Users,         // Team, collaboration
  Twitter,       // Social, communication
  MessageSquare, // Chat, support
  Bot,           // AI, automation
  Workflow,      // Process, workflow
  BarChart3,     // Analytics
  // ... add others as needed
} from 'lucide-react';
```

---

### 5. Features Section (`src/components/sections/Features.jsx`)

**File Location**: `src/components/sections/Features.jsx`  
**Lines to Modify**: 16-47 (features array)

This is typically your main feature showcase - the "what does Agent Y do?" section.

#### Current Structure

```javascript
const features = [
  {
    icons: [Workflow, Cog],
    title: 'Workflow Automation',
    description: 'Automate complex business processes...',
  },
  // ... 6 features total
];
```

#### Adaptation Steps

**STEP 1: Extract Agent Y Features**

From your extraction JSON:
```json
{
  "sections": {
    "features": {
      "features_list": [
        {
          "title": "...",
          "description": "...",
          "icon_category": "workflow/ai/analytics/..."
        }
      ]
    }
  }
}
```

**STEP 2: Map Icon Categories to Lucide Icons**

Each feature uses **two related icons**. Choose pairs that make sense:

**Icon Pairing Guide:**
```javascript
// Workflow/Automation features:
[Workflow, Cog], [Workflow, RotateCw], [GitBranch, Cog]

// AI/Intelligence features:
[Brain, Bot], [Sparkles, Brain], [Bot, MessageSquare]

// Analytics/Data features:
[BarChart3, TrendingUp], [LineChart, BarChart3], [PieChart, TrendingUp]

// Integration features:
[Puzzle, Cog], [Link, Share2], [Layers, Puzzle]

// Communication features:
[MessageSquare, Bot], [Mail, MessageCircle], [Phone, MessageSquare]

// Performance features:
[Gauge, TrendingUp], [Target, CheckCircle], [Clock, Zap]
```

**STEP 3: Update Features Array**

```javascript
import { 
  Box, Workflow, Cog, Brain, Bot, MessageSquare,
  TrendingUp, BarChart3, Puzzle, // ... add all icons you need
} from 'lucide-react';

const features = [
  {
    icons: [{Icon1}, {Icon2}],
    title: '{Agent Y Feature 1 Title}',
    description: '{Agent Y Feature 1 Description}',
  },
  {
    icons: [{Icon3}, {Icon4}],
    title: '{Agent Y Feature 2 Title}',
    description: '{Agent Y Feature 2 Description}',
  },
  // ... continue for 6 features (3x2 grid)
];
```

**⚠️ PRESERVATION RULES:**
- Keep exactly **6 features** for the 3x2 grid layout
- Each feature needs **exactly 2 icons** in the array
- Icons must be imported Lucide React components
- Do NOT add new icon logic or rendering
- Keep title length under 25 characters
- Keep description under 150 characters

**STEP 4: Update Section Header**

```javascript
<SectionHeader
  badge="FEATURES"
  badgeIcon={Box}  // Can keep or change to different icon
  title="All features in"  // Change to Agent Y's features headline
  titleAccent="one place"  // Change emphasis word/phrase
  description="Everything you need to automate operations, boost productivity"  // Change description
/>
```

---

### 6. Process Section (`src/components/sections/Process.jsx`)

**File Location**: `src/components/sections/Process.jsx`  
**Lines to Modify**: 7-29 (steps array)

This section shows your methodology or "how it works" in 3 interactive tabs.

#### Current Structure

```javascript
const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discover & Analyze',
    description: 'We audit your existing workflows...',
    visual: 'audit',
  },
  // ... 3 steps total
];
```

#### Adaptation Steps

**STEP 1: Map Agent Y Process Steps**

Most products have a 3-step process:
1. Onboarding/Setup/Discovery
2. Implementation/Building/Integration
3. Optimization/Growth/Scale

**STEP 2: Update Steps Array**

```javascript
const steps = [
  {
    id: 1,
    number: '01',
    title: '{Agent Y Step 1 Title}',
    description: '{Agent Y Step 1 Description}',
    visual: 'audit',  // Best for discovery/analysis steps
  },
  {
    id: 2,
    number: '02',
    title: '{Agent Y Step 2 Title}',
    description: '{Agent Y Step 2 Description}',
    visual: 'code',  // Best for implementation/building steps
  },
  {
    id: 3,
    number: '03',
    title: '{Agent Y Step 3 Title}',
    description: '{Agent Y Step 3 Description}',
    visual: 'analytics',  // Best for optimization/tracking steps
  },
];
```

**⚠️ PRESERVATION RULES:**
- Keep exactly **3 steps** (the tab UI is built for 3)
- Use ONLY these visual types: `'audit'`, `'code'`, `'analytics'`
- Do NOT modify the visual component functions (AuditVisual, CodeVisual, AnalyticsVisual)
- These are complex SVG animations - leave them untouched
- Keep `id: 1, 2, 3` and `number: '01', '02', '03'` unchanged

**Visual Type Meanings:**
- **audit**: Shows dashboard with workflow items (good for analysis, discovery, assessment)
- **code**: Shows code snippet (good for development, implementation, technical work)
- **analytics**: Shows charts and metrics (good for tracking, optimization, results)

**STEP 3: Update Section Header**

```javascript
<SectionHeader
  badge="PROCESS"
  badgeIcon={Layers}
  title="Our Simple &"
  titleAccent="Smart Process"
  description="Everything you need to collaborate, create, and scale, all in one place."
/>
```

---

### 7. Clients Section (`src/components/sections/Clients.jsx`)

**File Location**: `src/components/sections/Clients.jsx`  
**Lines to Modify**: 7-32 (clients array)

This section shows success stories with animated counter statistics.

#### Current Structure

```javascript
const clients = [
  {
    name: "Max's SaaS Revolution",
    story: 'Max, the founder of CloudFlow...',
    stats: [
      { value: 50, label: 'increase in ROI', suffix: '%' },
      { value: 75, label: 'boost in revenue', suffix: '%' },
    ],
  },
  // ... 3 client stories total
];
```

#### Adaptation Steps

**STEP 1: Extract Agent Y Success Stories**

Look for:
- Client testimonials with metrics
- Case studies with outcomes
- Success stories with quantifiable results

**STEP 2: Update Clients Array**

```javascript
const clients = [
  {
    name: "{Agent Y Client 1 Name or Title}",
    story: '{Full client story - 2-3 sentences about challenge, solution, outcome}',
    stats: [
      { value: {number}, label: '{metric description}', suffix: '%' },
      { value: {number}, label: '{metric description}', suffix: '%' },
    ],
  },
  {
    name: "{Agent Y Client 2 Name or Title}",
    story: '{Client 2 story}',
    stats: [
      { value: {number}, label: '{metric}', suffix: '%' },
      { value: {number}, label: '{metric}', suffix: '%' },
    ],
  },
  {
    name: "{Agent Y Client 3 Name or Title}",
    story: '{Client 3 story}',
    stats: [
      { value: {number}, label: '{metric}', suffix: '%' },
      { value: {number}, label: '{metric}', suffix: '%' },
    ],
  },
];
```

**⚠️ PRESERVATION RULES:**
- Keep exactly **3 client stories**
- Each story must have exactly **2 stats** for the layout
- `value` must be a number (integer)
- `suffix` is typically `'%'`, `'x'`, or `'+'`
- Do NOT modify the AnimatedCounter component
- Story should be 150-250 characters

**Stat Formatting Examples:**
```javascript
// Percentage:
{ value: 85, label: 'increase in efficiency', suffix: '%' }

// Multiplier:
{ value: 3, label: 'faster processing', suffix: 'x' }

// Absolute growth:
{ value: 1000, label: 'new customers', suffix: '+' }

// Without suffix:
{ value: 24, label: 'hours saved per week', suffix: '' }
```

---

### 8. Integrations Section (`src/components/sections/Integrations.jsx`)

**File Location**: `src/components/sections/Integrations.jsx`

This section displays logos or names of integrated tools/platforms.

#### Adaptation Steps

**Note**: Read the file to understand its structure. It typically displays:
- Tool/platform names
- Logo placeholders or icons
- Categories (CRM, Marketing, Analytics, etc.)

**STEP 1: Extract Agent Y Integrations**

From extraction JSON, get the list of tools Agent Y integrates with.

**STEP 2: Replace Content**

Update the integrations list with Agent Y's actual integrations. If there are logo images, you can:
- **Option A**: Use text names in styled containers
- **Option B**: Find logo URLs for major tools
- **Option C**: Use Lucide icons to represent tool categories

**Example Structure:**
```javascript
const integrations = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'Marketing' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Google Analytics', category: 'Analytics' },
  // ... Agent Y's actual integrations
];
```

---

### 9. Reviews Section (`src/components/sections/Reviews.jsx`)

**File Location**: `src/components/sections/Reviews.jsx`  
**Lines to Modify**: 6-43 (reviews array)

#### Current Structure

```javascript
const reviews = [
  {
    name: 'Daniel Kim',
    role: 'Operations Lead at Flowbyte',
    quote: 'Truly impressive. The AI assistant is fast...',
    image: 'https://images.unsplash.com/photo-...',
  },
  // ... 6 reviews total
];
```

#### Adaptation Steps

**STEP 1: Extract Agent Y Reviews**

From extraction JSON:
```json
{
  "sections": {
    "social_proof": {
      "testimonials": [
        {
          "quote": "...",
          "author": "...",
          "title": "...",
          "company": "..."
        }
      ]
    }
  }
}
```

**STEP 2: Update Reviews Array**

```javascript
const reviews = [
  {
    name: '{Agent Y Reviewer 1 Name}',
    role: '{Job Title} at {Company}',
    quote: '{Review quote - 1-2 sentences, 100-150 characters}',
    image: '{Avatar URL or Unsplash placeholder}',
  },
  {
    name: '{Agent Y Reviewer 2 Name}',
    role: '{Job Title} at {Company}',
    quote: '{Review quote}',
    image: '{Avatar URL}',
  },
  // ... up to 6 reviews
];
```

**⚠️ PRESERVATION RULES:**
- Include 3-6 reviews (displays in 3-column grid)
- Quote should be 80-150 characters for visual consistency
- Image URLs should be square aspect ratio (1:1)
- Keep the quote marks in the template (they're added automatically)

**Image Placeholder Strategy:**

If you don't have real avatar images:
```javascript
// Use Unsplash placeholder for diversity:
image: 'https://images.unsplash.com/photo-{id}?w=100&h=100&fit=crop&crop=face'

// Or use UI Avatars as fallback:
image: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=100&background=1a1a1a&color=ffffff`
```

**STEP 3: Update Section Header**

```javascript
<SectionHeader
  badge="REVIEWS"
  badgeIcon={Heart}
  title="Trusted by"
  titleAccent="Visionaries"  // Or "Innovators", "Leaders", etc.
  description="Hear from real users who achieved success with our automation"
/>
```

---

### 10. Pricing Section (`src/components/sections/Pricing.jsx`)

**File Location**: `src/components/sections/Pricing.jsx`  
**Lines to Modify**: 9-49 (plans array)

This is a critical conversion section - handle with care.

#### Current Structure

```javascript
const plans = [
  {
    name: 'Starter',
    monthlyPrice: 50,
    yearlyPrice: 40,
    popular: false,
    features: [
      '3 Automated Workflows',
      'Basic AI Assistant Access',
      // ...
    ],
  },
  // ... 3 plans total
];
```

#### Adaptation Steps

**STEP 1: Extract Agent Y Pricing**

From extraction JSON:
```json
{
  "sections": {
    "pricing": {
      "plans": [
        {
          "name": "...",
          "price_monthly": 99,
          "price_yearly": 79,
          "popular": true,
          "features": ["...", "..."]
        }
      ]
    }
  }
}
```

**STEP 2: Update Plans Array**

```javascript
const plans = [
  {
    name: '{Agent Y Plan 1 Name}',
    monthlyPrice: {number or null},
    yearlyPrice: {number or null},
    popular: false,
    features: [
      '{Feature 1}',
      '{Feature 2}',
      '{Feature 3}',
      '{Feature 4}',
      '{Feature 5}',
    ],
  },
  {
    name: '{Agent Y Plan 2 Name}',
    monthlyPrice: {number},
    yearlyPrice: {number},
    popular: true,  // Mark the recommended plan as popular
    features: [
      '{Feature 1}',
      '{Feature 2}',
      '{Feature 3}',
      '{Feature 4}',
      '{Feature 5}',
    ],
  },
  {
    name: '{Agent Y Plan 3 Name}',
    monthlyPrice: null,  // For "Custom" pricing
    yearlyPrice: null,
    popular: false,
    features: [
      '{Feature 1}',
      '{Feature 2}',
      '{Feature 3}',
      '{Feature 4}',
      '{Feature 5}',
    ],
  },
];
```

**⚠️ PRESERVATION RULES:**
- Include exactly **3 plans** (optimal for comparison)
- Set `monthlyPrice` and `yearlyPrice` to `null` for "Custom" pricing
- Calculate yearly price with discount (typically 15-20% off monthly)
- Mark ONE plan as `popular: true` (gets cyan accent border)
- Include 4-5 features per plan for visual consistency

**Pricing Display Logic:**
- If `monthlyPrice` is a number: Displays `$99/month`
- If `monthlyPrice` is `null`: Displays `Custom`
- The billing toggle switches between monthly and yearly pricing

**STEP 3: Update Billing Toggle (Optional)**

If Agent Y doesn't offer yearly billing, you can hide the toggle:

Locate lines ~54-57 and comment out:
```javascript
// {/* Billing toggle */}
// <div className="flex justify-center mb-12">
//   <Toggle ... />
// </div>
```

And remove the `billingCycle` state:
```javascript
// const [billingCycle, setBillingCycle] = useState('monthly');
```

Then simplify the price display to always show monthly.

**STEP 4: Update Additional Info**

Locate line ~142-151 for the donation message or additional info:

```javascript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="flex items-center justify-center gap-2 text-gray-500 text-sm"
>
  <Heart className="w-4 h-4 text-pink-500" />
  <span>{Agent Y's additional info, money-back guarantee, or remove this section}</span>
</motion.div>
```

---

### 11. FAQ Section (`src/components/sections/FAQ.jsx`)

**File Location**: `src/components/sections/FAQ.jsx`  
**Lines to Modify**: 8-29 (faqItems array)

#### Current Structure

```javascript
const faqItems = [
  {
    question: 'What types of processes can you automate?',
    answer: 'We specialize in automating repetitive workflows...',
  },
  // ... 5 FAQ items total
];
```

#### Adaptation Steps

**STEP 1: Extract Agent Y FAQs**

From extraction JSON, get the most important questions.

**STEP 2: Update FAQ Items**

```javascript
const faqItems = [
  {
    question: '{Agent Y FAQ Question 1}',
    answer: '{Agent Y FAQ Answer 1 - can be 1-3 paragraphs}',
  },
  {
    question: '{Agent Y FAQ Question 2}',
    answer: '{Agent Y FAQ Answer 2}',
  },
  {
    question: '{Agent Y FAQ Question 3}',
    answer: '{Agent Y FAQ Answer 3}',
  },
  {
    question: '{Agent Y FAQ Question 4}',
    answer: '{Agent Y FAQ Answer 4}',
  },
  {
    question: '{Agent Y FAQ Question 5}',
    answer: '{Agent Y FAQ Answer 5}',
  },
];
```

**⚠️ PRESERVATION RULES:**
- Include 4-6 FAQ items
- Questions should be 40-80 characters
- Answers can be longer (200-400 characters)
- Do NOT modify the Accordion component usage
- Keep the contact card on the left side unchanged (but update text)

**FAQ Best Practices:**
1. **Order by Priority**: Most asked questions first
2. **Question Format**: Start with "How", "What", "When", "Can I"
3. **Answer Format**: Direct answer first, then details
4. **Tone**: Match Agent Y's brand voice

**STEP 3: Update Contact Card**

Around lines 51-64, update the "Still Have Questions?" card:

```javascript
<h3 className="text-xl font-semibold text-white mb-2">
  Still Have Questions?
</h3>
<p className="text-gray-400 mb-6">
  {Agent Y's contact encouragement text}
</p>
<Button variant="secondary" size="sm">
  <ArrowUpRight className="w-4 h-4" />
  {Agent Y contact CTA text}
</Button>
```

---

### 12. Comparison Section (`src/components/sections/Comparison.jsx`)

**File Location**: `src/components/sections/Comparison.jsx`  
**Lines to Modify**: 6-20 (features arrays)

#### Current Structure

```javascript
const ourFeatures = [
  'Fast setup with ready AI workflows',
  'Built to grow and adapt with you',
  // ... 5 features
];

const otherFeatures = [
  'Slower execution and manual setup',
  'Requires manual updates as you scale',
  // ... 5 features (parallel to ourFeatures)
];
```

#### Adaptation Steps

**STEP 1: Extract Agent Y Comparison Points**

From extraction JSON:
```json
{
  "sections": {
    "comparison": {
      "us": {
        "features": ["advantage 1", "advantage 2", ...]
      },
      "them": {
        "features": ["disadvantage 1", "disadvantage 2", ...]
      }
    }
  }
}
```

**STEP 2: Update Feature Arrays**

```javascript
const ourFeatures = [
  '{Agent Y advantage 1}',
  '{Agent Y advantage 2}',
  '{Agent Y advantage 3}',
  '{Agent Y advantage 4}',
  '{Agent Y advantage 5}',
];

const otherFeatures = [
  '{Competitor disadvantage 1}',
  '{Competitor disadvantage 2}',
  '{Competitor disadvantage 3}',
  '{Competitor disadvantage 4}',
  '{Competitor disadvantage 5}',
];
```

**⚠️ PRESERVATION RULES:**
- Include exactly **5 comparison points** for visual balance
- Keep point-by-point correspondence (point 1 us vs point 1 them, etc.)
- Each feature should be 40-60 characters
- Do NOT modify the Check/X icons or their colors
- Keep the "Landio" logo or replace with Agent Y logo

**STEP 3: Update Brand Name**

Locate line ~53 and replace "Landio" with "Agent Y":

```javascript
<span className="text-xl font-serif italic text-white">{Agent Y Brand Name}</span>
```

**STEP 4: Update Section Header**

```javascript
<SectionHeader
  badge="COMPARISON"
  badgeIcon={GitCompare}
  title="Why Choose Us"
  titleAccent="Over Others"  // Or "Over Alternatives"
  description="See how we compare against others in performance, growth"
/>
```

---

### 13. Team Section (`src/components/sections/Team.jsx`)

**File Location**: `src/components/sections/Team.jsx`  
**Lines to Modify**: 6-37 (teamMembers array)

#### Current Structure

```javascript
const teamMembers = [
  {
    name: 'Ikta Sollork',
    role: 'Founder / Data Analyst',
    image: 'https://images.unsplash.com/photo-...',
  },
  // ... 6 team members
];
```

#### Adaptation Steps

**STEP 1: Extract Agent Y Team Info**

From extraction JSON, get team member information.

**STEP 2: Update Team Members Array**

```javascript
const teamMembers = [
  {
    name: '{Agent Y Team Member 1 Name}',
    role: '{Job Title}',
    image: '{Photo URL or placeholder}',
  },
  {
    name: '{Agent Y Team Member 2 Name}',
    role: '{Job Title}',
    image: '{Photo URL}',
  },
  // ... 3-6 team members
];
```

**⚠️ PRESERVATION RULES:**
- Include 3-6 team members (displays in 3-column grid)
- Images should be portrait orientation (~400x500px)
- Role should be concise (1-3 words)
- Social links are generic placeholders (update if you have real URLs)

**STEP 3: Update Social Links (Optional)**

If you have actual social profile URLs:

```javascript
// Create a mapping of social links per team member:
const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder',
    image: '...',
    socialLinks: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      // Leave instagram undefined if not present
    }
  },
];
```

Then modify the social links rendering to use individual URLs.

---

### 14. CTA Section (`src/components/sections/CTA.jsx`)

**File Location**: `src/components/sections/CTA.jsx`

This is the final conversion opportunity - the last section before the footer.

#### Adaptation Steps

**Note**: Read the file to understand its structure. Typically contains:
- Final headline/call-to-action
- Supporting text
- Primary action button
- Optional secondary action

**STEP 1: Update Content**

Replace headline, description, and button text with Agent Y's final CTA messaging.

**STEP 2: Update CTA Destination**

Ensure the button links to Agent Y's signup, demo, or contact page.

**Example Structure:**
```javascript
<h2>Ready to transform your workflow?</h2>
<p>Join 10,000+ teams already using Agent Y</p>
<Button>Get Started Free</Button>
```

---

## Component Usage Guidelines

### UI Components (DO NOT MODIFY)

All components in `src/components/ui/` are **locked** - use them as-is.

#### Button Component

**File**: `src/components/ui/Button.jsx`  
**Usage**:

```javascript
import Button from '../ui/Button';

// Primary button (white background):
<Button variant="primary" size="lg" withArrow>
  Get Started
</Button>

// Secondary button (outlined):
<Button variant="secondary" size="md">
  Learn More
</Button>

// Ghost button (transparent):
<Button variant="ghost" size="sm">
  Cancel
</Button>

// Accent button (cyan):
<Button variant="accent" size="lg" withArrow>
  Book Demo
</Button>
```

**Props:**
- `variant`: `'primary'` | `'secondary'` | `'ghost'` | `'accent'`
- `size`: `'sm'` | `'md'` | `'lg'`
- `withArrow`: boolean (adds arrow icon)
- Standard button props (`onClick`, `disabled`, etc.)

**⚠️ Do NOT:**
- Add custom `className` for styling (it will override design system)
- Modify the Button component file
- Create new button variants

---

#### Card Component

**File**: `src/components/ui/Card.jsx`  
**Usage**:

```javascript
import Card from '../ui/Card';

// Default card:
<Card>
  <p>Content here</p>
</Card>

// With custom padding:
<Card padding="p-8">
  <p>Content here</p>
</Card>

// Disable hover effect:
<Card hover={false}>
  <p>Content here</p>
</Card>

// Glass card variant:
<GlassCard>
  <p>Content here</p>
</GlassCard>
```

**Props:**
- `padding`: `'p-6'` | `'p-8'` | `'p-10'` | `'p-12'` (default: `'p-6'`)
- `hover`: boolean (default: `true`)
- `className`: Additional classes (use sparingly)

**⚠️ Do NOT:**
- Change background colors
- Modify border radius
- Remove border styling
- Change hover animation

---

#### SectionHeader Component

**File**: `src/components/ui/SectionHeader.jsx`  
**Usage**:

```javascript
import SectionHeader from '../ui/SectionHeader';
import { Box } from 'lucide-react';

<SectionHeader
  badge="FEATURES"
  badgeIcon={Box}
  title="All features in"
  titleAccent="one place"
  description="Everything you need to succeed"
/>
```

**Props:**
- `badge`: Badge text (e.g., "FEATURES", "PRICING")
- `badgeIcon`: Lucide React icon component
- `title`: Main heading text
- `titleAccent`: Emphasized word(s) - displays in serif italic gray
- `description`: Supporting text below title
- `className`: Additional classes (optional)

**⚠️ Do NOT:**
- Modify animation timings
- Change typography hierarchy
- Remove badge or icon
- Alter color scheme

---

#### Accordion Component

**File**: `src/components/ui/Accordion.jsx`  
**Usage**:

```javascript
import Accordion from '../ui/Accordion';

const faqItems = [
  { question: 'Question 1?', answer: 'Answer 1' },
  { question: 'Question 2?', answer: 'Answer 2' },
];

<Accordion items={faqItems} />
```

**Props:**
- `items`: Array of objects with `question` and `answer` properties

**⚠️ Do NOT:**
- Modify expand/collapse animation
- Change icon styling
- Alter open/close logic

---

#### Toggle Component

**File**: `src/components/ui/Toggle.jsx`  
**Usage**:

```javascript
import Toggle from '../ui/Toggle';
import { useState } from 'react';

const [value, setValue] = useState('monthly');

const options = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly', label: 'Yearly', badge: 'Save 20%' },
];

<Toggle
  options={options}
  value={value}
  onChange={setValue}
/>
```

**Props:**
- `options`: Array of `{ value, label, badge? }` objects
- `value`: Currently selected value
- `onChange`: Function to call when selection changes

**⚠️ Do NOT:**
- Modify the animation or transition effects
- Change active state styling
- Alter the badge display logic

---

#### Badge Component

**File**: `src/components/ui/Badge.jsx`  
**Usage**:

```javascript
import { SectionBadge } from '../ui/Badge';
import { Sparkles } from 'lucide-react';

<SectionBadge icon={Sparkles}>
  NEW FEATURE
</SectionBadge>
```

**Props:**
- `icon`: Lucide React icon component (optional)
- `children`: Badge text

---

### Lucide React Icons

**Import Pattern**:
```javascript
import { 
  IconName1,
  IconName2,
  // ... more icons
} from 'lucide-react';
```

**Usage**:
```javascript
<IconName className="w-5 h-5 text-gray-400" />
```

**Common Icons for Different Purposes:**

```javascript
// General:
Box, Layers, Grid, Square, Circle

// Actions:
Check, X, Plus, Minus, Edit, Trash, Download, Upload, Send

// Navigation:
ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight

// Tech:
Code, Terminal, Cpu, Database, Server, Cloud, Wifi

// Business:
Briefcase, DollarSign, TrendingUp, BarChart3, PieChart, Target

// Communication:
MessageSquare, Mail, Phone, MessageCircle, Send, Bell

// Users:
User, Users, UserPlus, UserCheck, UserX

// AI/Automation:
Bot, Brain, Sparkles, Zap, Workflow, Cog, RotateCw

// Time:
Clock, Calendar, Timer, Hourglass

// Status:
CheckCircle, AlertCircle, Info, HelpCircle, XCircle

// Social:
Twitter, Instagram, Facebook, Linkedin, Github, Youtube

// Search/Filter:
Search, Filter, SlidersHorizontal

// Files:
File, FileText, Folder, Image, Video

// And 400+ more at https://lucide.dev
```

**Icon Sizing Guide:**
```javascript
// Tiny (16px):
className="w-4 h-4"

// Small (20px):
className="w-5 h-5"

// Medium (24px):
className="w-6 h-6"

// Large (32px):
className="w-8 h-8"

// Extra Large (40px):
className="w-10 h-10"
```

---

## Animation & Motion Patterns

### Framer Motion Fundamentals

All animations use Framer Motion. **Do NOT modify** these patterns.

#### Common Animation Pattern

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-50px' }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
  {/* Content */}
</motion.div>
```

**What This Does:**
- `initial`: Starting state (invisible, shifted down 20px)
- `whileInView`: End state when element enters viewport
- `viewport.once`: Only animate once (not on every scroll)
- `viewport.margin`: Trigger animation 50px before entering viewport
- `transition.delay`: Stagger animation based on item index

**⚠️ Do NOT:**
- Change delay timings
- Modify transition durations
- Remove viewport settings
- Alter initial/animate states

#### Animation Variants Used

**1. Fade In Up:**
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

**2. Fade In Down:**
```javascript
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
```

**3. Fade In Left:**
```javascript
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
```

**4. Fade In Right:**
```javascript
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
```

**5. Scale In:**
```javascript
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
```

**6. Card Hover:**
```javascript
whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.2)' }}
```

**7. Button Interaction:**
```javascript
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Staggered Animations

When animating lists, use index-based delays:

```javascript
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Item content */}
  </motion.div>
))}
```

**The Pattern:**
- Each item delays by `index * 0.1` seconds
- Creates cascading effect (100ms between each item)
- First item appears immediately, second after 100ms, third after 200ms, etc.

**⚠️ Do NOT:**
- Change the 0.1 multiplier
- Remove the delay entirely
- Use different delay values for items in the same list

---

## Content Adaptation Best Practices

### Character Length Guidelines

To maintain visual balance, adhere to these length recommendations:

| Content Type | Optimal Length | Max Length |
|-------------|----------------|------------|
| Hero Headline | 40-60 chars | 80 chars |
| Hero Subheadline | 100-150 chars | 200 chars |
| Section Title | 20-40 chars | 60 chars |
| Section Description | 80-120 chars | 180 chars |
| Feature Title | 15-25 chars | 35 chars |
| Feature Description | 60-100 chars | 150 chars |
| Benefit Title | 15-30 chars | 40 chars |
| Benefit Description | 50-80 chars | 120 chars |
| Button Text | 10-20 chars | 25 chars |
| FAQ Question | 40-80 chars | 100 chars |
| FAQ Answer | 200-400 chars | 600 chars |
| Testimonial Quote | 80-150 chars | 200 chars |
| Pricing Feature | 20-40 chars | 60 chars |

### Content Tone Matching

Match Agent Y's tone across all sections:

**Professional/Corporate Tone:**
- Use third-person ("Agent Y provides")
- Formal language
- Industry terminology
- Quantitative focus

**Casual/Conversational Tone:**
- Use first-person plural ("We help you")
- Friendly language
- Simple explanations
- Story-driven

**Technical/Expert Tone:**
- Use precise terminology
- Detailed specifications
- Technical accuracy
- Feature-focused

### Content Editing Strategies

If Agent Y content doesn't fit the template:

**Too Long:**
1. Identify core message
2. Remove redundant words
3. Split into multiple shorter sentences
4. Use bullet points instead of paragraphs

**Too Short:**
1. Add supporting details
2. Include benefits or outcomes
3. Provide context or examples
4. Expand with relevant information

**Wrong Tone:**
1. Rewrite in Agent Y's voice
2. Adjust formality level
3. Change technical depth
4. Modify emotional language

---

## Testing & Quality Assurance

### Pre-Launch Testing Checklist

#### Visual Testing

- [ ] **Desktop View (1920x1080)**
  - All sections display correctly
  - Images load properly
  - No text overflow
  - Animations trigger smoothly
  - Hover states work on interactive elements

- [ ] **Tablet View (768x1024)**
  - Grid layouts adapt correctly
  - Text remains readable
  - CTAs are accessible
  - Navigation menu works

- [ ] **Mobile View (375x667)**
  - All content is accessible
  - Text is legible
  - Buttons are tap-friendly
  - No horizontal scroll
  - Mobile menu functions

#### Content Testing

- [ ] **Spelling & Grammar**
  - Run spell check on all content
  - Verify proper nouns (company/product names)
  - Check punctuation consistency
  - Validate formatting (quotes, apostrophes)

- [ ] **Brand Consistency**
  - Agent Y name spelled correctly everywhere
  - Consistent capitalization of product names
  - Uniform tone of voice
  - Matching messaging across sections

- [ ] **CTA Functionality**
  - All buttons have destinations
  - Links open in correct tab
  - Modal/popups work (if applicable)
  - Form submissions work (if applicable)

- [ ] **Information Accuracy**
  - Pricing is correct
  - Features are accurate
  - Testimonials are real
  - Statistics are current
  - Contact information is correct

#### Technical Testing

- [ ] **Performance**
  - Page loads in under 3 seconds
  - Images are optimized
  - No console errors
  - Smooth scrolling

- [ ] **Responsiveness**
  - Test on multiple devices
  - Check all breakpoints
  - Verify touch interactions
  - Test orientation changes

- [ ] **Browser Compatibility**
  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)

- [ ] **Accessibility**
  - Images have alt text
  - Buttons have aria-labels if needed
  - Color contrast is sufficient
  - Keyboard navigation works

### Testing Commands

```bash
# Run development server:
npm run dev

# Build for production:
npm run build

# Preview production build:
npm run preview

# Check for linting errors:
npm run lint
```

### Common Issues & Fixes

**Issue: Content overflows card**
- **Cause**: Text too long
- **Fix**: Reduce character count or adjust card padding

**Issue: Animations don't trigger**
- **Cause**: Framer Motion props modified
- **Fix**: Restore original animation props

**Issue: Icons don't display**
- **Cause**: Icon not imported from lucide-react
- **Fix**: Add icon to import statement at top of file

**Issue: Layout breaks on mobile**
- **Cause**: Custom CSS overriding responsive classes
- **Fix**: Remove custom CSS, use Tailwind responsive prefixes

**Issue: Hover effects not working**
- **Cause**: `hover={false}` prop on Card
- **Fix**: Remove prop or set to `hover={true}`

---

## Common Pitfalls & Solutions

### Pitfall 1: Modifying UI Components

**Wrong:**
```javascript
// DON'T modify the Button component file
// src/components/ui/Button.jsx
export default function Button({ children, variant = 'primary', ... }) {
  return (
    <motion.button
      className="... bg-red-500 ..." // ❌ Changing colors
    >
      {children}
    </motion.button>
  );
}
```

**Right:**
```javascript
// Use the Button as-is in your section components
<Button variant="primary">Get Started</Button>
```

---

### Pitfall 2: Breaking Animation Timings

**Wrong:**
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2.5, delay: 0.8 }} // ❌ Changed timings
>
```

**Right:**
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }} // ✅ Keep original
>
```

---

### Pitfall 3: Inconsistent Icon Usage

**Wrong:**
```javascript
// Using different icon libraries
import { FaRocket } from 'react-icons/fa'; // ❌ Wrong library
<FaRocket className="w-5 h-5" />
```

**Right:**
```javascript
// Only use Lucide React
import { Rocket } from 'lucide-react'; // ✅ Correct library
<Rocket className="w-5 h-5" />
```

---

### Pitfall 4: Changing Grid Layouts

**Wrong:**
```javascript
// Changing from 3-column to 4-column
<div className="grid md:grid-cols-4 gap-6"> // ❌ Changed layout
  {features.map(...)}
</div>
```

**Right:**
```javascript
// Keep original layout
<div className="grid md:grid-cols-3 gap-6"> // ✅ Original
  {features.map(...)}
</div>
```

---

### Pitfall 5: Hardcoding Colors

**Wrong:**
```javascript
<div className="bg-blue-500 text-white"> // ❌ Custom colors
  Content
</div>
```

**Right:**
```javascript
<div className="bg-[#1a1a1a] text-white"> // ✅ Design system colors
  Content
</div>
```

---

### Pitfall 6: Removing Responsive Classes

**Wrong:**
```javascript
// Removing responsive breakpoints
<h1 className="text-6xl font-semibold"> // ❌ No responsive sizing
  Headline
</h1>
```

**Right:**
```javascript
// Keep all responsive classes
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold"> // ✅
  Headline
</h1>
```

---

### Pitfall 7: Inconsistent Section Structure

**Wrong:**
```javascript
// Removing section wrapper or changing structure
<div className="py-12"> // ❌ Wrong padding, no container
  <h2>Title</h2>
  <p>Content</p>
</div>
```

**Right:**
```javascript
// Keep section structure consistent
<section id="section-name" className="py-24 bg-[#0a0a0a]"> // ✅
  <div className="section-container">
    <SectionHeader ... />
    {/* Content */}
  </div>
</section>
```

---

## Post-Adaptation Checklist

### Content Verification

- [ ] All Agent Y content has been integrated
- [ ] Brand name is correct everywhere
- [ ] No placeholder text remains ("Lorem ipsum", "Sample", etc.)
- [ ] All CTAs point to correct destinations
- [ ] Pricing is accurate
- [ ] Contact information is current
- [ ] Legal links are updated (Privacy Policy, Terms of Service)

### Design Integrity

- [ ] Color scheme is unchanged (#0a0a0a background, #22d3ee accent)
- [ ] Typography uses Inter and Playfair Display
- [ ] All animations are working
- [ ] Hover effects are present
- [ ] Card styles are consistent
- [ ] Button styles are unchanged
- [ ] Border radius is consistent (rounded-2xl for cards)

### Responsive Design

- [ ] Mobile layout works (375px width)
- [ ] Tablet layout works (768px width)
- [ ] Desktop layout works (1920px width)
- [ ] All breakpoints transition smoothly
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets are adequate size (44x44px minimum)

### Technical Quality

- [ ] No console errors
- [ ] No React warnings
- [ ] All imports are valid
- [ ] No unused variables
- [ ] Code is formatted consistently
- [ ] Comments are updated (removed old comments)

### Performance

- [ ] Images are optimized
- [ ] No unnecessarily large files
- [ ] Page loads quickly
- [ ] Animations are smooth (60fps)

### Accessibility

- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Color contrast meets WCAG standards
- [ ] Keyboard navigation works
- [ ] Focus states are visible

### Final Steps

- [ ] Update `README.md` with Agent Y information
- [ ] Update page title and meta description
- [ ] Update favicon (if desired)
- [ ] Test all major user flows
- [ ] Get stakeholder approval
- [ ] Deploy to staging environment
- [ ] Final QA pass
- [ ] Deploy to production

---

## Additional Resources

### Documentation Reference

- **React**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev
- **Vite**: https://vitejs.dev

### Design System Quick Reference

```css
/* Colors */
Background: #0a0a0a
Cards: #1a1a1a
Borders: #262626
Accent: #22d3ee
Text: #ffffff, #9ca3af

/* Spacing */
Section Padding: py-24
Card Padding: p-6, p-8
Grid Gap: gap-6

/* Typography */
Hero: text-5xl md:text-6xl lg:text-7xl
Section Title: text-4xl md:text-5xl
Card Title: text-xl md:text-2xl
Body: text-base
Small: text-sm

/* Borders */
Cards: rounded-2xl
Elements: rounded-xl, rounded-lg
Pills: rounded-full
```

### File Structure Quick Navigation

```
Section Components (MODIFY):
src/components/sections/Hero.jsx
src/components/sections/Benefits.jsx
src/components/sections/Features.jsx
src/components/sections/Pricing.jsx
... etc

UI Components (DO NOT MODIFY):
src/components/ui/Button.jsx
src/components/ui/Card.jsx
src/components/ui/SectionHeader.jsx
... etc

Layout Components (MODIFY):
src/components/layout/Header.jsx
src/components/layout/Footer.jsx

Main App (MODIFY IF NEEDED):
src/App.jsx
```

---

## Conclusion

### Success Criteria

You've successfully adapted the template when:

1. ✅ **All Agent Y content is integrated** - Headlines, features, pricing, testimonials are all Agent Y's actual content
2. ✅ **Design system is preserved** - Colors, typography, spacing match the original template exactly
3. ✅ **Animations are intact** - All Framer Motion animations work smoothly
4. ✅ **Responsive design works** - Layout adapts perfectly to mobile, tablet, and desktop
5. ✅ **Components are unchanged** - UI components in `src/components/ui/` remain untouched
6. ✅ **Brand voice is consistent** - Tone matches Agent Y's brand personality throughout
7. ✅ **All CTAs are functional** - Buttons link to correct destinations
8. ✅ **No errors or warnings** - Clean console, no React warnings
9. ✅ **Performance is maintained** - Page loads quickly, animations are smooth
10. ✅ **Quality assurance passed** - All items in testing checklist are verified

### Key Takeaways

**DO:**
- Replace content in section component files
- Use existing UI components as-is
- Maintain character length guidelines
- Preserve all animations and timings
- Keep responsive design classes
- Test thoroughly across devices
- Match Agent Y's brand voice

**DON'T:**
- Modify UI component files
- Change design system colors or typography
- Alter animation configurations
- Remove responsive breakpoints
- Add custom CSS that breaks the design system
- Skip testing on mobile devices
- Deploy without stakeholder approval

### Final Advice

**Be Methodical**: Work section by section, test after each change.

**Be Conservative**: When in doubt, preserve the template's original structure.

**Be Thorough**: Use the checklists to ensure nothing is missed.

**Be Patient**: Adaptation takes time - quality matters more than speed.

---

**End of Adaptation Instructions**

*Version 1.0 | Last Updated: January 5, 2026*

**Next Steps**: Begin adaptation with Hero section, then work through sections sequentially. Test frequently and refer back to this guide as needed. Good luck!


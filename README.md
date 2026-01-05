# Landio - AI Agency Landing Page

A pixel-perfect replica of the Landio AI Agency landing page template, built with modern web technologies.

## Features

- **Dark Theme** with cyan/teal accents
- **Smooth Scroll Animations** using Framer Motion
- **Responsive Design** for mobile, tablet, and desktop
- **Modern Typography** with Playfair Display serif and Inter sans-serif fonts
- **Interactive Components** including pricing toggles, FAQ accordions, and animated cards

## Agent Y Adaptation Guide

This template includes comprehensive instructions for adapting it to Agent Y's product page:

- **[extraction-instructions.md](extraction-instructions.md)** - Complete guide for extracting content from Agent Y's product page (~1000 lines)
- **[adaptation-instructions.md](adaptation-instructions.md)** - Detailed instructions for adapting this template with Agent Y content while preserving design integrity (~1700 lines)

These guides are designed for AI agents but can be used by human developers as well. They ensure seamless integration of Agent Y's content, features, and messaging while maintaining the Landio template's beautiful design system.

## Tech Stack

- **React 18** - UI library
- **Vite 4** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 16+ (recommended: Node.js 18+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx      # Sticky navigation header
│   │   └── Footer.jsx      # Site footer
│   ├── sections/
│   │   ├── Hero.jsx        # Hero section with CTA
│   │   ├── DataAnalysis.jsx # Quote testimonial
│   │   ├── Benefits.jsx    # Why Choose Us cards
│   │   ├── Services.jsx    # Services with task lists
│   │   ├── Features.jsx    # Features grid
│   │   ├── Process.jsx     # 3-step process tabs
│   │   ├── Clients.jsx     # Success stories
│   │   ├── Integrations.jsx # Integration icons
│   │   ├── Reviews.jsx     # Testimonials
│   │   ├── Pricing.jsx     # Pricing cards
│   │   ├── FAQ.jsx         # FAQ accordion
│   │   ├── Comparison.jsx  # Us vs Others
│   │   ├── Team.jsx        # Team members
│   │   └── CTA.jsx         # Final call-to-action
│   └── ui/
│       ├── Button.jsx      # Button component
│       ├── Card.jsx        # Card component
│       ├── Badge.jsx       # Badge/section badge
│       ├── Toggle.jsx      # Pricing toggle
│       ├── Accordion.jsx   # FAQ accordion
│       └── SectionHeader.jsx # Section headers
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Color Scheme

| Element | Color |
|---------|-------|
| Background | #0a0a0a |
| Card Background | #1a1a1a |
| Border | #262626 |
| Primary Text | #ffffff |
| Secondary Text | #9ca3af |
| Accent (Cyan) | #22d3ee |

## License

This project is created for educational purposes as a template replica.

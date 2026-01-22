# Seyvin AI Analytics Landing Page

Single-page marketing site for the Seyvin AI analytics product. The codebase is a React + Vite app with Tailwind CSS, Framer Motion animations, and a light/dark theme toggle.

## Highlights

- Dark/light theme toggle with localStorage persistence (`seyvin-theme`)
- Animated sections and cards via Framer Motion
- Responsive header with mobile menu
- Interactive content: Services/Platform switch, Use-case sector/persona toggle, Process step tabs, FAQ accordion
- Data-driven arrays for stats, testimonials, integrations, and comparisons
- Tailwind utility styling backed by CSS variables in `src/index.css`

## Page Layout (top to bottom)

1. Header (sticky navigation + theme toggle)
2. Hero
3. DataAnalysis (industry stats)
4. ProblemStatement (pain points)
5. Benefits
6. Services (Services vs Platform toggle)
7. Features
8. Process (4-step workflow)
9. Clients (use-case personas with sector toggle)
10. Integrations (available now + coming soon)
11. Reviews (testimonials)
12. Pricing (cost comparison + beta CTA)
13. FAQ
14. Comparison (capability matrix + differentiators)
15. Security (component file name: `Team.jsx`)
16. CTA (final conversion)
17. Footer

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 3.4
- Framer Motion 12
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 20 (see `.nvmrc`)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run lint
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
public/
├── favicon.svg
└── vite.svg
src/
├── assets/
│   └── react.svg
├── components/
│   ├── layout/
│   │   ├── Header.jsx        # Sticky nav + theme toggle
│   │   └── Footer.jsx        # Footer links + contact
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── DataAnalysis.jsx
│   │   ├── ProblemStatement.jsx
│   │   ├── Benefits.jsx
│   │   ├── Services.jsx
│   │   ├── Features.jsx
│   │   ├── Process.jsx
│   │   ├── Clients.jsx
│   │   ├── Integrations.jsx
│   │   ├── Reviews.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   ├── Comparison.jsx
│   │   ├── Team.jsx          # Security section
│   │   └── CTA.jsx
│   └── ui/
│       ├── Accordion.jsx
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── SectionHeader.jsx
│       └── Toggle.jsx
├── context/
│   ├── ThemeContext.jsx
│   └── index.js
├── App.jsx                   # Page assembly + ThemeProvider
├── main.jsx                  # App entry
└── index.css                 # Global styles + CSS variables
```

## Layout and Composition

- `src/App.jsx` assembles the page in order and wraps everything in `ThemeProvider`.
- `src/components/layout` contains the sticky header and site footer.
- `src/components/sections` contains all homepage sections (each section is a self-contained component).
- `src/components/ui` provides shared primitives (buttons, cards, accordions, badges).

## Assets and Visual System

- **Fonts**: Inter and Playfair Display loaded in `src/index.css` and wired in `tailwind.config.js`.
- **Icons**: `lucide-react` for UI icons; custom inline SVGs in `Integrations.jsx`.
- **Images**: testimonial headshots are remote Unsplash URLs (see `Reviews.jsx`).
- **Local assets**: `public/favicon.svg`, `public/vite.svg`, `src/assets/react.svg`.

## Theme and Styling

- Theme is controlled by `ThemeContext` and applied via `data-theme` on `document.documentElement`.
- `src/index.css` defines CSS variables for dark and light themes and sets base typography.
- `.section-container` provides consistent width/padding for layout.

## Content Editing Tips

- Section copy lives in each section component (often as arrays like `stats`, `benefits`, or `testimonials`).
- Update headings and CTA labels directly inside the relevant JSX files under `src/components/sections`.

## Additional Docs (legacy reference)

- [extraction-instructions.md](extraction-instructions.md)
- [adaptation-instructions.md](adaptation-instructions.md)

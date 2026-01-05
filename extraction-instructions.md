# Agent Y Product Page Content Extraction Guide

**Version:** 1.0  
**Purpose:** Extract and structure content from the Agent Y product page for integration into the Landio landing page template  
**Target:** AI Agents performing content extraction tasks

---

## Table of Contents

1. [Overview](#overview)
2. [Extraction Objectives](#extraction-objectives)
3. [Output Format Specification](#output-format-specification)
4. [Section-by-Section Extraction Guide](#section-by-section-extraction-guide)
5. [Content Categorization Rules](#content-categorization-rules)
6. [Messaging Framework Extraction](#messaging-framework-extraction)
7. [Quality Assurance Checklist](#quality-assurance-checklist)
8. [Examples and Templates](#examples-and-templates)

---

## Overview

### Purpose

This document guides AI agents in extracting structured content from the Agent Y product page. The extracted content will be used to populate a landing page template while preserving the template's design system, components, and animations.

### Key Principles

1. **Accuracy First**: Extract content exactly as presented; do not paraphrase or interpret
2. **Structure Preservation**: Maintain the hierarchical relationship of information
3. **Completeness**: Capture all relevant content including copy, CTAs, features, and specifications
4. **Context Awareness**: Note the positioning and importance of different content elements
5. **Messaging Integrity**: Preserve the tone, voice, and messaging framework

### What to Extract

- ✅ All text content (headings, subheadings, body copy, captions)
- ✅ Page structure and section organization
- ✅ Product features, capabilities, and specifications
- ✅ Call-to-action buttons and their destinations
- ✅ Value propositions and key differentiators
- ✅ Pricing information (if available)
- ✅ Testimonials and social proof
- ✅ FAQ content
- ✅ Integration and compatibility information
- ✅ Company/team information

### What NOT to Extract

- ❌ Images and visual assets (note their presence, but don't include binary data)
- ❌ CSS styling or design tokens
- ❌ JavaScript code or functionality
- ❌ Third-party scripts or tracking codes
- ❌ Backend API endpoints or technical implementation details

---

## Extraction Objectives

### Primary Objectives

1. **Content Inventory**: Create a complete inventory of all textual content
2. **Structural Mapping**: Map content to template sections (Hero, Features, Pricing, etc.)
3. **Messaging Analysis**: Identify tone, target audience, and value propositions
4. **CTA Tracking**: Document all calls-to-action and conversion paths
5. **Feature Documentation**: Catalog all product features and benefits

### Secondary Objectives

1. **Content Hierarchy**: Understand which content is primary vs. supporting
2. **User Journey**: Map how content guides users through the page
3. **Differentiation**: Identify unique selling propositions
4. **Social Proof**: Capture testimonials, reviews, and credibility indicators

---

## Output Format Specification

### Primary Output Format: JSON

The extraction should produce a structured JSON file with the following top-level structure:

```json
{
  "metadata": {
    "extraction_date": "YYYY-MM-DD",
    "source_url": "URL of Agent Y product page",
    "extractor_version": "1.0",
    "page_title": "Agent Y page title",
    "page_description": "Meta description if available"
  },
  "messaging_framework": {
    "primary_value_proposition": "Main value prop",
    "target_audience": "Primary audience description",
    "tone_of_voice": "Description of tone (professional, casual, technical, etc.)",
    "key_differentiators": ["Differentiator 1", "Differentiator 2", "..."],
    "brand_personality": "Description of brand personality"
  },
  "sections": {
    "hero": { /* Hero section content */ },
    "features": { /* Features content */ },
    "benefits": { /* Benefits content */ },
    "pricing": { /* Pricing content */ },
    "testimonials": { /* Testimonials/reviews content */ },
    "faq": { /* FAQ content */ },
    "integrations": { /* Integrations content */ },
    "process": { /* Process/how-it-works content */ },
    "team": { /* Team content */ },
    "comparison": { /* Comparison content */ },
    "cta": { /* Final CTA content */ }
  },
  "cta_inventory": [
    /* List of all CTAs across the page */
  ],
  "navigation": {
    /* Navigation menu items and links */
  }
}
```

---

## Section-by-Section Extraction Guide

### 1. Hero Section

**Location**: Top of the page, first impression area  
**Purpose**: Capture immediate attention and communicate primary value proposition

#### Content to Extract

```json
{
  "hero": {
    "badge_text": "Text of any badge/label (e.g., 'NEW', 'AI-POWERED', etc.)",
    "headline": "Primary headline text",
    "headline_emphasis": "Any italicized or specially formatted part of headline",
    "subheadline": "Supporting subheadline or description",
    "description": "Additional body copy in hero section",
    "primary_cta": {
      "text": "Button text (e.g., 'Get Started', 'Book a Demo')",
      "url": "Destination URL or #anchor",
      "type": "primary/secondary/link"
    },
    "secondary_cta": {
      "text": "Secondary button text if exists",
      "url": "Destination URL",
      "type": "secondary/link"
    },
    "social_links": [
      {
        "platform": "twitter/linkedin/facebook/etc.",
        "url": "Social profile URL"
      }
    ],
    "supporting_text": "Any additional small text or captions",
    "visual_description": "Brief description of hero visual/illustration"
  }
}
```

#### Extraction Instructions

1. **Headline**: Copy the main headline exactly, preserving capitalization
2. **Emphasis**: Note any words in italics, bold, or different styling
3. **Badge**: Look for small labels, tags, or badges (often with "NEW", pulsing dots, etc.)
4. **CTAs**: Record ALL button text and destinations in order of visual prominence
5. **Context**: Note if headline asks a question, makes a promise, or states a fact

#### Example Questions to Answer

- What is the immediate promise made to visitors?
- Who is the target audience implied by the language?
- What action is the primary CTA requesting?
- Is there urgency or scarcity messaging?

---

### 2. Features Section

**Location**: Usually after hero, showcasing product capabilities  
**Purpose**: List and describe what the product can do

#### Content to Extract

```json
{
  "features": {
    "section_badge": "Section badge text (e.g., 'FEATURES')",
    "section_title": "Section heading",
    "section_title_emphasis": "Emphasized part of title",
    "section_description": "Section description/subtitle",
    "features_list": [
      {
        "title": "Feature name",
        "description": "Feature description",
        "icon_category": "workflow/ai/analytics/automation/integration/etc.",
        "emphasis": "primary/secondary/tertiary"
      }
    ],
    "layout_notes": "Grid layout: 2-column, 3-column, list, cards, etc."
  }
}
```

#### Extraction Instructions

1. **Count Features**: Note total number of features listed
2. **Icon Categories**: Identify the category/theme of each feature (helps with icon selection)
3. **Feature Length**: Note if descriptions are short (1 sentence) or long (paragraph)
4. **Grouping**: Identify if features are grouped by category
5. **Priority**: Determine which features are emphasized (larger, first, highlighted)

#### Icon Category Mapping

Map feature themes to appropriate Lucide React icon categories:

- **Workflow/Automation**: Workflow, Cog, RotateCw, GitBranch
- **AI/Intelligence**: Brain, Bot, Sparkles, Zap
- **Communication**: MessageSquare, Mail, Phone, MessageCircle
- **Analytics/Data**: BarChart3, TrendingUp, LineChart, PieChart
- **Integration**: Puzzle, Link, Share2, Layers
- **Efficiency**: Clock, Target, CheckCircle, Gauge
- **Security**: Shield, Lock, Key, Eye
- **Collaboration**: Users, UserPlus, Share, GitMerge

---

### 3. Benefits Section

**Location**: Early-to-mid page, explaining "why choose us"  
**Purpose**: Communicate value and outcomes

#### Content to Extract

```json
{
  "benefits": {
    "section_badge": "Section badge text",
    "section_title": "Section heading",
    "section_title_emphasis": "Emphasized part",
    "section_description": "Section description",
    "benefits_list": [
      {
        "title": "Benefit title",
        "description": "Benefit description",
        "visual_type": "icon/illustration/chart/gauge/etc.",
        "outcome_focused": true/false,
        "quantifiable": "Percentage or metric if mentioned"
      }
    ]
  }
}
```

#### Extraction Instructions

1. **Benefits vs. Features**: Distinguish outcome-focused benefits from feature descriptions
2. **Visual Association**: Note if each benefit has an associated visual metaphor
3. **Quantification**: Capture any numbers, percentages, or metrics mentioned
4. **Emotional Language**: Note aspirational or emotional language used

#### Visual Type Mapping

Benefits often use visual metaphors:

- **Real-time/Speed**: Gauge, speedometer, clock animations
- **Growth/Progress**: Charts, trending arrows, bar graphs
- **Connection/Integration**: Connected nodes, puzzle pieces, linking lines
- **Simplification**: Consolidated items, streamlined flows
- **Intelligence**: Brain networks, lightbulbs, sparkles

---

### 4. Services Section

**Location**: Mid-page, detailed service offerings  
**Purpose**: Explain what the company provides

#### Content to Extract

```json
{
  "services": {
    "section_badge": "SERVICES or similar",
    "section_title": "Services section heading",
    "section_title_emphasis": "Emphasized part",
    "section_description": "Section description",
    "services_list": [
      {
        "title": "Service name",
        "description": "Service description",
        "details": [
          "Detail point 1",
          "Detail point 2"
        ],
        "visual_type": "task_list/code_snippet/search/workflow/etc.",
        "includes": ["Included item 1", "Included item 2"],
        "ideal_for": "Description of who this is best for"
      }
    ]
  }
}
```

#### Extraction Instructions

1. **Service Categories**: Identify distinct service offerings
2. **Deliverables**: Note what customers receive with each service
3. **Process Hints**: Capture any mentions of methodology or approach
4. **Technical Depth**: Note whether services are technical or strategic

---

### 5. Process/How It Works Section

**Location**: Mid-page, explaining methodology  
**Purpose**: Demonstrate ease of use or clear path forward

#### Content to Extract

```json
{
  "process": {
    "section_badge": "PROCESS / HOW IT WORKS",
    "section_title": "Process section heading",
    "section_title_emphasis": "Emphasized part",
    "section_description": "Section description",
    "steps": [
      {
        "number": "01/02/03 or Step 1/2/3",
        "title": "Step title",
        "description": "Step description",
        "visual_type": "audit/code/analytics/workflow/etc.",
        "duration": "Time estimate if mentioned",
        "deliverable": "What happens at this step"
      }
    ],
    "process_type": "linear/iterative/circular/custom"
  }
}
```

#### Extraction Instructions

1. **Step Count**: Note total number of steps (typically 3-4)
2. **Action Verbs**: Capture the primary action verb for each step
3. **Progression**: Understand if steps are sequential or parallel
4. **Outcomes**: Note what customers receive after each step

---

### 6. Social Proof Section

**Location**: Various locations (after benefits, before pricing, dedicated section)  
**Purpose**: Build credibility and trust

#### Content to Extract

```json
{
  "social_proof": {
    "testimonials": [
      {
        "quote": "Full testimonial text",
        "author": "Author name",
        "title": "Author title/role",
        "company": "Company name",
        "avatar_description": "Description of avatar if distinctive",
        "rating": "Star rating if present",
        "emphasis_type": "quote/case_study/stat"
      }
    ],
    "client_logos": [
      {
        "company_name": "Client company name",
        "industry": "Industry if known",
        "logo_description": "Logo appearance notes"
      }
    ],
    "success_metrics": [
      {
        "metric": "3,000+ customers",
        "description": "Supporting description",
        "visual_emphasis": "large_number/percentage/comparison"
      }
    ],
    "trust_badges": [
      "SOC 2 Certified",
      "GDPR Compliant",
      "ISO certified",
      "etc."
    ]
  }
}
```

#### Extraction Instructions

1. **Testimonial Length**: Note if quotes are short (1-2 sentences) or case studies (paragraph)
2. **Attribution**: Capture complete attribution (name, title, company)
3. **Context**: Note what aspect of the product the testimonial addresses
4. **Placement**: Note where testimonials appear (helps with prioritization)

---

### 7. Integrations Section

**Location**: Mid-to-late page  
**Purpose**: Show compatibility and ecosystem

#### Content to Extract

```json
{
  "integrations": {
    "section_badge": "INTEGRATIONS",
    "section_title": "Integrations heading",
    "section_title_emphasis": "Emphasized part",
    "section_description": "Section description",
    "integration_categories": [
      {
        "category": "CRM/Marketing/Communication/Analytics/etc.",
        "tools": [
          {
            "name": "Tool name (e.g., Salesforce, HubSpot)",
            "description": "What the integration does",
            "logo_description": "Logo appearance"
          }
        ]
      }
    ],
    "integration_callout": "Text about custom integrations or API access"
  }
}
```

#### Extraction Instructions

1. **Tool Count**: Note total number of integrations
2. **Categories**: Group tools by category (CRM, Email, Analytics, etc.)
3. **Emphasis**: Note which integrations are highlighted or featured
4. **Custom Options**: Capture mentions of API, webhooks, or custom integrations

---

### 8. Pricing Section

**Location**: Late-mid to late page  
**Purpose**: Present pricing options and plans

#### Content to Extract

```json
{
  "pricing": {
    "section_badge": "PRICING",
    "section_title": "Pricing heading",
    "section_title_emphasis": "Emphasized part",
    "section_description": "Section description",
    "billing_toggle": {
      "options": ["Monthly", "Yearly", "etc."],
      "savings_message": "Save 20% or similar",
      "default": "monthly/yearly"
    },
    "plans": [
      {
        "name": "Plan name (Starter, Pro, Enterprise)",
        "price_monthly": 99,
        "price_yearly": 79,
        "price_display": "$99/month or Custom or Contact Sales",
        "popular": true/false,
        "badge": "Most Popular / Best Value / etc.",
        "description": "Plan description if present",
        "features": [
          "Feature 1",
          "Feature 2",
          "Feature 3"
        ],
        "feature_count": 5,
        "cta_text": "Get Started / Contact Sales / etc.",
        "cta_url": "Destination URL",
        "limitations": ["Limit description if any"],
        "ideal_for": "Who this plan is best for"
      }
    ],
    "pricing_notes": [
      "Additional notes like 'No credit card required'",
      "Money-back guarantee",
      "etc."
    ],
    "additional_info": "Text about donations, commitments, or other info"
  }
}
```

#### Extraction Instructions

1. **Plan Count**: Note number of pricing tiers
2. **Feature Parity**: Identify features unique to each tier
3. **Emphasis**: Note which plan is marked as "popular" or "recommended"
4. **Custom Pricing**: Note if enterprise plans have "Contact Sales" instead of price
5. **Annual Discount**: Calculate and note discount percentage if applicable
6. **Add-ons**: Capture any optional add-ons or upgrades mentioned

---

### 9. FAQ Section

**Location**: Late page, before final CTA  
**Purpose**: Address objections and common questions

#### Content to Extract

```json
{
  "faq": {
    "section_badge": "FAQ",
    "section_title": "FAQ heading",
    "section_title_emphasis": "Emphasized part",
    "section_description": "Section description",
    "questions": [
      {
        "question": "Full question text",
        "answer": "Full answer text",
        "category": "pricing/technical/support/general",
        "priority": "high/medium/low based on placement"
      }
    ],
    "contact_cta": {
      "heading": "Still have questions?",
      "description": "Supporting text",
      "cta_text": "Contact button text",
      "cta_url": "Contact URL"
    }
  }
}
```

#### Extraction Instructions

1. **Question Count**: Note total number of FAQ items
2. **Question Types**: Categorize by topic (pricing, technical, support, etc.)
3. **Answer Length**: Note if answers are brief or detailed
4. **Order**: Preserve the order (usually prioritized by frequency)
5. **Links**: Note if answers contain links to other resources

#### Common FAQ Categories

- **Product Functionality**: What does it do? How does it work?
- **Pricing**: Cost, payment, refunds
- **Technical**: Integrations, security, performance
- **Support**: Response time, availability, channels
- **Implementation**: Setup time, technical requirements
- **Compliance**: Security certifications, data privacy

---

### 10. Comparison Section

**Location**: Late-mid to late page  
**Purpose**: Differentiate from competitors

#### Content to Extract

```json
{
  "comparison": {
    "section_badge": "COMPARISON",
    "section_title": "Comparison heading",
    "section_title_emphasis": "Emphasized part",
    "section_description": "Section description",
    "us": {
      "name": "Your product name",
      "features": [
        "Feature 1 - advantage",
        "Feature 2 - advantage",
        "..."
      ]
    },
    "them": {
      "name": "Others / Competitors / Traditional Solutions",
      "features": [
        "Feature 1 - disadvantage",
        "Feature 2 - disadvantage",
        "..."
      ]
    },
    "comparison_type": "feature_list/table/cards",
    "tone": "neutral/competitive/educational"
  }
}
```

#### Extraction Instructions

1. **Comparison Style**: Note if it's head-to-head or "us vs. old way"
2. **Feature Parity**: Ensure same number of comparison points on each side
3. **Tone**: Note if comparison is aggressive or educational
4. **Specificity**: Note if comparing to specific competitors or general alternatives

---

### 11. Team Section

**Location**: Late page  
**Purpose**: Humanize the brand, build trust

#### Content to Extract

```json
{
  "team": {
    "section_badge": "TEAM / ABOUT",
    "section_title": "Team heading",
    "section_title_emphasis": "Emphasized part",
    "section_description": "Section description",
    "members": [
      {
        "name": "Team member name",
        "title": "Role/title",
        "bio": "Bio description if present",
        "photo_description": "Avatar/photo description",
        "social_links": [
          {
            "platform": "linkedin/twitter/etc.",
            "url": "Profile URL"
          }
        ]
      }
    ],
    "team_description": "Overall team description if present"
  }
}
```

#### Extraction Instructions

1. **Member Count**: Note number of team members featured
2. **Role Distribution**: Note if showing founders, specific roles, or full team
3. **Bio Depth**: Note if bios are present and their length
4. **Social Presence**: Capture social links for networking potential

---

### 12. Final CTA Section

**Location**: Bottom of page, last conversion opportunity  
**Purpose**: Convert visitors who scrolled through entire page

#### Content to Extract

```json
{
  "final_cta": {
    "section_badge": "Badge text if any",
    "headline": "CTA headline",
    "headline_emphasis": "Emphasized part",
    "description": "Supporting text",
    "primary_cta": {
      "text": "Button text",
      "url": "Destination",
      "style": "primary/accent"
    },
    "secondary_cta": {
      "text": "Secondary button text",
      "url": "Destination"
    },
    "urgency_message": "Limited time / spots / etc. if present",
    "trust_reinforcement": "Guarantee, social proof, or security message"
  }
}
```

#### Extraction Instructions

1. **Message Variation**: Note if CTA message differs from hero CTA
2. **Urgency**: Capture any scarcity or urgency messaging
3. **Trust Signals**: Note final trust-building elements
4. **Multiple CTAs**: Some pages have multiple action options here

---

### 13. Navigation & Footer

**Location**: Header and footer  
**Purpose**: Site structure and additional information

#### Content to Extract

```json
{
  "navigation": {
    "logo_text": "Company name or logo text",
    "nav_links": [
      {
        "label": "Link label",
        "url": "#anchor or URL",
        "type": "internal/external"
      }
    ],
    "header_cta": {
      "text": "Header button text",
      "url": "Destination"
    }
  },
  "footer": {
    "tagline": "Footer tagline or company description",
    "link_sections": [
      {
        "heading": "Section heading (Product, Company, Resources, etc.)",
        "links": [
          {
            "label": "Link label",
            "url": "URL"
          }
        ]
      }
    ],
    "social_links": [
      {
        "platform": "Platform name",
        "url": "Profile URL"
      }
    ],
    "legal_links": [
      {
        "label": "Privacy Policy / Terms / etc.",
        "url": "URL"
      }
    ],
    "copyright": "Copyright text"
  }
}
```

---

## Content Categorization Rules

### Tone of Voice Classification

Analyze the overall writing style and classify as:

- **Professional/Corporate**: Formal, business-focused, traditional
- **Casual/Conversational**: Friendly, approachable, uses "we" and "you"
- **Technical/Expert**: Detailed, specification-focused, assumes knowledge
- **Aspirational/Inspirational**: Emotional, vision-focused, transformative
- **Direct/No-nonsense**: Concise, action-oriented, minimal fluff

### Content Priority Levels

Classify each piece of content by importance:

1. **P0 - Critical**: Hero headline, primary value prop, main CTA
2. **P1 - High**: Features, pricing, key benefits
3. **P2 - Medium**: Process, testimonials, FAQ
4. **P3 - Low**: Footer content, additional resources, nice-to-have

### Target Audience Identification

Based on language, examples, and use cases, identify:

- **Primary Audience**: Who is the main target?
- **Secondary Audience**: Who else might be interested?
- **Role/Title**: C-level, manager, individual contributor, etc.
- **Company Size**: Enterprise, mid-market, SMB, startup
- **Industry**: Vertical if specified (SaaS, healthcare, finance, etc.)
- **Pain Points**: Problems being solved
- **Goals**: Outcomes being pursued

---

## Messaging Framework Extraction

### Value Proposition Canvas

Extract and organize into this framework:

```json
{
  "messaging_framework": {
    "headline_value_prop": "Primary promise in 10 words or less",
    "extended_value_prop": "Detailed value proposition (1-2 sentences)",
    "customer_pain_points": [
      "Pain point 1 that product solves",
      "Pain point 2",
      "Pain point 3"
    ],
    "solutions_provided": [
      "How product addresses pain point 1",
      "How product addresses pain point 2",
      "How product addresses pain point 3"
    ],
    "key_benefits": [
      "Benefit 1 (outcome-focused)",
      "Benefit 2",
      "Benefit 3"
    ],
    "differentiation": [
      "What makes this different from competitors",
      "Unique approach or technology",
      "Exclusive features or methodology"
    ],
    "proof_points": [
      "Stat 1 (e.g., '10,000+ users')",
      "Stat 2 (e.g., '95% satisfaction')",
      "Credibility marker (e.g., 'SOC 2 certified')"
    ],
    "call_to_actions": {
      "primary": "Most common CTA text",
      "secondary": "Alternative CTA text",
      "urgency": "Urgency messaging if used"
    }
  }
}
```

### Brand Voice Characteristics

Document these aspects:

```json
{
  "brand_voice": {
    "vocabulary": {
      "common_words": ["List", "frequently", "used", "words"],
      "technical_terms": ["Industry", "specific", "terminology"],
      "power_words": ["Action", "emotional", "words", "used"]
    },
    "sentence_structure": "short/medium/long, simple/complex",
    "use_of_questions": "frequent/occasional/rare",
    "use_of_statistics": "data-driven/balanced/minimal",
    "use_of_metaphors": "frequent/occasional/rare",
    "formality_level": "formal/semi-formal/casual",
    "humor_presence": "humorous/light/serious",
    "personal_pronouns": "we/you/I/they - which are most common",
    "action_orientation": "highly action-oriented/balanced/informational"
  }
}
```

---

## Quality Assurance Checklist

Before considering the extraction complete, verify:

### Completeness Checks

- [ ] All visible text content has been captured
- [ ] Every section of the page is represented
- [ ] All CTAs are documented with their destinations
- [ ] Navigation and footer content is included
- [ ] No placeholder text like "Lorem ipsum" remains

### Accuracy Checks

- [ ] Exact wording is preserved (not paraphrased)
- [ ] Capitalization matches the original
- [ ] Numbers and statistics are exact
- [ ] Company and product names are spelled correctly
- [ ] URLs are complete and correct

### Structure Checks

- [ ] JSON is valid and parseable
- [ ] All required fields are populated
- [ ] Arrays are used for lists
- [ ] Nesting is logical and consistent
- [ ] Section names match the template structure

### Messaging Checks

- [ ] Primary value proposition is clearly identified
- [ ] Target audience is documented
- [ ] Tone of voice is characterized
- [ ] Key differentiators are captured
- [ ] Brand personality is described

### Practical Checks

- [ ] Content is organized by template sections
- [ ] Icon categories are suggested for features
- [ ] Visual types are noted for illustrations
- [ ] Priority levels are assigned
- [ ] Content length notes are included

---

## Examples and Templates

### Example 1: Complete Hero Section Extraction

**Source Page Content:**
> 🟢 AI-POWERED AUTOMATION
> 
> **Transform Your Business with Intelligent Automation**
> *Built for Modern Teams*
> 
> Automate repetitive tasks, boost productivity, and scale faster with AI-powered workflows designed for growing businesses.
> 
> [Get Started Free] [Watch Demo]

**Extracted JSON:**

```json
{
  "hero": {
    "badge_text": "AI-POWERED AUTOMATION",
    "badge_icon": "pulsing_dot",
    "headline": "Transform Your Business with Intelligent Automation",
    "headline_emphasis": "Built for Modern Teams",
    "subheadline": "Automate repetitive tasks, boost productivity, and scale faster with AI-powered workflows designed for growing businesses.",
    "description": null,
    "primary_cta": {
      "text": "Get Started Free",
      "url": "#signup",
      "type": "primary"
    },
    "secondary_cta": {
      "text": "Watch Demo",
      "url": "#demo",
      "type": "secondary"
    },
    "social_links": [],
    "supporting_text": null,
    "visual_description": "Abstract illustration of connected workflow nodes with AI iconography"
  }
}
```

---

### Example 2: Features List Extraction

**Source Page Content:**
> **Features**
> *Everything you need*
> 
> Our platform provides all the tools you need to automate and grow.
> 
> - **Smart Workflows** - Automate complex processes with drag-and-drop simplicity
> - **AI Assistant** - Get intelligent help with content, analysis, and decision-making
> - **Real-Time Analytics** - Track performance and optimize in real-time
> - **Seamless Integrations** - Connect with 100+ tools you already use

**Extracted JSON:**

```json
{
  "features": {
    "section_badge": "FEATURES",
    "section_title": "Everything you need",
    "section_title_emphasis": null,
    "section_description": "Our platform provides all the tools you need to automate and grow.",
    "features_list": [
      {
        "title": "Smart Workflows",
        "description": "Automate complex processes with drag-and-drop simplicity",
        "icon_category": "workflow",
        "emphasis": "primary"
      },
      {
        "title": "AI Assistant",
        "description": "Get intelligent help with content, analysis, and decision-making",
        "icon_category": "ai",
        "emphasis": "primary"
      },
      {
        "title": "Real-Time Analytics",
        "description": "Track performance and optimize in real-time",
        "icon_category": "analytics",
        "emphasis": "primary"
      },
      {
        "title": "Seamless Integrations",
        "description": "Connect with 100+ tools you already use",
        "icon_category": "integration",
        "emphasis": "primary"
      }
    ],
    "layout_notes": "4 features in 2x2 grid on desktop, single column on mobile"
  }
}
```

---

### Example 3: Pricing Plan Extraction

**Source Page Content:**
> **Pricing**
> *Plans that scale with you*
> 
> [Monthly] [Yearly - Save 20%]
> 
> **Starter** - $49/month
> - 5 automated workflows
> - Basic AI features
> - Email support
> - 1 team member
> [Get Started]
> 
> **Professional** - $99/month ⭐ Most Popular
> - Unlimited workflows
> - Advanced AI features
> - Priority support
> - Up to 10 team members
> - Custom integrations
> [Start Free Trial]

**Extracted JSON:**

```json
{
  "pricing": {
    "section_badge": "PRICING",
    "section_title": "Plans that scale with you",
    "section_title_emphasis": null,
    "section_description": null,
    "billing_toggle": {
      "options": ["Monthly", "Yearly"],
      "savings_message": "Save 20%",
      "default": "monthly"
    },
    "plans": [
      {
        "name": "Starter",
        "price_monthly": 49,
        "price_yearly": 39,
        "price_display": "$49/month",
        "popular": false,
        "badge": null,
        "description": null,
        "features": [
          "5 automated workflows",
          "Basic AI features",
          "Email support",
          "1 team member"
        ],
        "feature_count": 4,
        "cta_text": "Get Started",
        "cta_url": "#signup",
        "limitations": ["Limited to 5 workflows", "1 team member only"],
        "ideal_for": "Individuals and small projects"
      },
      {
        "name": "Professional",
        "price_monthly": 99,
        "price_yearly": 79,
        "price_display": "$99/month",
        "popular": true,
        "badge": "Most Popular",
        "description": null,
        "features": [
          "Unlimited workflows",
          "Advanced AI features",
          "Priority support",
          "Up to 10 team members",
          "Custom integrations"
        ],
        "feature_count": 5,
        "cta_text": "Start Free Trial",
        "cta_url": "#trial",
        "limitations": ["Up to 10 team members"],
        "ideal_for": "Growing teams and businesses"
      }
    ],
    "pricing_notes": [],
    "additional_info": null
  }
}
```

---

### Example 4: FAQ Extraction

**Source Page Content:**
> **Frequently Asked Questions**
> 
> **How long does setup take?**
> Most customers are up and running within 24 hours. Our onboarding team will guide you through the process.
> 
> **Do you offer a free trial?**
> Yes! All plans include a 14-day free trial. No credit card required.
> 
> **Can I cancel anytime?**
> Absolutely. Cancel anytime from your account settings. No questions asked.

**Extracted JSON:**

```json
{
  "faq": {
    "section_badge": "FAQ",
    "section_title": "Frequently Asked Questions",
    "section_title_emphasis": null,
    "section_description": null,
    "questions": [
      {
        "question": "How long does setup take?",
        "answer": "Most customers are up and running within 24 hours. Our onboarding team will guide you through the process.",
        "category": "implementation",
        "priority": "high"
      },
      {
        "question": "Do you offer a free trial?",
        "answer": "Yes! All plans include a 14-day free trial. No credit card required.",
        "category": "pricing",
        "priority": "high"
      },
      {
        "question": "Can I cancel anytime?",
        "answer": "Absolutely. Cancel anytime from your account settings. No questions asked.",
        "category": "pricing",
        "priority": "high"
      }
    ],
    "contact_cta": {
      "heading": "Still have questions?",
      "description": "Our team is here to help. Get in touch anytime.",
      "cta_text": "Contact Support",
      "cta_url": "#contact"
    }
  }
}
```

---

### Example 5: Messaging Framework

**Extracted from overall page analysis:**

```json
{
  "messaging_framework": {
    "headline_value_prop": "Transform Your Business with Intelligent Automation",
    "extended_value_prop": "Automate repetitive tasks, boost productivity, and scale faster with AI-powered workflows designed for growing businesses that want to work smarter, not harder.",
    "customer_pain_points": [
      "Spending too much time on repetitive manual tasks",
      "Unable to scale operations without hiring more staff",
      "Lacking visibility into process efficiency",
      "Struggling to integrate disparate tools and data sources"
    ],
    "solutions_provided": [
      "Smart workflows that automate repetitive processes",
      "AI-powered assistance that scales with your needs",
      "Real-time analytics providing complete visibility",
      "Seamless integrations connecting all your tools"
    ],
    "key_benefits": [
      "Save 10+ hours per week on manual tasks",
      "Scale operations without increasing headcount",
      "Make data-driven decisions with confidence",
      "Unify your tech stack into one cohesive system"
    ],
    "differentiation": [
      "AI-first approach vs. traditional rule-based automation",
      "Drag-and-drop simplicity without sacrificing power",
      "Built specifically for growing businesses (not enterprise or solopreneurs)",
      "White-glove onboarding and support included in all plans"
    ],
    "proof_points": [
      "10,000+ businesses automated",
      "4.9/5 rating from 2,000+ reviews",
      "SOC 2 Type II certified",
      "Average ROI of 300% in first year"
    ],
    "call_to_actions": {
      "primary": "Get Started Free",
      "secondary": "Book a Demo",
      "urgency": "Limited spots available for personalized onboarding"
    }
  }
}
```

---

## Advanced Extraction Techniques

### Handling Complex Layouts

**Interactive Elements:**
- Note tabbed content (extract content for all tabs)
- Document accordion states (extract all collapsed content)
- Capture carousel items (extract all slides)
- Record modal/popup content (extract full text)

**Dynamic Content:**
- If content loads on scroll, ensure all content is visible before extraction
- For interactive demos or animations, describe the sequence and key frames
- For calculators or tools, document input fields and example outputs

### Contextual Notes

In addition to raw content, provide context:

```json
{
  "contextual_notes": {
    "content_density": "high/medium/low - how much text per section",
    "visual_emphasis": "text-heavy/balanced/visual-heavy",
    "cta_frequency": "Number of CTA buttons across page",
    "social_proof_prominence": "highly emphasized/moderate/minimal",
    "technical_depth": "very technical/moderately technical/non-technical",
    "page_length": "Number of sections, estimated reading time",
    "unique_sections": ["Any sections not in standard template"],
    "missing_standard_sections": ["Standard sections not present on page"]
  }
}
```

### Content Length Guidelines

Note recommended character limits for template adaptation:

- **Hero Headline**: 40-60 characters optimal, 80 max
- **Hero Subheadline**: 100-150 characters optimal, 200 max
- **Feature Titles**: 15-25 characters
- **Feature Descriptions**: 60-100 characters optimal, 150 max
- **Section Titles**: 20-40 characters
- **Section Descriptions**: 80-120 characters
- **Button Text**: 10-20 characters
- **FAQ Questions**: 40-80 characters
- **FAQ Answers**: 200-400 characters

If Agent Y content exceeds these limits, note it for potential editing during adaptation.

---

## Special Considerations

### When Content is Sparse

If Agent Y's page lacks certain sections:

1. **Document Absence**: Clearly note which sections are missing
2. **Suggest Adaptations**: Recommend how template sections might be modified
3. **Identify Replacements**: Suggest using related content to fill gaps
4. **Flag for Creation**: Indicate which content needs to be created

### When Content is Excessive

If Agent Y has more content than template sections:

1. **Prioritize**: Identify most important content that must be included
2. **Consolidate**: Suggest combining similar content
3. **Additional Sections**: Recommend new sections if content is distinct and valuable
4. **Appendix**: Create an "overflow" section for secondary content

### Brand-Specific Elements

If Agent Y has unique brand elements:

1. **Brand Colors**: Note if specific colors are consistently used (for potential accent color customization)
2. **Typography Style**: Note if text is primarily caps, title case, or sentence case
3. **Iconography**: Note visual style (outline, filled, duotone, etc.)
4. **Photography Style**: Note if photos are used and their style (candid, professional, illustrated, abstract)

---

## Deliverables Checklist

Upon completion, ensure you have:

- [ ] Complete JSON file with all sections
- [ ] Messaging framework documented
- [ ] CTA inventory compiled
- [ ] Content length notes included
- [ ] Icon category mappings provided
- [ ] Visual type descriptions noted
- [ ] Context and notes for unusual elements
- [ ] Recommendations for missing or excessive content
- [ ] Brand voice characteristics documented
- [ ] Target audience identified

---

## Output File Naming Convention

Save the extracted content as:

```
agent-y-content-extraction-[DATE].json
```

Example: `agent-y-content-extraction-2026-01-05.json`

Also create a companion summary file:

```
agent-y-extraction-summary-[DATE].md
```

### Summary File Contents

The summary markdown file should contain:

1. **Extraction Overview**: High-level summary of what was found
2. **Page Structure**: List of sections present on Agent Y page
3. **Content Highlights**: Notable content or unique elements
4. **Template Mapping**: How Agent Y sections map to template sections
5. **Gaps and Opportunities**: Missing content or areas needing attention
6. **Recommendations**: Suggestions for the adaptation phase
7. **Next Steps**: Clear instructions for the adaptation agent

---

## Conclusion

This extraction guide ensures comprehensive, structured content capture from the Agent Y product page. The resulting JSON file will serve as the single source of truth for the template adaptation phase, enabling seamless integration of Agent Y's messaging, features, and brand voice into the Landio template while preserving its design integrity.

Remember: **Accuracy, completeness, and structure are paramount.** Take your time, verify your work against the checklist, and provide clear context for the adaptation agent who will use this extraction.

---

**End of Extraction Instructions**

*Version 1.0 | Last Updated: January 5, 2026*


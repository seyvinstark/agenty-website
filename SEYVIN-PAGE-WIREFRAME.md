# Seyvin Landing Page - ASCII Wireframe Documentation

This wireframe provides a one-to-one representation of the page structure, section layouts, content positioning, and UI organization. Use this as a simplified design context for improving layout structure, UI, and content.

---

## Page Structure Overview

```
+==============================================================================+
|                              [HEADER - FIXED]                                |
+==============================================================================+
|                                                                              |
|                              SECTION 1: HERO                                 |
|                           (Full Viewport Height)                             |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                         SECTION 2: DATA ANALYSIS                             |
|                          (Stats Cards - 3 col)                               |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                       SECTION 3: PROBLEM STATEMENT                           |
|                         (Pain Points - 2+2 col)                              |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                           SECTION 4: BENEFITS                                |
|                        (Benefit Cards - 3 col)                               |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                           SECTION 5: SERVICES                                |
|                      (Toggle Tabs + Service Cards)                           |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                           SECTION 6: FEATURES                                |
|                    (Tier 1: 3 col + Tier 2: 5 col)                           |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                            SECTION 7: PROCESS                                |
|                   (Step Tabs + Visual/Content Split)                         |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                           SECTION 8: CLIENTS                                 |
|                   (Sector Toggle + Persona Selector)                         |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                        SECTION 9: INTEGRATIONS                               |
|                       (Available + Coming Soon)                              |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                           SECTION 10: REVIEWS                                |
|                    (Stats Row + Testimonials 3 col)                          |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                           SECTION 11: PRICING                                |
|                   (Cost Comparison + Beta Access)                            |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                             SECTION 12: FAQ                                  |
|                   (Contact Card + Accordion 3 col)                           |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                         SECTION 13: COMPARISON                               |
|                   (Feature Table + Differentiators)                          |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                          SECTION 14: SECURITY                                |
|                       (Security Features 3x2 grid)                           |
|                                                                              |
+------------------------------------------------------------------------------+
|                                                                              |
|                             SECTION 15: CTA                                  |
|                        (Final Call to Action)                                |
|                                                                              |
+------------------------------------------------------------------------------+
|                              [FOOTER]                                        |
+==============================================================================+
```

---

## HEADER (Fixed, h-20, z-50)

```
+==============================================================================+
|  [LOGO]  Seyvin    |    Features    How It Works    Pricing    |  [==O] [Demo]
|   [*]                                                           |  Theme  CTA
+==============================================================================+
     ^                              ^                                    ^
     |                              |                                    |
  32x32 icon              Desktop Nav (hidden mobile)          Toggle + Button
  + Serif italic          Gray text, hover white               (hidden mobile)
  
MOBILE: [LOGO] Seyvin                                    [Moon] [Menu]
```

---

## SECTION 1: HERO (min-h-screen, centered)

```
+==============================================================================+
|                                                                              |
|                          +----------------+                                  |
|                          |    [LOGO]      |   <- 80x80 rounded icon          |
|                          |      *         |      with glow effect            |
|                          +----------------+                                  |
|                                                                              |
|                     +---------------------------+                            |
|                     |  (*) BETA ACCESS          |   <- Badge with pulse dot  |
|                     +---------------------------+                            |
|                                                                              |
|              Your AI Analytics Team —                                        |
|                  Ready in Minutes                <- Serif italic accent      |
|                                                                              |
|         Stop spending 5-10 hours per week on manual                          |
|         reporting. Three specialized AI assistants                           |
|         analyze your data, create dashboards...                              |
|                                                                              |
|              +---------------+  +---------------------+                      |
|              | Book a demo → |  | Apply for closed beta |                    |
|              +---------------+  +---------------------+                      |
|               Primary CTA          Secondary CTA                             |
|                                                                              |
|            [Lock] Secure OAuth  |  [Users] Limited beta  |  [CC] No card    |
|                              Trust Signals                                   |
|                                                                              |
|                                [v]                                            |
|                          Scroll indicator                                    |
+==============================================================================+
```

---

## SECTION 2: DATA ANALYSIS (py-24, max-w-4xl)

```
+==============================================================================+
|                                                                              |
|                      [!] SOUND FAMILIAR?                                     |
|                           (Badge)                                            |
|                                                                              |
|       "If you're struggling with data fragmentation,                         |
|        technical complexity, or slow insights —                              |
|                   you're not alone."                                         |
|              (Serif italic on key phrases)                                   |
|                                                                              |
|    +-------------------+ +-------------------+ +-------------------+         |
|    |       95%         | |       88%         | |       47%         |         |
|    |                   | |                   | |                   |         |
|    | of GenAI pilots   | | of AI pilots fail | | cite integration  |         |
|    | are failing       | | to reach          | | complexity as #1  |         |
|    |                   | | production        | | barrier           |         |
|    |                   | |                   | |                   |         |
|    | MIT NANDA, 2025   | | IDC Research      | | Industry Research |         |
|    +-------------------+ +-------------------+ +-------------------+         |
|          Card 1              Card 2               Card 3                     |
|                      (3-column grid)                                         |
+==============================================================================+
```

---

## SECTION 3: PROBLEM STATEMENT (py-24, 2-col grid)

```
+==============================================================================+
|                                                                              |
|                    [!] THE CHALLENGE                                         |
|                The Problem We're Solving                                     |
|       Growing businesses face these data challenges every day                |
|                                                                              |
|  +--------------------------------+ +--------------------------------+       |
|  |  [!] Data scattered across...  | |  [!] Traditional BI requires  |       |
|  |  [X] ----------------------    | |  [X] ----------------------   |       |
|  |  [!] No unified view of...     | |  [!] SQL queries needed...    |       |
|  |  [X] ----------------------    | |  [X] ----------------------   |       |
|  |  [!] Hours spent copying...    | |  [!] Dashboard design...      |       |
|  |  [X] ----------------------    | |  [X] ----------------------   |       |
|  |  [!] Conflicting numbers...    | |  [!] Every question requires  |       |
|  |  [X] ----------------------    | |  [X] ----------------------   |       |
|  |                                | |                                |       |
|  |  [cyan] Data Fragmentation     | |  [cyan] Technical Expertise   |       |
|  |  "We have data everywhere..."  | |  "We can't afford..."         |       |
|  +--------------------------------+ +--------------------------------+       |
|            Card 1 (Pain Points)        Card 2 (Pain Points)                  |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  |  +------------------+         Slow Time-to-Insight                    |  |
|  |  | [Clock icon]     |                                                 |  |
|  |  | Common           |         5-10+ hours per week spent on manual    |  |
|  |  | Frustration      |         report preparation. Days or weeks...    |  |
|  |  |                  |                                                 |  |
|  |  | "By the time we  |         [Manual reports] [Delayed] [IT blocks]  |  |
|  |  | get the data..." |              (Tag pills - red)                  |  |
|  |  +------------------+                                                 |  |
|  +-----------------------------------------------------------------------+  |
|                    Card 3 (Full width - Quote + Tags)                       |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  |  +------------------+              +------------------+                |  |
|  |  |  [$] Prohibitive |              |  [Bot] AI That   |                |  |
|  |  |      Costs       |              |  Can't Be Trusted|                |  |
|  |  |                  |              |                  |                |  |
|  |  | "Enterprise      |              | "ChatGPT is      |                |  |
|  |  | analytics is..." |              | helpful, but..." |                |  |
|  |  +------------------+              +------------------+                |  |
|  +-----------------------------------------------------------------------+  |
|                Card 4 (Full width - 2-column combined)                      |
+==============================================================================+
```

---

## SECTION 4: BENEFITS (py-24, 3-col grid)

```
+==============================================================================+
|                                                                              |
|                        [*] BENEFITS                                          |
|                    Why Choose Seyvin?                                        |
|         Enterprise-grade analytics at a fraction of the cost                 |
|                                                                              |
|    +-------------------+ +-------------------+ +-------------------+         |
|    |                   | |                   | |                   |         |
|    |    +--------+     | |   | | | | |       | |   [==]...[==]     |         |
|    |   /    *    \     | |   | | | | |       | |      ...         |         |
|    |  +-----------+    | |   | | | | |       | |   [==]...[==]     |         |
|    |   Gauge Illus     | |   Bar Chart       | |   Connect Illus   |         |
|    |                   | |                   | |                   |         |
|    | Save 5-10 Hours   | | Board Prep:       | | Zero Technical    |         |
|    |     Weekly        | | 8hrs -> 15min     | |    Skills         |         |
|    |                   | |                   | |                   |         |
|    | Stop manual       | | Generate investor | | No SQL, no        |         |
|    | reporting. Our AI | | reports in one    | | dashboard design  |         |
|    | assistants...     | | command.          | | Ask in English.   |         |
|    +-------------------+ +-------------------+ +-------------------+         |
|                                                                              |
+==============================================================================+
```

---

## SECTION 5: SERVICES (py-24, toggle + 2-col grid)

```
+==============================================================================+
|                                                                              |
|              +--------------------------------+                               |
|              | [Layers] Our Platform | [Box] Services |                      |
|              +--------------------------------+                               |
|                     Toggle Badge (pill)                                      |
|                                                                              |
|                  Smarter Services,                                           |
|                    Built with AI                                             |
|         Everything you need to automate operations                           |
|                                                                              |
|  +--------------------------------+ +--------------------------------+       |
|  | [$] Cost Management   [pending]| |  [Search box]                  |       |
|  | [Clock] Payment rem.    [done] | |  Research anything...          |       |
|  | [Users] Employee Track [pend.] | |                                |       |
|  | [Tweet] Social media    [done] | |  [Research] [Software] [UX]    |       |
|  |                                | |  [High Converting]             |       |
|  | [cyan] Automate repetitive     | |                                |       |
|  | We help you streamline...      | | [cyan] Real-Time Intelligence  |       |
|  +--------------------------------+ +--------------------------------+       |
|         Task List Card                   Search/Tags Card                    |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  | +---------------------------+                                         |  |
|  | | [Code] Code              |        Custom AI Agent development      |  |
|  | | 1  class AutomationAgent:|                                         |  |
|  | | 2    def __init__...     |        We develop custom AI agents      |  |
|  | | 3      self.activation   |        that integrate seamlessly...     |  |
|  | | 4      self.current_mode |                                         |  |
|  | | 5    def evaluate_task...|                                         |  |
|  | +---------------------------+                                         |  |
|  +-----------------------------------------------------------------------+  |
|                    Code Visual Card (Full width)                            |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  |  [Lightbulb icon]   AI Strategy Consulting                            |  |
|  |                     Get expert guidance to implement AI solutions...  |  |
|  +-----------------------------------------------------------------------+  |
|                    Consulting Card (Full width)                             |
+==============================================================================+
```

---

## SECTION 6: FEATURES (py-24, Tier 1: 3-col + Tier 2: 5-col)

```
+==============================================================================+
|                                                                              |
|                         [Box] FEATURES                                       |
|               Everything You Need. Nothing You Don't.                        |
|         Built for how you work—complete AI without complexity                |
|                                                                              |
|  TIER 1: Primary Features (Large Cards)                                      |
|  +-------------------+ +-------------------+ +-------------------+           |
|  | [Dashboard][Bar]  | | [Users][Bot]      | | [File][Clock]     |           |
|  |   icon pair       | |   icon pair       | |   icon pair       |           |
|  |                   | |                   | |                   |           |
|  | Instant Dashboards| | Three AI Experts. | | Board-Ready       |           |
|  | from Your Data    | | One Conversation. | | Reports in One    |           |
|  |                   | |                   | | Command           |           |
|  | Connect your data | | Ask questions in  | | "Create a Q4      |           |
|  | sources once...   | | plain English...  | | performance..."   |           |
|  | -----------------| | -----------------| | -----------------|           |
|  | [check] Save 5-10 | | [check] Every     | | [check] Board     |           |
|  | hours per week    | | answer backed by  | | meeting prep:     |           |
|  +-------------------+ +-------------------+ +-------------------+           |
|                                                                              |
|  TIER 2: Secondary Features (Small Cards - 5 columns)                        |
|  +----------+ +----------+ +----------+ +----------+ +----------+           |
|  |[Msg][Bot]| |[Link][DB]| |[Art][Bar]| |[DB][Dash]| |[Flow][Bot]|           |
|  |          | |          | |          | |          | |          |           |
|  | Natural  | | Multi-   | | Conversa-| | Central- | | AI Agent |           |
|  | Language | | Source   | | tional   | | ized     | | Teams &  |           |
|  | Querying | | Integrat | | Chart    | | Knowledge| | Workflows|           |
|  |          | |          | | Editing  | | Base     | |          |           |
|  | Ask in   | | QB, Notion| | Customize| | Unified, | | Build    |           |
|  | English..| | GDrive...| | any vis..| | searchable| | custom..|           |
|  +----------+ +----------+ +----------+ +----------+ +----------+           |
|                                                                              |
+==============================================================================+
```

---

## SECTION 7: PROCESS (py-24, Large Card with Step Tabs)

```
+==============================================================================+
|                                                                              |
|                       [Layers] HOW IT WORKS                                  |
|              From Data to Insights in 4 Simple Steps                         |
|          No technical skills required. No waiting for IT.                    |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  |                                                                        |  |
|  |  +------------+ +------------+ +------------+ +------------+          |  |
|  |  |[DB] Step 1 | |[Bar] Step 2| |[Chat]Step 3| |[Down]Step 4|          |  |
|  |  +------------+ +------------+ +------------+ +------------+          |  |
|  |   (Active=filled)  (Inactive=outline)                                 |  |
|  |                                                                        |  |
|  |  +---------------------------+  +---------------------------+         |  |
|  |  |                           |  |  01  [DB]                 |         |  |
|  |  |  Data Sources             |  |                           |         |  |
|  |  |  [*] [*] [*]              |  |  Connect Your Data        |         |  |
|  |  |                           |  |  One-click setup, zero... |         |  |
|  |  |  +---------------------+  |  |                           |         |  |
|  |  |  | [check] QuickBooks  |  |  |  Link the tools you       |         |  |
|  |  |  |         Connected   |  |  |  already use in seconds   |         |  |
|  |  |  +---------------------+  |  |                           |         |  |
|  |  |  | [check] Notion      |  |  |  [check] QuickBooks Online|         |  |
|  |  |  |         Connected   |  |  |  [check] Notion           |         |  |
|  |  |  +---------------------+  |  |  [check] Google Drive     |         |  |
|  |  |  | [check] Google Drive|  |  |  [check] CSV/Excel        |         |  |
|  |  |  |         Connected   |  |  |                           |         |  |
|  |  |  +---------------------+  |  |  (*) All sources connected|         |  |
|  |  |  | [check] CSV/Excel   |  |  |                           |         |  |
|  |  |  |         Connected   |  |  +---------------------------+         |  |
|  |  |  +---------------------+  |         Step Content                   |  |
|  |  |                           |                                        |  |
|  |  +---------------------------+                                        |  |
|  |        Visual (changes per step)                                      |  |
|  |                                                                        |  |
|  +-----------------------------------------------------------------------+  |
|                                                                              |
+==============================================================================+
```

---

## SECTION 8: CLIENTS (py-24, Sector Toggle + 2-col)

```
+==============================================================================+
|                                                                              |
|                        [Users] USE CASES                                     |
|                   Built for How You Work                                     |
|         See how organizations like yours use Seyvin                          |
|                                                                              |
|              +--------------------------------+                               |
|              | [Building] Private | [Globe] Public |                         |
|              +--------------------------------+                               |
|                    Sector Toggle (pill)                                      |
|                                                                              |
|  +--------------------+  +-----------------------------------------------+  |
|  | Select your role:  |  |                                               |  |
|  |                    |  |  +------+  Sarah                              |  |
|  | +----------------+ |  |  |  S   |  Director of Operations             |  |
|  | | [Building]     | |  |  +------+  75-person e-commerce brand         |  |
|  | | Operations     | |  |                                               |  |
|  | | Leader / COO  >| |  |  +-------------------------------------------+|  |
|  | | 75-person...   | |  |  | "I spend half my week pulling reports    ||  |
|  | +----------------+ |  |  |  instead of acting on them."              ||  |
|  |   (Active)         |  |  +-------------------------------------------+|  |
|  |                    |  |                                               |  |
|  | +----------------+ |  |  Before Seyvin        With Seyvin            |  |
|  | | [Briefcase]    | |  |  X Spreadsheets...    [check] Unified view   |  |
|  | | Founder / CEO >| |  |  X IT can't...        [check] Ask questions  |  |
|  | | 25-person SaaS | |  |  X Different tools    [check] Auto-generated |  |
|  | +----------------+ |  |                                               |  |
|  |                    |  |  Sample query:                                |  |
|  | +----------------+ |  |  "What's causing our fulfillment delays?"    |  |
|  | | [Calculator]   | |  |                                               |  |
|  | | Finance Mgr   >| |  |  +-------------------------------------------+|  |
|  | | 100-person... | |  |  | Result: reporting time                    ||  |
|  | +----------------+ |  |  | 20 hrs/week -> 2 hours  [90% time saved]  ||  |
|  |                    |  |  +-------------------------------------------+|  |
|  | +----------------+ |  +-----------------------------------------------+  |
|  | See yourself?     |          Persona Detail Card                         |
|  | Book demo ->      |                                                      |
|  +--------------------+                                                      |
|    Persona Selector                                                          |
+==============================================================================+
```

---

## SECTION 9: INTEGRATIONS (py-24, 2 sections)

```
+==============================================================================+
|                                                                              |
|                       [Layers] INTEGRATIONS                                  |
|                 Connect Your Data in One Click                               |
|         One-click integrations with the tools you already use                |
|                                                                              |
|  (*) Available Now                                                           |
|  +---------------+ +---------------+ +---------------+ +---------------+     |
|  | [QB logo]     | | [N logo]      | | [GDrive logo] | | [Upload]      |     |
|  |               | |               | |               | |               |     |
|  | [check] Live  | | [check] Live  | | [check] Live  | | [check] Live  |     |
|  |               | |               | |               | |               |     |
|  | QuickBooks    | | Notion        | | Google Drive  | | Offline Data  |     |
|  | Online        | | Docs & Wikis  | | Files & Sheets| | PDF,CSV,Excel |     |
|  +---------------+ +---------------+ +---------------+ +---------------+     |
|                           (4-column grid)                                    |
|                                                                              |
|  [Clock] Coming Soon                                                         |
|  +--------+ +--------+ +--------+ +--------+ +--------+ +--------+          |
|  |Shopify | |G. Analyt| |Stripe  | |Salesforce| |Xero   | |HubSpot |          |
|  |E-comm  | |Web Anal | |Payments| |CRM      | |Account | |CRM     |          |
|  +--------+ +--------+ +--------+ +--------+ +--------+ +--------+          |
|                    (6-column grid - dimmed)                                  |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  | Don't see your tool? We're adding new integrations every week.        |  |
|  |                        Request an integration ->                      |  |
|  +-----------------------------------------------------------------------+  |
|                                                                              |
+==============================================================================+
```

---

## SECTION 10: REVIEWS (py-24, Stats + 3-col)

```
+==============================================================================+
|                                                                              |
|                        [Star] TESTIMONIALS                                   |
|                        See the Impact                                        |
|        Beta customers reduced reporting time by 90%                          |
|                                                                              |
|            +----------+    +----------+    +----------+                      |
|            |   90%    |    |  5 days  |    |   20+    |                      |
|            | reduction|    |  faster  |    |  beta    |                      |
|            | in time  |    | month-end|    | customers|                      |
|            +----------+    +----------+    +----------+                      |
|                          Stats Row (3-col)                                   |
|                                                                              |
|  +-------------------+ +-------------------+ +-------------------+           |
|  |  [Quote icon]     | |  [Quote icon]     | |  [Quote icon]     |           |
|  |                   | |                   | |                   |           |
|  | "We went from     | | "Our month-end    | | "I used to spend  |           |
|  | spending 8 hours  | | close process     | | 20 hours a week   |           |
|  | preparing for     | | used to take      | | pulling reports.  |           |
|  | board meetings to | | 10 days..."       | | Now I spend       |           |
|  | 15 minutes..."    | |                   | | 2 hours..."       |           |
|  |                   | |                   | |                   |           |
|  | +---------------+ | | +---------------+ | | +---------------+ |           |
|  | |[Up] 8hrs->15m | | | |[Up] 10d->5d   | | | |[Up] 20h->2h   | |           |
|  | |  board prep   | | | | month-end     | | | | reporting     | |           |
|  | +---------------+ | | +---------------+ | | +---------------+ |           |
|  |                   | |                   | |                   |           |
|  | [Photo] Michael   | | [Photo] Jessica   | | [Photo] Sarah     |           |
|  |   CEO, GrowthTech | |   Finance Mgr     | |   Dir. of Ops     |           |
|  +-------------------+ +-------------------+ +-------------------+           |
|                                                                              |
|  Trusted by 20+ beta customers across e-commerce, SaaS, professional svcs   |
|                                                                              |
+==============================================================================+
```

---

## SECTION 11: PRICING (py-24, Cost Comparison + Beta CTA)

```
+==============================================================================+
|                                                                              |
|                          [Tag] PRICING                                       |
|                  The Math Doesn't Work                                       |
|         Enterprise analytics shouldn't cost enterprise budgets               |
|                                                                              |
|  +--------------------------------+ +--------------------------------+       |
|  |  [icon] Traditional BI Tools   | |  [icon] Hiring In-House        |       |
|  |       What others charge       | |      Building it yourself      |       |
|  |                                | |                                |       |
|  | [X] Tableau / ThoughtSpot      | | [X] Data Analyst salary        |       |
|  |         $50,000+/year          | |         $80,000+/year          |       |
|  | [X] Databricks                 | | [X] Data Engineer salary       |       |
|  |         $250,000+/year         | |         $120,000+/year         |       |
|  | [X] Implementation             | | [X] Time-to-productivity       |       |
|  |     3-6 months + consultants   | |         5-7 months             |       |
|  +--------------------------------+ +--------------------------------+       |
|           Red accent                      Orange accent                      |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  |  [Sparkles] Seyvin Delivers - At a fraction of the cost               |  |
|  |                                                                        |  |
|  |  [check] Enterprise-grade  [check] Setup in days  [check] No tech     |  |
|  |  [check] Operations AND investor  [check] Every insight traceable     |  |
|  +-----------------------------------------------------------------------+  |
|                    Cyan accent gradient card                                 |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  |                                                                        |  |
|  |              (*) Limited Beta Access                                  |  |
|  |                                                                        |  |
|  |              Join the Founding Members                                |  |
|  |                                                                        |  |
|  |     Pricing finalized based on beta feedback. Join now to lock in     |  |
|  |     preferential founding member rates before public launch.          |  |
|  |                                                                        |  |
|  |     [rocket] Early access    [lock] Founding rates                    |  |
|  |     [target] Influence roadmap  [sparkle] No commitment               |  |
|  |                                                                        |  |
|  |          +---------------+  +---------------------+                   |  |
|  |          | Book a demo → |  | Apply for beta access |                 |  |
|  |          +---------------+  +---------------------+                   |  |
|  |                                                                        |  |
|  |     No credit card required • 15-minute personalized demo             |  |
|  |                                                                        |  |
|  +-----------------------------------------------------------------------+  |
|                                                                              |
+==============================================================================+
```

---

## SECTION 12: FAQ (py-24, 3-col layout)

```
+==============================================================================+
|                                                                              |
|                          [?] FAQ                                             |
|                 Frequently Asked Questions                                   |
|              Everything you need to know about Seyvin                        |
|                                                                              |
|  +------------------+ +--------------------------------------------------+  |
|  |                  | |                                                   |  |
|  | Still Have       | |  [v] How does Seyvin connect to my data?         |  |
|  | Questions?       | |      Seyvin uses secure OAuth 2.0 connections... |  |
|  |                  | |                                                   |  |
|  | Book a demo and  | |  [>] Can I trust the AI answers?                 |  |
|  | we'll walk you   | |                                                   |  |
|  | through it.      | |  [>] How long does setup take?                   |  |
|  |                  | |                                                   |  |
|  | [Book a Demo]    | |  [>] Do I need technical skills?                 |  |
|  |                  | |                                                   |  |
|  +------------------+ |  [>] Is my data secure?                          |  |
|                       |                                                   |  |
|  +------------------+ |  [>] What does beta pricing look like?           |  |
|  | [Shield]         | |                                                   |  |
|  | Security First   | |  [>] What integrations do you support?           |  |
|  |                  | |                                                   |  |
|  | [Lock] Encrypt.  | |  [>] Can Seyvin generate board reports?          |  |
|  | [Lock] SOC 2     | |                                                   |  |
|  | [Lock] GDPR      | +--------------------------------------------------+  |
|  | [Lock] You own   |                    Accordion                          |
|  |                  |                                                       |
|  +------------------+                                                        |
|   Contact + Security                                                         |
|      Cards (1 col)                            (2 col span)                   |
|                                                                              |
+==============================================================================+
```

---

## SECTION 13: COMPARISON (py-24, Table + 3-col)

```
+==============================================================================+
|                                                                              |
|                      [Compare] COMPARISON                                    |
|              The Complete Solution vs. Assembly Required                     |
|         Seyvin combines integration, analysis, and reporting                 |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  | Capability      | Seyvin | ThoughtSpot | Databricks | Zapier | Tableau|  |
|  |                 | Beta   | $50K+       | $250K+     | Integ. | $1K+   |  |
|  |-----------------|--------|-------------|------------|--------|--------|  |
|  | Data Integration| [cyan] |     -       |     -      |  [*]   |   -    |  |
|  | NL Queries      | [cyan] |    [*]      |     -      |   -    |   -    |  |
|  | Auto Dashboards | [cyan] |     -       |     -      |   -    |   -    |  |
|  | Multi-Agent AI  | [cyan] |     -       |     -      |   -    |   -    |  |
|  | Board Reports   | [cyan] |     -       |     -      |   -    |   -    |  |
|  | Accessible $    | [cyan] |     -       |     -      |  [*]   |   -    |  |
|  | Days to Setup   | [cyan] |     -       |     -      |  [*]   |   -    |  |
|  | No Tech Skills  | [cyan] |     -       |     -      |  [*]   |   -    |  |
|  +-----------------------------------------------------------------------+  |
|        (Seyvin column highlighted with cyan background)                      |
|                                                                              |
|  +-------------------+ +-------------------+ +-------------------+           |
|  | vs. Traditional BI| | vs. Data Platforms| | vs. Chatbots      |           |
|  | Next-Gen AI Intel | | Business Intel,   | | Your Data. Not    |           |
|  |                   | | Not Infrastructure| | Hallucinations.   |           |
|  |                   | |                   | |                   |           |
|  | THEIR LIMITATIONS | | THEIR LIMITATIONS | | THEIR LIMITATIONS |           |
|  | [X] Manual design | | [X] Need engineers| | [X] No connection |           |
|  | [X] SQL required  | | [X] Months impl.  | | [X] Hallucinate   |           |
|  | [X] Static views  | | [X] $250K+ budget | | [X] Can't verify  |           |
|  | [X] Expensive     | | [X] Tech expertise| | [X] No context    |           |
|  |                   | |                   | |                   |           |
|  | SEYVIN ADVANTAGE  | | SEYVIN ADVANTAGE  | | SEYVIN ADVANTAGE  |           |
|  | [*] AI creates    | | [*] No warehouse  | | [*] Connected     |           |
|  | [*] Plain English | | [*] Days to value | | [*] Multi-agent   |           |
|  | [*] Dynamic       | | [*] Accessible    | | [*] Traceable     |           |
|  | [*] Days setup    | | [*] Zero tech     | | [*] Built for biz |           |
|  +-------------------+ +-------------------+ +-------------------+           |
|                                                                              |
+==============================================================================+
```

---

## SECTION 14: SECURITY (py-24, 3x2 grid)

```
+==============================================================================+
|                                                                              |
|                        [Shield] SECURITY                                     |
|               Your Data. Your Security. Your Control.                        |
|           Enterprise-grade security without the complexity                   |
|                                                                              |
|  +-------------------+ +-------------------+ +-------------------+           |
|  | [Lock icon]       | | [Key icon]        | | [FileCheck icon]  |           |
|  |                   | |                   | |                   |           |
|  | Enterprise-Grade  | | Secure OAuth 2.0  | | SOC 2 Type II     |           |
|  | Encryption        | |                   | |                   |           |
|  |                   | | We never store    | | Compliance in     |           |
|  | Your data is      | | your passwords.   | | progress. Regular |           |
|  | encrypted at rest | | You authorize     | | security audits.  |           |
|  | and in transit... | | through each...   | |                   |           |
|  +-------------------+ +-------------------+ +-------------------+           |
|                                                                              |
|  +-------------------+ +-------------------+ +-------------------+           |
|  | [Eye icon]        | | [Server icon]     | | [Shield icon]     |           |
|  |                   | |                   | |                   |           |
|  | Transparent &     | | GDPR Ready        | | You Own Your      |           |
|  | Traceable         | |                   | | Data              |           |
|  |                   | | GDPR-compliant    | |                   |           |
|  | Every insight is  | | data handling.    | | We don't train    |           |
|  | traceable to your | | Your data stays   | | AI on your data.  |           |
|  | source data...    | | yours...          | | Never shared.     |           |
|  +-------------------+ +-------------------+ +-------------------+           |
|                                                                              |
|  +-----------------------------------------------------------------------+  |
|  | Questions about security? We're happy to discuss your requirements.   |  |
|  |                   Book a security-focused demo ->                     |  |
|  +-----------------------------------------------------------------------+  |
|                                                                              |
+==============================================================================+
```

---

## SECTION 15: CTA (py-24, centered max-w-3xl)

```
+==============================================================================+
|                                                                              |
|                     — See it in action —                                     |
|                                                                              |
|                 See Seyvin Analyze Your Data                                 |
|                            (Serif italic on "Your Data")                     |
|                                                                              |
|      In 15 minutes, we'll connect to your QuickBooks                         |
|      (or any data source) and show you how Seyvin                            |
|      generates dashboards and reports from your data.                        |
|                                                                              |
|    [Clock] 15-min demo  [DB] See your data  [CC] No card  [*] Limited        |
|                        Trust Points Row                                      |
|                                                                              |
|              +---------------+  +---------------------+                      |
|              | Book a demo → |  | Apply for closed beta |                    |
|              +---------------+  +---------------------+                      |
|                                                                              |
|     Limited beta spots available — apply early for founding rates            |
|                                                                              |
+==============================================================================+
```

---

## FOOTER (border-t, py-12)

```
+==============================================================================+
|                                                                              |
|  [Logo] Seyvin  |  Your AI Analytics Team — Ready in Minutes     [tw] [in]  |
|                                                                              |
|  Features    How It Works    Use Cases    Pricing    FAQ                     |
|                                                                              |
|  ---------------------------------------------------------------------------|
|                                                                              |
|  (c) 2026 Seyvin      Privacy Policy    Terms of Service     hello@seyvin.com|
|                                                                              |
+==============================================================================+
```

---

## Layout Patterns Summary

| Pattern | Breakpoint | Grid |
|---------|------------|------|
| Container | All | max-w-1280, px-6/12/16 responsive |
| 2-column | lg: | `lg:grid-cols-2` |
| 3-column | md: | `md:grid-cols-3` or `lg:grid-cols-3` |
| 5-column | lg: | `lg:grid-cols-5` |
| Card gaps | All | `gap-4` to `gap-6` |
| Section padding | All | `py-24` (96px) |
| Card padding | All | `p-6` to `p-12` |

## Typography Hierarchy

- Hero headline: `text-5xl` to `text-7xl`, font-semibold
- Section headers: `text-3xl` to `text-5xl`, font-semibold
- Accent text: `font-serif italic` (Playfair Display)
- Card titles: `text-lg` to `text-2xl`, font-semibold
- Body: `text-sm` to `text-lg`, regular weight
- Labels/Tags: `text-xs`, uppercase tracking-wider

## Color System (Dark Theme)

- Background: `#0a0a0a` (primary), `#0f0f0f` (secondary)
- Card: `#1a1a1a` with `#262626` border
- Text: white (primary), `gray-400` (secondary), `gray-500/600` (muted)
- Accent: `cyan-400` (highlights, icons, links)
- Error/Warning: `red-400`, `orange-400`
- Success: `green-400`

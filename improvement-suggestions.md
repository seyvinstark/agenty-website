I pulled your “before” ASCII wireframe and patterns from the MD doc  and compared it against the conversion/messaging fixes we discussed. The big win is: **you can keep the same section order + grids** and still make the site feel *more coherent, more “paid beta partner” ready, and less contradictory*—mostly by changing **labels, microcopy, and a few content blocks that currently dilute trust**.

Below is a **layout-preserving “replace/redo” guide** + **updated ASCII for the key sections** (not the entire page again). After the wireframes, there’s a **placeholder summary** of exactly what text to drop in each box.

---

## High-impact issues in the current layout (and what to replace)

### A) Header: “Pricing” conflicts with “no pricing yet” + mobile hides CTA

**Current (from your doc):**

* Nav: Features / How It Works / Pricing
* CTA is hidden on mobile (mobile header is logo + moon + menu)

**Replace**

* Rename **Pricing → Beta Program** (same nav slot, same layout).
* Ensure **mobile has a visible CTA** (tiny pill next to menu or first item in menu).

### B) Section 2 “Data Analysis” stats are a credibility risk

The “95% pilots failing” kind of stat is high-risk: if it’s off or feels sensational, it harms trust.

**Replace (same 3-col grid)**

* Swap “industry failure stats” cards into **“proof + pain” cards**:

  * One “your current pain” card
  * One “your outcome” card (90% time reduction)
  * One “your trust wedge” card (traceable answers / no hallucinations)

### C) Section 5 Services toggle makes you look like an agency + off-topic examples

This section is the biggest coherence leak: cost mgmt + employee tracking + social posts + generic “research anything” reads like a different product than “analytics copilot.”

**Replace (same toggle UI + same cards layout)**

* Tabs: **Platform** | **Beta Partner Support**
* Replace tasks/examples to match your actual “connect → KPIs → ask → export” product.
* Replace the code snippet block with an **“audit trail / traceability snippet”** visual (still looks technical, but relevant).

### D) Section 11 Pricing + Section 13 Comparison are “pricing pages” in disguise

You say you don’t want pricing, but you currently show competitor pricing and “beta pricing” labels.

**Replace (keep same layout blocks)**

* Section 11 label becomes **“Founding Beta Program”** (same structure: two comparison cards + big cyan card + beta card)
* Remove explicit dollar amounts in Section 11 + the Comparison table header row.
* Keep “math doesn’t work” angle but frame as **time/complexity/headcount**, not $.

### E) CTA consistency: too many variants

You’re close already, but the site still has “Book a demo”, “Book a personalized demo”, “Security-focused demo”, “Apply…”.

**Replace**

* Use **one primary CTA label everywhere:** **“Book 15-min beta demo →”**
* Secondary CTA can remain **“Apply for closed beta”** if it’s the same funnel (not a separate journey).

---

# ASCII “AFTER” (key sections only), keeping your original style + grids

## 0) HEADER (desktop + mobile)

### Desktop (replace nav label + CTA label)

```txt
+==============================================================================+
| [LOGO] Seyvin | Features  How It Works  Use Cases  Beta Program | [==O] [Book |
|   [*]         |                                            ...  | Theme 15-min|
|               |                                                  | beta demo→ |
+==============================================================================+
```

### Mobile (add visible CTA pill)

```txt
MOBILE:
[LOGO] Seyvin                          [Book demo] [Moon] [Menu]
```

**What to replace**

* “Pricing” → “Beta Program”
* “Demo” button label → “Book 15-min beta demo →”
* Mobile: add a small CTA pill (or put it as first item in the menu, but visible CTA is better)

---

## 1) HERO (same layout, stronger “paid beta” + trust wedge)

```txt
+==============================================================================+
|                          +----------------+                                  |
|                          |    [LOGO]      |                                  |
|                          |      *         |                                  |
|                          +----------------+                                  |
|                     +---------------------------+                            |
|                     |  (*) FOUNDING BETA        |   (same badge style)       |
|                     +---------------------------+                            |
|                                                                              |
|   Dashboards + board-ready reports from your data — without a data team       |
|                                                                              |
|   Connect one source. Ask in plain English. Every number is traceable to     |
|   its source (so it’s safe for leadership/board conversations).              |
|                                                                              |
|   • Cut recurring reporting from hours to minutes                            |
|   • No SQL, no dashboard design, no BI setup weeks                           |
|   • Built for the cadence: weekly ops, monthly close, board/investor updates |
|                                                                              |
|      +------------------------+   +-------------------------+                |
|      | Book 15-min beta demo→ |   | See how it works  ↓     |                |
|      +------------------------+   +-------------------------+                |
|                                                                              |
|   [Lock] Secure OAuth  | [Eye] Traceable answers | [*] Limited seats         |
|                                                                              |
+==============================================================================+
```

**What to replace**

* H1: make it **concrete** (“dashboards + board-ready reports”) instead of “AI analytics team”
* Subhead: move “traceable” *up into hero* (that’s your strongest differentiator)
* Replace “No credit card” in hero trust row with something aligned to paid beta: **“Cancel anytime”** or **“No long contract”** (unless you truly mean free)

---

## 2) DATA ANALYSIS (keep same 3 cards, replace risky stats)

```txt
+==============================================================================+
|                      [!] SOUND FAMILIAR?                                     |
|   You have data everywhere — but answers are slow, fragile, or untrusted.    |
|                                                                              |
|  +-------------------+ +-------------------+ +-------------------+           |
|  | Fragmented truth  | | Time drain        | | Trust gap         |           |
|  |-------------------| |-------------------| |-------------------|           |
|  | Data in 10 tools   | | Reporting eats    | | Generic AI can’t  |           |
|  | Conflicting KPIs   | | 5–10 hrs/week     | | cite sources      |           |
|  | Spreadsheet glue   | | Board prep = pain | | Not audit-safe    |           |
|  |                   | |                   | |                   |           |
|  | (small quote line) | | (small proof line)| | (traceability line)          |
|  +-------------------+ +-------------------+ +-------------------+           |
+==============================================================================+
```

**What to replace**

* Replace “95%/88%/47%” with “pain + proof + trust”.
* If you want numbers, use **your own on-page proof** already present: “90% less reporting”, “20+ beta teams”, “5 minutes to first source”.

---

## 5) SERVICES TOGGLE → rename and make it product-consistent

### Replace toggle labels + card content (same layout)

```txt
+==============================================================================+
|           +----------------------------------------------+                   |
|           | [Layers] Platform | [Handshake] Beta Support |                   |
|           +----------------------------------------------+                   |
|                                                                              |
|  WHEN "Beta Support" ACTIVE (default):                                       |
|  +--------------------------------+ +--------------------------------+       |
|  | KPI Definition & Dashboards    | | Data Connection & Validation    |       |
|  | - define KPIs that matter      | | - connect 1–3 sources fast      |       |
|  | - align to reporting cadence   | | - reconcile “source of truth”   |       |
|  | - board/investor templates     | | - sanity checks + naming        |       |
|  +--------------------------------+ +--------------------------------+       |
|                                                                              |
|  +-----------------------------------------------------------------------+   |
|  | [Trace Visual] "Every answer shows: source → query → numbers → chart"  |   |
|  | Example snippet (not code):                                            |   |
|  |  Source: QuickBooks → Report: P&L → Metric: Gross Margin → Period: Q4  |   |
|  |  Confidence: “In data” / If missing: “Not in your sources”             |   |
|  +-----------------------------------------------------------------------+   |
|                                                                              |
|  +-----------------------------------------------------------------------+   |
|  | [Lightbulb] Pilot Success Setup                                         |   |
|  | “We help you get to first dashboard + first board pack in days.”        |   |
|  +-----------------------------------------------------------------------+   |
+==============================================================================+
```

**What to replace**

* “Services” tab label → **Beta Partner Support** (or **Founding Beta Support**)
* Remove: “Social media post”, “Employee tracking”, “Research anything… tags”
* Replace code snippet card with a **traceability / audit trail visual** (still “technical vibe” but aligned with analytics trust)
* Platform tab: remove placeholders (“Feature 1/2”) and reuse your existing pillars: connect → KPIs → ask → export

---

## 11) PRICING SECTION → keep layout, rename + remove price anchoring

You can keep the same block geometry (2 columns + cyan deliver card + beta card), but make it **program-based**, not a quasi-pricing page.

```txt
+==============================================================================+
|                       [Tag] FOUNDING BETA PROGRAM                            |
|                    The Math Doesn’t Work (for BI complexity)                 |
|                                                                              |
| +------------------------------+ +-----------------------------------------+ |
| | Traditional BI burden        | | Building in-house burden                | |
| | - weeks/months setup         | | - hire data analyst/engineer            | |
| | - dashboard design + upkeep  | | - pipelines + definitions + maintenance | |
| | - consultant dependency      | | - slow time-to-value                    | |
| +------------------------------+ +-----------------------------------------+ |
|                                                                              |
| +--------------------------------------------------------------------------+ |
| | [Sparkles] Seyvin delivers in days                                       | |
| | [check] Connect 1 source fast  [check] Live KPI dashboard  [check] Board | |
| | [check] Traceable answers      [check] No SQL / no BI design             | |
| +--------------------------------------------------------------------------+ |
|                                                                              |
| +--------------------------------------------------------------------------+ |
| | (*) Limited Founding Beta Seats                                           | |
| | Paid pilot + white-glove onboarding. No long contract.                     | |
| | [rocket] Early access  [target] Roadmap input  [handshake] Priority setup |
| |                                                                            |
| |      +--------------------+   +-------------------------+                  |
| |      | Book 15-min demo→   |   | Apply for closed beta   |                  |
| |      +--------------------+   +-------------------------+                  |
| +--------------------------------------------------------------------------+ |
+==============================================================================+
```

**What to replace**

* Remove competitor dollar amounts.
* Replace “No commitment during beta” with **“No long contract / cancel anytime”** (fits paid beta reality).
* Keep “founding rates” idea if you like, but phrase as **“founding terms”** (not explicit pricing).

---

## 13) COMPARISON TABLE (keep table, remove pricing header row)

```txt
+==============================================================================+
| [Compare] COMPARISON                                                         |
| The Complete Solution vs. Assembly Required                                  |
|                                                                              |
| Capability      | Seyvin | ThoughtSpot | Databricks | Zapier | Tableau        |
|----------------|--------|------------|-----------|-------|------------------|
| Data Integration|   ✓    |     -      |     -     |  ✓    |   -              |
| NL Queries      |   ✓    |     ✓      |     -     |  -    |   -              |
| Auto Dashboards |   ✓    |     -      |     -     |  -    |   -              |
| Multi-Agent AI  |   ✓    |     -      |     -     |  -    |   -              |
| Board Reports   |   ✓    |     -      |     -     |  -    |   -              |
| Days to Setup   | days   | weeks      | months    | hrs   | weeks            |
| No Tech Skills  |   ✓    | partial    |   -       | partial| partial         |
+==============================================================================+
```

**What to replace**

* Delete pricing labels (“Beta / $50K+ / $250K+ / $1K+”).
* Keep the differentiator cards below unchanged, but ensure “traceable” remains the lead for chatbot comparison.

---

## 15) FINAL CTA (keep structure, align promise to “one source” + paid pilot)

```txt
+==============================================================================+
|                     — See it in action —                                     |
|                 See Seyvin Analyze Your Data                                 |
|                                                                              |
|  In 15 minutes, we connect ONE source and show:                              |
|   (1) KPI dashboard  (2) traceable answers  (3) a board-ready mini report    |
|                                                                              |
|  [Clock] 15-min demo  [Eye] traceability  [Handshake] paid pilot option      |
|                                                                              |
|      +------------------------+   +-------------------------+                |
|      | Book 15-min beta demo→ |   | Apply for closed beta   |                |
|      +------------------------+   +-------------------------+                |
|                                                                              |
+==============================================================================+
```

**What to replace**

* “(or any data source)” → “connect **one source** (QuickBooks/Drive/CSV…)”
* Replace “No card” trust point with “No long contract / cancel anytime” (better aligned)

---

# Placeholder summary (what text to plug in where)

**Global replacements (site-wide)**

* Primary CTA label everywhere: **“Book 15-min beta demo →”**
* Nav: **Pricing → Beta Program**
* Trust phrasing: replace “No commitment during beta” with **“No long contract / cancel anytime”** (unless you truly mean free).

**Hero**

* H1 should mention outputs: **“dashboards + board-ready reports”**
* Subhead must include: **traceable to source** + **no SQL / no BI setup**
* Bullets: avoid feature list; keep outcome list.

**Section 2**

* Replace failure stats with pain/proof/trust cards:

  * Fragmentation pain
  * Time drain proof (5–10 hrs/wk)
  * Trust wedge (traceability / “if not in your data, we say so”)

**Section 5**

* Rename tabs: **Platform** | **Beta Partner Support**
* Replace “automation tasks / research tags / code snippet” with:

  * KPI definition + dashboard setup
  * Data validation + single source of truth
  * Traceability example visual

**Section 11 + 13**

* Remove all competitor dollar amounts + pricing labels.
* Keep “math doesn’t work” but frame as **time/headcount/complexity**.
* Beta program card: explicitly supports **paid pilot** without numbers.

---

If you apply only three changes from everything above, do these:

1. **Mobile header: add visible “Book demo” button** (conversion multiplier).
2. **Section 5: convert “Services” into “Beta Partner Support” with analytics-consistent examples** (coherence multiplier).
3. **Remove pricing anchors ($50K/$250K) and rename “Pricing” to “Beta Program”** (trust multiplier).

to-do:
  - setup on new domain
---
========================
Perfect — let’s reset everything cleanly and do this in the correct order so **`seyvin.com` works 100% with GitHub Pages** and no DNS conflicts remain.

We’ll cover:

1. ✅ GitHub repository setup
2. ✅ GitHub Pages settings
3. ✅ `CNAME` file
4. ✅ Squarespace DNS for `seyvin.com`
5. ✅ Cleanup in `theartemisai.com` DNS
6. ✅ Verification checklist
7. ✅ Common failure causes

---

# ✅ PART 1 — GITHUB REPOSITORY SETUP

Your repo:

```
https://github.com/seyvinstark/agenty-website
```

---

## 1️⃣ Make sure Vite builds correctly for GitHub Pages

In your `vite.config.js`:

If you are using a **custom domain (seyvin.com)**, the base should be:

```js
export default defineConfig({
  base: '/',
})
```

❗ If you previously had:

```js
base: '/agenty-website/'
```

Remove it. Custom domains require `/`.

---

## 2️⃣ Deploy to GitHub Pages

If you're deploying via GitHub Actions (recommended):

Make sure:

* The site builds successfully
* The build output folder is `dist`
* GitHub Pages source is set to:

  * **GitHub Actions**

OR if using branch deployment:

* Build locally:

  ```
  npm run build
  ```
* Push `dist` to `gh-pages` branch (if using gh-pages package)

---

# ✅ PART 2 — GITHUB PAGES SETTINGS

Go to:

```
Repo → Settings → Pages
```

### 1️⃣ Under “Custom domain”

Enter:

```
seyvin.com
```

Click Save.

GitHub will:

* Automatically create a `CNAME` file in your repo (or expect one)
* Try to validate DNS

---

### 2️⃣ Enable HTTPS

After DNS works:

* Check “Enforce HTTPS”

⚠ This will only be available after DNS resolves correctly.

---

# ✅ PART 3 — ENSURE CNAME FILE EXISTS

Inside your repo root, there must be a file:

```
CNAME
```

Content must be exactly:

```
seyvin.com
```

No spaces. No extra lines.

If missing:

Create file:

```
/public/CNAME
```

So it gets included in the build.

Then redeploy.

---

# ✅ PART 4 — SQUARESPACE DNS FOR `seyvin.com`

Go to:

Squarespace → Domains → `seyvin.com` → DNS Settings

---

## ❌ DELETE EVERYTHING RELATED TO WEBSITE HOSTING

Remove:

All of these if present:

```
@  A  198.185.x.x
@  A  198.49.x.x
www  CNAME  ext-sq.squarespace.com
@  HTTPS ...
```

Keep:

* `_domainconnect` (harmless)
* Google MX records (for email)
* Google verification TXT

---

## ✅ ADD ONLY THESE RECORDS

### A Records (Root domain)

Add 4 A records:

| Type | Host | Value           |
| ---- | ---- | --------------- |
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

TTL can stay default (4 hrs is fine).

---

### CNAME for www

Add:

| Type  | Host | Value                 |
| ----- | ---- | --------------------- |
| CNAME | www  | seyvinstark.github.io |

⚠ Must match your GitHub username exactly.

---

# ✅ PART 5 — CLEANUP IN `theartemisai.com` DNS

Now go to:

Squarespace → Domains → `theartemisai.com` → DNS

You previously had:

```
seyvin  CNAME  the-artemis-ai.github.io
```

You must:

### ❌ DELETE:

```
seyvin  CNAME  the-artemis-ai.github.io
```

Also check for:

```
www.seyvin
seyvin.com
any A or CNAME referencing seyvin
```

There must be **no references to seyvin.com anywhere in that DNS zone**.

That old record causes DNS conflict.

---

# ✅ PART 6 — DNS VERIFICATION

After everything is cleaned:

Wait 10–30 minutes.

Then check:

## 🔎 Check A record

Go to:
[https://dnschecker.org](https://dnschecker.org)

Type: A
Host: `seyvin.com`

You must see:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

If you see ANY 198.x.x.x Squarespace IPs → still wrong.

---

## 🔎 Check CNAME

Type: CNAME
Host: `www.seyvin.com`

Must show:

```
seyvinstark.github.io
```

---

# ✅ PART 7 — FINAL GITHUB VALIDATION

After DNS resolves properly:

Go back to:

```
Repo → Settings → Pages
```

The red error:

```
NotServedByPagesError
```

Should disappear.

Then:

Enable:

```
☑ Enforce HTTPS
```

---

# 🚨 COMMON MISTAKES THAT BREAK THIS

### 1️⃣ CNAME for root domain

Never use:

```
seyvin.com  CNAME  something
```

Root must use A records.

---

### 2️⃣ Old DNS zone still active

If domain was ever:

* Connected to Squarespace hosting
* Connected to another GitHub repo
* Pointed via CNAME elsewhere

Old records can persist.

---

### 3️⃣ Vite base misconfiguration

If `base` ≠ `/` → assets break after domain switch.

---

# ✅ FINAL CHECKLIST

### GitHub

* [ ] Pages enabled
* [ ] Custom domain set to `seyvin.com`
* [ ] `CNAME` file exists
* [ ] base: '/' in vite config
* [ ] Deployment successful

### Squarespace (seyvin.com)

* [ ] 4 GitHub A records
* [ ] www CNAME → seyvinstark.github.io
* [ ] No 198.x Squarespace A records
* [ ] No HTTPS record for root

### Squarespace (theartemisai.com)

* [ ] No seyvin CNAME
* [ ] No references to seyvin

---

# 🧠 What Should Happen After

1. DNS propagates
2. GitHub verifies
3. SSL certificate issued
4. HTTPS becomes enforceable
5. Site loads at:

   * [https://seyvin.com](https://seyvin.com)
   * [https://www.seyvin.com](https://www.seyvin.com)

---

If after following all steps you still see the error, paste:

* Current full DNS records for `seyvin.com`
* Current GitHub Pages settings screen message

And we’ll diagnose precisely.

========================
# suggestion 1 draft
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

----
# suggestion 2 draft

```txt
====================================================================================================
DESKTOP WIREFRAME (new messaging fixes, same overall section lineup)
====================================================================================================

┌────────────────────────────────────────────────────────────────────────────────────────────────── ┐
│ [Sticky Header]                                                                                   │
│  ┌───────────┐     ┌─────────┐ ┌──────────────┐ ┌────────────┐ ┌──────────────┐   ┌───────────┐   │
│  │  LOGO     │     │Features │ │How it works  │ │Use cases   │ │Beta program  │   │Book 15-min│   │
│  │  Seyvin   │     └─────────┘ └──────────────┘ └────────────┘ └──────────────┘   │beta demo  │   │
│  └───────────┘                                                                    └───────────┘   │
│  Micro-nav (small): Security • Integrations • FAQ                                                 │
└────────────────────────────────────────────────────────────────────────────────────────────────── ┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [01 HERO + Proof Strip]                                                                           │
│                                                                                                  │
│  ┌───────────────────────────────────────────────────┐    ┌───────────────────────────────────┐  │
│  │ H1: "Your AI Analytics Copilot—Dashboards &       │    │ [Product Visual]                  │  │
│  │      Board-Ready Reports from your data"          │    │  - screenshot/animated demo       │  │
│  │ Subhead: "Connect your sources once. Ask in plain │    │  - shows: KPI tiles + chart +     │  │
│  │ English.Get insights.                             |    |                                   |  |
|  |Every number traceable back to source."            │    │    'Generate report'              │  │
│  │                                                   │    │  - small callouts: Traceable,     │  │
│  │ Key bullets (3):                                  │    │    No SQL, Export PDF             │  │
│  │  • Cut reporting time dramatically (hours → mins)  │    └───────────────────────────────────┘  │
│  │  • No data team needed (no SQL / no dashboard work)│                                            │
│  │  • Built for recurring exec/board/investor cadence │                                            │
│  │                                                   │    ┌───────────────────────────────────┐  │
│  │ Primary CTA: [Book 15-min beta demo]              │    │ [CTA Microcopy Box]               │  │
│  │ Secondary CTA: [See how it works] (scroll)        │    │ "In a minutes we connect your data     │  │
│  │                                                   │    │ source and generate: (1) KPI      │  │
│  │ Trust badges row: [Secure OAuth] [No passwords]   │    │ dashboard (2) 1 board pack page." │  │
│  │                  [Limited beta seats] [Cancel]    │    └───────────────────────────────────┘  │
│  └───────────────────────────────────────────────────┘                                            │
│                                                                                                  │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ Proof strip (thin band): "Founding beta cohort: 20+ teams • Typical results: 90% less       │  │
│  │ reporting time • Every insight traceable to source data"                                     │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [02 "SOUND FAMILIAR?" — Pain Snapshot (replaces shaky pilot-failure stats)]                       │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ Badge: SOUND FAMILIAR?                                                                     │  │
│  │ One-liner: "You have data everywhere, but answers are slow, fragile, or untrusted."        │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                  │
│  ┌───────────────────────────────┐  ┌───────────────────────────────┐  ┌───────────────────────┐ │
│  │ Card A: Fragmented data       │  │ Card B: Too technical         │  │ Card C: Can't trust AI│ │
│  │ - 3 bullets (short)           │  │ - 3 bullets (short)           │  │ - 3 bullets (short)   │ │
│  │ - “quote-style” 1-liner       │  │ - “quote-style” 1-liner       │  │ - “quote-style” line  │ │
│  └───────────────────────────────┘  └───────────────────────────────┘  └───────────────────────┘ │
│                                                                                                  │
│  Small note (optional): "We’ll show traceability live in the demo."  → [Book 15-min beta demo]  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [03 THE CHALLENGE — Problem (keeps your existing cards, but completes missing ones)]             │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ H2: The Problem We're Solving                                                                 │  │
│  │ Sub: "Growing teams need board-grade answers—without BI complexity or a data team."          │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                  │
│  ┌───────────────────────────────┐  ┌───────────────────────────────┐                           │
│  │ 🧩 Data Fragmentation          │  │ 🔧 Technical Expertise Required │                           │
│  │ - bullets (existing)           │  │ - bullets (existing)           │                           │
│  └───────────────────────────────┘  └───────────────────────────────┘                           │
│                                                                                                  │
│  ┌───────────────────────────────┐  ┌───────────────────────────────┐                           │
│  │ ⏰ Slow Time-to-Insight         │  │ 💰 Prohibitive Costs            │                           │
│  │ - short paragraph (existing)   │  │ - 3–4 bullets (NEW)             │                           │
│  │ - tags (existing)              │  │ - 1 quote line                  │                           │
│  └───────────────────────────────┘  └───────────────────────────────┘                           │
│                                                                                                  │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 🤖 AI That Can't Be Trusted                                                                   │  │
│  │ - 3–4 bullets (NEW): "no source links" "hallucinations" "no audit trail" "not board-safe"    │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [04 BENEFITS — Outcome-first]                                                                     │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ H2: Why teams choose Seyvin                                                                    │  │
│  │ Sub: "Recurring reporting, answered faster—with numbers you can verify."                      │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────┐  ┌───────────────────────────────┐  ┌───────────────────────┐ │
│  │ Save hours weekly              │  │ Board prep: hours → minutes    │  │ No SQL / no BI setup   │ │
│  │ (short 2-line description)     │  │ (short 2-line description)     │  │ (short 2-line desc)    │ │
│  └───────────────────────────────┘  └───────────────────────────────┘  └───────────────────────┘ │
│  Optional mini-proof line under cards: "See it live with your data." → [Book 15-min beta demo]  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [05 PLATFORM + BETA PARTNER SUPPORT (renamed from Services/Platform)]                             │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ Toggle: [ Platform ]  [ Beta Partner Support ]                                                 │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                  │
│  WHEN "Platform" ACTIVE:                                                                           │
│  ┌───────────────────────────────┐  ┌───────────────────────────────┐  ┌───────────────────────┐ │
│  │ Connect sources               │  │ Ask + visualize               │  │ write document packs   │ │
│  │ - 2–3 bullets                 │  │ - 2–3 bullets                 │  │ - 2–3 bullets          │ │
│  └───────────────────────────────┘  └───────────────────────────────┘  └───────────────────────┘ │
│  (No placeholders, no "coming soon" for core platform.)                                           │
│                                                                                                  │
│  WHEN "Beta Partner Support" ACTIVE:                                                               │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ H3: "Done-with-you onboarding so you get value fast"                                           │  │
│  │ - Bullet list: KPI definition • data connection & validation • report templates • enablement │  │
│  │ - Small note: "Paid beta partners get priority support + roadmap influence."                  │  │
│  │ CTA: [Book 15-min beta demo]                                                                   │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [06 FEATURES — (keep your current structure; tighten copy)]                                       │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ H2: Everything you need. Nothing you don’t.                                                    │  │
│  │ Sub: "Dashboards, answers, and reports—traceable to source."                                   │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ Primary feature cards (3)                                                                      │  │
│  │  [Instant dashboards]   [Multi-agent conversation + traceability]   [Board-ready reports]     │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ Secondary feature grid (6)                                                                     │  │
│  │  [NL querying] [Multi-source] [Conversational editing] [Knowledge base] [Workflows] [Exports] │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [07 HOW IT WORKS — 4 steps tabs (same UI)]                                                        │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ H2: From data to board-ready in 4 steps                                                       │  │
│  │ Sub: "Connect → choose KPIs → ask → export"                                                    │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                                                          │
│  │Step 1 │ │Step 2 │ │Step 3 │ │Step 4 │   (tabbed panels below, unchanged layout)               │
│  └───────┘ └───────┘ └───────┘ └───────┘                                                          │
│  [Panel shows: short text + mini visual + deliverable badge]                                      │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [08 USE CASES — role selector (same UI; add unifier line)]                                        │
│  H2: Built for reporting-heavy operators                                                          │
│  Sub: "If you’re accountable for decisions + reporting, this is for you."                         │
│  Toggle: [Private Sector] [Public Sector]   "Select your role:" [dropdown]                        │
│                                                                                                  │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ Persona card (left)                 | How Seyvin helps (right)                                │  │
│  │ - quote                            | - 3 bullets                                              │  │
│  │ - frustrations (3)                 | - outcome metric (before → after)                         │  │
│  │ - sample query                     | - CTA mini: [Book 15-min beta demo]                      │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [09 INTEGRATIONS — keep, but tighten promise language]                                            │
│  H2: Connect your data in one click                                                                │
│  Sub: "Start with one source in the demo. Add more as you go."                                    │
│  Available Now: [cards]    Coming Soon: [cards]                                                    │
│  CTA: [Request an integration] → (same #demo anchor)                                               │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [10 TESTIMONIALS — keep; align “closed beta” language]                                            │
│  H2: See the impact                                                                                │
│  Stats row: [90% less reporting] [5 days faster close] [20+ founding beta teams]                  │
│  Testimonials carousel/cards (unchanged layout)                                                     │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [11 BETA PROGRAM (replaces "Pricing" vibe without listing your price)]                            │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ H2: Founding Beta Program                                                                      │  │
│  │ Sub: "Paid pilot access + white-glove onboarding. No long-term contract."                      │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────┐  ┌───────────────────────────────┐                            │
│  │ What you get                  │  │ How it works                   │                            │
│  │ - Early access                │  │ 1) 15-min fit check demo        │                            │
│  │ - Priority onboarding         │  │ 2) Connect 1–2 sources           │                            │
│  │ - Roadmap influence           │  │ 3) First dashboard + board pack  │                            │
│  │ - Preferential founding terms │  │ 4) Pilot month-to-month          │                            │
│  └───────────────────────────────┘  └───────────────────────────────┘                            │
│  CTA row: [Book 15-min beta demo]  [Apply for beta]                                                │
│  Fine print: "We’ll discuss fit and pilot terms on the call. Limited seats."                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [12 COMPARISON — capability/time-to-value only (no price numbers)]                                │
│  H2: Complete solution vs. assembly required                                                       │
│  Table: Capabilities rows (same as now) + columns (same competitors)                               │
│  NOTE: remove pricing labels and dollar figures; keep "days to setup" etc.                         │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [13 FAQ — adjust beta question wording to match paid pilot]                                       │
│  H2: Frequently asked questions                                                                    │
│  Accordion list (same UI)                                                                          │
│  - "How does the paid beta work?" (replaces "beta pricing look like?")                             │
│  - Security, trust, setup time, integrations, board reports (keep)                                 │
│  Side cards: "Still have questions?" + "Security first" (same layout)                              │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [14 SECURITY — keep (already strong)]                                                              │
│  H2: Your data. Your control.                                                                      │
│  6 security cards + "Book a security-focused demo" CTA                                              │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [15 FINAL CTA — keep; align promise to “one source”]                                               │
│  Pretitle: "See it in action"                                                                      │
│  H2: "See Seyvin analyze YOUR data"                                                                │
│  Paragraph: "In 15 minutes, connect one source and watch dashboards + a board pack appear."       │
│  Trust points row (same): [15-min] [live] [no long contract] [limited seats]                       │
│  CTA buttons: [Book 15-min beta demo] [Apply for beta]                                             │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [Footer]                                                                                           │
│  Columns: Product | Use Cases | Security | Legal | Contact                                         │
│  Contact: hello@... + social icons                                                                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Placeholder details (what text goes inside the boxes)

### Header

* **Replace “Pricing” nav label** with **“Beta program”** (matches your “no pricing yet” constraint while keeping the section).
* **Primary CTA label everywhere:** “Book 15-min beta demo” (single mental model).

### Hero

* **H1 (pick one):**

  1. “Dashboards + board-ready reports from your data—without a data team”
  2. “Your AI analytics copilot: instant KPIs, answers, and board packs”
* **Subhead:** emphasize **traceability** and **non-technical** use.
* **3 bullets:** outcomes (time saved, no SQL/BI setup, recurring exec cadence).
* **CTA microcopy box:** sets expectation (“connect one source; generate dashboard + 1-page board pack live”).

### “Sound familiar?” pain snapshot (replacing the pilot-failure stats)

Use 3 short cards, each with:

* 1 quote-style line (relatable)
* 3 bullets (specific pain)
  Examples:
* **Fragmented data:** “10 tools, 10 truths” → reconciliation, spreadsheet copying, inconsistent KPIs
* **Too technical:** BI setup, SQL dependency, IT bottlenecks
* **Can’t trust AI:** no source links, hallucinations, not auditable for board/investors

### Problem section (complete the missing cards)

Your **“Prohibitive Costs”** and **“AI That Can’t Be Trusted”** cards currently feel unfinished because they don’t have bullets like the others. Add:

* **Prohibitive Costs bullets:** implementation time, consultants, headcount costs, maintenance burden
* **Trust bullets:** traceability requirement, audit trail, “if not in data, say so,” verification UX

### Benefits

Keep the three cards but make each description **mechanism-linked** (connect once → dashboards; ask → traceable answers; export → board pack).

### Platform + Beta Partner Support (renamed from Services/Platform)

* **Platform tab:** use the *real* pillars you already have (connect → dashboards; ask → visuals; reports → export).
* **Beta Partner Support tab:** replaces “random automation tasks” with onboarding services that reinforce the product identity:

  * KPI definition
  * data connection & validation
  * report templates aligned to their cadence
  * enablement & governance

### Integrations

Tighten promise language:

* “Start with one source in the demo” (keeps it believable)
* Keep “request an integration” CTA

### Beta program section (instead of pricing vibes)

No pricing numbers. It explains:

* what partners get
* how the beta works (demo → connect → first outputs → month-to-month pilot)
* avoids “no commitment during beta” (which conflicts with “paid beta customers”)

### Comparison

Keep capability comparison, remove price labels and dollar figures. Emphasize:

* time to setup
* no data team required
* traceability / auditability

### FAQ beta question

Rename:

* “What does beta pricing look like?” → **“How does the paid beta work?”**
  Answer focuses on:
* pilot engagement model (no long contract)
* what’s included (onboarding, support)
* how pricing is finalized later (without numbers)

### Final CTA

Align it to the most believable promise:

* “Connect **one** source in 15 minutes” + show outputs live.

---

If you adopt just two visible changes from this wireframe, make them:

1. **rename/retune the Services/Platform toggle into Platform + Beta Partner Support**, and
2. **make “Book 15-min beta demo” the single primary CTA label everywhere**.

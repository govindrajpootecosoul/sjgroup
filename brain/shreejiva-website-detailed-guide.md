# Shreejiva Website — Detailed Guide

**Scope:** This document describes the public marketing site implemented in this repository (Next.js App Router, branded in the UI as **SJ Group** with the Shreejiva / SJ Tech visual system). It covers every route, services and SaaS products, the **live theme palette** (from `globals.css`), and—**after** the factual overview—suggestions to elevate perceived quality and improve **Individual vs Business** pricing for monthly and yearly billing.

**Last reviewed:** March 2025 (against current `src/` tree).

---

## Part 1 — What Shreejiva’s site is (detailed explanation)

### 1.1 Positioning at a glance

The site presents a **multi-line business**: retail fashion (**Melora**), natural wellness (**JivaPure**), technology services (**SJ Tech**), and a suite of **software products** (HRMS, ProjectHub, Asset Tracker, Query Tracker, Business Portal, plus **NexaVerse** on the products grid). The homepage anchors trust with stats (clients, users, uptime, support), capability pillars (security, scale, automation, Amazon seller intelligence, unified ecosystem, AI assistant), and motion-rich sections (snowfall hero, infinite moving cards, scroll animations).

**Internationalization:** Five languages (English, Chinese, Japanese, Korean, Spanish) via a flag-based switcher and translation keys.

**Experience features:** Light/dark theme (persisted), glass-style cards, Framer Motion sections, responsive navigation with a services mega-menu, dedicated **Products** page (no nested dropdown), and legal pages for compliance.

---

### 1.2 Website theme palette (as implemented)

The live design system is defined in `src/app/globals.css` — a **deep tech SaaS** look: white-smoke base, deep blue structure, pumpkin orange CTAs, mahogany for premium accents.

#### Core CSS variables (light mode)

| Token / role | Hex | Notes |
|--------------|-----|--------|
| **Background** | `#F2F4F3` | White Smoke — primary page canvas |
| **Background secondary** | `#9EB3C2` | Powder Blue — soft sections, pricing toggle track |
| **Background tertiary / cards** | `#FFFFFF` | Card surfaces |
| **Foreground (headings)** | `#012436` | Deep Space Blue |
| **Foreground muted** | `#41566A` | Body / secondary text |
| **Foreground light** | `#7B8DA0` | Tertiary text |
| **Primary** | `#012436` | Brand structure, nav, emphasis |
| **Primary light / dark** | `#023A5B` / `#011624` | Depth / hover |
| **Secondary** | `#9EB3C2` | Powder Blue UI |
| **Accent (CTA)** | `#F96900` | Pumpkin Spice — primary buttons |
| **Accent light** | `#FF8A33` | Highlights |
| **Premium** | `#3B0D11` | Rich Mahogany — “Popular” business plan column, premium emphasis |

#### Gradients & hero

- **Primary gradient:** `#012436` → `#9EB3C2` (135deg) — used for gradient text and UI.
- **Hero surface:** Multi-stop blend `#010913` → `#012436` → `#011624` → `#3B0D11`, plus radial orange glow and subtle diagonal lines (`hero-gradient` class).

#### Dark mode

Dark theme shifts backgrounds toward `#010913` / `#02192A`, inverts foreground to light neutrals, strengthens orange glow on focus/hover, and adjusts glass/card borders for contrast.

#### Typography

**Geist Sans** (and Geist Mono where applicable) via Next.js font variables; elevated line-height and letter-spacing tuned for readability.

---

### 1.3 Site map — each page explained

| Route | Page name | Purpose & content (as built) |
|-------|-----------|-------------------------------|
| `/` | **Home** | Full-bleed hero (gradient + snowfall + animated lines), primary CTAs, stats strip, feature grid (tech, security, global scale, automation, Seller Central, ecosystem, AI assistant), infinite moving cards for brands/products, additional storytelling/CTA blocks toward conversion. |
| `/about` | **About Us** | Company narrative: vision/mission-style content, **values** (Innovation, Integrity, Collaboration, Excellence) with infographic styling, **stats** (e.g. founded year, clients, team size, countries), team/culture sections, animated sections and cards. |
| `/contact` | **Contact Us** | `PageHero`, contact **cards** (email `info@sjgroup.com`, phone, Noida address, hours), **animated form** (name, email, company, inquiry type, message) with floating-label UX, simulated submit success state, FAQ-style support of trust. |
| `/products` | **Products** | Enterprise-focused hero; **grid of products** (click opens pricing modal). Products: **HRMS**, **ProjectHub**, **Asset Tracker**, **Query Tracker**, **Business Portal**, **NexaVerse**. Each card shows icon, gradient, short description, “View Pricing →”. |
| `/products/hrms` | **HRMS (detail)** | Product template page for HRMS (deep link from marketing). |
| `/products/projecthub` | **ProjectHub (detail)** | Product template page. |
| `/products/asset-tracker` | **Asset Tracker (detail)** | Product template page. |
| `/products/query-tracker` | **Query Tracker (detail)** | Product template page. |
| `/products/business-portal` | **Business Portal (detail)** | Product template page. |
| `/services/melora` | **Melora** | Retail clothing: **categories** — Anime, Abstract, Text & Typography, Solid Essentials — each with hoodies, T-shirts, shirts; lifestyle/story sections, visuals, CTAs toward retail positioning. |
| `/services/jivapure` | **JivaPure** | Wellness brand: natural/pure formulations, wellness focus, certifications, eco-friendly, cruelty-free; stats (e.g. product range); green/organic visual language. |
| `/services/sj-tech` | **SJ Tech** | Technology services: **three solution packages** (E‑commerce Intelligence Suite, Business Control Solution, Digital Solutions with Intelligence & Automation) with expandable detail; **ROI-style calculator** (team size, salary, hours wasted → estimated monthly savings); stats (hours saved, cost reduction, projects, experts); partner/logo strip. Aligns with automation, dashboards, apps, AI, and business portals. |
| `/privacy-policy` | **Privacy Policy** | Legal — data handling disclosures. |
| `/terms-conditions` | **Terms & Conditions** | Legal — use of site/services terms. |

**Note:** Navigation includes `href: '/services'` for the parent “Services” item while child routes live under `/services/melora`, etc. Ensure `/services` resolves (landing or redirect) if you want zero 404s from the parent link.

---

### 1.4 Services (non-software lines)

1. **Melora** — Fashion retail: category-led merchandising (anime, abstract, typography, solids) across core apparel types; emphasis on design variety and brand feel.

2. **JivaPure** — Consumer wellness: natural ingredients, clean formulas, sustainability, ethics (cruelty-free), quality certifications.

3. **SJ Tech** — B2B technology delivery: data/automation (Amazon, Shopify, Helium 10, Power BI), **operations stack** naming (e.g. HRMS, Asset Tracker, Query Tracker, ProjectHub, finance tools, custom portals), and **product engineering** (web/mobile, UI/UX, custom AI chat models). The page reinforces **measurable outcomes** (time and cost savings).

---

### 1.5 Software products & plans (marketing copy + numbers)

Pricing is implemented in `src/app/products/page.tsx` and shown in `PricingModal.tsx`. Each product has **Individual** and **Business** plans with **`monthlyPrice`** and **`yearlyPrice`** numbers (USD, integer).

**Effective yearly discount (approximate):** For most products, `yearlyPrice` is about **20% below** paying monthly for 12 months (aligned with translation key `products.pricing.save` = “Save 20%” in `translations.ts`).

#### HRMS

| Plan | Monthly | Yearly (billed amount in data) | Headline limits / themes |
|------|---------|-------------------------------|---------------------------|
| Individual | $49 | $469 | Up to 50 employees; HR core + mobile + email support |
| Business | $149 | $1,429 | Unlimited employees; advanced HR, payroll, recruitment, analytics, API, priority support, account manager |

#### ProjectHub

| Plan | Monthly | Yearly | Themes |
|------|---------|--------|--------|
| Individual | $39 | $374 | Up to 10 projects, 5 members, 5GB, basics |
| Business | $99 | $949 | Unlimited projects/members, Gantt, time tracking, admin, integrations |

#### Asset Tracker

| Plan | Monthly | Yearly | Themes |
|------|---------|--------|--------|
| Individual | $35 | $335 | Up to 100 assets, QR, maintenance logs |
| Business | $89 | $849 | Unlimited assets, GPS, depreciation, SSO, API, multi-location |

#### Query Tracker

| Plan | Monthly | Yearly | Themes |
|------|---------|--------|--------|
| Individual | $45 | $429 | Up to 500 tickets/mo, 3 agents, knowledge base |
| Business | $119 | $1,139 | Unlimited tickets/agents, omnichannel, AI, SLA, white-label |

#### Business Portal

| Plan | Monthly | Yearly | Themes |
|------|---------|--------|--------|
| Individual | $59 | $565 | Dashboard, documents, collaboration, standard workflows |
| Business | $199 | $1,899 | Executive dashboards, vendor portal, branding, automation, API, on-prem option |

#### NexaVerse (consumer-style)

| Plan | Monthly | Yearly | Themes |
|------|---------|--------|--------|
| Individual | $9 | $89 | Personal entertainment tracking, credentials, sync, basic recommendations |
| Business | $29 | $279 | Teams, shared libraries, AI recommendations, API, admin |

**Modal UX detail:** When “Yearly” is selected, the modal still displays **`/month`** next to the price while swapping in the **`yearlyPrice` figure** — that figure in code is the **annual lump sum**, not a per-month equivalent. This is easy to misread; see recommendations below.

---

### 1.6 Relation to the Worklytics / portal ecosystem

Internal documentation (`PORTALS_AND_SERVICES_OVERVIEW.md`) describes the **multi-tenant portal platform** (HRMS, Employee Portal, Asset Tracker, Finance, Query Tracker, Admin, external Project Tracker, etc.). The **marketing site** sells the *product names* and plan shapes; the **live portal feature depth** is much larger than any single pricing card can show. Use the portal doc when writing “what’s included” accurately for sales and onboarding.

---

## Part 2 — Suggestions & recommendations (premium positioning)

*The following is advisory only and is separated from Part 1 as requested.*

### 2.1 Make the site feel more “premium” (brand, UX, content)

1. **Unify naming (Shreejiva vs SJ Group):** Decide the customer-facing parent name and use it consistently in hero copy, `<title>`, meta descriptions, and footer. Reserve “SJ Tech” for the engineering/services line to reduce cognitive load.

2. **Fix `/services` parent route:** If the navbar points to `/services`, add a hub page or redirect to `sj-tech` or a three-tile overview. Broken or empty parents undermine trust.

3. **Replace or own stock photography:** Melora/JivaPure/home cards rely heavily on Unsplash. Premium brands invest in **one consistent photoshoot** or 3D renders so color temperature matches `#012436` / `#F96900`.

4. **Social proof layer:** Add **logos with context** (industry + outcome), short **quote cards**, and **case study** deep links. The SJ Tech page already hints at savings — pair with anonymized before/after metrics.

5. **Product detail parity:** `/products/*` template pages should **mirror** modal features and add **screenshots or embedded video** of real dashboards. Enterprise buyers assume “demo or it didn’t happen.”

6. **Accessibility & motion:** You already honor `prefers-reduced-motion` for carousel/snow. Extend that to large Framer Motion blocks and ensure focus states on modals and toggles meet WCAG contrast on `#3B0D11` / orange buttons.

7. **Contact form backend:** The contact form is simulated. Wiring to CRM/email (with consent logging) is a premium operational signal and improves lead response time.

8. **Contact consistency:** Phone `href` should use the same E.164 number as the displayed India number; avoid placeholder `tel:+1234567890` if that is still present.

9. **SEO & structured data:** Add `Organization`, `Product`, and `FAQPage` schema where truthful; localize titles/descriptions per language.

10. **NexaVerse placement:** It sits beside enterprise HRMS pricing psychologically. Consider a **tab or section** (“Business software” vs “Consumer”) so buyers don’t anchor a $199 portal against a $9 app.

---

### 2.2 Pricing strategy — Individual & Business, monthly & yearly

#### Structural improvements

1. **Rename “Individual” where it’s misleading:** For HRMS, “Individual” still allows **50 employees**. Prefer **Starter / Team / Business** or **Growth** so expectations match B2B reality.

2. **Add a third tier — Enterprise / Custom:** For HRMS, Query Tracker, and Business Portal, add **“Contact sales”** with minimum seat count or SLA. This **anchors** Business as mid-market and captures large deals without publishing price.

3. **Show math transparently:**  
   - **Monthly:** `$X / user / month` or `$X / month (up to N seats)`  
   - **Yearly:** Either **`$Y / year`** (large text) *and* small **`≈ $Y/12 / mo`** *or* lead with **effective monthly** with “billed annually.”  

4. **Fix the yearly display bug:** Today, yearly mode shows the **annual total** next to **`/month`**. Switch copy to **“/ year”** when showing `yearlyPrice`, or compute and display **`Math.round(yearlyPrice / 12)`** as “per month, billed annually.”

5. **State the discount explicitly:** e.g. “Save 20% with annual billing” next to the toggle (translation keys exist — surface them in the modal).

6. **Currency and region:** Headquarters are in **India**; global USD is fine for software, but consider **INR display** (or a toggle) for domestic buyers to reduce friction and chargebacks.

7. **Trial & guarantees:** Premium SaaS often adds **14-day trial**, **money-back window**, or **pilot scope** for Business. Even one line increases conversion more than extra feature bullets.

8. **Feature truth alignment:** List only features **shipped** or **contractually available** in the tenant (cross-check `PORTALS_AND_SERVICES_OVERVIEW.md`). Overclaiming erodes premium positioning fast.

9. **Volume & bundles:**  
   - **Bundle discount** if a customer takes HRMS + Asset Tracker + Query Tracker.  
   - **Seat bands** for Business (e.g. 51–200, 201–1000) with soft caps instead of “Unlimited” unless infrastructure truly supports it.

10. **NexaVerse pricing:** Keep **Freemium** or **low single-tier** consumer pricing separate; Business at **$29** should spell **seats, shared libraries, and admin** limits to avoid abuse.

#### Optional price architecture (illustrative, not mandatory)

| Product | Idea |
|---------|------|
| HRMS | Starter seat-based (e.g. per employee band), Business flat + onboarding fee, Enterprise custom |
| ProjectHub | Free **1 project** tier for PLG; paid Individual; Business with SSO |
| Asset Tracker | Price by **asset count** on Individual; Business unlimited + API |
| Query Tracker | Price by **agent seats** and **ticket volume**; Business adds SLA + white-label |
| Business Portal | Keep high anchor; Individual → “Department portal” naming |
| NexaVerse | Pro / Family / Team with clear storage and sync limits |

---

### 2.3 Quick wins checklist

- [ ] Correct **yearly** price labeling in `PricingModal.tsx`  
- [ ] Align **phone** `tel:` link with displayed number  
- [ ] Add **`/services` index** or redirect  
- [ ] Rename tiers that say **Individual** but target **teams**  
- [ ] Add **Enterprise / Contact** row to modal grid  
- [ ] One **real screenshot** per product on detail pages  

---

*Document generated from repository sources: `src/app/**`, `src/components/**`, `src/app/globals.css`, `brain/project-overview.md`, `PORTALS_AND_SERVICES_OVERVIEW.md`.*

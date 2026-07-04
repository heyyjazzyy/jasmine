// Content layer for the dual-mode portfolio.
// PM case studies are sourced from the uploaded spreadsheet.
// Other categories (music, photography, writing, dinners) are scaffolded
// so you can drop your own entries in the same shape.

export type Category = "pm" | "music" | "photography" | "writing" | "media-log" | "singing";

export type FridgeStyle =
  | "memo"      // clipped PM memo
  | "polaroid"  // photo
  | "sticky"    // writing / short note
  | "recipe"    // dinner / media log
  | "cassette"; // music

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: Category;
  fridgeStyle: FridgeStyle;
  year?: string;
  body: string; // markdown-ish plain text
  href?: string; // external override
  accent?: "butter" | "tomato" | "sky" | "lilac" | "peach" | "mint";
}

// -----------------------------
// PM Case Studies (from TSV)
// -----------------------------
export const pmProjects: PortfolioItem[] = [
  {
    id: "pm-01",
    slug: "duolingo",
    title: "Duolingo",
    subtitle: "PM Intern · Video Call w/ Lily · Summer 2025",
    category: "pm",
    fridgeStyle: "memo",
    year: "2025",
    accent: "mint",
    body: `# Breakdown Recovery & Dynamic Difficulty for Immersive Language Learning
**Product Management Intern — Video Call Experience Core** · Summer 2025 (Pittsburgh, PA)

## Intro
Over the summer of 2025, I joined the core product team at Duolingo HQ in Pittsburgh to shape the **Video Call with Lily** — the platform's AI-driven feature designed to help language learners overcome the anxiety of real-world speaking. I embedded myself into the technical stack and prompt mechanics to optimize AI reasoning, conversational scaffolding, and system-level pacing. Over 12 weeks, I ran **6 live feature experiments**, authored **7 product specs**, and drove features aimed at keeping millions of users in their linguistic "Goldilocks Zone."

## The Challenge
A "breakdown" occurs when a learner or the AI fails to understand one another in real time. If left unsupported, frustration spikes and retention craters. My mandate was twofold: **improve breakdown recovery** so mistakes didn't lead to churn, and **build a dynamic difficulty engine** that shifts complexity based on real-time performance.

## What I Did
### 1. Engineered turn-extension scaffolding
Authored and launched system specs to grant users **+1 extra turn** when a breakdown was detected. After v2 users hit the max extension cap (breakdowns cluster), I overhauled v3 prompt logic to focus strictly on *perceived* breakdowns.

### 2. Built the automated Breakdown Recovery Evaluator
Created a Python/Colab pipeline pulling raw call transcripts from Arize, running dual-tier LLM evals (breakdown vs no_breakdown, then recovered vs unrecovered) and pushing validated accuracy back to the data dashboard. Meta-prompt tuning **boosted breakdown eval accuracy from 69% → 78%** and **doubled the Recovered Breakdown F1 score**.

### 3. Architected the real-time dynamic difficulty engine
Shifts a learner's CEFR level between calls based on feedback. "Too Easy" → **+1 CEFR step**, unlocking longer turns and advanced sentence lengths. "Too Hard" → step down and activate scaffolding.

### 4. Shipped native scaffolding features
- **Phrasal Pauses:** real-time TTS adjustments injecting fluid pauses after a breakdown.
- **Onboarding Survival Phrases:** system-prompt override delivering situational prompts (e.g. *"No entiendo" / "Slow down, please"*) on loading screens for A1 learners.

## Impact
- **+14.9%** Total Words Spoken per Max DAU
- **+17.9%** user turns per session
- **−62%** baseline false-positive breakdown overfires per day (GPT-4.1 Mini/Nano arms)
- Built a cost-to-value formula proving **GPT-4.1-Nano** delivered optimal margins → approved for deployment
- Breakdown-recovery dashboard went **100% live** as the team's core metric.`,
  },
  {
    id: "pm-02",
    slug: "loop",
    title: "Loop",
    subtitle: "Co-Founder & CPO · AI Fashion Tech · May 2023 – Jun 2024",
    category: "pm",
    fridgeStyle: "memo",
    year: "2024",
    accent: "peach",
    body: `# Loop — Re-engineering Bra Sizing with Computer Vision
**Co-Founder & Chief Product Officer** · Pre-Seed AI Fashion Startup · May 2023 – Jun 2024

## Intro
**80% of women wear bras that don't fit** due to outdated sizing methods — driving a **50% return rate** for bras online. As Co-Founder and CPO, my team and I built **Loop**: a women-led sizing startup using computer vision and ML to match women with their perfect bra.

## The 3-Step Journey
1. **Scan** — front + side photo in a snug tube top via web/mobile.
2. **Select** — preference filters for support, style, color, occasion.
3. **Shop** — curated matches with direct shopping links and a personalized fit breakdown.

## What I Did
- **Computer Vision Optimization:** partnered with our CTO to design training loops that convert 2D photos into a private 3D body model.
- **Database & Recommendation Architecture:** scalable SQL with indexing + normalization; backend algorithms cross-reference profiles against **150,000+ distinct bra measurement data points**.
- **User Research:** led studies with **150+ individuals and 15+ apparel clients** to capture qualitative feature preferences.

## Impact
- **+12% body measurement accuracy** vs. legacy industry standards.
- **$15,000+** in non-dilutive grants and startup competition awards.
- **3,000+ waitlisted** beta users at launch.`,
  },
  {
    id: "pm-03",
    slug: "paypal",
    title: "PayPal",
    subtitle: "PM Intern · Mobile Checkout & PayPal.com · Summers 2022 & 2023",
    category: "pm",
    fridgeStyle: "memo",
    year: "2023",
    accent: "sky",
    body: `# PayPal — Optimizing Mobile Checkout Efficiency & Platform Integration
**Product Manager Intern** · Mobile Checkout & PayPal.com · Summers 2022 & 2023

## Intro
Across two consecutive summers, I tackled five platform initiatives split between core PayPal.com and Mobile Checkout, blending data-driven personalization with technical standardization to drive transaction success, explore emerging economies, and improve web compliance.

## Core Projects
### 1. AI/ML for Shipping Address Predictions
Built a predictive model to correct shipping-address errors and enhance checkout delivery accuracy. Designed personalization models analyzing quantitative + behavioral data to predict drop-off in the funnel.

### 2. Metaverse Integration Analysis & Strategy
Researched decentralized checkout architectures and digital payment frameworks. Delivered executive-level integration frameworks scoped to a **$200B emerging consumer landscape**.

### 3. Website Integration & Compliance
Standardized integration flows across PayPal.com surfaces to improve compliance and reduce checkout friction.`,
  },
];

// -----------------------------
// Music
// -----------------------------
export const musicItems: PortfolioItem[] = [
  {
    id: "music-01",
    slug: "midnight-forge-ost",
    title: "Midnight Forge — Original Score",
    subtitle: "Indie action-RPG · 2024",
    category: "music",
    fridgeStyle: "cassette",
    year: "2024",
    accent: "lilac",
    body: `A 22-track original score for the indie action-RPG *Midnight Forge*. Composed in Logic Pro with Spitfire strings, granular textures, and live guitar. Themes lean into low, patient brass with plucked ostinati for the exploration cues.`,
  },
  {
    id: "music-02",
    slug: "tidepool-loops",
    title: "Tidepool — Ambient Loops",
    subtitle: "Puzzle game · 2023",
    category: "music",
    fridgeStyle: "cassette",
    year: "2023",
    accent: "sky",
    body: `Seamless ambient loops for a meditative puzzle game. Built around detuned Rhodes, field recordings from the Sonoma coast, and a very patient tape delay.`,
  },
];

// -----------------------------
// Singing
// -----------------------------
export const singingItems: PortfolioItem[] = [
  {
    id: "sing-01",
    slug: "living-room-sessions",
    title: "Living Room Sessions",
    subtitle: "Covers + originals, live-tracked",
    category: "singing",
    fridgeStyle: "cassette",
    year: "2024",
    accent: "peach",
    body: `A rolling series of one-take living-room sessions — mostly folk/jazz standards, occasional originals. Recorded on an SM7B into a Scarlett, mixed the same afternoon.`,
  },
];

// -----------------------------
// Photography
// -----------------------------
export const photoItems: PortfolioItem[] = [
  {
    id: "photo-01",
    slug: "kyoto-slow",
    title: "Kyoto, Slow",
    subtitle: "35mm · Portra 400",
    category: "photography",
    fridgeStyle: "polaroid",
    year: "2024",
    accent: "butter",
    body: `Two weeks in Kyoto on a Contax T2. Mostly early mornings in Arashiyama and side streets in Gion — the kind of light that makes you slow down.`,
  },
  {
    id: "photo-02",
    slug: "kitchen-light",
    title: "Kitchen Light",
    subtitle: "Digital · ongoing",
    category: "photography",
    fridgeStyle: "polaroid",
    year: "2025",
    accent: "mint",
    body: `An ongoing series of food and hands, shot only with window light in friends' kitchens during dinner parties.`,
  },
  {
    id: "photo-03",
    slug: "coastal-fog",
    title: "Coastal Fog",
    subtitle: "Medium format · Pentax 67",
    category: "photography",
    fridgeStyle: "polaroid",
    year: "2023",
    accent: "sky",
    body: `Foggy mornings up and down Highway 1. Pentax 67, one lens, a lot of waiting.`,
  },
];

// -----------------------------
// Writing (about tech)
// -----------------------------
export const writingItems: PortfolioItem[] = [
  {
    id: "write-01",
    slug: "the-goldilocks-zone",
    title: "The Goldilocks Zone of AI Tutors",
    subtitle: "Essay · 2025",
    category: "writing",
    fridgeStyle: "sticky",
    year: "2025",
    accent: "butter",
    body: `Why the hardest problem in AI language tutoring isn't the model — it's calibrating difficulty in real time so the learner stays 15% uncomfortable.`,
  },
  {
    id: "write-02",
    slug: "specs-that-ship",
    title: "Specs That Actually Ship",
    subtitle: "Notes on PM writing",
    category: "writing",
    fridgeStyle: "sticky",
    year: "2024",
    accent: "peach",
    body: `A short field guide to writing product specs engineers will read on a Monday morning without groaning.`,
  },
];

// -----------------------------
// Media log / Dinners
// -----------------------------
export const mediaLogItems: PortfolioItem[] = [
  {
    id: "dinner-01",
    slug: "spring-supper-club",
    title: "Spring Supper Club",
    subtitle: "8 guests · April 2025",
    category: "media-log",
    fridgeStyle: "recipe",
    year: "2025",
    accent: "mint",
    body: `A five-course spring menu built around morels and green garlic. Full menu, timing sheet, and playlist inside.`,
  },
  {
    id: "dinner-02",
    slug: "noodle-night",
    title: "Noodle Night",
    subtitle: "12 guests · Feb 2025",
    category: "media-log",
    fridgeStyle: "recipe",
    year: "2025",
    accent: "tomato",
    body: `Three sauces, one dough, twelve friends. The dan dan won.`,
  },
];

export const allItems: PortfolioItem[] = [
  ...pmProjects,
  ...musicItems,
  ...singingItems,
  ...photoItems,
  ...writingItems,
  ...mediaLogItems,
];

export const byCategory = (c: Category) => allItems.filter((i) => i.category === c);
export const bySlug = (slug: string) => allItems.find((i) => i.slug === slug);

// -----------------------------
// About
// -----------------------------
export const education = [
  {
    degree: "Masters of Business Administration",
    institution: "Yale School of Management",
    dateRange: "2024-2026",
  },
  {
    degree: "B.S. Arts, Technology, and Business of Innovation",
    institution: "Iovine and Young Academy, University of Southern California",
    dateRange: "2020 – 2024",
  },
];

export const courses = [
  "Product Management (CMU 67-262)",
  "Machine Learning in Production",
  "Human-AI Interaction",
  "Applied Data Science",
  "Interaction Design Studio",
  "Startup Lab — New Venture Creation",
];

export const tools = [
  "Figma", "Notion", "Linear", "Amplitude", "Mixpanel",
  "SQL", "Python", "Jupyter", "Arize", "OpenAI API",
  "Framer", "Logic Pro", "Ableton Live", "Lightroom", "Descript",
];

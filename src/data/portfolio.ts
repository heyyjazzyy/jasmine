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
    subtitle: "PM Intern · Video Call Experience · Summer 2025",
    category: "pm",
    fridgeStyle: "memo",
    year: "2025",
    accent: "mint",
    body: `# Breakdown Recovery & Dynamic Difficulty for Immersive Language Learning


Over the summer of 2025, I joined the core product team at Duolingo HQ in Pittsburgh to shape the **Video Call with Lily** — the platform's AI-driven feature designed to help language learners overcome the anxiety of real-world speaking. I embedded myself into the technical stack and prompt mechanics to optimize AI reasoning, conversational scaffolding, and system-level pacing. Over 12 weeks, I ran **6 live feature experiments**, authored **7 product specs**, and drove features aimed at keeping millions of users in their linguistic "Goldilocks Zone."

![Helping users find the goldilocks zone](/__l5e/assets-v1/69b90c94-1a9c-42ac-abfb-ea6cf26792b5/frame_23.png)


## The Challenge
A "breakdown" occurs when a learner or the AI fails to understand one another in real time. If left unsupported, frustration spikes and retention craters. My mandate was twofold: **improve breakdown recovery** so mistakes didn't lead to churn, and **build a dynamic difficulty engine** that shifts complexity based on real-time performance.

## Turn-Extensions
I authored and launched system specifications to grant users  +1 extra conversational turn when a breakdown or interruption was detected


After analyzing the v2 experiment—where users hit the maximum extension cap because breakdowns naturally cluster—I completely overhauled the prompt logic for v3. I pivoted the LLM classifier to focus strictly on perceived user breakdowns rather than objective ones.

## Breakdown Recovery Evaluator
Before my internship, parsing true breakdowns vs. AI overfiring was a black box. I created a Python backend/Colab evaluation pipeline that pulls raw call transcripts from Arize, runs automated dual-tier LLM evaluations (detecting \`breakdown\` vs \`no_breakdown\`, then sorting into \`recovered\` vs \`unrecovered\`), and pushes the validated accuracy metrics right back to the data engineering dashboard.


I utilized meta-prompts via OpenAI models to fine-tune the classifier, increasing the system's breakdown evaluation accuracy from 69% to 78%, and doubling the Recovered Breakdown F1 classification score.

## Dynamic Difficulty
I developed the system architecture to shift a learner's CEFR level between calls based on direct user feedback loops and performance indicators.


If a user rates a call "Too Easy," the engine increments their profile by +1 CEFR step, unlocking longer turns, advanced sentence lengths, and lower Flesch readability text. If they choose "Too Hard," it steps down their rating and activates automated scaffolding features.

## Scaffolding
I Spec'd and shipped real-time adjustments to Lily's Text-to-Speech (TTS) behavior, injecting fluid phrasing pauses immediately after a user breakdown to increase user comprehension.

I also designed a system-prompt override feature to deliver situational survival prompts (e.g., "No entiendo" / "Slow down, please") on the loading screens for early-stage (A1) learners

## Impact
**Increase in User Speaking Volume:** My Turn-Extension feature successfully unlocked extended, low-stakes conversations, driving a **+14.9% increase in Total Words Spoken per Max DAU** and a **+17.9% jump in user turns per session**.

**Reduction in AI Overfiring:** By rolling out the updated control prompts on next-generation LLM architectures (GPT-4.1 Mini and Nano arms), I **cut baseline false-positive breakdown overfires by 62% per day**.

**Infrastructure Cost Optimization:** Through systematic benchmarking, I built a custom cost-to-value business formula:

Value = (Words per Max DAU × Session Completion Rate) / Total TTS Cost

Using this composite framework, I proved that migrating our global control prompts to **GPT-4.1-Nano** minimized reasoning latency and delivered optimal financial margins, leading to an approved recommendation for architecture deployment.

**System Automation Approved:** My engineered breakdown recovery metric dashboard went **100% live** in the core metrics framework, establishing the definitive internal tool the team uses to trace conversational flow and user retention.`,
  },
  {
    id: "pm-02",
    slug: "loop",
    title: "Loop",
    subtitle: "Co-Founder & Head of Product · Loop · May 2023 – Jun 2024",
    category: "pm",
    fridgeStyle: "memo",
    year: "2024",
    accent: "peach",
    body: `# Re-engineering Bra Sizing with Computer Vision


80% of women end up wearing bras that don't fit properly due to inconsistent, outdated sizing methods. This is an issue of comfort, long-lasting health implications and e-commerce, forcing retailers to contend with a staggering 50% return rate for bras.


As the Co-Founder and Head of Product, my team and I set out to build a win-win ecosystem for both apparel shoppers and fashion brands. We launched Loop, a women-led bra sizing startup using advanced computer vision and machine learning to accurately match women with their perfect bra recommendations.

## The Challenge
Traditional sizing charts rely on tape measurements that fail to account for unique, three-dimensional human anatomy. Our objective was to create a frictionless, privacy-first mobile scanning experience that turns a consumer's smartphone into an exact digital tailor.

## Solution

![Loop app flow: Scan, Select, Shop](/__l5e/assets-v1/6f1a54cd-5a0f-4aba-964d-9bd6f92bc824/Frame_22_1.png)

\n

## Computer Vision Optimization
I worked hand-in-hand with our Chief Technology Officer (CTO) to design feature development loops and train computer vision models that convert raw 2D photos into an accurate, private 3-D body model.

## Database & Recommendation Architecture
I Integrated scalable SQL databases optimized with advanced indexing strategies and data normalization techniques. Built the backend algorithms that successfully cross-reference personal shape profiles against an expansive database containing over **150,000 distinct bra measurement data points**.

## User Research & Recruitment
I led comprehensive customer research and usability studies, engaging directly with over **150 individuals and 15+ potential small business apparel clients** to capture qualitative feature preferences.

## Impact
By proving both technical viability and market demand, Loop achieved significant early momentum:

Our custom computer vision approach achieved a **12% increase in body measurement accuracy** compared to legacy apparel industry standards.

We pitched at several competitions, winning **over $15,000 in non-dilutive grants and startup competition awards** to fund our initial pre-seed engineering runway.

Driven by our user research initiatives, I successfully scale-recruited a beta testing cohort of **3,000+ waitlisted target users**.`,
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

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  image: string;
  category: "Software" | "Advertising" | "Both";
};

// Images are imported in each route and passed in; here we keep metadata only.
export const projects: Omit<Project, "image">[] = [
  {
    slug: "brew-bloom",
    title: "Brew & Bloom",
    blurb:
      "A subscription storefront for a small-roaster, from checkout flow to a warm retargeting campaign.",
    tags: ["React", "Email", "Storefront"],
    category: "Both",
  },
  {
    slug: "stillwater",
    title: "Stillwater",
    blurb:
      "An onboarding redesign plus a paid-social funnel that doubled trial signups for a quiet meditation app.",
    tags: ["TypeScript", "Paid social", "UX"],
    category: "Both",
  },
  {
    slug: "letter-series",
    title: "The Letter Series",
    blurb:
      "Ongoing newsletter copy and a landing page for a solo ceramicist, built to feel like a personal note.",
    tags: ["Copywriting", "Webflow", "Email"],
    category: "Advertising",
  },
  {
    slug: "petal-ledger",
    title: "Petal Ledger",
    blurb:
      "A gentle bookkeeping tool for a florist, paired with a seasonal promo that filled weekend slots.",
    tags: ["Svelte", "Promo", "Dashboard"],
    category: "Software",
  },
];

export const services = {
  software: {
    title: "Software development",
    tagline: "Calm, accessible builds that hold up over time.",
    items: [
      "AI tools & integrations",
      "Security programs & audits",
      "Websites & web apps",
      "Frontend & full-stack apps",
      "React, TypeScript, Node",
      "Accessibility & performance",
      "Small, well-tested APIs",
    ],
  },
  advertising: {
    title: "Digital advertising",
    tagline: "Campaigns that read like a conversation, not a shout.",
    items: [
      "Paid social & search",
      "Email & lifecycle flows",
      "Warm copy & landing pages",
      "Creative direction & motion",
      "Friendly analytics & reporting",
    ],
  },
};

export const pricingTiers = {
  software: [
    {
      name: "Starter site",
      price: "$1,200",
      description: "A warm, fast one-page site for a founder or small studio.",
      features: ["1–3 pages", "Responsive design", "Basic SEO", "1 round of edits"],
      featured: false,
    },
    {
      name: "Web app",
      price: "from $4,500",
      description: "A full-stack app with auth, dashboard, and a real backend.",
      features: ["Custom UI", "Auth & database", "AI tooling", "30-day support"],
      featured: true,
    },
    {
      name: "Security program",
      price: "Let's talk",
      description: "A security review, hardening pass, and a written program.",
      features: ["Threat model", "Code audit", "Hardening", "Report + roadmap"],
      featured: false,
    },
  ],
  advertising: [
    {
      name: "Campaign sprint",
      price: "$900",
      description: "A two-week paid-social or search sprint to find what works.",
      features: ["1 channel", "5 ad concepts", "Landing page", "Results report"],
      featured: false,
    },
    {
      name: "Always-on retainer",
      price: "from $1,800/mo",
      description: "Ongoing campaigns, copy, and reporting across channels.",
      features: ["2–3 channels", "Monthly copy", "Lifecycle email", "Monthly report"],
      featured: true,
    },
    {
      name: "Creative package",
      price: "$600",
      description: "A set of warm ad creative and a landing page for a launch.",
      features: ["6 creatives", "1 landing page", "Copy deck", "1 revision"],
      featured: false,
    },
  ],
};

export const profile = {
  name: "Mara Ellison",
  role: "Software developer × digital advertiser",
  email: "hello@maraellison.studio",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
  tagline: "I build calm software & the stories that bring people to it.",
  intro:
    "I'm Mara — a developer who codes with patience and an advertiser who writes like a friend. For six years I've helped small, thoughtful teams ship products they're proud of and campaigns that actually land.",
};

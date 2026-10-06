import type { Locale, PillarId } from "@/config/site";

/**
 * Long-form service copy, kept out of `i18n/ui.ts` because each entry is a
 * paragraph plus a list rather than a single string.
 *
 * Edit this file to change what the Services page offers — the page itself
 * renders whatever is here, in pillar order.
 */
type ServiceCopy = {
  /** One paragraph explaining the offer in the visitor's terms. */
  detail: string;
  /** Concrete deliverables. Keep these specific — they do the selling. */
  deliverables: string[];
};

export const serviceCopy: Record<Locale, Record<PillarId, ServiceCopy>> = {
  en: {
    "web-development": {
      detail:
        "Marketing sites and company websites, written by hand where speed and control matter, or built on WordPress when you need to edit things yourself. Either way you get something fast, accessible and easy to find.",
      deliverables: [
        "Multi-page company and marketing sites",
        "WordPress builds with Elementor",
        "Responsive layouts down to small phones",
        "Performance and Core Web Vitals work",
        "Accessibility to WCAG standards",
      ],
    },
    "web-apps": {
      detail:
        "When a website isn't enough — dashboards, internal tools and applications with real logic behind them, including authentication, data and the screens your team actually works in.",
      deliverables: [
        "Dashboards and admin interfaces",
        "Authentication and user accounts",
        "Forms, workflows and data entry tools",
        "API integration with existing systems",
      ],
    },
    security: {
      detail:
        "Software built to be attacked, and reviews of software that already has been. I write defensive tooling and harden what exists, with findings explained in plain language rather than a wall of scanner output.",
      deliverables: [
        "Security programs and defensive tooling",
        "Code review and hardening passes",
        "File integrity and monitoring systems",
        "Written findings with a fix roadmap",
      ],
    },
    "ai-tools": {
      detail:
        "Practical automation for work that eats hours. Not AI for its own sake — tools that take a repetitive task off your desk and give you the time back.",
      deliverables: [
        "Custom AI tools and assistants",
        "Document and data processing pipelines",
        "Workflow automation",
        "Integration with the tools you already use",
      ],
    },
    ads: {
      detail:
        "Google and Meta campaigns run end to end: structure, targeting, creative and the tracking that proves what worked. Certified across Search, Display, Measurement, Analytics and Tag Manager.",
      deliverables: [
        "Google Search, Display and Performance Max",
        "Facebook and Instagram campaigns",
        "Conversion tracking and pixel setup",
        "Landing pages built to convert",
        "Monthly reporting you can actually read",
      ],
    },
    seo: {
      detail:
        "The technical half of SEO — the part most sites get wrong. Crawlability, speed, structured data and accessibility, so the content you already have can finally rank.",
      deliverables: [
        "Technical SEO audits",
        "Site speed and Core Web Vitals",
        "Structured data and rich results",
        "Crawlability, sitemaps and indexing",
        "On-page optimisation",
      ],
    },
  },

  fr: {
    "web-development": {
      detail:
        "Sites vitrines et sites d'entreprise, codés à la main quand la vitesse et le contrôle comptent, ou construits sous WordPress quand vous voulez pouvoir modifier vous-même. Dans les deux cas : rapide, accessible et facile à trouver.",
      deliverables: [
        "Sites d'entreprise et sites vitrines multi-pages",
        "Réalisations WordPress avec Elementor",
        "Mises en page responsives jusqu'aux petits écrans",
        "Optimisation des performances et Core Web Vitals",
        "Accessibilité selon les normes WCAG",
      ],
    },
    "web-apps": {
      detail:
        "Quand un site ne suffit plus — tableaux de bord, outils internes et applications avec une vraie logique métier : authentification, données et les écrans que vos équipes utilisent au quotidien.",
      deliverables: [
        "Tableaux de bord et interfaces d'administration",
        "Authentification et comptes utilisateurs",
        "Formulaires, workflows et saisie de données",
        "Intégration d'API avec vos systèmes existants",
      ],
    },
    security: {
      detail:
        "Des logiciels conçus pour résister aux attaques, et des audits de logiciels qui en ont déjà subi. J'écris des outils défensifs et je durcis l'existant, avec des conclusions expliquées clairement plutôt qu'un rapport d'outil illisible.",
      deliverables: [
        "Programmes de sécurité et outils défensifs",
        "Revue de code et durcissement",
        "Systèmes de surveillance et d'intégrité des fichiers",
        "Rapport écrit avec feuille de route correctives",
      ],
    },
    "ai-tools": {
      detail:
        "De l'automatisation concrète pour les tâches qui dévorent des heures. Pas de l'IA pour l'IA — des outils qui vous retirent une tâche répétitive et vous rendent le temps.",
      deliverables: [
        "Outils et assistants IA sur mesure",
        "Traitement de documents et de données",
        "Automatisation de workflows",
        "Intégration avec vos outils actuels",
      ],
    },
    ads: {
      detail:
        "Campagnes Google et Meta gérées de bout en bout : structure, ciblage, création et le tracking qui prouve ce qui fonctionne. Certifié en Search, Display, Measurement, Analytics et Tag Manager.",
      deliverables: [
        "Google Search, Display et Performance Max",
        "Campagnes Facebook et Instagram",
        "Suivi des conversions et installation des pixels",
        "Landing pages conçues pour convertir",
        "Rapports mensuels réellement lisibles",
      ],
    },
    seo: {
      detail:
        "La moitié technique du SEO — celle que la plupart des sites ratent. Indexabilité, vitesse, données structurées et accessibilité, pour que le contenu que vous avez déjà puisse enfin se positionner.",
      deliverables: [
        "Audits SEO techniques",
        "Vitesse du site et Core Web Vitals",
        "Données structurées et résultats enrichis",
        "Indexabilité, sitemaps et crawl",
        "Optimisation on-page",
      ],
    },
  },
};

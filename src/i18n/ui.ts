/**
 * All translated interface copy.
 *
 * Keys are flat and namespaced with dots so a missing translation is obvious at
 * a glance. `en` is the reference: `fr` is typed against it, so TypeScript will
 * refuse to build if a French string is ever forgotten.
 *
 * Long-form content (projects, articles) does NOT live here — it lives in the
 * content collections under `src/content/`, one file per language.
 */

export const ui = {
  en: {
    // --- Navigation & chrome -------------------------------------------------
    "nav.about": "About",
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.certifications": "Certifications",
    "nav.blog": "Journal",
    "nav.contact": "Say hello",
    "nav.menu": "Menu",
    "nav.close": "Close menu",
    "nav.skipToContent": "Skip to content",
    "nav.toggleTheme": "Switch between light and dark",
    "nav.switchLanguage": "Français",
    "footer.madeWith": "Made slowly, with care.",
    "footer.basedIn": "Based in Yaoundé, Cameroon",

    // --- Home ----------------------------------------------------------------
    "home.role": "Developer × digital marketer × security builder",
    "home.tagline": "I build the thing, then bring people to it.",
    "home.intro":
      "I'm Pascal — I write the code, harden it, and run the campaigns that put it in front of the right people. Websites, web apps, security programs and AI tools on one side; Google and Meta Ads and technical SEO on the other.",
    "home.cta.primary": "Start a conversation",
    "home.cta.secondary": "See the work",

    "home.services.eyebrow": "What I do",
    "home.services.title": "Two crafts, one warm hand",
    "home.services.seeAll": "See all services →",

    "home.work.eyebrow": "Selected work",
    "home.work.title": "A few things I've made with care",
    "home.work.all": "All work →",
    "home.work.empty": "Case studies are being written up — check back shortly.",

    "home.about.eyebrow": "A note, not a résumé",
    "home.about.title": "The person behind the pixel",
    "home.about.body":
      "I started out teaching myself HTML from documentation, and somewhere along the way I fell in love with the whole journey — the code that holds a thing up, the words that make people stop, and the quiet work of keeping it all safe.",
    "home.about.link": "Read my story →",

    "home.finalCta.title": "Let's make something warm",
    "home.finalCta.body":
      "Whether it's a web app, an ad campaign, a security review, or a little of each — I'd love to hear what you're building.",

    // --- Crafts & pillars ----------------------------------------------------
    "craft.build.title": "Building things",
    "craft.build.tagline": "Calm, accessible builds that hold up over time.",
    "craft.market.title": "Bringing people to them",
    "craft.market.tagline": "Campaigns that read like a conversation, not a shout.",

    "pillar.web-development.name": "Websites",
    "pillar.web-development.short": "Hand-coded and WordPress",
    "pillar.web-apps.name": "Web applications",
    "pillar.web-apps.short": "Dashboards, tools, full-stack apps",
    "pillar.security.name": "Security programs",
    "pillar.security.short": "Hardening, audits, defensive tooling",
    "pillar.ai-tools.name": "AI tools",
    "pillar.ai-tools.short": "Practical automation that saves hours",
    "pillar.ads.name": "Google & Meta Ads",
    "pillar.ads.short": "Campaign strategy and management",
    "pillar.seo.name": "Technical SEO",
    "pillar.seo.short": "Speed, crawlability, accessibility",

    // --- Work ----------------------------------------------------------------
    "work.title": "Work",
    "work.lead": "Case studies across development, security, advertising and SEO.",
    "work.filter.all": "Everything",
    "work.filter.label": "Filter by discipline",
    "work.viewCase": "View case →",
    "work.status.shipped": "Shipped",
    "work.status.in-progress": "In progress",
    "work.status.ongoing": "Ongoing",
    "work.plannedTitle": "Still to come",
    "work.noResults": "Nothing in this discipline yet.",
    "work.backToWork": "← All work",
    "work.role": "Role",
    "work.period": "Period",
    "work.stack": "Built with",
    "work.results": "Results",
    "work.problem": "The problem",
    "work.approach": "The approach",
    "work.visit": "Visit site",
    "work.source": "Source code",

    // --- Other pages ---------------------------------------------------------
    "services.title": "Services",
    "services.lead": "What I take on, and how I usually approach it.",
    "about.title": "About",
    "certifications.title": "Certifications",
    "certifications.lead": "Verified training behind the advertising and SEO work.",
    "certifications.issuer": "Issued by",
    "blog.title": "Journal",
    "blog.lead": "Notes on building, marketing and securing things on the web.",
    "blog.readMore": "Read →",
    "blog.empty": "First articles are on the way.",
    "blog.backToBlog": "← All articles",
    "cv.download": "Download CV (PDF)",

    // --- Contact -------------------------------------------------------------
    "contact.title": "Say hello",
    "contact.lead":
      "Tell me what you're building. I reply to everything, usually within a day.",
    "contact.form.name": "Your name",
    "contact.form.email": "Email address",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",
    "contact.form.sending": "Sending…",
    "contact.form.success": "Thank you — your message is on its way. I'll be in touch shortly.",
    "contact.form.error": "Something went wrong sending that. Please email me directly instead.",
    "contact.form.required": "Required",
    "contact.direct": "Or reach me directly",

    // --- Errors --------------------------------------------------------------
    "notFound.title": "Page not found",
    "notFound.body": "The page you're looking for doesn't exist or has moved.",
    "notFound.home": "Go home",
  },

  fr: {
    // --- Navigation & chrome -------------------------------------------------
    "nav.about": "À propos",
    "nav.work": "Réalisations",
    "nav.services": "Services",
    "nav.certifications": "Certifications",
    "nav.blog": "Journal",
    "nav.contact": "Me contacter",
    "nav.menu": "Menu",
    "nav.close": "Fermer le menu",
    "nav.skipToContent": "Aller au contenu",
    "nav.toggleTheme": "Basculer entre le thème clair et sombre",
    "nav.switchLanguage": "English",
    "footer.madeWith": "Fait lentement, avec soin.",
    "footer.basedIn": "Basé à Yaoundé, Cameroun",

    // --- Home ----------------------------------------------------------------
    "home.role": "Développeur × marketeur digital × ingénieur sécurité",
    "home.tagline": "Je construis, puis j'amène les gens jusqu'à vous.",
    "home.intro":
      "Je suis Pascal — j'écris le code, je le sécurise, et je mène les campagnes qui le placent devant les bonnes personnes. Sites web, applications, programmes de sécurité et outils IA d'un côté ; Google Ads, Meta Ads et SEO technique de l'autre.",
    "home.cta.primary": "Démarrons la conversation",
    "home.cta.secondary": "Voir les réalisations",

    "home.services.eyebrow": "Ce que je fais",
    "home.services.title": "Deux métiers, une même main",
    "home.services.seeAll": "Voir tous les services →",

    "home.work.eyebrow": "Sélection de projets",
    "home.work.title": "Quelques réalisations faites avec soin",
    "home.work.all": "Tout voir →",
    "home.work.empty": "Les études de cas sont en cours de rédaction — revenez bientôt.",

    "home.about.eyebrow": "Une note, pas un CV",
    "home.about.title": "La personne derrière le pixel",
    "home.about.body":
      "J'ai commencé en apprenant le HTML seul, dans la documentation, et quelque part en chemin je suis tombé amoureux du parcours entier — le code qui tient l'ensemble, les mots qui font s'arrêter les gens, et le travail discret qui garde tout cela en sécurité.",
    "home.about.link": "Lire mon parcours →",

    "home.finalCta.title": "Créons quelque chose de chaleureux",
    "home.finalCta.body":
      "Une application web, une campagne publicitaire, un audit de sécurité, ou un peu de chaque — dites-moi ce que vous construisez.",

    // --- Crafts & pillars ----------------------------------------------------
    "craft.build.title": "Construire",
    "craft.build.tagline": "Des réalisations sobres et accessibles, qui durent.",
    "craft.market.title": "Y amener les gens",
    "craft.market.tagline": "Des campagnes qui se lisent comme une conversation.",

    "pillar.web-development.name": "Sites web",
    "pillar.web-development.short": "Codés à la main et WordPress",
    "pillar.web-apps.name": "Applications web",
    "pillar.web-apps.short": "Tableaux de bord, outils, full-stack",
    "pillar.security.name": "Programmes de sécurité",
    "pillar.security.short": "Durcissement, audits, outils défensifs",
    "pillar.ai-tools.name": "Outils IA",
    "pillar.ai-tools.short": "Automatisation concrète qui fait gagner des heures",
    "pillar.ads.name": "Google & Meta Ads",
    "pillar.ads.short": "Stratégie et gestion de campagnes",
    "pillar.seo.name": "SEO technique",
    "pillar.seo.short": "Vitesse, indexabilité, accessibilité",

    // --- Work ----------------------------------------------------------------
    "work.title": "Réalisations",
    "work.lead": "Études de cas en développement, sécurité, publicité et SEO.",
    "work.filter.all": "Tout",
    "work.filter.label": "Filtrer par discipline",
    "work.viewCase": "Voir l'étude de cas →",
    "work.status.shipped": "Livré",
    "work.status.in-progress": "En cours",
    "work.status.ongoing": "Continu",
    "work.plannedTitle": "À venir",
    "work.noResults": "Rien encore dans cette discipline.",
    "work.backToWork": "← Toutes les réalisations",
    "work.role": "Rôle",
    "work.period": "Période",
    "work.stack": "Réalisé avec",
    "work.results": "Résultats",
    "work.problem": "Le problème",
    "work.approach": "L'approche",
    "work.visit": "Voir le site",
    "work.source": "Code source",

    // --- Other pages ---------------------------------------------------------
    "services.title": "Services",
    "services.lead": "Ce que je prends en charge, et comment je l'aborde.",
    "about.title": "À propos",
    "certifications.title": "Certifications",
    "certifications.lead": "Les formations vérifiées derrière le travail publicitaire et SEO.",
    "certifications.issuer": "Délivré par",
    "blog.title": "Journal",
    "blog.lead": "Notes sur la création, le marketing et la sécurité sur le web.",
    "blog.readMore": "Lire →",
    "blog.empty": "Les premiers articles arrivent bientôt.",
    "blog.backToBlog": "← Tous les articles",
    "cv.download": "Télécharger le CV (PDF)",

    // --- Contact -------------------------------------------------------------
    "contact.title": "Me contacter",
    "contact.lead":
      "Dites-moi ce que vous construisez. Je réponds à tout, généralement sous 24 heures.",
    "contact.form.name": "Votre nom",
    "contact.form.email": "Adresse e-mail",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le message",
    "contact.form.sending": "Envoi en cours…",
    "contact.form.success": "Merci — votre message est parti. Je vous réponds très vite.",
    "contact.form.error": "L'envoi a échoué. Écrivez-moi directement par e-mail.",
    "contact.form.required": "Obligatoire",
    "contact.direct": "Ou joignez-moi directement",

    // --- Errors --------------------------------------------------------------
    "notFound.title": "Page introuvable",
    "notFound.body": "La page que vous cherchez n'existe pas ou a été déplacée.",
    "notFound.home": "Retour à l'accueil",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

/**
 * Compile-time guarantee that every English key has a French counterpart.
 * If a translation is missing, `_assertTranslationsComplete` fails to typecheck
 * and `npm run build` stops — rather than silently shipping an English string
 * onto a French page.
 */
type TranslationsComplete =
  (typeof ui)["fr"] extends Record<UIKey, string> ? true : never;
const _assertTranslationsComplete: TranslationsComplete = true;
void _assertTranslationsComplete;

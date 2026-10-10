/**
 * CV content for Banamba Medjo Ulrich Pascal.
 *
 * Every fact here comes from the portfolio repository (src/config/site.ts,
 * src/data/about.ts, the certifications collection and the project case
 * studies) or from Pascal directly. Nothing is invented.
 */

const contact = {
  name: "Banamba Medjo Ulrich Pascal",
  email: "banambamedjoulrichpascal@gmail.com",
  phone: "+237 683 499 422",
  github: "github.com/BANAMBA-MEDJO-ULRICH-PASCAL",
  githubUrl: "https://github.com/BANAMBA-MEDJO-ULRICH-PASCAL",
  site: "ulrich-pascal-portfolio.onrender.com",
  siteUrl: "https://ulrich-pascal-portfolio.onrender.com",
};

const en = {
  lang: "en",
  contact,
  location: "Yaoundé, Cameroon",
  title: "Web Developer · Digital Advertising & Technical SEO",
  profile:
    "Web developer with a computer science foundation from the University of Yaoundé I and self-taught expertise in modern web languages, technical SEO and digital advertising. I build the thing and bring people to it — from hand-coded multi-page sites and full-stack applications to the paid search and SEO work that makes them findable.",

  sections: {
    education: "Education",
    certifications: "Certifications",
    skills: "Skills",
    projects: "Selected projects",
    languages: "Languages",
  },

  education: [
    {
      title: "Bachelor's degree in Computer Science",
      org: "University of Yaoundé I — Yaoundé, Cameroon",
      meta: "Expected 2026",
      note: "The first year was built around C. The web languages, Java and Python I learned independently alongside the curriculum.",
    },
    {
      title: "Self-directed training",
      org: "W3Schools · MDN Web Docs · Google Skillshop · online courses",
      meta: "Ongoing",
      note: "Front-end languages, then the advertising and technical SEO side, learned through documentation, structured courses and certification tracks.",
    },
  ],

  certifications: [
    { name: "Google Ads Search Certification", org: "Google" },
    { name: "Google Ads Measurement Certification", org: "Google" },
    { name: "Google Analytics Certification", org: "Google" },
  ],

  skillGroups: [
    {
      title: "Development",
      items:
        "HTML · CSS · JavaScript · TypeScript · Python · Java · React · Astro · WordPress · Git",
    },
    {
      title: "Marketing",
      items:
        "Google Ads · Meta Ads · Google Analytics · Tag Manager · Technical SEO · Conversion tracking",
    },
    {
      title: "Security & tooling",
      items: "Linux · File integrity monitoring · Code review · AI tooling",
    },
  ],

  projects: [
    {
      name: "Afiri — student and employer platform",
      role: "Team of 21 · business, finance, market and HR lead; back-end pole; admin dashboard",
      desc: "Two-sided platform connecting Cameroonian students to internships and local employers: filtered listings, a shareable mini-CV and a careers quiz built around Cameroonian degree programmes. I built the admin analytics dashboard end to end — five live KPI counters, two Chart.js visualisations and a 30-second auto-refresh, with role checks on every analytics endpoint.",
      stack: "Python · FastAPI · SQLAlchemy · PostgreSQL · JWT · Chart.js · Render",
    },
    {
      name: "CAMRAIL traffic planning simulator",
      role: "Solo — modelling, algorithms, API and interface",
      desc: "Railway timetable simulator for Cameroon's single-track network. Detects eight distinct conflict types automatically, computes a conflict-free plan by reducing scheduling to graph colouring, and recalculates the whole timetable when an incident is injected.",
      stack: "Python · FastAPI · Welsh–Powell & DSATUR · Leaflet · JavaScript",
    },
    {
      name: "AI Enterprise Assistant",
      role: "Solo — architecture, implementation, tests and CI",
      desc: "Multi-tenant FastAPI backend for a document assistant businesses can trust: one vector collection per organisation so isolation is structural, plus a governance layer covering audit logs, usage quotas, rate limits and prompt-injection guardrails.",
      stack: "Python · FastAPI · PostgreSQL · ChromaDB · Docker · pytest · GitHub Actions",
    },
    {
      name: "Jackbeat — archive of Cameroonian music",
      role: "Solo — data model, application, moderation and dashboard",
      desc: "Crowdsourced archive covering 14 genres, 11 regions and 11 languages, with a moderation pipeline on every public submission and an analysis layer of maps, charts and PDF report export.",
      stack: "Python · Flask · PostgreSQL · pandas · Plotly · ReportLab · Render",
    },
    {
      name: "Paid search on an $8.48 budget",
      role: "Solo — strategy, build, measurement",
      desc: "A Google Ads search campaign run end to end on a deliberately small budget: keyword strategy, ad groups, conversion tracking and the reporting that shows what the spend actually bought.",
      stack: "Google Ads · Google Analytics · Conversion tracking",
    },
    {
      name: "MyTech — corporate website",
      role: "Solo — design, markup, styling and interaction",
      desc: "Twelve-page corporate site hand-coded with no framework and no build step, built on a CSS design-token system with reusable header and footer partials. Front end complete; backend still to come.",
      stack: "HTML · CSS · JavaScript · Intersection Observer · localStorage",
    },
    {
      name: "Scientific calculator",
      role: "Team of 2 — console interface, Swing interface, exception layer",
      desc: "Twenty-seven operations behind two independent interfaces, with a dedicated exception type exposing a named factory per mathematical failure so every edge case reports itself precisely.",
      stack: "Java 17 · Swing · FlatLaf · JUnit",
    },
  ],

  languages: ["English — fluent", "French — fluent"],
  portfolioNote: "Full case studies:",
};

const fr = {
  lang: "fr",
  contact,
  location: "Yaoundé, Cameroun",
  title: "Développeur web · Publicité digitale & SEO technique",
  profile:
    "Développeur web, formé en informatique à l'Université de Yaoundé I et autodidacte pour les langages du web, le SEO technique et la publicité digitale. Je construis le produit et j'y amène du monde — des sites multi-pages codés à la main aux applications full-stack, jusqu'au référencement payant et au SEO qui les rendent trouvables.",

  sections: {
    education: "Formation",
    certifications: "Certifications",
    skills: "Compétences",
    projects: "Projets sélectionnés",
    languages: "Langues",
  },

  education: [
    {
      title: "Licence en informatique",
      org: "Université de Yaoundé I — Yaoundé, Cameroun",
      meta: "Attendue en 2026",
      note: "La première année était construite autour du C. Les langages du web, Java et Python, je les ai appris par moi-même en parallèle du cursus.",
    },
    {
      title: "Formation autodidacte",
      org: "W3Schools · MDN Web Docs · Google Skillshop · cours en ligne",
      meta: "En continu",
      note: "Les langages front-end, puis tout le volet publicité et SEO technique, appris par la documentation, des cours structurés et les parcours de certification.",
    },
  ],

  certifications: [
    { name: "Certification Google Ads Search", org: "Google" },
    { name: "Certification Google Ads Measurement", org: "Google" },
    { name: "Certification Google Analytics", org: "Google" },
  ],

  skillGroups: [
    {
      title: "Développement",
      items:
        "HTML · CSS · JavaScript · TypeScript · Python · Java · React · Astro · WordPress · Git",
    },
    {
      title: "Marketing",
      items:
        "Google Ads · Meta Ads · Google Analytics · Tag Manager · SEO technique · Suivi des conversions",
    },
    {
      title: "Sécurité & outillage",
      items: "Linux · Surveillance d'intégrité des fichiers · Revue de code · Outils IA",
    },
  ],

  projects: [
    {
      name: "Afiri — plateforme étudiants et entreprises",
      role: "Équipe de 21 · responsable business, finance, marché et RH ; pôle back-end ; tableau de bord d'administration",
      desc: "Plateforme biface reliant les étudiants camerounais aux stages et aux employeurs locaux : offres filtrées, mini-CV partageable et quiz d'orientation calé sur les filières camerounaises. J'ai construit le tableau de bord analytique de bout en bout — cinq compteurs d'indicateurs en direct, deux visualisations Chart.js et un rafraîchissement toutes les 30 secondes, avec vérification du rôle sur chaque endpoint.",
      stack: "Python · FastAPI · SQLAlchemy · PostgreSQL · JWT · Chart.js · Render",
    },
    {
      name: "Simulateur de plans de transport CAMRAIL",
      role: "Seul — modélisation, algorithmes, API et interface",
      desc: "Simulateur de plan de transport ferroviaire pour le réseau à voie unique camerounais. Détecte automatiquement huit types de conflits, calcule un plan sans conflit par coloration de graphe, et recalcule l'horaire complet lorsqu'un incident survient.",
      stack: "Python · FastAPI · Welsh–Powell & DSATUR · Leaflet · JavaScript",
    },
    {
      name: "Assistant IA d'entreprise",
      role: "Seul — architecture, implémentation, tests et CI",
      desc: "Backend FastAPI multi-tenant pour un assistant documentaire digne de confiance : une collection vectorielle par organisation, donc une isolation structurelle, plus une couche de gouvernance (journaux d'audit, quotas, limitation de débit, garde-fous anti-injection).",
      stack: "Python · FastAPI · PostgreSQL · ChromaDB · Docker · pytest · GitHub Actions",
    },
    {
      name: "Jackbeat — archive de la musique camerounaise",
      role: "Seul — modèle de données, application, modération et tableau de bord",
      desc: "Archive participative couvrant 14 genres, 11 régions et 11 langues, avec modération de chaque soumission publique et une couche d'analyse : carte, graphiques et export de rapport PDF.",
      stack: "Python · Flask · PostgreSQL · pandas · Plotly · ReportLab · Render",
    },
    {
      name: "Référencement payant avec 8,48 $ de budget",
      role: "Seul — stratégie, mise en place, mesure",
      desc: "Une campagne Google Ads menée de bout en bout sur un budget volontairement minime : stratégie de mots clés, groupes d'annonces, suivi des conversions et reporting montrant ce que la dépense a réellement produit.",
      stack: "Google Ads · Google Analytics · Suivi des conversions",
    },
    {
      name: "MyTech — site vitrine d'entreprise",
      role: "Seul — design, balisage, styles et interactions",
      desc: "Site vitrine de douze pages codé à la main, sans framework ni étape de build, bâti sur un système de tokens CSS avec en-tête et pied de page réutilisables. Interface terminée ; backend à venir.",
      stack: "HTML · CSS · JavaScript · Intersection Observer · localStorage",
    },
    {
      name: "Calculatrice scientifique",
      role: "Équipe de 2 — interface console, interface Swing, couche d'exceptions",
      desc: "Vingt-sept opérations derrière deux interfaces indépendantes, avec un type d'exception dédié exposant une fabrique nommée par échec mathématique, si bien que chaque cas limite se signale précisément.",
      stack: "Java 17 · Swing · FlatLaf · JUnit",
    },
  ],

  languages: ["Anglais — courant", "Français — courant"],
  portfolioNote: "Études de cas complètes :",
};

module.exports = { en, fr };

import type { Locale } from "@/config/site";

/**
 * The About page narrative.
 *
 * DRAFT — assembled from the CV and project folders. Pascal should correct the
 * facts and tone here; it's deliberately kept in one file so rewriting it never
 * means touching a component.
 */
type AboutCopy = {
  lead: string;
  paragraphs: string[];
  /** Short labelled facts shown beside the story. */
  facts: { label: string; value: string }[];
  skillsTitle: string;
  skillGroups: { title: string; items: string[] }[];
  languagesTitle: string;
  languages: string[];
};

export const aboutCopy: Record<Locale, AboutCopy> = {
  en: {
    lead: "Self-taught, based in Yaoundé, and equally at home in a codebase and an ad account.",
    paragraphs: [
      "I started with documentation and a stubborn habit of rebuilding things until they worked. No bootcamp, no computer science degree — just W3Schools, the MDN docs, and a lot of evenings. The first real thing I shipped was MyTech, a twelve-page corporate site I built end to end to prove to myself I could.",
      "What I found along the way is that building the thing is only half the job. A beautiful site nobody visits is a hobby, not a business. So I went and learned the other half — Google Ads, Meta Ads, and the technical SEO that decides whether a page is even eligible to rank. I hold certifications across Google Search, Display, Measurement, Analytics and Tag Manager.",
      "More recently I've been drawn to the quieter discipline underneath both: security. Writing software that expects to be attacked, and reviewing software that already has been. It's the same instinct as the rest of my work — understand the whole system, not just the part that's fun.",
      "I work in English and French, with clients in Cameroon and abroad. If you're building something and want one person who can code it, secure it and bring people to it, that's the gap I fill.",
    ],
    facts: [
      { label: "Based in", value: "Yaoundé, Cameroon" },
      { label: "Working in", value: "English & French" },
      { label: "Started", value: "Self-taught, 2024" },
    ],
    skillsTitle: "What I work with",
    skillGroups: [
      {
        title: "Development",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Astro", "WordPress", "Git"],
      },
      {
        title: "Marketing",
        items: [
          "Google Ads",
          "Meta Ads",
          "Google Analytics",
          "Tag Manager",
          "Technical SEO",
          "Conversion tracking",
        ],
      },
      {
        title: "Security & tooling",
        items: ["Python", "Linux", "File integrity monitoring", "Code review", "AI tooling"],
      },
    ],
    languagesTitle: "Languages",
    languages: ["English — fluent", "French — fluent"],
  },

  fr: {
    lead: "Autodidacte, basé à Yaoundé, aussi à l'aise dans un dépôt de code que dans un compte publicitaire.",
    paragraphs: [
      "J'ai commencé avec la documentation et l'habitude têtue de reconstruire les choses jusqu'à ce qu'elles fonctionnent. Pas de bootcamp, pas de diplôme en informatique — juste W3Schools, la documentation MDN, et beaucoup de soirées. Le premier vrai projet que j'ai livré est MyTech, un site d'entreprise de douze pages construit de bout en bout pour me prouver que j'en étais capable.",
      "Ce que j'ai découvert en chemin, c'est que construire n'est que la moitié du travail. Un beau site que personne ne visite est un loisir, pas une activité. Je suis donc allé apprendre l'autre moitié — Google Ads, Meta Ads, et le SEO technique qui détermine si une page peut seulement prétendre se positionner. Je suis certifié en Google Search, Display, Measurement, Analytics et Tag Manager.",
      "Plus récemment, j'ai été attiré par la discipline plus discrète qui sous-tend les deux : la sécurité. Écrire des logiciels qui s'attendent à être attaqués, et auditer ceux qui l'ont déjà été. C'est le même réflexe que dans le reste de mon travail — comprendre le système entier, pas seulement la partie amusante.",
      "Je travaille en anglais et en français, avec des clients au Cameroun et à l'étranger. Si vous construisez quelque chose et cherchez une personne capable de le coder, de le sécuriser et d'y amener du public, c'est exactement ce que je fais.",
    ],
    facts: [
      { label: "Basé à", value: "Yaoundé, Cameroun" },
      { label: "Langues de travail", value: "Anglais & français" },
      { label: "Depuis", value: "Autodidacte, 2024" },
    ],
    skillsTitle: "Ce que j'utilise",
    skillGroups: [
      {
        title: "Développement",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Astro", "WordPress", "Git"],
      },
      {
        title: "Marketing",
        items: [
          "Google Ads",
          "Meta Ads",
          "Google Analytics",
          "Tag Manager",
          "SEO technique",
          "Suivi des conversions",
        ],
      },
      {
        title: "Sécurité & outillage",
        items: [
          "Python",
          "Linux",
          "Surveillance d'intégrité des fichiers",
          "Revue de code",
          "Outils IA",
        ],
      },
    ],
    languagesTitle: "Langues",
    languages: ["Anglais — courant", "Français — courant"],
  },
};

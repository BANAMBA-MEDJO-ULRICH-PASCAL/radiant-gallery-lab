import type { Locale } from "@/config/site";

/**
 * The About page narrative.
 *
 * Corrected by Pascal on 2026-10-09: the earlier draft said "no computer
 * science degree", which was wrong — the degree is being completed in 2026.
 * The self-taught thread is real but belongs to the web languages the syllabus
 * skipped and to the whole marketing side, not to the training as a whole.
 *
 * The copy is deliberately written so it stays true after graduation — no
 * "finishing this year" phrasing that would need revisiting. The only dated
 * value is the year on the Education fact, which reads correctly either way.
 *
 * Kept in one file so rewriting it never means touching a component.
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
    lead: "Computer Science Bachelor’s candidate combining a strong academic foundation with self-taught expertise in modern web languages, technical SEO, and digital advertising to build high-performance, traffic-driving web solutions.",
    paragraphs: [
      "I came at this from two directions at once. One is formal: a computer science degree, and the fundamentals that come with it — the first year was built around C. But the languages I actually wanted to build with weren't on the syllabus, so I went and found them myself: W3Schools, the MDN docs, YouTube, and a stubborn habit of rebuilding things until they worked.",
      "That habit never went away. University gives me the theory and the discipline; most of what I use day to day I still go and research on my own, because no curriculum covers everything. The first real thing I shipped was MyTech, a twelve-page corporate site I built end to end to prove to myself I could.",
      "What I found along the way is that building the thing is only half the job. A beautiful site nobody visits is a hobby, not a business. So I went and learned the other half — Google Ads, Meta Ads, and the technical SEO that decides whether a page is even eligible to rank. That side is entirely self-taught, through online courses, Skillshop and Google's own certification tracks: I'm certified in Google Ads Search, Google Ads Measurement and Google Analytics.",
      "More recently I've been drawn to the quieter discipline underneath both: security. Writing software that expects to be attacked, and reviewing software that already has been. It's the same instinct as the rest of my work — understand the whole system, not just the part that's fun.",
      "I work in English and French, with clients in Cameroon and abroad. If you're building something and want one person who can code it, secure it and bring people to it, that's the gap I fill.",
    ],
    facts: [
      { label: "Based in", value: "Yaoundé, Cameroon" },
      { label: "Working in", value: "English & French" },
      { label: "Education", value: "Computer science degree, 2026" },
      { label: "Experience", value: "2+ years across development, ads and SEO" },
    ],
    skillsTitle: "What I work with",
    skillGroups: [
      {
        title: "Development",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "React",
          "Astro",
          "WordPress",
          "Git",
        ],
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
        items: ["Linux", "File integrity monitoring", "Code review", "AI tooling"],
      },
    ],
    languagesTitle: "Languages",
    languages: ["English — fluent", "French — fluent"],
  },

  fr: {
    lead: "Formé en informatique à Yaoundé, autodidacte pour le reste — les langages du web que mon cursus n'abordait pas, et la publicité et le SEO technique qui amènent du monde à ce que je construis.",
    paragraphs: [
      "Je suis venu à ce métier par deux chemins à la fois. L'un est formel : un diplôme en informatique, et les fondamentaux qui vont avec — la première année était construite autour du C. Mais les langages avec lesquels je voulais réellement construire n'étaient pas au programme : je suis donc allé les chercher moi-même, par W3Schools, la documentation MDN, YouTube, et l'habitude têtue de reconstruire les choses jusqu'à ce qu'elles fonctionnent.",
      "Cette habitude ne m'a jamais quitté. L'université me donne la théorie et la rigueur ; l'essentiel de ce que j'utilise au quotidien, je continue d'aller le chercher par moi-même, parce qu'aucun cursus ne couvre tout. Le premier vrai projet que j'ai livré est MyTech, un site d'entreprise de douze pages construit de bout en bout pour me prouver que j'en étais capable.",
      "Ce que j'ai découvert en chemin, c'est que construire n'est que la moitié du travail. Un beau site que personne ne visite est un loisir, pas une activité. Je suis donc allé apprendre l'autre moitié — Google Ads, Meta Ads, et le SEO technique qui détermine si une page peut seulement prétendre se positionner. Ce versant-là est entièrement autodidacte, par des cours en ligne, Skillshop et les parcours de certification de Google : je suis certifié Google Ads Search, Google Ads Measurement et Google Analytics.",
      "Plus récemment, j'ai été attiré par la discipline plus discrète qui sous-tend les deux : la sécurité. Écrire des logiciels qui s'attendent à être attaqués, et auditer ceux qui l'ont déjà été. C'est le même réflexe que dans le reste de mon travail — comprendre le système entier, pas seulement la partie amusante.",
      "Je travaille en anglais et en français, avec des clients au Cameroun et à l'étranger. Si vous construisez quelque chose et cherchez une personne capable de le coder, de le sécuriser et d'y amener du public, c'est exactement ce que je fais.",
    ],
    facts: [
      { label: "Basé à", value: "Yaoundé, Cameroun" },
      { label: "Langues de travail", value: "Anglais & français" },
      { label: "Formation", value: "Diplôme en informatique, 2026" },
      { label: "Expérience", value: "2+ ans en développement, publicité et SEO" },
    ],
    skillsTitle: "Ce que j'utilise",
    skillGroups: [
      {
        title: "Développement",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "React",
          "Astro",
          "WordPress",
          "Git",
        ],
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

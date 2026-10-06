import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import { PILLARS } from "@/config/site";

const pillarIds = PILLARS.map((p) => p.id) as [string, ...string[]];

/**
 * Project case studies.
 *
 * One file per project per language, laid out as:
 *   src/content/projects/en/sentinel.mdx
 *   src/content/projects/fr/sentinel.mdx
 *
 * The filename (minus the language folder) is the slug, so both languages share
 * a URL stem and the language switcher can move between them cleanly.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Which capability this demonstrates. Drives filtering and colour-coding. */
      pillar: z.enum(pillarIds),
      /** Extra pillars this project also touches, shown as secondary tags. */
      alsoPillars: z.array(z.enum(pillarIds)).default([]),

      /** One or two sentences, used on cards and in meta descriptions. */
      summary: z.string().max(300),

      /**
       * Honest status. `in-progress` renders a "Still to come" block from
       * `planned` rather than hiding the project — unfinished work still
       * demonstrates skill, as long as it's labelled.
       */
      status: z.enum(["shipped", "in-progress", "ongoing"]).default("shipped"),
      planned: z.array(z.string()).default([]),

      role: z.string().optional(),
      client: z.string().optional(),
      /** Free text, e.g. "2026" or "Mar – Aug 2026". */
      period: z.string().optional(),
      /** Used for sorting; the displayed date is `period`. */
      date: z.coerce.date(),

      /** Was this solo or team work? Shown on the case study. */
      teamSize: z.number().int().positive().optional(),
      contribution: z.string().optional(),

      stack: z.array(z.string()).default([]),
      results: z.array(z.string()).default([]),

      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),

      links: z
        .object({
          live: z.string().url().optional(),
          source: z.string().url().optional(),
          caseStudyPdf: z.string().optional(),
        })
        .default({}),

      featured: z.boolean().default(false),
      /** Lower sorts first within a pillar. */
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

/** Journal articles — the SEO credibility surface. */
const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(300),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

/**
 * Certifications. Language-neutral facts (issuer, dates, credential URL) with
 * translated name/description, so one entry serves both languages.
 */
const certifications = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{json,yaml,yml}", base: "./src/content/certifications" }),
  schema: () =>
    z.object({
      name: z.object({ en: z.string(), fr: z.string() }),
      description: z.object({ en: z.string(), fr: z.string() }).optional(),
      issuer: z.string(),
      /** Skill area, used to group the page into sections. */
      area: z.enum(["ads", "analytics", "seo", "security", "development", "other"]),
      issued: z.coerce.date().optional(),
      expires: z.coerce.date().optional(),
      credentialUrl: z.string().url().optional(),
      order: z.number().default(100),
    }),
});

export const collections = { projects, posts, certifications };

/**
 * Single source of truth for identity, contact details and social links.
 *
 * Anything here that is language-independent (a name, an email, a URL) lives in
 * this file. Translated copy lives in `src/i18n/ui.ts`; project and article text
 * lives in the content collections under `src/content/`.
 */

/** Canonical origin. Update once a custom domain is pointed at the site. */
export const SITE_URL = "https://ulrich-pascal.onrender.com";

export const profile = {
  name: "Ulrich Pascal",
  /** Full legal name, used for structured data and the CV. */
  legalName: "Banamba Medjo Ulrich Pascal",
  email: "glnet785@gmail.com",
  phone: "+237683499422",
  phoneDisplay: "+237 683 499 422",
  location: {
    city: "Yaoundé",
    country: "Cameroon",
    countryCode: "CM",
  },
} as const;

/**
 * External profiles. `href: null` hides the link until a real URL is supplied,
 * so we never ship a dead `#` anchor to a visitor.
 */
export const socials = [
  { label: "GitHub", href: "https://github.com/BANAMBA-MEDJO-ULRICH-PASCAL" },
  { label: "LinkedIn", href: null as string | null },
  { label: "WhatsApp", href: `https://wa.me/${profile.phone.replace(/\D/g, "")}` },
] as const;

/**
 * The six capability pillars, grouped into the two "crafts" the homepage shows.
 * `accent` maps to a palette token so each pillar is colour-coded consistently
 * across cards, filters and case studies.
 */
export const PILLARS = [
  { id: "web-development", craft: "build", accent: "terracotta" },
  { id: "web-apps", craft: "build", accent: "moss" },
  { id: "security", craft: "build", accent: "bark" },
  { id: "ai-tools", craft: "build", accent: "sage" },
  { id: "ads", craft: "market", accent: "amber" },
  { id: "seo", craft: "market", accent: "terracotta" },
] as const;

export type PillarId = (typeof PILLARS)[number]["id"];
export type Craft = (typeof PILLARS)[number]["craft"];

export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

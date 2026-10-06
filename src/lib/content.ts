import { getCollection, type CollectionEntry } from "astro:content";
import { isLocale } from "@/i18n/utils";
import type { Locale } from "@/config/site";

/**
 * Collection ids look like `en/sentinel`, because the glob loader is rooted at
 * the collection folder and each language has its own subfolder. These helpers
 * split that apart so the rest of the app never parses ids by hand.
 */
export function splitId(id: string): { lang: string; slug: string } {
  const [lang, ...rest] = id.split("/");
  return { lang, slug: rest.join("/") };
}

/** The URL slug for an entry, with the language segment stripped. */
export function entrySlug(id: string): string {
  return splitId(id).slug;
}

const isPublished = (data: { draft?: boolean }) =>
  import.meta.env.DEV || data.draft !== true;

/**
 * Projects for one language, newest and featured first.
 *
 * Drafts are visible while developing and excluded from production builds, so
 * half-written case studies can be previewed without risk of publishing them.
 */
export async function getProjects(locale: Locale): Promise<CollectionEntry<"projects">[]> {
  const entries = await getCollection("projects", ({ id, data }) => {
    const { lang } = splitId(id);
    return lang === locale && isPublished(data);
  });

  return entries.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

export async function getFeaturedProjects(
  locale: Locale,
  limit = 2,
): Promise<CollectionEntry<"projects">[]> {
  const all = await getProjects(locale);
  const featured = all.filter((p) => p.data.featured);
  // Fall back to the most recent projects so the homepage is never empty just
  // because nothing has been flagged as featured yet.
  return (featured.length > 0 ? featured : all).slice(0, limit);
}

export async function getPosts(locale: Locale): Promise<CollectionEntry<"posts">[]> {
  const entries = await getCollection("posts", ({ id, data }) => {
    const { lang } = splitId(id);
    return lang === locale && isPublished(data);
  });

  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getCertifications(): Promise<CollectionEntry<"certifications">[]> {
  const entries = await getCollection("certifications");
  return entries.sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    const at = a.data.issued?.getTime() ?? 0;
    const bt = b.data.issued?.getTime() ?? 0;
    return bt - at;
  });
}

/**
 * Builds `getStaticPaths` entries for every localised content route, skipping
 * files whose folder isn't a known language (a typo like `src/content/posts/de/`
 * would otherwise generate a broken route).
 */
export function toLocalisedPaths<C extends { id: string }>(entries: C[]) {
  return entries.flatMap((entry) => {
    const { lang, slug } = splitId(entry.id);
    if (!isLocale(lang) || !slug) return [];
    return [{ params: { lang, slug }, props: { entry } }];
  });
}

import { ui, type UIKey } from "./ui";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/config/site";

/** Narrowing guard for values coming out of `Astro.params`, which are strings. */
export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/**
 * Reads the locale from a URL path (`/fr/work/sentinel` → `fr`).
 * Falls back to the default locale rather than throwing, so a malformed URL
 * degrades to English instead of a 500.
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split("/");
  return isLocale(maybeLocale) ? maybeLocale : DEFAULT_LOCALE;
}

/**
 * Returns a translation function bound to one locale.
 *
 *   const t = useTranslations(lang);
 *   t("nav.about")
 */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[DEFAULT_LOCALE][key];
  };
}

/**
 * Builds a locale-prefixed, absolute-from-root path.
 *
 *   localePath("fr", "work")       → "/fr/work/"
 *   localePath("en", "/work/abc")  → "/en/work/abc/"
 *   localePath("en")               → "/en/"
 *
 * Trailing slashes are enforced to match Astro's `build.format: "directory"`,
 * which avoids a redirect hop on every internal link.
 */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

/**
 * Given the current URL, returns the equivalent path in the other language —
 * used by the language switcher so a visitor reading a French case study lands
 * on the English version of that same case study, not back on the homepage.
 */
export function alternatePath(url: URL, target: Locale): string {
  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = target;
    return `/${segments.join("/")}/`.replace(/\/{2,}/g, "/");
  }
  return localePath(target);
}

/** The other locale. With exactly two languages this is unambiguous. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "fr" : "en";
}

/** Locale tag suitable for `<html lang>` and `hreflang`. */
export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  fr: "fr",
};

/** Formats a date in the reader's language. */
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/** Static paths helper — every localised route maps over this. */
export function localeStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

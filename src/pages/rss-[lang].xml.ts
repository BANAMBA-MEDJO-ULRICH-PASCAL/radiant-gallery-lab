import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { LOCALES, SITE_URL, profile, type Locale } from "@/config/site";
import { getPosts, entrySlug } from "@/lib/content";
import { useTranslations, localePath } from "@/i18n/utils";

export function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Locale;
  const t = useTranslations(lang);
  const posts = await getPosts(lang);

  return rss({
    title: `${profile.name} — ${t("blog.title")}`,
    description: t("blog.lead"),
    site: context.site ?? SITE_URL,
    customData: `<language>${lang}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: localePath(lang, `blog/${entrySlug(post.id)}`),
    })),
  });
}

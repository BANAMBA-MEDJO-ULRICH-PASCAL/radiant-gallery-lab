import type { APIContext } from "astro";
import { SITE_URL } from "@/config/site";

/**
 * Generated rather than kept as a static file, so the sitemap URL always
 * matches SITE_URL and can never drift out of date.
 */
export function GET(context: APIContext) {
  const origin = context.site?.href.replace(/\/$/, "") ?? SITE_URL;

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${origin}/sitemap-index.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

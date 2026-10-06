// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { SITE_URL } from "./src/config/site.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  // Fully static output: every page is pre-rendered to HTML at build time so it
  // can be served from Render's free Static Site tier (no server, no cold start).
  output: "static",

  // Both languages get an explicit prefix (/en/..., /fr/...) so each has its own
  // indexable URL and we can emit correct hreflang pairs. `/` redirects to /en/.
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", fr: "fr" },
      },
    }),
  ],

  image: {
    // Generated at build time; AVIF/WebP with responsive srcsets.
    responsiveStyles: true,
    layout: "constrained",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // Emit `/about/index.html` rather than `/about.html` so URLs stay clean
    // on a plain static file host.
    format: "directory",
  },
});

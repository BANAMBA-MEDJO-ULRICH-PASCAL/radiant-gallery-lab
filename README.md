# Ulrich Pascal — Portfolio

Bilingual (EN/FR) portfolio covering web development, web applications, security
programs, AI tools, Google/Meta Ads and technical SEO.

Built with [Astro](https://astro.build) and Tailwind CSS v4, output as fully
static HTML and deployed to Render's free Static Site tier.

The visual design — the "Warm Letterpress Journal" palette, Fraunces/Karla
pairing and animations — originated in a [Lovable](https://lovable.dev) build and
was carried over intact when the stack moved to Astro for static hosting,
built-in bilingual routing and content collections.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check, then build to ./dist
npm run preview  # serve ./dist locally
```

Node 22 is expected (`.nvmrc`); a transitive dependency requires it.

Copy `.env.example` to `.env` and add a [Web3Forms](https://web3forms.com) key to
enable the contact form. Without it the form is replaced by direct contact
details rather than failing silently.

## How it's organised

| Path | What lives there |
| --- | --- |
| `src/config/site.ts` | Name, email, socials, the six capability pillars |
| `src/i18n/ui.ts` | Every translated interface string |
| `src/data/` | Long-form Services and About copy, both languages |
| `src/content/` | Project case studies, journal posts, certifications |
| `src/styles/global.css` | The "Warm Letterpress Journal" design system |
| `render.yaml` | Deployment, security headers, caching |

### Adding a project

Create the same filename under both languages:

```text
src/content/projects/en/my-project.mdx
src/content/projects/fr/my-project.mdx
```

The shared filename is the URL slug, which is what lets the language switcher
move between the two versions of one case study. Frontmatter is validated by
`src/content.config.ts` — the build fails on a missing or misspelled field
rather than shipping a broken page.

Set `status: in-progress` and list `planned:` items for unfinished work; the case
study then renders an honest "Still to come" section instead of hiding it.

Drafts (`draft: true`) are visible in `npm run dev` and excluded from builds.

### Adding a translation

`src/i18n/ui.ts` enforces completeness at the type level: if an English key has
no French counterpart, `npm run build` fails rather than silently shipping an
English string onto a French page.

## Design system

Colours are OKLCH custom properties on `:root`, redefined under `.dark`. Change a
token in `src/styles/global.css` and it propagates everywhere. Fonts (Fraunces
display, Karla body) are self-hosted via Fontsource — no third-party request, and
the Content-Security-Policy stays tight as a result.

All motion is gated behind `prefers-reduced-motion`.

## Security

Headers are set in `render.yaml`: CSP, HSTS with preload, `nosniff`,
`Referrer-Policy`, `Permissions-Policy`, `frame-ancestors 'none'`.

The contact form posts directly to Web3Forms — there is no backend and no secret
in the repository. The access key is public by design. Spam is filtered with a
honeypot field and a submission-timing check.

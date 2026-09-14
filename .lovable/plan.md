# Portfolio Build Plan — "Warm Letterpress Journal"

A multi-page personal portfolio for a software developer + digital advertising agent, in the warm, story-driven direction you selected. TanStack Start + Tailwind v4, several routes sharing one warm layout.

## What you'll see

A shared warm layout (sticky nav + footer) wrapping distinct routes, cream paper background with soft blurred teal light behind frosted glass panels:

- **`/` (Home)** — Hero (name, one-line identity "software developer × digital advertiser", warm intro, two CTAs) + a short "What I do" teaser + a 2-project highlight strip + CTA to contact
- **`/about`** — portrait photo beside a personal, note-style bio (not a résumé), with trait chips (Curious, Detail-obsessed, Kind) + a fuller story
- **`/work`** — all 4 project cards with image, title, short story, tech tags, and "View case" links
- **`/services`** — two side-by-side cards: Software development (AI tools, security programs, websites, frontend/full-stack, React/TS/Node, accessibility, APIs) and Digital advertising (paid social/search, email flows, warm copy, analytics)
- **`/pricing`** — warm pricing cards for both service lines (Software development packages + Digital advertising packages), each with tier name, short description, price, feature list, and a CTA to contact
- **`/contact`** — a contact form (name, email, message) on the left + direct email link and social buttons (Instagram, LinkedIn, GitHub) on the right

The warm "caustic" light blobs and frosted glass motif carry across every page for consistency. The nav links to each route; the footer repeats name + socials + "Made slowly, with care."

## Design tokens (carried from the chosen direction)

- **Palette:** paper `#F4EBDC`, cream `#FBF6EC`, terracotta `#C16A4A`, amber `#D99A5B`, sage `#8A9480`, moss `#5C6B52`, brown `#3A2E24`, bark `#5A4A3B`
- **Type:** Fraunces (display/headings, incl. italic accents) + Karla (body) — loaded via `<link>` in `__root.tsx`
- **Motion:** gentle fade-up on hero, soft floaty/blur "caustic" light blobs, hover lifts on cards
- Registered as semantic tokens in `src/styles.css` (`@theme`) so all color utilities resolve in both light/dark

## Images (generated, replacing the placeholders)

Five images to generate into `src/assets/`, each from the direction's placeholder prompts:
- Portrait (About) — warm natural portrait, soft window light, terracotta sweater
- Brew & Bloom — cozy coffee subscription app interface
- Stillwater — calm meditation app onboarding, sage/cream
- The Letter Series — handwritten copywriting workspace, warm lamp
- Petal Ledger — gentle bookkeeping dashboard on cream

These are illustrative placeholders — you can swap in your real portrait and project screenshots anytime.

## Contact form handling

The form needs a backend to actually deliver messages. Two options:
- **A. Lovable Cloud (recommended):** enable Cloud, add a server function that stores the message in a `messages` table and/or sends you a notification email. Fully working, no external account.
- **B. Mailto-only (no backend):** the form opens the visitor's email client pre-filled with their message. Simpler, but depends on the visitor having a mail client.

I'll go with **A** unless you'd prefer B. If A, the first build step is enabling Lovable Cloud.

## Personalization

The direction uses a sample name "Mara Ellison" and sample projects. I'll keep them as sensible defaults but flag them clearly so you can swap in your real name, bio, email, social links, and projects. Tell me your details and I'll wire them in.

## Files I'll touch

- `src/routes/index.tsx` — Home page (rewrite from placeholder)
- `src/routes/about.tsx` — About page
- `src/routes/work.tsx` — Work page
- `src/routes/services.tsx` — Services page
- `src/routes/pricing.tsx` — Pricing page
- `src/routes/contact.tsx` — Contact page
- `src/routes/__root.tsx` — shared warm layout (nav + footer), font `<link>` tags, root head metadata
- `src/components/` — shared bits (Nav, Footer, ProjectCard, BackgroundOrbs) reused across pages
- `src/styles.css` — add warm palette tokens + font tokens
- `src/assets/*` — generated images
- (If option A) `src/lib/contact.functions.ts` + a `messages` migration + Cloud enable

## Out of scope (per your selections)

No testimonials, no blog, no "trusted by" logos.

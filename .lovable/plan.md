# Portfolio Build Plan — "Warm Letterpress Journal"

A single-page personal portfolio for a software developer + digital advertising agent, in the warm, story-driven direction you selected. TanStack Start + Tailwind v4, one scrolling page at `/`.

## What you'll see

One warm-toned page, cream paper background with soft blurred teal light behind frosted glass panels, scrolling through five sections:

1. **Hero** — name, one-line identity ("software developer × digital advertiser"), warm intro, two CTAs (Start a conversation / See the work)
2. **About** — portrait photo beside a personal, note-style bio (not a résumé), with trait chips (Curious, Detail-obsessed, Kind)
3. **Selected work** — 4 project cards with image, title, short story, tech tags, and a "View case" link
4. **What I do** — two side-by-side cards: Software development (frontend/full-stack, React/TS/Node, accessibility, APIs) and Digital advertising (paid social/search, email flows, warm copy, analytics)
5. **Contact** — a contact form (name, email, message) on the left + direct email link and social buttons (Instagram, LinkedIn, GitHub) on the right
6. **Footer** — name, socials, "Made slowly, with care."

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

- `src/routes/index.tsx` — the whole page (rewrite from placeholder)
- `src/styles.css` — add warm palette tokens + font tokens
- `src/routes/__root.tsx` — font `<link>` tags + head metadata (title/description/og)
- `src/assets/*` — generated images
- (If option A) `src/lib/contact.functions.ts` + a `messages` migration + Cloud enable

## Out of scope (per your selections)

No testimonials, no pricing, no blog, no "trusted by" logos. Single page only.

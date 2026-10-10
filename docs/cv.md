# The CV

The CV exists in four files, generated from one source of facts:

| File | Where it lives | Purpose |
| --- | --- | --- |
| `cv-en.pdf` / `cv-fr.pdf` | `public/` | Served at `/cv-en.pdf` and `/cv-fr.pdf`. The **Download CV** button on the About page links to the one matching the page's language. |
| `cv-en.docx` / `cv-fr.docx` | not in the repo | The editable copies, for when an application asks for Word. Generated on demand. |

## Why it's generated rather than hand-written

The CV repeats what the site already says — the profile, the education, the
certifications, the skills and the projects. Keeping it as a hand-edited Word
file is how it fell out of date before: by late 2026 the old `CV.docx` still
showed an unused email address, claimed there was no computer science degree,
and listed MyTech as the only project.

Everything the CV says now lives in `tools/cv/cv-data.js`, which was written
from `src/config/site.ts`, `src/data/about.ts`, the certifications collection
and the project case studies. **Correcting the About page means updating
`cv-data.js` and regenerating**, otherwise the two drift apart again.

## Regenerating

```bash
cd tools/cv
npm install          # first time only; deps are not part of the site build
npm run build        # PDFs into public/, DOCX into tools/cv/build/
```

Or individually:

```bash
node build-pdf.js  ../../public      # cv-en.pdf, cv-fr.pdf
node build-docx.js ./build           # cv-en.docx, cv-fr.docx
```

`tools/cv` has its own `package.json` deliberately: `pdfkit` and `docx` are
build-time tools for one artefact, and adding them to the site's dependencies
would slow every Render deploy for no reason.

## Design

Both formats follow the site's identity. The palette is the same OKLCH set from
`src/styles/global.css`, converted to sRGB in `build-pdf.js` so the terracotta
rules and headings match the site exactly.

Fraunces and Karla could not be used: Fontsource ships them as `.woff2` only,
pdfkit cannot embed `woff2`, and the upstream `.ttf` files are variable fonts,
which pdfkit fails to subset. The documents use **Georgia** for display and
**Calibri** for body instead — a warm serif and a clean sans in the same spirit,
both installed with Windows and Office, so the `.docx` renders as intended on a
recruiter's machine and the `.pdf` embeds and subsets them cleanly.

`build-pdf.js` checks the fonts exist before writing anything and exits with a
message rather than silently substituting them. On a machine without Georgia or
Calibri, point the `F` map at equivalent `.ttf` files.

## Before sending it anywhere

The three Google certifications are marked `needsRenewal: true` in
`src/content/certifications/`. Google Ads credentials lapse a year after
completion. The CV lists them without dates, which is normal practice, but
renewing them before an application is worth the hour.

/** Builds cv-en.pdf and cv-fr.pdf in the portfolio's visual identity. */
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const data = require("./cv-data");

/* ---- palette: the site's OKLCH tokens, converted to sRGB hex ------------- */
function oklchToHex(L, C, hDeg) {
  const h = (hDeg * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3,
    m = m_ ** 3,
    s = s_ ** 3;
  let r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let bl = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  const enc = (x) => {
    x = x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(Math.max(x, 0), 1 / 2.4) - 0.055;
    return Math.round(Math.min(1, Math.max(0, x)) * 255);
  };
  return "#" + [enc(r), enc(g), enc(bl)].map((v) => v.toString(16).padStart(2, "0")).join("");
}

const C = {
  paper: oklchToHex(0.93, 0.025, 75),
  cream: oklchToHex(0.96, 0.018, 80),
  terracotta: oklchToHex(0.58, 0.13, 38),
  amber: oklchToHex(0.76, 0.11, 65),
  brown: oklchToHex(0.31, 0.03, 50),
  bark: oklchToHex(0.44, 0.035, 50),
};

const F = {
  display: "C:/Windows/Fonts/georgiab.ttf",
  displayReg: "C:/Windows/Fonts/georgia.ttf",
  displayItal: "C:/Windows/Fonts/georgiai.ttf",
  body: "C:/Windows/Fonts/calibri.ttf",
  bodyBold: "C:/Windows/Fonts/calibrib.ttf",
  bodyItal: "C:/Windows/Fonts/calibrii.ttf",
};

// Fail loudly rather than emitting a PDF with silently substituted fonts.
for (const [key, fontPath] of Object.entries(F)) {
  if (!fs.existsSync(fontPath)) {
    console.error(
      [
        `Missing font for "${key}": ${fontPath}`,
        "This generator embeds Georgia and Calibri, which ship with Windows and Office.",
        "On another OS, point the F map at equivalent .ttf files before running.",
      ].join("\n"),
    );
    process.exit(1);
  }
}

const PAGE = { w: 595.28, h: 841.89 };
const M = { l: 48, r: 48, t: 46, b: 44 };
const W = PAGE.w - M.l - M.r;

function build(cv, outPath) {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: M.t, bottom: M.b, left: M.l, right: M.r },
    bufferPages: true,
    info: {
      Title: `${cv.contact.name} — CV`,
      Author: cv.contact.name,
      Subject: cv.title,
      Keywords:
        "web developer, Google Ads, technical SEO, FastAPI, Python, Java, Cameroon",
    },
    lang: cv.lang,
  });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  doc.registerFont("D", F.display);
  doc.registerFont("Dr", F.displayReg);
  doc.registerFont("Di", F.displayItal);
  doc.registerFont("B", F.body);
  doc.registerFont("Bb", F.bodyBold);
  doc.registerFont("Bi", F.bodyItal);

  /* ---- header ----------------------------------------------------------- */
  doc.rect(0, 0, PAGE.w, 132).fill(C.cream);
  doc.rect(0, 0, PAGE.w, 5).fill(C.terracotta);

  doc.fillColor(C.brown).font("D").fontSize(25).text(cv.contact.name, M.l, 34, { width: W });
  doc
    .fillColor(C.terracotta)
    .font("Di")
    .fontSize(11.5)
    .text(cv.title, M.l, doc.y + 3, { width: W });

  // contact line, wrapped by hand so the separators never dangle
  const bits = [
    cv.location,
    cv.contact.email,
    cv.contact.phone,
    cv.contact.site,
    cv.contact.github,
  ];
  doc.font("B").fontSize(8.9).fillColor(C.bark);
  let cx = M.l,
    cy = doc.y + 8;
  const sep = "   ·   ";
  bits.forEach((bit, i) => {
    const wBit = doc.widthOfString(bit);
    const wSep = i ? doc.widthOfString(sep) : 0;
    if (cx + wSep + wBit > M.l + W) {
      cx = M.l;
      cy += 12.5;
    } else if (i) {
      doc.fillColor(C.amber).text(sep, cx, cy, { lineBreak: false });
      cx += wSep;
    }
    const link =
      bit === cv.contact.site
        ? cv.contact.siteUrl
        : bit === cv.contact.github
          ? cv.contact.githubUrl
          : bit === cv.contact.email
            ? "mailto:" + cv.contact.email
            : null;
    doc.fillColor(C.bark).text(bit, cx, cy, { lineBreak: false, link, underline: false });
    cx += wBit;
  });

  /* ---- profile ---------------------------------------------------------- */
  let y = 148;
  doc
    .font("B")
    .fontSize(10.2)
    .fillColor(C.brown)
    .text(cv.profile, M.l, y, { width: W, align: "justify", lineGap: 1.6 });
  y = doc.y + 16;

  /* ---- helpers ---------------------------------------------------------- */
  const need = (h) => {
    if (doc.y + h > PAGE.h - M.b) {
      doc.addPage();
      return M.t;
    }
    return doc.y;
  };

  function heading(label, atY) {
    let yy = atY != null ? atY : doc.y;
    if (yy + 34 > PAGE.h - M.b) {
      doc.addPage();
      yy = M.t;
    }
    doc.font("D").fontSize(11).fillColor(C.terracotta);
    doc.text(label.toUpperCase(), M.l, yy, { width: W, characterSpacing: 1.1 });
    const ly = doc.y + 3.5;
    doc
      .moveTo(M.l, ly)
      .lineTo(M.l + W, ly)
      .lineWidth(0.8)
      .strokeColor(C.amber)
      .stroke();
    doc.y = ly + 8;
    return doc.y;
  }

  /* ---- education -------------------------------------------------------- */
  heading(cv.sections.education, y);
  cv.education.forEach((e, i) => {
    doc.y = need(46);
    const top = doc.y;
    doc.font("Bb").fontSize(10.4).fillColor(C.brown).text(e.title, M.l, top, { width: W - 96 });
    doc
      .font("Bi")
      .fontSize(9)
      .fillColor(C.bark)
      .text(e.meta, M.l + W - 96, top + 1, { width: 96, align: "right" });
    doc.y = Math.max(doc.y, top + 13);
    doc.font("B").fontSize(9.4).fillColor(C.bark).text(e.org, M.l, doc.y, { width: W });
    if (e.note) {
      doc
        .font("Bi")
        .fontSize(9.1)
        .fillColor(C.bark)
        .text(e.note, M.l, doc.y + 1.5, { width: W, lineGap: 1.2 });
    }
    doc.y += i === cv.education.length - 1 ? 12 : 8;
  });

  /* ---- certifications --------------------------------------------------- */
  heading(cv.sections.certifications);
  cv.certifications.forEach((c) => {
    doc.y = need(16);
    const top = doc.y;
    doc.circle(M.l + 3, top + 5.2, 2).fill(C.terracotta);
    doc
      .font("B")
      .fontSize(9.8)
      .fillColor(C.brown)
      .text(c.name, M.l + 12, top, { width: W - 12, continued: true })
      .font("Bi")
      .fillColor(C.bark)
      .text("  —  " + c.org);
    doc.y = top + 14;
  });
  doc.y += 10;

  /* ---- skills ----------------------------------------------------------- */
  heading(cv.sections.skills);
  cv.skillGroups.forEach((g) => {
    doc.y = need(30);
    const top = doc.y;
    doc.font("Bb").fontSize(9.6).fillColor(C.brown).text(g.title, M.l, top, { width: 108 });
    doc
      .font("B")
      .fontSize(9.6)
      .fillColor(C.bark)
      .text(g.items, M.l + 112, top, { width: W - 112, lineGap: 1.4 });
    doc.y = Math.max(doc.y, top + 13) + 5;
  });
  doc.y += 6;

  /* ---- projects --------------------------------------------------------- */
  heading(cv.sections.projects);
  cv.projects.forEach((p, i) => {
    // keep a project's head with at least part of its body
    doc.y = need(62);
    const top = doc.y;
    doc.font("Bb").fontSize(10.3).fillColor(C.brown).text(p.name, M.l, top, { width: W });
    doc
      .font("Bi")
      .fontSize(9)
      .fillColor(C.terracotta)
      .text(p.role, M.l, doc.y + 0.5, { width: W, lineGap: 1 });
    doc
      .font("B")
      .fontSize(9.4)
      .fillColor(C.bark)
      .text(p.desc, M.l, doc.y + 2, { width: W, align: "justify", lineGap: 1.3 });
    doc
      .font("B")
      .fontSize(8.7)
      .fillColor(C.bark)
      .text(p.stack, M.l, doc.y + 2.5, { width: W });
    doc.y += i === cv.projects.length - 1 ? 12 : 10;
  });

  /* ---- languages -------------------------------------------------------- */
  heading(cv.sections.languages);
  doc.y = need(18);
  doc
    .font("B")
    .fontSize(9.8)
    .fillColor(C.bark)
    .text(cv.languages.join("     ·     "), M.l, doc.y, { width: W });
  doc.y += 12;

  doc.font("Bi").fontSize(9).fillColor(C.bark).text(cv.portfolioNote + " ", M.l, doc.y, {
    width: W,
    continued: true,
  });
  doc.font("Bb").fillColor(C.terracotta).text(cv.contact.site, { link: cv.contact.siteUrl });

  /* ---- footers ---------------------------------------------------------- */
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(range.start + i);
    // The footer sits inside the bottom margin. Without this, pdfkit treats
    // drawing below the margin box as an overflow and silently adds a page.
    doc.page.margins.bottom = 0;
    doc
      .moveTo(M.l, PAGE.h - M.b + 14)
      .lineTo(M.l + W, PAGE.h - M.b + 14)
      .lineWidth(0.6)
      .strokeColor(C.amber)
      .stroke();
    doc
      .font("B")
      .fontSize(8.2)
      .fillColor(C.bark)
      .text(cv.contact.name, M.l, PAGE.h - M.b + 20, { width: W / 2, lineBreak: false });
    doc
      .font("B")
      .fontSize(8.2)
      .fillColor(C.bark)
      .text(`${i + 1} / ${range.count}`, M.l + W / 2, PAGE.h - M.b + 20, {
        width: W / 2,
        align: "right",
        lineBreak: false,
      });
  }

  doc.flushPages();
  doc.end();
  return new Promise((res) => stream.on("finish", () => res({ outPath, pages: range.count })));
}

(async () => {
  const outDir = process.argv[2] || ".";
  fs.mkdirSync(outDir, { recursive: true });
  for (const cv of [data.en, data.fr]) {
    const out = path.join(outDir, `cv-${cv.lang}.pdf`);
    const r = await build(cv, out);
    console.log(
      `${path.basename(out).padEnd(12)} ${String(fs.statSync(out).size).padStart(7)} bytes  ${r.pages} page(s)`,
    );
  }
})();

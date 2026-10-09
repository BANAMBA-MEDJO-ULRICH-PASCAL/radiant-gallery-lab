/** Builds cv-en.docx and cv-fr.docx, matching the PDF's identity. */
const fs = require("fs");
const path = require("path");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  TabStopType,
  BorderStyle,
  ExternalHyperlink,
  Footer,
  PageNumber,
  convertInchesToTwip,
} = require("docx");
const data = require("./cv-data");

/* Same tokens as the PDF, converted from the site's OKLCH values. */
const C = {
  terracotta: "B95B3D",
  amber: "E1A263",
  brown: "3D2C23",
  bark: "634D41",
  cream: "F8F1E5",
};

const DISPLAY = "Georgia";
const BODY = "Calibri";

const RIGHT_TAB = convertInchesToTwip(6.5); // inside 1" margins on A4-ish width

const rule = (color = C.amber, size = 6) => ({
  bottom: { style: BorderStyle.SINGLE, size, color },
});

function heading(text) {
  return new Paragraph({
    spacing: { before: 260, after: 120 },
    border: rule(),
    children: [
      new TextRun({
        text: text.toUpperCase(),
        font: DISPLAY,
        bold: true,
        size: 21, // half-points → 10.5pt
        color: C.terracotta,
        characterSpacing: 24,
      }),
    ],
  });
}

function build(cv) {
  const kids = [];

  /* ---- header ----------------------------------------------------------- */
  kids.push(
    new Paragraph({
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: cv.contact.name,
          font: DISPLAY,
          bold: true,
          size: 48, // 24pt
          color: C.brown,
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: cv.title,
          font: DISPLAY,
          italics: true,
          size: 23,
          color: C.terracotta,
        }),
      ],
    }),
  );

  const dot = () =>
    new TextRun({ text: "  ·  ", font: BODY, size: 18, color: C.amber });
  const plain = (t) => new TextRun({ text: t, font: BODY, size: 18, color: C.bark });
  const link = (t, href) =>
    new ExternalHyperlink({
      link: href,
      children: [new TextRun({ text: t, font: BODY, size: 18, color: C.bark })],
    });

  kids.push(
    new Paragraph({
      spacing: { after: 180 },
      border: rule(C.amber, 6),
      children: [
        plain(cv.location),
        dot(),
        link(cv.contact.email, "mailto:" + cv.contact.email),
        dot(),
        plain(cv.contact.phone),
        dot(),
        link(cv.contact.site, cv.contact.siteUrl),
        dot(),
        link(cv.contact.github, cv.contact.githubUrl),
      ],
    }),
  );

  /* ---- profile ---------------------------------------------------------- */
  kids.push(
    new Paragraph({
      spacing: { before: 160, after: 60, line: 276 },
      alignment: AlignmentType.JUSTIFIED,
      children: [new TextRun({ text: cv.profile, font: BODY, size: 21, color: C.brown })],
    }),
  );

  /* ---- education -------------------------------------------------------- */
  kids.push(heading(cv.sections.education));
  cv.education.forEach((e) => {
    kids.push(
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
        spacing: { after: 20 },
        children: [
          new TextRun({ text: e.title, font: BODY, bold: true, size: 21, color: C.brown }),
          new TextRun({ text: "\t" + e.meta, font: BODY, italics: true, size: 18, color: C.bark }),
        ],
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [new TextRun({ text: e.org, font: BODY, size: 19, color: C.bark })],
      }),
    );
    if (e.note) {
      kids.push(
        new Paragraph({
          spacing: { after: 140, line: 264 },
          children: [
            new TextRun({ text: e.note, font: BODY, italics: true, size: 18, color: C.bark }),
          ],
        }),
      );
    }
  });

  /* ---- certifications --------------------------------------------------- */
  kids.push(heading(cv.sections.certifications));
  cv.certifications.forEach((c) => {
    kids.push(
      new Paragraph({
        bullet: { level: 0 },
        spacing: { after: 40 },
        children: [
          new TextRun({ text: c.name, font: BODY, size: 20, color: C.brown }),
          new TextRun({ text: "  —  " + c.org, font: BODY, italics: true, size: 19, color: C.bark }),
        ],
      }),
    );
  });

  /* ---- skills ----------------------------------------------------------- */
  kids.push(heading(cv.sections.skills));
  cv.skillGroups.forEach((g) => {
    kids.push(
      new Paragraph({
        spacing: { after: 80, line: 264 },
        children: [
          new TextRun({ text: g.title + "   ", font: BODY, bold: true, size: 20, color: C.brown }),
          new TextRun({ text: g.items, font: BODY, size: 20, color: C.bark }),
        ],
      }),
    );
  });

  /* ---- projects --------------------------------------------------------- */
  kids.push(heading(cv.sections.projects));
  cv.projects.forEach((p) => {
    kids.push(
      new Paragraph({
        spacing: { before: 120, after: 20 },
        keepNext: true,
        children: [new TextRun({ text: p.name, font: BODY, bold: true, size: 21, color: C.brown })],
      }),
      new Paragraph({
        spacing: { after: 40 },
        keepNext: true,
        children: [
          new TextRun({ text: p.role, font: BODY, italics: true, size: 18, color: C.terracotta }),
        ],
      }),
      new Paragraph({
        spacing: { after: 40, line: 264 },
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: p.desc, font: BODY, size: 19, color: C.bark })],
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: p.stack, font: BODY, size: 17, color: C.bark })],
      }),
    );
  });

  /* ---- languages -------------------------------------------------------- */
  kids.push(
    heading(cv.sections.languages),
    new Paragraph({
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: cv.languages.join("     ·     "),
          font: BODY,
          size: 20,
          color: C.bark,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: cv.portfolioNote + " ",
          font: BODY,
          italics: true,
          size: 18,
          color: C.bark,
        }),
        new ExternalHyperlink({
          link: cv.contact.siteUrl,
          children: [
            new TextRun({
              text: cv.contact.site,
              font: BODY,
              bold: true,
              size: 18,
              color: C.terracotta,
            }),
          ],
        }),
      ],
    }),
  );

  return new Document({
    creator: cv.contact.name,
    title: `${cv.contact.name} — CV`,
    description: cv.title,
    styles: { default: { document: { run: { font: BODY, size: 20, color: C.brown } } } },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.7),
              bottom: convertInchesToTwip(0.6),
              left: convertInchesToTwip(0.8),
              right: convertInchesToTwip(0.8),
            },
          },
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
                border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.amber } },
                children: [
                  new TextRun({ text: cv.contact.name, font: BODY, size: 16, color: C.bark }),
                  new TextRun({ text: "\t", font: BODY, size: 16 }),
                  new TextRun({
                    children: [PageNumber.CURRENT, " / ", PageNumber.TOTAL_PAGES],
                    font: BODY,
                    size: 16,
                    color: C.bark,
                  }),
                ],
              }),
            ],
          }),
        },
        children: kids,
      },
    ],
  });
}

(async () => {
  const outDir = process.argv[2] || ".";
  fs.mkdirSync(outDir, { recursive: true });
  for (const cv of [data.en, data.fr]) {
    const out = path.join(outDir, `cv-${cv.lang}.docx`);
    const buf = await Packer.toBuffer(build(cv));
    fs.writeFileSync(out, buf);
    console.log(`${path.basename(out).padEnd(13)} ${String(buf.length).padStart(7)} bytes`);
  }
})();

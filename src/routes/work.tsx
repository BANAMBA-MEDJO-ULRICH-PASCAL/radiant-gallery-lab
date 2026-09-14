import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import brewBloomImg from "@/assets/project-brew-bloom.jpg";
import stillwaterImg from "@/assets/project-stillwater.jpg";
import letterSeriesImg from "@/assets/project-letter-series.jpg";
import petalLedgerImg from "@/assets/project-petal-ledger.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Mara Ellison" },
      {
        name: "description",
        content:
          "Selected software builds and warm ad campaigns by Mara Ellison — storefronts, apps, newsletters, and promos for small, thoughtful teams.",
      },
      { property: "og:title", content: "Work — Mara Ellison" },
      {
        property: "og:description",
        content:
          "Selected software builds and warm ad campaigns by Mara Ellison — storefronts, apps, newsletters, and promos for small, thoughtful teams.",
      },
    ],
  }),
  component: WorkPage,
});

const allProjects = [
  {
    title: "Brew & Bloom",
    blurb:
      "A subscription storefront for a small-roaster, from checkout flow to a warm retargeting campaign.",
    tags: ["React", "Email", "Storefront"],
    image: brewBloomImg,
    category: "Both" as const,
  },
  {
    title: "Stillwater",
    blurb:
      "An onboarding redesign plus a paid-social funnel that doubled trial signups for a quiet meditation app.",
    tags: ["TypeScript", "Paid social", "UX"],
    image: stillwaterImg,
    category: "Both" as const,
  },
  {
    title: "The Letter Series",
    blurb:
      "Ongoing newsletter copy and a landing page for a solo ceramicist, built to feel like a personal note.",
    tags: ["Copywriting", "Webflow", "Email"],
    image: letterSeriesImg,
    category: "Advertising" as const,
  },
  {
    title: "Petal Ledger",
    blurb:
      "A gentle bookkeeping tool for a florist, paired with a seasonal promo that filled weekend slots.",
    tags: ["Svelte", "Promo", "Dashboard"],
    image: petalLedgerImg,
    category: "Software" as const,
  },
];

function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-10">
      <section className="fade-up py-14">
        <p className="font-display text-lg italic text-terracotta">Selected work</p>
        <h1 className="mt-2 font-display text-5xl leading-tight tracking-tight text-brown text-balance">
          Things made with care
        </h1>
        <p className="mt-5 max-w-xl text-base text-bark text-pretty">
          A few builds and campaigns I'm proud of. Some are software, some are advertising, and the
          best ones are both.
        </p>
      </section>

      <section className="grid gap-6 py-6 sm:grid-cols-2">
        {allProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </section>

      <section className="py-14">
        <div className="rounded-[32px] bg-cream/80 p-8 text-center ring-1 ring-brown/10 backdrop-blur-sm sm:p-12">
          <h2 className="font-display text-3xl leading-tight text-brown text-balance">
            Want something like this?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-bark text-pretty">
            Tell me what you're building and I'll tell you honestly if I'm the right hand for it.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

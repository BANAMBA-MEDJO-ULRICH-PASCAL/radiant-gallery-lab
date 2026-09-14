import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/portfolio-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mara Ellison" },
      {
        name: "description",
        content:
          "Software development (AI tools, security programs, websites, full-stack) and digital advertising (paid social, email, copy) by Mara Ellison.",
      },
      { property: "og:title", content: "Services — Mara Ellison" },
      {
        property: "og:description",
        content:
          "Software development (AI tools, security programs, websites, full-stack) and digital advertising (paid social, email, copy) by Mara Ellison.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServiceCard({
  title,
  tagline,
  items,
  accent,
}: {
  title: string;
  tagline: string;
  items: string[];
  accent: "terracotta" | "amber";
}) {
  const dot = accent === "terracotta" ? "bg-terracotta" : "bg-amber";
  return (
    <div className="rounded-[32px] bg-cream/80 p-8 ring-1 ring-brown/10 backdrop-blur-sm sm:p-10">
      <h3 className="font-display text-3xl leading-tight text-brown">{title}</h3>
      <p className="mt-3 text-base text-bark text-pretty">{tagline}</p>
      <ul className="mt-6 space-y-3 text-base text-bark">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className={`size-1.5 shrink-0 rounded-full ${dot}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-10">
      <section className="fade-up py-14">
        <p className="font-display text-lg italic text-terracotta">What I do</p>
        <h1 className="mt-2 font-display text-5xl leading-tight tracking-tight text-brown text-balance">
          Two crafts, one warm hand
        </h1>
        <p className="mt-5 max-w-xl text-base text-bark text-pretty">
          I help small teams build software that holds up and campaigns that sound like a person.
          Most of my work is a little of both.
        </p>
      </section>

      <section className="grid gap-6 py-6 sm:grid-cols-2">
        <ServiceCard
          title={services.software.title}
          tagline={services.software.tagline}
          items={services.software.items}
          accent="terracotta"
        />
        <ServiceCard
          title={services.advertising.title}
          tagline={services.advertising.tagline}
          items={services.advertising.items}
          accent="amber"
        />
      </section>

      <section className="py-12">
        <div className="rounded-[32px] bg-cream/80 p-8 ring-1 ring-brown/10 backdrop-blur-sm sm:p-10">
          <h2 className="font-display text-2xl leading-tight text-brown text-balance">
            How a project usually goes
          </h2>
          <ol className="mt-6 space-y-5">
            {[
              {
                step: "01",
                title: "A real conversation",
                body: "We talk about who you serve and what success looks like — no forms, no jargon.",
              },
              {
                step: "02",
                title: "A small plan",
                body: "I send a warm, honest proposal with scope, timeline, and price. We shape it together.",
              },
              {
                step: "03",
                title: "Build & tell",
                body: "I build the thing and write the story around it, sharing progress in plain language.",
              },
              {
                step: "04",
                title: "A calm handoff",
                body: "You get the work, the why behind it, and a friendly note on how to keep it warm.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="font-display text-lg text-terracotta">{item.step}</span>
                <div>
                  <h3 className="font-display text-lg text-brown">{item.title}</h3>
                  <p className="mt-1 text-sm text-bark text-pretty">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-8">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/pricing"
            className="rounded-full px-6 py-3 text-base font-semibold text-brown ring-1 ring-brown/20 transition-transform hover:-translate-y-0.5"
          >
            See pricing
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

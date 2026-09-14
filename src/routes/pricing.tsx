import { createFileRoute, Link } from "@tanstack/react-router";
import { pricingTiers } from "@/lib/portfolio-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Mara Ellison" },
      {
        name: "description",
        content:
          "Warm, honest pricing for software development and digital advertising — starter sites, web apps, security programs, campaign sprints, retainers, and creative packages.",
      },
      { property: "og:title", content: "Pricing — Mara Ellison" },
      {
        property: "og:description",
        content:
          "Warm, honest pricing for software development and digital advertising — starter sites, web apps, security programs, campaign sprints, retainers, and creative packages.",
      },
    ],
  }),
  component: PricingPage,
});

type Tier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured: boolean;
};

function TierCard({ tier, accent }: { tier: Tier; accent: "terracotta" | "amber" }) {
  const ring = tier.featured ? "ring-2 ring-terracotta" : "ring-1 ring-brown/10";
  const dot = accent === "terracotta" ? "bg-terracotta" : "bg-amber";
  return (
    <div
      className={`relative flex flex-col rounded-[28px] bg-cream/80 p-7 backdrop-blur-sm ${ring}`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-cream">
          Most chosen
        </span>
      )}
      <h3 className="font-display text-xl text-brown">{tier.name}</h3>
      <p className="mt-1 text-sm text-bark text-pretty">{tier.description}</p>
      <p className="mt-4 font-display text-3xl text-brown">{tier.price}</p>
      <ul className="mt-5 space-y-2.5 text-sm text-bark">
        {tier.features.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <span className={`size-1.5 shrink-0 rounded-full ${dot}`} />
            {f}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`mt-6 inline-block rounded-full px-4 py-2 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
          tier.featured
            ? "bg-terracotta text-cream"
            : "text-brown ring-1 ring-brown/20"
        }`}
      >
        Start a conversation
      </Link>
    </div>
  );
}

function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-10">
      <section className="fade-up py-14">
        <p className="font-display text-lg italic text-terracotta">Pricing</p>
        <h1 className="mt-2 font-display text-5xl leading-tight tracking-tight text-brown text-balance">
          Honest, warm pricing
        </h1>
        <p className="mt-5 max-w-xl text-base text-bark text-pretty">
          A few starting points for each line of work. Everything is shaped around your real
          project, so treat these as conversations, not contracts.
        </p>
      </section>

      <section className="py-6">
        <div className="mb-6 flex items-center gap-3">
          <span className="size-3 rounded-full bg-terracotta" />
          <h2 className="font-display text-2xl text-brown">Software development</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {pricingTiers.software.map((tier) => (
            <TierCard key={tier.name} tier={tier} accent="terracotta" />
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="size-3 rounded-full bg-amber" />
          <h2 className="font-display text-2xl text-brown">Digital advertising</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {pricingTiers.advertising.map((tier) => (
            <TierCard key={tier.name} tier={tier} accent="amber" />
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="rounded-[32px] bg-cream/80 p-8 text-center ring-1 ring-brown/10 backdrop-blur-sm sm:p-12">
          <h2 className="font-display text-3xl leading-tight text-brown text-balance">
            Not sure which fits?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-bark text-pretty">
            Send me a note about what you're building. I'll point you to the right starting point —
            even if that's somewhere else.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Ask me anything
          </Link>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, services } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/project-card";
import portraitImg from "@/assets/portrait.jpg";
import brewBloomImg from "@/assets/project-brew-bloom.jpg";
import stillwaterImg from "@/assets/project-stillwater.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mara Ellison — Software Developer & Digital Advertising Agent" },
      {
        name: "description",
        content:
          "Mara Ellison builds calm software and the warm ad campaigns that bring people to it — one person, the whole story from architecture to audience.",
      },
      { property: "og:title", content: "Mara Ellison — Software Developer & Digital Advertising Agent" },
      {
        property: "og:description",
        content:
          "Mara Ellison builds calm software and the warm ad campaigns that bring people to it — one person, the whole story from architecture to audience.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="fade-up pb-16 pt-14">
        <p className="mb-5 inline-block rounded-full bg-sage/20 px-4 py-1.5 text-sm font-medium text-moss">
          {profile.role}
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-tight tracking-tight text-brown text-balance sm:text-6xl">
          {profile.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-base text-bark text-pretty sm:text-lg">
          {profile.intro}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-cream ring-1 ring-terracotta transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
          </Link>
          <Link
            to="/work"
            className="rounded-full px-6 py-3 text-base font-semibold text-brown ring-1 ring-brown/20 transition-transform hover:-translate-y-0.5"
          >
            See the work
          </Link>
        </div>
      </section>

      {/* What I do teaser */}
      <section className="py-16">
        <div className="mb-8">
          <p className="font-display text-lg italic text-terracotta">What I do</p>
          <h2 className="font-display text-3xl leading-tight text-brown text-balance">
            Two crafts, one warm hand
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[28px] bg-cream/80 p-8 ring-1 ring-brown/10 backdrop-blur-sm">
            <h3 className="font-display text-2xl text-brown">{services.software.title}</h3>
            <p className="mt-2 text-sm text-bark text-pretty">{services.software.tagline}</p>
            <ul className="mt-4 space-y-2 text-sm text-bark">
              {services.software.items.slice(0, 4).map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="size-1.5 shrink-0 rounded-full bg-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-5 inline-block text-sm font-semibold text-terracotta hover:underline"
            >
              See all services →
            </Link>
          </div>
          <div className="rounded-[28px] bg-cream/80 p-8 ring-1 ring-brown/10 backdrop-blur-sm">
            <h3 className="font-display text-2xl text-brown">{services.advertising.title}</h3>
            <p className="mt-2 text-sm text-bark text-pretty">{services.advertising.tagline}</p>
            <ul className="mt-4 space-y-2 text-sm text-bark">
              {services.advertising.items.slice(0, 4).map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="size-1.5 shrink-0 rounded-full bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-5 inline-block text-sm font-semibold text-terracotta hover:underline"
            >
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Project highlight strip */}
      <section className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-display text-lg italic text-terracotta">Selected work</p>
            <h2 className="font-display text-3xl leading-tight text-brown text-balance">
              A few things I've made with care
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden text-sm font-semibold text-terracotta hover:underline sm:inline-block"
          >
            All work →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <ProjectCard
            title="Brew & Bloom"
            blurb="A subscription storefront for a small-roaster, from checkout flow to a warm retargeting campaign."
            tags={["React", "Email", "Storefront"]}
            image={brewBloomImg}
            category="Both"
          />
          <ProjectCard
            title="Stillwater"
            blurb="An onboarding redesign plus a paid-social funnel that doubled trial signups for a quiet meditation app."
            tags={["TypeScript", "Paid social", "UX"]}
            image={stillwaterImg}
            category="Both"
          />
        </div>
        <div className="mt-6 sm:hidden">
          <Link to="/work" className="text-sm font-semibold text-terracotta hover:underline">
            All work →
          </Link>
        </div>
      </section>

      {/* Portrait + intro strip */}
      <section className="py-16">
        <div className="grid gap-10 rounded-[32px] bg-cream/70 p-8 ring-1 ring-brown/10 backdrop-blur-sm sm:grid-cols-5 sm:p-10">
          <div className="sm:col-span-2">
            <img
              src={portraitImg}
              alt="Portrait of Mara Ellison"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-[28px] object-cover ring-1 ring-brown/5"
            />
          </div>
          <div className="flex flex-col justify-center sm:col-span-3">
            <p className="font-display text-lg italic text-terracotta">A note, not a résumé</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-brown text-balance">
              The person behind the pixel
            </h2>
            <p className="mt-4 text-base text-bark text-pretty">
              I started out shipping marketing pages for a bakery that didn't have a website, and
              somewhere along the way I fell in love with the whole journey — the code that holds it
              up and the words that make people stop.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-block text-sm font-semibold text-terracotta hover:underline"
            >
              Read my story →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="rounded-[32px] bg-cream/80 p-8 text-center ring-1 ring-brown/10 backdrop-blur-sm sm:p-12">
          <h2 className="font-display text-3xl leading-tight text-brown text-balance">
            Let's make something warm
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-bark text-pretty">
            Whether it's a web app, an ad campaign, or a little of both — I'd love to hear what
            you're building.
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

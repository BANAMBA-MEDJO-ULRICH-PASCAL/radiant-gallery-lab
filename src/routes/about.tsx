import { createFileRoute, Link } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";
import { services } from "@/lib/portfolio-data";
import portraitImg from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mara Ellison" },
      {
        name: "description",
        content:
          "Mara Ellison is a software developer and digital advertising agent who builds calm software and warm campaigns for small, thoughtful teams.",
      },
      { property: "og:title", content: "About — Mara Ellison" },
      {
        property: "og:description",
        content:
          "Mara Ellison is a software developer and digital advertising agent who builds calm software and warm campaigns for small, thoughtful teams.",
      },
    ],
  }),
  component: AboutPage,
});

const traits = [
  "Patient",
  "Accessible-first",
  "Warm copy",
  "Detail-happy",
  "Plainly honest",
  "Small teams",
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-10">
      <section className="fade-up py-14">
        <p className="font-display text-lg italic text-terracotta">About</p>
        <h1 className="mt-2 font-display text-5xl leading-tight tracking-tight text-brown text-balance">
          The person behind the pixel
        </h1>
      </section>

      <section className="grid gap-10 pb-16 sm:grid-cols-5">
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
        <div className="sm:col-span-3">
          <p className="text-base text-bark text-pretty">{profile.intro}</p>
          <p className="mt-4 text-base text-bark text-pretty">
            I started out shipping marketing pages for a bakery that didn't have a website, and
            somewhere along the way I fell in love with the whole journey — the architecture that
            holds it up and the words that make people stop. I work mostly with founders and small
            studios who want one calm, capable hand for both the build and the story.
          </p>
          <p className="mt-4 text-base text-bark text-pretty">
            When I'm not at the keyboard, I'm usually walking with a film camera, reorganizing a
            bookshelf, or over-watering a houseplant.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {traits.map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-sage/20 px-4 py-1.5 text-sm font-medium text-moss"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <h2 className="font-display text-3xl leading-tight text-brown text-balance">
          How I work
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Start with the person",
              body: "Every project begins with a real conversation, not a form. I want to know who you're serving before I touch a tool.",
            },
            {
              title: "Build, then tell",
              body: "Code and copy are the same craft to me — the thing has to hold up, and it has to sound like a friend.",
            },
            {
              title: "Small, then done",
              body: "I keep teams small and timelines honest. A warm thing finished beats a grand thing abandoned.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] bg-cream/80 p-6 ring-1 ring-brown/10 backdrop-blur-sm"
            >
              <h3 className="font-display text-xl text-brown">{item.title}</h3>
              <p className="mt-2 text-sm text-bark text-pretty">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[24px] bg-cream/80 p-8 ring-1 ring-brown/10 backdrop-blur-sm">
            <h3 className="font-display text-2xl text-brown">{services.software.title}</h3>
            <p className="mt-2 text-sm text-bark text-pretty">{services.software.tagline}</p>
          </div>
          <div className="rounded-[24px] bg-cream/80 p-8 ring-1 ring-brown/10 backdrop-blur-sm">
            <h3 className="font-display text-2xl text-brown">{services.advertising.title}</h3>
            <p className="mt-2 text-sm text-bark text-pretty">{services.advertising.tagline}</p>
          </div>
        </div>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5"
        >
          Say hello
        </Link>
      </section>
    </div>
  );
}

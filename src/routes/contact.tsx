import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mara Ellison" },
      {
        name: "description",
        content:
          "Send Mara Ellison a note about your software build or ad campaign, or reach out by email or social.",
      },
      { property: "og:title", content: "Contact — Mara Ellison" },
      {
        property: "og:description",
        content:
          "Send Mara Ellison a note about your software build or ad campaign, or reach out by email or social.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pb-10">
      <section className="fade-up py-14">
        <p className="font-display text-lg italic text-terracotta">Contact</p>
        <h1 className="mt-2 font-display text-5xl leading-tight tracking-tight text-brown text-balance">
          Say hello
        </h1>
        <p className="mt-5 max-w-xl text-base text-bark text-pretty">
          Tell me what you're building. I read every note myself and reply within a couple of days.
        </p>
      </section>

      <section className="grid gap-8 py-6 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-[32px] bg-cream/80 p-8 ring-1 ring-brown/10 backdrop-blur-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-brown">Name</span>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-brown/15 bg-paper px-4 py-2.5 text-sm text-brown outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-brown">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-brown/15 bg-paper px-4 py-2.5 text-sm text-brown outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-brown">Subject</span>
              <select
                name="subject"
                className="w-full rounded-xl border border-brown/15 bg-paper px-4 py-2.5 text-sm text-brown outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
                defaultValue="Software project"
              >
                <option>Software project</option>
                <option>Advertising campaign</option>
                <option>A little of both</option>
                <option>Just saying hello</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-brown">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-brown/15 bg-paper px-4 py-2.5 text-sm text-brown outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
                placeholder="Tell me about your project…"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send note"}
            </button>
            {status === "sent" && (
              <p className="text-center text-sm font-medium text-moss">
                Thank you — your note is on its way. I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm font-medium text-destructive">
                Something went wrong. Please email me directly at {profile.email}.
              </p>
            )}
          </form>
        </div>

        <div className="sm:col-span-2">
          <div className="rounded-[32px] bg-cream/80 p-8 ring-1 ring-brown/10 backdrop-blur-sm">
            <h2 className="font-display text-2xl text-brown">Other ways to reach me</h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block text-base font-semibold text-terracotta hover:underline"
            >
              {profile.email}
            </a>
            <div className="mt-6 space-y-3">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-brown ring-1 ring-brown/10 transition-transform hover:-translate-y-0.5"
                >
                  <span>{s.label}</span>
                  <span className="text-terracotta">→</span>
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-bark text-pretty">
              Based in the Pacific Northwest, working with small teams everywhere.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex flex-col items-start justify-between gap-4 border-b border-brown/10 pb-8 sm:flex-row sm:items-center">
        <Link to="/" className="font-display text-xl text-brown">
          {profile.name}
        </Link>
        <div className="flex gap-5 text-sm text-bark">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="transition-transform hover:-translate-y-0.5"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-6 text-sm text-bark/70">Made slowly, with care. © 2026</p>
    </footer>
  );
}

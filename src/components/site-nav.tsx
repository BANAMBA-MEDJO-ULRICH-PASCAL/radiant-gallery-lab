import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
];

export function SiteNav() {
  return (
    <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
      <Link
        to="/"
        className="font-display text-2xl text-brown transition-transform hover:-translate-y-0.5"
      >
        {profile.name}
      </Link>
      <div className="flex items-center gap-4 text-sm text-bark sm:gap-6">
        <div className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-transform hover:-translate-y-0.5"
              activeProps={{ className: "text-terracotta font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="rounded-full bg-terracotta px-4 py-2 font-semibold text-cream transition-transform hover:-translate-y-0.5"
        >
          Say hello
        </Link>
      </div>
    </nav>
  );
}

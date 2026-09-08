import { firm, location } from "@/lib/firmData";
import { Link } from "@tanstack/react-router";

const nav = [
  { label: "PRACTICE", href: "/practice" },
  { label: "COUNSEL", href: "/counsel" },
  { label: "CHAMBERS", href: "/chambers" },
  { label: "ABOUT", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 min-h-[72px] border-b border-white/10 bg-terracotta/85 backdrop-blur-xl flex flex-col justify-center">
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-5 sm:px-10">
        <Link
          to="/"
          className="transition-opacity hover:opacity-80"
        >
          <img src="/logo.png" alt={firm.shortName} className="h-12 w-auto object-contain" />
        </Link>

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="border-b border-transparent pb-1 font-mono text-[10px] tracking-[0.26em] text-white/70 transition-colors duration-300 hover:border-white hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <span className="font-mono text-[10px] tracking-[0.26em] text-white/70">
          {location.city} / IN
        </span>
      </div>

      {/* Golden transparent bar for mobile navigation */}
      <nav aria-label="Sections" className="lg:hidden border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <ul className="flex items-center justify-center gap-8 py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="font-mono text-[10px] tracking-[0.24em] text-white/90 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

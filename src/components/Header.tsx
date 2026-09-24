import { useState } from "react";
import { firm, location } from "@/lib/firmData";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "PRACTICE", href: "/practice" },
  { label: "COUNSEL", href: "/counsel" },
  { label: "CHAMBERS", href: "/chambers" },
  { label: "ABOUT", href: "/about" },
  { label: "INSIGHTS", href: "/insights" },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 min-h-[72px] border-b border-white/10 bg-terracotta/95 backdrop-blur-xl flex flex-col justify-center">
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-5 sm:px-10">
        <Link
          to="/"
          className="transition-opacity hover:opacity-80"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src="/logo.png" alt={firm.shortName} className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
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

        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] tracking-[0.26em] text-white/70 hidden sm:block">
            {location.city} / IN
          </span>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-terracotta w-full absolute top-[72px] left-0 shadow-xl pb-6 pt-2">
          <ul className="flex flex-col items-center">
            {nav.map((item) => (
              <li key={item.href} className="w-full">
                <Link
                  to={item.href}
                  className="block w-full py-4 text-center font-mono text-[11px] tracking-[0.3em] text-white/90 hover:bg-white/5 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

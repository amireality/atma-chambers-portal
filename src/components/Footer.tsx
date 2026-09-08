import { firm, location } from "@/lib/firmData";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#23120B]/10 bg-terracotta text-white">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-jaali opacity-30 mix-blend-overlay pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between font-mono text-[10px] tracking-[0.24em] text-white/80">
          <div className="flex flex-col items-start gap-2">
            <img src="/logo.png" alt={firm.name} className="h-12 w-auto object-contain mb-4" />
            <span>BAR COUNCIL REG. {firm.barCouncilReg}</span>
            <span>
              {location.city} · {location.state} · {location.country}
            </span>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 text-white/60">
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
              <Link to="/terms" className="hover:text-white transition-colors">TERMS OF USE</Link>
            </div>
            <span>&copy; {year} ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

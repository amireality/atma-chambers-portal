import { contact, firm, location } from "@/lib/firmData";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#23120B]/10 bg-terracotta text-white">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-jaali opacity-30 mix-blend-overlay pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between font-mono text-[10px] tracking-[0.24em] text-white/80">
          <div className="flex flex-col md:flex-row gap-12 w-full justify-between">
            <div className="flex flex-col items-start gap-4">
              <img src="/logo.png" alt={firm.name} className="h-12 w-auto object-contain mb-2" />
              <div className="flex flex-col gap-1">
                <span>{firm.name.toUpperCase()}</span>
                <span>{location.city} · {location.state} · {location.country}</span>
                <span className="text-white/50 mt-1">BAR COUNCIL REG. {firm.barCouncilReg}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex flex-col gap-3">
                <Link to="/practice" className="hover:text-white transition-colors">PRACTICE</Link>
                <Link to="/counsel" className="hover:text-white transition-colors">COUNSEL</Link>
                <Link to="/chambers" className="hover:text-white transition-colors">CHAMBERS</Link>
                <Link to="/about" className="hover:text-white transition-colors">ABOUT</Link>
                <Link to="/insights" className="hover:text-white transition-colors">INSIGHTS</Link>
              </div>

              <div className="flex flex-col gap-3">
                <Link to="/contact" className="hover:text-white transition-colors">CONTACT</Link>
                <span className="text-white/60 lowercase" style={{textTransform: 'none'}}>{contact.email}</span>
                <span className="text-white/60">+91 8955801545</span>
                <span className="text-white/60">+91 9414353632</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-white/50">
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
              <Link to="/terms" className="hover:text-white transition-colors">TERMS OF USE</Link>
              <span className="cursor-pointer hover:text-white transition-colors" onClick={() => { window.localStorage.removeItem(disclaimer.storageKey); window.location.reload(); }}>DISCLAIMER</span>
            </div>
            <span>&copy; {year} {firm.name.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

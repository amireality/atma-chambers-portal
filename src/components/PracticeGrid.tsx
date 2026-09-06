import { useEffect, useRef, useState } from "react";
import { practiceAreas } from "@/lib/firmData";
import { Scale, Pill, Landmark, ShieldAlert, Building2, Handshake, FileSignature, ShoppingCart, FileCheck, ScrollText } from "lucide-react";

const getIcon = (code: string) => {
  switch (code) {
    case "CONST": return Landmark;
    case "PHARMA": return Pill;
    case "PROC": return ScrollText;
    case "CRIM": return ShieldAlert;
    case "CIV/COMM": return Building2;
    case "ADR": return Handshake;
    case "CONT": return FileSignature;
    case "CONS": return ShoppingCart;
    case "REG": return FileCheck;
    case "APPL": return Scale;
    default: return Scale;
  }
};

function PracticeCard({ area }: { area: typeof practiceAreas[0] }) {
  const Icon = getIcon(area.code);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`group relative overflow-hidden p-8 transition-all duration-1000 sm:p-10 ${area.span} ${
        isVisible ? "bg-terracotta text-[#F4F0E8]" : "bg-[#F4F0E8] text-[#23120B]"
      }`}
    >
      {/* Geometric Pattern Overlay */}
      <div 
        className={`absolute inset-0 bg-pattern-circles mix-blend-overlay transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`} 
      />
      
      <div 
        className={`absolute right-8 top-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 text-white" : "opacity-0 text-[#B99A62]"
        }`}
      >
        <Icon className={`w-16 h-16 sm:w-20 sm:h-20 stroke-[1] ${isVisible ? "animate-draw" : ""}`} />
      </div>
      
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-2xl transition-colors duration-1000 ${
          isVisible ? "bg-white/10" : "bg-[#B99A62]/0"
        }`}
      />

      <div className="flex items-baseline gap-4 relative z-10">
        <span className={`font-mono text-[10px] tracking-[0.24em] transition-colors duration-1000 ${
          isVisible ? "text-white/60" : "text-[#23120B]/40"
        }`}>
          {area.index}
        </span>
        <span className={`font-mono text-[10px] tracking-[0.24em] transition-colors duration-1000 ${
          isVisible ? "text-white/80" : "text-[#B99A62]"
        }`}>
          {area.code}
        </span>
      </div>

      <h3 className={`mt-16 sm:mt-24 max-w-[22ch] font-display text-2xl font-light leading-tight tracking-[0.01em] transition-all duration-1000 sm:text-3xl relative z-10 ${
        isVisible ? "-translate-y-1 text-white" : "text-[#23120B]"
      }`}>
        {area.title}
      </h3>

      <div className={`mt-8 h-px transition-all duration-1000 relative z-10 ${
        isVisible ? "w-24 bg-[#B99A62]" : "w-10 bg-[#B99A62]/40"
      }`} />
    </article>
  );
}

export function PracticeGrid() {
  return (
    <section id="practice" className="border-b border-[#23120B]/10 bg-[#F4F0E8] text-[#23120B]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">03 / PRACTICE</p>
        <h2 className="mt-6 font-display text-5xl font-light tracking-[0.02em] text-[#23120B] sm:text-7xl">
          AREAS OF PRACTICE
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px border border-[#23120B]/10 bg-[#23120B]/10 md:grid-cols-12">
          {practiceAreas.map((area) => (
            <PracticeCard key={area.code} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}

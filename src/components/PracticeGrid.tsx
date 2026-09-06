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

export function PracticeGrid() {
  return (
    <section id="practice" className="border-b border-[#080B0F]/10 bg-[#F4F0E8] text-[#080B0F]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">03 / PRACTICE</p>
        <h2 className="mt-6 font-display text-5xl font-light tracking-[0.02em] text-[#080B0F] sm:text-7xl">
          AREAS OF PRACTICE
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px border border-[#080B0F]/10 bg-[#080B0F]/10 md:grid-cols-12">
          {practiceAreas.map((area) => {
            const Icon = getIcon(area.code);
            return (
              <article
                key={area.code}
                className={`group relative overflow-hidden bg-[#F4F0E8] p-8 transition-all duration-700 hover:bg-terracotta hover:text-[#F4F0E8] sm:p-10 ${area.span}`}
              >
                {/* Geometric Pattern Overlay */}
                <div className="absolute inset-0 bg-pattern-circles opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-100" />
                
                <div className="absolute right-8 top-8 opacity-20 transition-all duration-700 group-hover:opacity-100 group-hover:text-white text-[#B99A62]">
                  <Icon className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1] group-hover:animate-draw" />
                </div>
                
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#B99A62]/0 blur-2xl transition-colors duration-700 group-hover:bg-white/10"
                />

                <div className="flex items-baseline justify-between relative z-10">
                  <span className="font-mono text-[10px] tracking-[0.24em] text-[#080B0F]/40 transition-colors duration-700 group-hover:text-white/60">
                    {area.index}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.24em] text-[#B99A62] transition-colors duration-700 group-hover:text-white/80">
                    {area.code}
                  </span>
                </div>

                <h3 className="mt-16 sm:mt-24 max-w-[22ch] font-display text-2xl font-light leading-tight tracking-[0.01em] text-[#080B0F] transition-all duration-700 group-hover:-translate-y-1 group-hover:text-white sm:text-3xl relative z-10">
                  {area.title}
                </h3>

                <div className="mt-8 h-px w-10 bg-[#B99A62]/40 transition-all duration-700 group-hover:w-24 group-hover:bg-[#B99A62] relative z-10" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

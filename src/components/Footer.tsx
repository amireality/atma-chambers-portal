import { firm, location } from "@/lib/firmData";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#080B0F]/10 bg-terracotta text-white">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-jaali opacity-30 mix-blend-overlay pointer-events-none" />
      
      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-10 font-mono text-[10px] tracking-[0.24em] text-white/80 sm:px-10 md:flex-row md:items-center md:justify-between">
        <span className="uppercase text-white tracking-[0.3em] font-medium">{firm.name}</span>
        <span>BAR COUNCIL REG. {firm.barCouncilReg}</span>
        <span>
          {location.city} · {location.state} · {location.country}
        </span>
      </div>
    </footer>
  );
}

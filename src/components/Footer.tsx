import { firm, location } from "@/lib/firmData";

export function Footer() {
  return (
    <footer className="border-t border-[#080B0F]/10 bg-[#F4F0E8]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-8 font-mono text-[10px] tracking-[0.24em] text-[#080B0F]/60 sm:px-10 md:flex-row md:items-center md:justify-between">
        <span className="uppercase">{firm.name}</span>
        <span>BAR COUNCIL REG. {firm.barCouncilReg}</span>
        <span>
          {location.city} · {location.state} · {location.country}
        </span>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { associates, leadCounsel } from "@/lib/firmData";

type Row = {
  name: string;
  role: string;
  meta: string[];
};

const rows: Row[] = [
  {
    name: leadCounsel.name,
    role: leadCounsel.role,
    meta: [leadCounsel.qualifications, leadCounsel.registration],
  },
  ...associates.map((a) => ({ name: a.name, role: a.role, meta: [] })),
];

export function CounselRoster() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="counsel" className="relative border-b border-[#080B0F]/10 bg-[#F4F0E8] text-[#080B0F]">
      {/* Smooth blending gradient from the dark hero section */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#080B0F] to-transparent pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-32 pb-24 sm:px-10 sm:pt-40 sm:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col items-start animate-fade-in-up">
            <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">02 / COUNSEL</p>
            <h2 className="mt-6 font-display text-5xl font-light tracking-[0.02em] text-[#080B0F] sm:text-6xl">
              THE CHAMBERS
            </h2>
            <p className="mt-6 font-mono text-[10px] leading-relaxed tracking-[0.2em] text-[#080B0F]/70 max-w-xs">
              A collaborative legal practice anchored by rigorous analytical standards and profound institutional experience.
            </p>
            
            <a 
              href="#about"
              className="mt-10 inline-flex items-center justify-center border border-[#080B0F]/20 px-8 py-3 font-mono text-[10px] tracking-[0.2em] text-[#080B0F] transition-all hover:bg-[#080B0F] hover:text-[#F4F0E8]"
            >
              ABOUT THE FIRM
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-2">
              {rows.map((row, i) => {
                const isExpanded = expandedIndex === i;
                return (
                  <button
                    key={row.name}
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                    className={`group relative flex flex-col justify-between overflow-hidden border border-[#080B0F]/10 bg-white/50 p-6 text-left transition-all duration-500 hover:border-[#B99A62]/50 sm:p-8 ${
                      isExpanded ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-6">
                        <span className="font-mono text-[10px] tracking-[0.24em] text-[#080B0F]/30 transition-colors group-hover:text-[#B99A62]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-2xl font-light tracking-[0.01em] text-[#080B0F] sm:text-3xl">
                          {row.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="hidden font-mono text-[10px] tracking-[0.2em] text-[#080B0F]/60 sm:inline-block">
                          {row.role}
                        </span>
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full border border-[#080B0F]/10 transition-transform duration-500 ${
                            isExpanded ? "rotate-180 bg-[#080B0F] text-white" : "bg-transparent text-[#080B0F]"
                          }`}
                        >
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-12 border-l border-[#B99A62]/30 pl-6">
                          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#080B0F]/80 sm:hidden mb-4">
                            {row.role}
                          </p>
                          {row.meta.length > 0 ? (
                            row.meta.map((m, idx) => (
                              <p
                                key={idx}
                                className="mb-2 font-mono text-[10px] tracking-[0.15em] text-[#080B0F]/60"
                              >
                                {m}
                              </p>
                            ))
                          ) : (
                            <p className="font-mono text-[10px] tracking-[0.15em] text-[#080B0F]/60">
                              Advocate & Legal Practitioner
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

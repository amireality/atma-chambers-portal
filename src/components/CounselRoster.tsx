import { useState, useRef } from "react";
import { associates, leadCounsel } from "@/lib/firmData";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Row = {
  name: string;
  role: string;
  meta: string[];
  span: string;
  slug: string;
};

const rows: Row[] = [
  {
    name: leadCounsel.name,
    role: leadCounsel.role,
    meta: [leadCounsel.qualifications, leadCounsel.registration],
    span: "md:col-span-2 md:row-span-2",
    slug: leadCounsel.name.toLowerCase().replace(/\s+/g, '-'),
  },
  ...associates.map((a) => ({ 
    name: a.name, 
    role: a.role, 
    meta: [], 
    span: "md:col-span-1 md:row-span-1",
    slug: a.name.toLowerCase().replace(/\s+/g, '-'),
  })),
];

function GlowingCard({ row }: { row: Row }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#23120B]/10 bg-white/40 p-8 transition-all hover:border-[#B99A62]/30 hover:shadow-2xl ${row.span}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(185,154,98,0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B99A62] mb-4 block">
          {row.role}
        </span>
        <h3 className="font-display text-3xl font-light tracking-[0.01em] text-[#23120B] sm:text-4xl">
          {row.name}
        </h3>
        
        <div className="mt-6 flex-grow">
          {row.meta.map((m, idx) => (
            <p key={idx} className="mb-2 font-mono text-[10px] tracking-[0.15em] text-[#23120B]/60">
              {m}
            </p>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="h-px w-12 bg-[#23120B]/20 transition-all duration-300 group-hover:w-24 group-hover:bg-[#B99A62]" />
          <Link to={`/profiles/${row.slug}`} className="font-mono text-[10px] tracking-widest text-[#23120B]/40 transition-colors group-hover:text-[#B99A62] flex items-center gap-2">
            VIEW PROFILE <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CounselRoster() {
  return (
    <section id="counsel" className="relative border-b border-[#23120B]/10 bg-[#F4F0E8] text-[#23120B]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-32 pb-24 sm:px-10 sm:pt-40 sm:pb-32">
        <div className="mb-16 flex flex-col items-start animate-fade-in-up">
          <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">02 / COUNSEL</p>
          <h2 className="mt-6 font-display text-5xl font-light tracking-[0.02em] text-[#23120B] sm:text-7xl">
            THE CHAMBERS
          </h2>
          <p className="mt-6 font-mono text-sm leading-relaxed tracking-[0.1em] text-[#23120B]/70 max-w-lg">
            A collaborative legal practice anchored by rigorous analytical standards and profound institutional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {rows.map((row) => (
            <GlowingCard key={row.name} row={row} />
          ))}
        </div>
      </div>
    </section>
  );
}

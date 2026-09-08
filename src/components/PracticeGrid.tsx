import { useRef, useState } from "react";
import { practiceAreas } from "@/lib/firmData";
import { Scale, Pill, Landmark, ShieldAlert, Building2, Handshake, FileSignature, ShoppingCart, FileCheck, ScrollText, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";

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

function PracticeCard({ area, index }: { area: typeof practiceAreas[0]; index: number }) {
  const Icon = getIcon(area.code);
  const [inView, setInView] = useState(false);
  const slug = area.code.toLowerCase().replace('/', '-');

  return (
    <Link to={`/practice/${slug}`} className="block group">
      <motion.article
        initial="hidden"
        whileInView="visible"
        onViewportEnter={() => setInView(true)}
        onViewportLeave={() => setInView(false)}
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { backgroundColor: "#F4F0E8", color: "#23120B", scale: 0.95 },
          visible: { backgroundColor: "#8B3A2B", color: "#F4F0E8", scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
        }}
        className="group relative overflow-hidden rounded-[2rem] border border-[#23120B]/10 p-8 shadow-sm sm:p-10 h-full flex flex-col justify-between min-h-[340px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      >
        {/* Geometric Pattern Overlay */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 1.1 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
          }}
          className="absolute inset-0 bg-pattern-circles mix-blend-overlay" 
        />
        
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
          }}
          className="absolute right-8 top-8 text-white"
        >
          {inView && <Icon className="w-12 h-12 sm:w-16 sm:h-16 stroke-[1] animate-draw group-hover:scale-110 transition-transform duration-500" />}
        </motion.div>
        
        <div className="flex items-baseline gap-4 relative z-10">
          <motion.span 
            variants={{
              hidden: { opacity: 0.4, color: "#23120B" },
              visible: { opacity: 0.6, color: "#FFFFFF", transition: { duration: 0.5 } }
            }}
            className="font-mono text-[10px] tracking-[0.24em]"
          >
            {area.index}
          </motion.span>
          <motion.span 
            variants={{
              hidden: { opacity: 0.8, color: "#B99A62" },
              visible: { opacity: 0.9, color: "#B99A62", transition: { duration: 0.5 } }
            }}
            className="font-mono text-[10px] tracking-[0.24em]"
          >
            {area.code}
          </motion.span>
        </div>

        <motion.h3 
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } }
          }}
          className="mt-16 max-w-[20ch] font-display text-2xl font-light leading-tight tracking-[0.01em] sm:text-3xl relative z-10"
        >
          {area.title}
        </motion.h3>

        <div className="mt-8 flex items-center gap-4 relative z-10">
          <motion.div 
            variants={{
              hidden: { width: "2.5rem", backgroundColor: "rgba(185,154,98,0.4)" },
              visible: { width: "6rem", backgroundColor: "rgba(185,154,98,1)", transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
            }}
            className="h-px" 
          />
          <span className="font-mono text-[10px] tracking-widest text-[#B99A62] opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 flex items-center gap-2">
            READ MORE <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}

export function PracticeGrid() {
  return (
    <section id="practice" className="border-b border-[#23120B]/10 bg-[#F4F0E8] text-[#23120B] relative z-20">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]"
        >
          03 / PRACTICE
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 font-display text-5xl font-light tracking-[0.02em] text-[#23120B] sm:text-7xl"
        >
          AREAS OF PRACTICE
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative">
          {practiceAreas.map((area, index) => (
            <PracticeCard key={area.code} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

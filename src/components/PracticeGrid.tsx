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

function PracticeCard({ area, index, total }: { area: typeof practiceAreas[0]; index: number; total: number }) {
  const Icon = getIcon(area.code);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [inView, setInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: cardRef as any,
    offset: ["start end", "start center"]
  });
  
  const yOffset = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const slug = area.code.toLowerCase().replace('/', '-');

  return (
    <motion.div 
      style={{ 
        top: `calc(100px + ${index * 20}px)`,
        zIndex: index,
        y: yOffset,
        opacity
      }}
      className="md:sticky md:origin-top" 
    >
      <Link to={`/practice/${slug}`} ref={cardRef as any} className="block group">
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
          className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-[#23120B]/10 p-8 shadow-2xl sm:p-10 md:min-h-[380px] transition-transform duration-500 hover:scale-[1.02]"
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
            {inView && <Icon className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1] animate-draw group-hover:scale-110 transition-transform duration-500" />}
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
            className="mt-16 sm:mt-24 max-w-[22ch] font-display text-3xl font-light leading-tight tracking-[0.01em] sm:text-4xl relative z-10"
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
    </motion.div>
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

        <div className="mt-16 flex flex-col gap-6 md:gap-0 pb-[20vh] relative">
          {practiceAreas.map((area, index) => (
            <PracticeCard key={area.code} area={area} index={index} total={practiceAreas.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

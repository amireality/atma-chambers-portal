import { createFileRoute } from '@tanstack/react-router';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { firm } from '@/lib/firmData';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const height = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <main ref={ref} className="relative min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 relative flex gap-8">
        
        {/* Aceternity-style Tracing Beam */}
        <div className="hidden lg:block relative w-1 rounded-full bg-[#23120B]/10 overflow-hidden shrink-0 ml-4">
          <motion.div
            style={{ height }}
            className="w-full bg-gradient-to-b from-[#B99A62] via-terracotta to-transparent rounded-full shadow-[0_0_15px_rgba(185,154,98,0.5)]"
          />
        </div>

        <div className="flex-1 max-w-4xl lg:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">THE FIRM</p>
            <h1 className="mt-6 font-display text-5xl font-light tracking-[0.02em] sm:text-7xl">
              ABOUT US
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 space-y-12 text-lg sm:text-xl font-light leading-relaxed text-[#23120B]/80"
          >
            <p>
              {firm.description}
            </p>
            <p>
              Our philosophy is rooted in a deep understanding of the intricacies of Indian law, paired with a modern, pragmatic approach to legal problem-solving. We believe that true advocacy goes beyond mere representation—it requires strategic foresight, unwavering dedication, and a relentless pursuit of justice.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[#23120B]/10">
              <div>
                <h3 className="font-display text-3xl mb-4 text-terracotta">Our Heritage</h3>
                <p className="text-base">
                  Established in {firm.established}, the chambers have grown from a boutique practice into a comprehensive legal institution, representing a diverse clientele ranging from private individuals to multinational corporations.
                </p>
              </div>
              <div>
                <h3 className="font-display text-3xl mb-4 text-terracotta">Our Approach</h3>
                <p className="text-base">
                  We leverage decades of litigation experience with cutting-edge legal research, ensuring that our clients receive representation that is both grounded in precedent and forward-looking in its strategy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

import { createFileRoute, useParams } from '@tanstack/react-router';
import { practiceAreas } from '@/lib/firmData';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/practice/$areaId')({
  component: PracticeAreaDetail,
});

function PracticeAreaDetail() {
  const { areaId } = Route.useParams();
  const area = practiceAreas.find((a) => a.code.toLowerCase().replace('/', '-') === areaId);

  if (!area) {
    return <div className="pt-40 text-center">Practice Area Not Found</div>;
  }

  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <article className="mx-auto max-w-4xl px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">
              PRACTICE AREA / {area.index}
            </p>
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl font-light tracking-[0.02em]">
            {area.title}
          </h1>
          <div className="mt-8 h-px w-24 bg-terracotta" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 space-y-8 text-lg font-light leading-relaxed text-[#23120B]/80"
        >
          <p>
            Our {area.title.toLowerCase()} practice is characterized by a deep understanding of the regulatory landscape and a commitment to delivering strategic, results-oriented counsel. We represent clients across a broad spectrum of matters within this domain.
          </p>
          
          <h2 className="font-display text-3xl mt-12 mb-6 text-terracotta">Core Capabilities</h2>
          <ul className="space-y-4 font-mono text-sm tracking-wide">
            <li className="flex gap-4">
              <span className="text-[#B99A62]">01.</span>
              Strategic Consultation & Advisory
            </li>
            <li className="flex gap-4">
              <span className="text-[#B99A62]">02.</span>
              Dispute Resolution & Litigation
            </li>
            <li className="flex gap-4">
              <span className="text-[#B99A62]">03.</span>
              Regulatory Compliance
            </li>
            <li className="flex gap-4">
              <span className="text-[#B99A62]">04.</span>
              Risk Mitigation Strategies
            </li>
          </ul>

          <div className="mt-16 p-8 bg-white border border-[#23120B]/10 rounded-2xl shadow-sm">
            <h3 className="font-display text-2xl mb-2">Speak with our Counsel</h3>
            <p className="text-sm text-muted-foreground mb-6">
              To discuss a matter related to {area.title}, please contact our chambers to schedule a consultation.
            </p>
            <a href="mailto:contact@firm.com" className="inline-block bg-[#23120B] text-[#F4F0E8] px-6 py-3 rounded-full text-xs font-mono tracking-widest hover:bg-terracotta transition-colors">
              INQUIRE
            </a>
          </div>
        </motion.div>
      </article>
    </main>
  );
}

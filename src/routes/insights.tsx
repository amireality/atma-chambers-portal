import { createFileRoute, Link } from '@tanstack/react-router';
import { insights } from '@/lib/insightsData';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/insights')({
  component: InsightsPage,
  head: () => ({
    meta: [
      { title: "Insights & Legal Knowledge | Advocate Tarun Mishra & Associates" },
      { name: "description", content: "Explore legal research, case law analysis, and practical guides relating to constitutional, commercial, criminal and regulatory law in India." },
    ],
  }),
});

function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">LEGAL KNOWLEDGE</p>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl font-light tracking-[0.02em]">
            INSIGHTS
          </h1>
          <p className="mt-8 text-lg font-light leading-relaxed text-[#23120B]/80 max-w-2xl">
            Legal research, case law analysis, and practical guides relating to our core practice areas.
          </p>
          <div className="mt-12 h-px w-24 bg-terracotta" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              to="/insights/$slug"
              params={{ slug: insight.slug }}
              className="group flex flex-col p-8 bg-white border border-[#23120B]/10 rounded-sm hover:border-terracotta transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#B99A62]">{insight.category}</span>
                <span className="font-mono text-[10px] tracking-widest text-[#23120B]/40">{insight.date}</span>
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-4 text-[#23120B] group-hover:text-terracotta transition-colors">
                {insight.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-[#23120B]/70 flex-grow mb-8">
                {insight.summary}
              </p>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#23120B] group-hover:text-terracotta transition-colors mt-auto">
                READ ARTICLE <span className="text-[#B99A62] transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

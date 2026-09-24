import { createFileRoute, Link } from '@tanstack/react-router';
import { insights } from '@/lib/insightsData';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/insights/$slug')({
  component: InsightArticlePage,
  head: () => ({
    meta: [
      { title: "Legal Insights | Advocate Tarun Mishra & Associates" },
      { name: "description", content: "Detailed legal analysis and updates from Tarun Mishra & Associates, Jaipur." },
    ],
  }),
});

function InsightArticlePage() {
  const { slug } = Route.useParams();
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    return <div className="pt-40 text-center">Article Not Found</div>;
  }

  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <article className="mx-auto max-w-3xl px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <Link to="/insights" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#23120B]/60 hover:text-terracotta transition-colors">
              <ArrowLeft className="w-3 h-3" /> BACK TO INSIGHTS
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#B99A62]">{insight.category}</span>
            <span className="font-mono text-[10px] tracking-widest text-[#23120B]/40">|</span>
            <span className="font-mono text-[10px] tracking-widest text-[#23120B]/40">{insight.date}</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-[0.02em] leading-tight mb-8">
            {insight.title}
          </h1>
          
          <div className="h-px w-full bg-[#23120B]/10 mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg font-light leading-relaxed text-[#23120B]/90"
        >
          <ReactMarkdown
            components={{
              h3: ({ node, ...props }) => <h3 className="font-display text-2xl mt-12 mb-6 text-terracotta" {...props} />,
              p: ({ node, ...props }) => <p className="mb-6 leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="space-y-3 mb-8 font-mono text-sm tracking-wide" {...props} />,
              ol: ({ node, ...props }) => <ol className="space-y-3 mb-8 list-decimal pl-5" {...props} />,
              li: ({ node, ...props }) => <li className="pl-2">{props.children}</li>,
              strong: ({ node, ...props }) => <strong className="font-medium text-[#23120B]" {...props} />,
              em: ({ node, ...props }) => <em className="italic text-[#23120B]/80" {...props} />,
            }}
          >
            {insight.content}
          </ReactMarkdown>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-[#23120B]/10">
          <div className="p-8 bg-white border border-[#23120B]/10 rounded-sm text-center">
            <h3 className="font-display text-2xl mb-4 text-[#23120B]">Discuss this matter</h3>
            <p className="text-[#23120B]/70 mb-8 max-w-lg mx-auto">
              If you require legal representation or advisory concerning issues discussed in this article, please reach out to our Chambers.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-[#23120B] text-[#F4F0E8] px-8 py-4 text-[10px] font-mono tracking-[0.2em] hover:bg-terracotta transition-colors rounded-full">
              REQUEST APPOINTMENT
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

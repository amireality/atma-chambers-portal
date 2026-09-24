import { createFileRoute, useParams, Link } from '@tanstack/react-router';
import { practiceAreas } from '@/lib/firmData';
import { practiceContent } from '@/lib/practiceContent';
import { faqs } from '@/lib/faqData';
import { FAQBlock } from '@/components/FAQBlock';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export const Route = createFileRoute('/practice/$areaId')({
  component: PracticeAreaDetail,
});

function PracticeAreaDetail() {
  const { areaId } = Route.useParams();
  const area = practiceAreas.find((a) => a.code.toLowerCase().replace('/', '-') === areaId);

  if (!area) {
    return <div className="pt-40 text-center">Practice Area Not Found</div>;
  }

  const content = practiceContent[area.code] || `Content for ${area.title} is coming soon.`;

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
          className="mt-16 text-lg font-light leading-relaxed text-[#23120B]/80"
        >
          <ReactMarkdown
            components={{
              h1: () => null, // We already display the title above
              h2: ({ node, ...props }) => <h2 className="font-display text-3xl mt-16 mb-6 text-terracotta" {...props} />,
              h3: ({ node, ...props }) => <h3 className="font-display text-2xl mt-10 mb-4 text-[#23120B]" {...props} />,
              p: ({ node, ...props }) => <p className="mb-6 leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="space-y-4 mb-8 font-mono text-[13px] tracking-wide" {...props} />,
              li: ({ node, ...props }) => (
                <li className="flex gap-4">
                  <span className="text-[#B99A62]">▹</span>
                  <span>{props.children}</span>
                </li>
              ),
              strong: ({ node, ...props }) => <strong className="font-medium text-[#23120B]" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>

          {/* Related Sections & Contact */}
          <div className="mt-24 pt-12 border-t border-[#23120B]/10 space-y-16">
            
            {/* Practice Specific FAQs */}
            {faqs.filter(f => f.category === area.code).length > 0 && (
              <div>
                <h2 className="font-display text-3xl mb-8 text-[#23120B]">Frequently Asked Questions</h2>
                <FAQBlock faqs={faqs.filter(f => f.category === area.code)} />
                <div className="mt-4">
                  <Link to="/faq" className="font-mono text-[10px] tracking-widest text-[#B99A62] hover:text-[#23120B] transition-colors">
                    VIEW ALL FAQs →
                  </Link>
                </div>
              </div>
            )}

            {/* Related Practice Areas */}
            <div>
              <h2 className="font-display text-3xl mb-8 text-[#23120B]">Related Practice Areas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {practiceAreas.filter(a => a.code !== area.code).slice(0, 4).map((related) => (
                  <Link
                    key={related.code}
                    to="/practice/$areaId"
                    params={{ areaId: related.code.toLowerCase().replace('/', '-') }}
                    className="group flex items-center justify-between p-6 bg-white border border-[#23120B]/10 hover:border-terracotta transition-colors rounded-sm"
                  >
                    <span className="font-display text-lg tracking-wide group-hover:text-terracotta transition-colors">{related.title}</span>
                    <span className="text-[#B99A62] transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Insights */}
            <div>
              <h2 className="font-display text-3xl mb-4 text-[#23120B]">Related Insights</h2>
              <p className="text-[#23120B]/70 mb-6">Explore our legal research, case law analysis, and practical guides relating to {area.title}.</p>
              <Link to="/insights" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-terracotta hover:text-[#23120B] transition-colors">
                VIEW INSIGHTS →
              </Link>
            </div>

            {/* Contact CTA */}
            <div className="p-8 bg-white border border-[#23120B]/10 rounded-sm">
              <h3 className="font-display text-2xl mb-2 text-[#23120B]">Speak with our Counsel</h3>
              <p className="text-[#23120B]/70 mb-6">
                To discuss a matter related to {area.title}, please contact our chambers to schedule a consultation.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#23120B] text-[#F4F0E8] px-8 py-4 text-[10px] font-mono tracking-[0.2em] hover:bg-terracotta transition-colors rounded-full">
                REQUEST APPOINTMENT
              </Link>
            </div>
            
          </div>
        </motion.div>
      </article>
    </main>
  );
}

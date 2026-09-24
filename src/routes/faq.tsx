import { createFileRoute } from '@tanstack/react-router';
import { faqs } from '@/lib/faqData';
import { FAQBlock } from '@/components/FAQBlock';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/faq')({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Advocate Tarun Mishra & Associates" },
      { name: "description", content: "Answers to common inquiries regarding our legal practice, jurisdiction, consultation process, and approach." },
    ],
  }),
});

function FAQPage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">LEGAL ASSISTANCE</p>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl font-light tracking-[0.02em]">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="mt-8 text-lg font-light leading-relaxed text-[#23120B]/80 max-w-2xl">
            Common inquiries regarding our practice, jurisdiction, and legal approach.
          </p>
          <div className="mt-12 h-px w-24 bg-terracotta mb-16" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FAQBlock faqs={faqs} />
        </motion.div>
      </div>
    </main>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <article className="mx-auto max-w-3xl px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">LEGAL</p>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl font-light tracking-[0.02em]">
            PRIVACY POLICY
          </h1>
          <div className="mt-8 h-px w-24 bg-[#B99A62]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 space-y-8 text-base font-light leading-relaxed text-[#23120B]/80"
        >
          <p className="font-medium text-[#23120B]">Last Updated: September 2026</p>
          
          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">1. Information Collection</h2>
            <p>
              Advocate Tarun Mishra & Associates respects your privacy and is committed to protecting your personal data. We collect information that you provide directly to us when seeking legal consultation, including your name, contact details, and case-related documentation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">2. Attorney-Client Privilege</h2>
            <p>
              All information shared with our firm for the purpose of seeking legal advice is protected under the strict rules of Attorney-Client Privilege as mandated by the Advocates Act, 1961 and the Bar Council of India Rules. We do not disclose any confidential information without explicit consent or unless required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">3. Data Security</h2>
            <p>
              We implement robust security measures to safeguard your personal and sensitive information. Physical files are stored in secure facilities, and digital data is encrypted and accessible only to authorized personnel handling your case.
            </p>
          </section>
        </motion.div>
      </article>
    </main>
  );
}

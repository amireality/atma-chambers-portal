import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/terms')({
  component: TermsPage,
});

function TermsPage() {
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
            TERMS OF USE
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
            <h2 className="font-display text-2xl text-terracotta mb-4">1. No Attorney-Client Relationship</h2>
            <p>
              The materials on this website are intended for informational purposes only and do not constitute legal advice. Accessing this website or contacting our firm through it does not create an attorney-client relationship. An attorney-client relationship is only formed upon the execution of a formal engagement agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">2. Accuracy of Information</h2>
            <p>
              While we strive to ensure the information on this website is accurate and up-to-date, the law is constantly evolving. We make no warranties, express or implied, regarding the accuracy, completeness, or adequacy of the information contained herein.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">3. Bar Council of India Rules</h2>
            <p>
              As per the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise. By clicking, accessing, or viewing this website, you acknowledge that you are seeking information about Advocate Tarun Mishra & Associates of your own accord and that there has been no solicitation, invitation, or inducement of any sort whatsoever from our firm or its members.
            </p>
          </section>
        </motion.div>
      </article>
    </main>
  );
}

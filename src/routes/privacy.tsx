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
          className="mt-16 space-y-12 text-base font-light leading-relaxed text-[#23120B]/80"
        >
          <p className="font-medium text-[#23120B]">Last Updated: September 2026</p>
          
          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">1. Information Collection and Use</h2>
            <p className="mb-4">
              Advocate Tarun Mishra & Associates respects your privacy and is committed to protecting your personal data. This privacy policy informs you of how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you.
            </p>
            <p>
              We collect information that you provide directly to us when seeking legal consultation, including your name, contact details, identification documents, and case-related documentation. We may also collect technical data such as your IP address, browser type, and operating system when you interact with our digital platforms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">2. Attorney-Client Privilege and Confidentiality</h2>
            <p className="mb-4">
              All information shared with our firm for the purpose of seeking legal advice is protected under the strict rules of Attorney-Client Privilege as mandated by Section 126 of the Indian Evidence Act, 1872, the Advocates Act, 1961, and the Bar Council of India Rules.
            </p>
            <p>
              We maintain absolute confidentiality regarding all communications and documentation shared by our clients. We do not disclose any confidential information without your explicit written consent, unless strictly required by a court of competent jurisdiction or under applicable statutory obligations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">3. Data Security and Retention</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Access to your personal data is limited to those employees, agents, contractors, and other third parties who have a strict business need to know.
            </p>
            <p>
              Physical files are stored in secure, restricted-access facilities. Digital data is encrypted and stored on secure servers. We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">4. Third-Party Disclosures</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information strictly confidential and are bound by non-disclosure agreements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access to your personal data, request correction of the personal data that we hold about you, and request erasure of your personal data. To exercise any of these rights, please contact our administrative office.
            </p>
          </section>
        </motion.div>
      </article>
    </main>
  );
}

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
          className="mt-16 space-y-12 text-base font-light leading-relaxed text-[#23120B]/80"
        >
          <p className="font-medium text-[#23120B]">Last Updated: September 2026</p>
          
          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">1. General Disclaimers and No Attorney-Client Relationship</h2>
            <p className="mb-4">
              The materials on this website are intended for general informational purposes only and do not constitute legal advice or legal opinion on any specific facts or circumstances. Visitors should not act, or refrain from acting, based upon any information available on this website.
            </p>
            <p>
              Accessing this website, downloading materials, or contacting our firm through the website does not create an attorney-client relationship. An attorney-client relationship is strictly formed only upon the mutual execution of a formal, written letter of engagement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">2. Compliance with Bar Council of India Rules</h2>
            <p className="mb-4">
              As per the rules of the Bar Council of India, law firms and legal practitioners are not permitted to solicit work or advertise their services. By clicking, accessing, or viewing this website, you formally acknowledge that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You are seeking information about Advocate Tarun Mishra & Associates of your own accord.</li>
              <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from our firm or any of its members.</li>
              <li>The information provided on this website is provided solely at your request for informational purposes only.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">3. Accuracy and Limitation of Liability</h2>
            <p className="mb-4">
              While we strive to ensure the information on this website is accurate and up-to-date, jurisprudence and statutory laws are constantly evolving. We make no warranties, express or implied, regarding the accuracy, completeness, or adequacy of the information contained herein.
            </p>
            <p>
              Advocate Tarun Mishra & Associates, its partners, associates, and affiliates shall not be liable for any loss or damage whatsoever arising out of or in connection with the use of or reliance on the information contained on this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">4. Intellectual Property Rights</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Advocate Tarun Mishra & Associates or its content suppliers and is protected by Indian and international copyright laws. Any unauthorized use, reproduction, or distribution of the materials on this website is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-terracotta mb-4">5. Governing Law and Jurisdiction</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with this website or these terms shall be subject to the exclusive jurisdiction of the courts of Jaipur, Rajasthan.
            </p>
          </section>
        </motion.div>
      </article>
    </main>
  );
}

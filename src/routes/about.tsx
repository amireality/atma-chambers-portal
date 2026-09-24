import { createFileRoute, Link } from '@tanstack/react-router';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { firm, leadCounsel, associates, location, office, contact } from '@/lib/firmData';

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

  const allCounsel = [leadCounsel, ...associates];

  return (
    <main ref={ref} className="relative min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 relative flex gap-8">
        
        {/* Tracing Beam */}
        <div className="hidden lg:block relative w-1 rounded-full bg-[#23120B]/10 overflow-hidden shrink-0 ml-4">
          <motion.div
            style={{ height }}
            className="w-full bg-gradient-to-b from-[#B99A62] via-terracotta to-transparent rounded-full shadow-[0_0_15px_rgba(185,154,98,0.5)]"
          />
        </div>

        <div className="flex-1 max-w-4xl lg:pl-10 pb-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">THE FIRM</p>
            <h1 className="mt-6 font-display text-5xl font-light tracking-[0.02em] sm:text-7xl">
              ABOUT THE CHAMBERS
            </h1>
            <p className="mt-6 font-mono text-sm tracking-widest text-terracotta uppercase">
              ESTABLISHED 2010
            </p>
            <div className="mt-8 h-px w-24 bg-terracotta" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 space-y-24"
          >
            {/* Opening Positioning */}
            <section className="text-xl sm:text-2xl font-light leading-relaxed text-[#23120B]">
              <p>
                {firm.name} is a legal practice established in 2010 and based in Jaipur, Rajasthan, with practice before the Rajasthan High Court and in matters falling within its areas of legal practice.
              </p>
            </section>

            {/* Our Practice */}
            <section>
              <h2 className="font-display text-3xl mb-6 text-terracotta">Our Practice</h2>
              <div className="text-lg font-light leading-relaxed text-[#23120B]/80 space-y-6">
                <p>
                  The Chambers brings together advocates and legal practitioners working across litigation, regulatory matters, commercial disputes and public law. We handle cases involving complex constitutional interpretations, administrative actions, regulatory compliance, commercial disputes, criminal matters, and arbitration.
                </p>
              </div>
            </section>

            {/* Our Philosophy */}
            <section>
              <h2 className="font-display text-3xl mb-6 text-terracotta">Our Philosophy</h2>
              <div className="text-lg font-light leading-relaxed text-[#23120B]/80 space-y-6">
                <p>
                  Our philosophy is rooted in rigorous analytical standards and profound institutional experience. We believe that true advocacy requires strategic foresight, unwavering dedication, and a commitment to clear legal communication. We maintain a professional restraint that respects the judicial process while fiercely advocating for our clients' interests.
                </p>
              </div>
            </section>

            {/* Our Approach */}
            <section>
              <h2 className="font-display text-3xl mb-8 text-terracotta">Our Approach</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-white border border-[#23120B]/10 rounded-sm">
                  <span className="font-mono text-[10px] tracking-widest text-[#B99A62]">01</span>
                  <h3 className="font-display text-2xl mt-4 mb-3">UNDERSTAND</h3>
                  <p className="text-base font-light text-[#23120B]/70">We begin by understanding the factual background, documents, chronology and objectives underlying the matter.</p>
                </div>
                <div className="p-8 bg-white border border-[#23120B]/10 rounded-sm">
                  <span className="font-mono text-[10px] tracking-widest text-[#B99A62]">02</span>
                  <h3 className="font-display text-2xl mt-4 mb-3">ANALYSE</h3>
                  <p className="text-base font-light text-[#23120B]/70">We examine the applicable legal framework, relevant authorities, procedural considerations, potential risks and available remedies.</p>
                </div>
                <div className="p-8 bg-white border border-[#23120B]/10 rounded-sm">
                  <span className="font-mono text-[10px] tracking-widest text-[#B99A62]">03</span>
                  <h3 className="font-display text-2xl mt-4 mb-3">STRATEGISE</h3>
                  <p className="text-base font-light text-[#23120B]/70">The legal position is translated into a practical course of action suited to the nature of the matter and the client's objectives.</p>
                </div>
                <div className="p-8 bg-white border border-[#23120B]/10 rounded-sm">
                  <span className="font-mono text-[10px] tracking-widest text-[#B99A62]">04</span>
                  <h3 className="font-display text-2xl mt-4 mb-3">REPRESENT</h3>
                  <p className="text-base font-light text-[#23120B]/70">Where representation is required, the matter is prepared and pursued before the appropriate court, tribunal, authority or other forum.</p>
                </div>
              </div>
            </section>

            {/* Counsel */}
            <section>
              <h2 className="font-display text-3xl mb-8 text-terracotta">Counsel</h2>
              <p className="text-lg font-light leading-relaxed text-[#23120B]/80 mb-8">
                Tarun Mishra & Associates is led by Founder and Lead Counsel Adv. Tarun Kumar Mishra and supported by Associate Advocates Adv. J. P. Bhardwaj and Adv. Dikshant Prajapat.
              </p>
              
              <div className="mb-12">
                <Link
                  to="/profiles/$id"
                  params={{ id: leadCounsel.id }}
                  className="group flex flex-col sm:flex-row p-6 bg-white border border-[#23120B]/10 hover:border-terracotta transition-colors rounded-sm items-center sm:items-start gap-6"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-white relative rounded-sm overflow-hidden border border-[#23120B]/10">
                    {leadCounsel.imageUrl && (
                      <img src={leadCounsel.imageUrl} alt={leadCounsel.name} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#B99A62] mb-2 block">{leadCounsel.role}</span>
                    <span className="font-display text-2xl tracking-wide group-hover:text-terracotta transition-colors block mb-2">{leadCounsel.name}</span>
                    <p className="font-mono text-[11px] text-[#23120B]/60 tracking-widest uppercase mb-4">{leadCounsel.qualifications} | {leadCounsel.registration}</p>
                    <span className="font-mono text-[10px] tracking-widest text-terracotta">VIEW FULL PROFILE →</span>
                  </div>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {associates.filter(a => a.id !== "shubham-agarwal").map((c) => (
                  <div
                    key={c.id}
                    className="flex flex-col p-8 bg-white border border-[#23120B]/10 rounded-sm"
                  >
                    <div className="w-24 h-24 mb-6 bg-white relative rounded-sm overflow-hidden border border-[#23120B]/10">
                      {c.imageUrl && (
                        <img src={c.imageUrl} alt={c.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                      )}
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#B99A62] mb-2">{c.role}</span>
                    <span className="font-display text-2xl tracking-wide mb-4 text-[#23120B]">{c.name}</span>
                    <div className="text-sm font-light leading-relaxed text-[#23120B]/70 space-y-4">
                      {c.profileText.slice(0, 2).map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Jurisdiction */}
            <section>
              <h2 className="font-display text-3xl mb-6 text-terracotta">Jurisdiction</h2>
              <div className="text-lg font-light leading-relaxed text-[#23120B]/80 space-y-6">
                <p>
                  Our primary practice is situated before the Rajasthan High Court, alongside representation before various statutory tribunals, regulatory authorities, and the Supreme Court of India in matters arising from our core practice areas.
                </p>
              </div>
            </section>

            {/* Chambers & Contact */}
            <section className="border-t border-[#23120B]/10 pt-16 mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-display text-3xl mb-6 text-[#23120B]">Chambers — Jaipur</h2>
                  <div className="font-mono text-sm tracking-widest leading-loose text-[#23120B]/80 space-y-1">
                    {office.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-display text-3xl mb-6 text-[#23120B]">Contact</h2>
                  <div className="font-mono text-sm tracking-widest leading-loose text-[#23120B]/80 space-y-1">
                    <p className="text-terracotta mb-4">CONSULTATION BY APPOINTMENT</p>
                    <p>E: <a href={`mailto:${contact.email}`} className="hover:text-terracotta transition-colors lowercase" style={{textTransform: 'none'}}>{contact.email}</a></p>
                    {contact.telephones.map((tel, i) => (
                      <p key={i}>T: {tel}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link to="/contact" className="inline-block bg-[#23120B] text-[#F4F0E8] px-8 py-4 text-[10px] font-mono tracking-[0.2em] hover:bg-terracotta transition-colors rounded-full">
                      REQUEST APPOINTMENT
                    </Link>
                  </div>
                </div>
              </div>
            </section>

          </motion.div>
        </div>
      </div>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Chambers } from "@/components/Chambers";
import { ComplianceGate } from "@/components/ComplianceGate";
import { CounselRoster } from "@/components/CounselRoster";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PracticeGrid } from "@/components/PracticeGrid";
import { TheChambersIntro } from "@/components/TheChambersIntro";
import { OurApproach } from "@/components/OurApproach";
import { FAQBlock } from "@/components/FAQBlock";
import { faqs } from "@/lib/faqData";
import { insights } from "@/lib/insightsData";
import { Link } from "@tanstack/react-router";

const title = "Advocate Tarun Mishra and Associates — Jaipur";
const description =
  "Advocates and legal practitioners at Jaipur, Rajasthan. Chambers particulars, areas of practice and contact information.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ComplianceGate>
      <main>
        <Hero />
        <TheChambersIntro />
        <PracticeGrid />
        <OurApproach />
        <CounselRoster />
        
        <section className="relative border-b border-[#23120B]/10 bg-[#F4F0E8] text-[#23120B] py-24 sm:py-32">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
            <div className="mb-16 flex flex-col items-start">
              <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">LEGAL KNOWLEDGE</p>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl font-light tracking-[0.02em] text-[#23120B]">
                INSIGHTS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.slice(0, 3).map((insight) => (
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
                  <h3 className="font-display text-xl tracking-wide mb-4 text-[#23120B] group-hover:text-terracotta transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#23120B]/70 flex-grow">
                    {insight.summary}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/insights" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#23120B] hover:text-terracotta transition-colors">
                VIEW ALL INSIGHTS <span className="text-[#B99A62] transform hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative border-b border-[#23120B]/10 bg-white text-[#23120B] py-24 sm:py-32">
          <div className="mx-auto max-w-[1000px] px-5 sm:px-10">
            <div className="mb-12 text-center">
              <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">LEGAL ASSISTANCE</p>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl font-light tracking-[0.02em] text-[#23120B]">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            <FAQBlock faqs={faqs.slice(0, 4)} />
            <div className="mt-12 text-center">
              <Link to="/faq" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#23120B] hover:text-terracotta transition-colors">
                VIEW ALL FAQs <span className="text-[#B99A62] transform hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        <Chambers />
      </main>
    </ComplianceGate>
  );
}

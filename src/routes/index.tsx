import { createFileRoute } from "@tanstack/react-router";
import { Chambers } from "@/components/Chambers";
import { ComplianceGate } from "@/components/ComplianceGate";
import { CounselRoster } from "@/components/CounselRoster";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PracticeGrid } from "@/components/PracticeGrid";

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
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <CounselRoster />
          <PracticeGrid />
          <Chambers />
        </main>
        <Footer />
      </div>
    </ComplianceGate>
  );
}

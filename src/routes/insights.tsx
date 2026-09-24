import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/insights')({
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">LEGAL KNOWLEDGE</p>
        <h1 className="mt-6 font-display text-5xl sm:text-7xl font-light tracking-[0.02em]">
          INSIGHTS
        </h1>
        <div className="mt-8 h-px w-24 bg-terracotta" />
        <div className="mt-16 text-lg font-light text-[#23120B]/80">
          <p>Legal research, case law analysis, and updates will be published here shortly.</p>
        </div>
      </div>
    </main>
  );
}

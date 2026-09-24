const principles = [
  { id: "01", title: "RIGOROUS ANALYSIS" },
  { id: "02", title: "MATTER-SPECIFIC STRATEGY" },
  { id: "03", title: "CLEAR LEGAL COMMUNICATION" },
  { id: "04", title: "LITIGATION & ADVISORY PERSPECTIVE" },
  { id: "05", title: "PUBLIC & REGULATORY UNDERSTANDING" },
  { id: "06", title: "STRUCTURED REPRESENTATION" },
];

export function OurApproach() {
  return (
    <section className="relative border-b border-[#23120B]/10 bg-[#F4F0E8] text-[#23120B]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="mb-16">
          <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">WHY US</p>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl font-light tracking-[0.02em] text-[#23120B]">
            THE CHAMBERS APPROACH
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div key={p.id} className="p-8 border border-[#23120B]/10 bg-white rounded-sm hover:border-terracotta transition-colors">
              <span className="font-mono text-[10px] tracking-widest text-[#B99A62] mb-4 block">
                {p.id}
              </span>
              <h3 className="font-display text-xl tracking-wide text-[#23120B]">
                {p.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

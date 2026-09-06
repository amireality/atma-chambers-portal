import { practiceAreas } from "@/lib/firmData";

export function PracticeGrid() {
  return (
    <section id="practice" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <p className="font-mono text-[10px] tracking-[0.32em] text-brass">03 / PRACTICE</p>
        <h2 className="mt-6 font-display text-5xl font-light tracking-[0.02em] text-foreground sm:text-7xl">
          AREAS OF PRACTICE
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-12">
          {practiceAreas.map((area) => (
            <article
              key={area.code}
              className={`group relative overflow-hidden bg-card p-8 transition-colors duration-300 hover:bg-elevated sm:p-10 ${area.span}`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brass/0 blur-2xl transition-colors duration-500 group-hover:bg-brass/20"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-brass/50"
              />

              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground">
                  {area.index}
                </span>
                <span className="font-mono text-[10px] tracking-[0.24em] text-brass">
                  {area.code}
                </span>
              </div>

              <h3 className="mt-10 max-w-[22ch] font-display text-2xl font-light leading-tight tracking-[0.01em] text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-brass-highlight sm:text-3xl">
                {area.title}
              </h3>

              <div className="mt-8 h-px w-10 bg-brass/40 transition-all duration-300 group-hover:w-24 group-hover:bg-brass" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

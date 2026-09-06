import { firm, location } from "@/lib/firmData";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-chambers.png"
          alt="Advocate Tarun Mishra & Associates — Executive Law Chambers"
          className="h-full w-full object-cover object-center opacity-40 mix-blend-overlay"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pb-20 pt-24 sm:px-10 sm:pb-32 sm:pt-40">
        <p className="font-mono text-[10px] tracking-[0.32em] text-brass">
          {location.city} · {location.state} · {location.country}
        </p>

        <h1 className="mt-10 font-display font-light leading-[0.92] tracking-[-0.01em] text-foreground drop-shadow-sm">
          <span className="block text-[13vw] sm:text-[9vw] lg:text-[7.6vw] xl:text-[115px]">
            {firm.displayName.first}
          </span>
          <span className="mt-1 block text-[13vw] italic text-brass drop-shadow-sm sm:text-[9vw] lg:text-[7.6vw] xl:text-[115px]">
            {firm.displayName.second}
          </span>
        </h1>

        <dl className="mt-16 grid grid-cols-1 gap-y-6 border-t border-border/50 pt-8 sm:mt-20 sm:grid-cols-3 sm:gap-x-10">
          <div>
            <dt className="rule-label text-brass/80">Location</dt>
            <dd className="mt-2 font-mono text-[12px] tracking-[0.14em] text-foreground">
              {location.city}
            </dd>
          </div>
          <div>
            <dt className="rule-label text-brass/80">Latitude</dt>
            <dd className="mt-2 font-mono text-[12px] tracking-[0.14em] text-foreground">
              {location.latitude}
            </dd>
          </div>
          <div>
            <dt className="rule-label text-brass/80">Longitude</dt>
            <dd className="mt-2 font-mono text-[12px] tracking-[0.14em] text-foreground">
              {location.longitude}
            </dd>
          </div>
        </dl>

        <div className="mt-14 h-px w-24 bg-brass" />
        <p className="mt-5 font-mono text-[10px] tracking-[0.32em] text-muted-foreground/80">
          {firm.descriptor}
        </p>
      </div>
    </section>
  );
}

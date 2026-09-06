import { firm, location } from "@/lib/firmData";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-chambers.png"
          alt="Advocate Tarun Mishra & Associates — Executive Law Chambers"
          className="h-full w-full object-cover object-center opacity-80"
          loading="eager"
        />
        {/* Soft gradient to ensure text readability without darkening the whole image too much */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pb-6 pt-6 sm:px-10 sm:pb-16 sm:pt-24">
        <p className="font-mono text-[9px] tracking-[0.32em] text-brass sm:text-[10px]">
          {location.city} · {location.state} · {location.country}
        </p>

        <h1 className="mt-4 font-display font-light leading-[0.9] tracking-[-0.01em] text-foreground drop-shadow-sm sm:mt-8">
          <span className="block text-[11vw] sm:text-[9vw] lg:text-[7.6vw] xl:text-[115px]">
            {firm.displayName.first}
          </span>
          <span className="mt-1 block text-[11vw] italic text-brass drop-shadow-sm sm:text-[9vw] lg:text-[7.6vw] xl:text-[115px]">
            {firm.displayName.second}
          </span>
        </h1>

        <dl className="mt-8 grid grid-cols-3 gap-x-2 border-t border-border/50 pt-5 sm:mt-12 sm:gap-x-10 sm:pt-6">
          <div>
            <dt className="rule-label text-[9px] text-brass/80 sm:text-[10px]">Location</dt>
            <dd className="mt-1 font-mono text-[10px] tracking-[0.1em] text-foreground sm:text-[12px] sm:tracking-[0.14em]">
              {location.city}
            </dd>
          </div>
          <div>
            <dt className="rule-label text-[9px] text-brass/80 sm:text-[10px]">Latitude</dt>
            <dd className="mt-1 font-mono text-[10px] tracking-[0.1em] text-foreground sm:text-[12px] sm:tracking-[0.14em]">
              {location.latitude}
            </dd>
          </div>
          <div>
            <dt className="rule-label text-[9px] text-brass/80 sm:text-[10px]">Longitude</dt>
            <dd className="mt-1 font-mono text-[10px] tracking-[0.1em] text-foreground sm:text-[12px] sm:tracking-[0.14em]">
              {location.longitude}
            </dd>
          </div>
        </dl>

        <div className="mt-6 h-px w-16 bg-brass sm:mt-12 sm:w-24" />
        <p className="mt-3 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/80 sm:mt-4 sm:text-[10px] sm:tracking-[0.32em]">
          {firm.descriptor}
        </p>
      </div>
    </section>
  );
}

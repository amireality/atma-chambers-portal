import { firm, location } from "@/lib/firmData";

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-24 sm:px-10 sm:pb-32 sm:pt-40">
        <p className="font-mono text-[10px] tracking-[0.32em] text-brass">
          {location.city} · {location.state} · {location.country}
        </p>

        <h1 className="mt-10 font-display font-light leading-[0.92] tracking-[-0.01em] text-foreground">
          <span className="block text-[13vw] sm:text-[9vw] lg:text-[7.6vw] xl:text-[115px]">
            {firm.displayName.first}
          </span>
          <span className="mt-1 block text-[13vw] italic text-brass sm:text-[9vw] lg:text-[7.6vw] xl:text-[115px]">
            {firm.displayName.second}
          </span>
        </h1>

        <dl className="mt-20 grid grid-cols-1 gap-y-6 border-t border-border pt-8 sm:grid-cols-3 sm:gap-x-10">
          <div>
            <dt className="rule-label">Location</dt>
            <dd className="mt-2 font-mono text-[12px] tracking-[0.14em] text-foreground">
              {location.city}
            </dd>
          </div>
          <div>
            <dt className="rule-label">Latitude</dt>
            <dd className="mt-2 font-mono text-[12px] tracking-[0.14em] text-foreground">
              {location.latitude}
            </dd>
          </div>
          <div>
            <dt className="rule-label">Longitude</dt>
            <dd className="mt-2 font-mono text-[12px] tracking-[0.14em] text-foreground">
              {location.longitude}
            </dd>
          </div>
        </dl>

        <div className="mt-14 h-px w-24 bg-brass" />
        <p className="mt-5 font-mono text-[10px] tracking-[0.32em] text-muted-foreground">
          {firm.descriptor}
        </p>
      </div>
    </section>
  );
}

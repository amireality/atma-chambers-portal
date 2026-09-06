import { contact, location, office } from "@/lib/firmData";

export function Chambers() {
  return (
    <section id="chambers" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="font-mono text-[10px] tracking-[0.32em] text-brass">04 / CHAMBERS</p>
            <h2 className="mt-6 font-display text-6xl font-light leading-[0.95] tracking-[0.01em] text-foreground sm:text-7xl lg:text-8xl">
              CHAMBERS
              <span className="block italic text-brass">JAIPUR</span>
            </h2>
            <div className="mt-10 h-px w-24 bg-brass" />
            <p className="mt-5 font-mono text-[10px] tracking-[0.26em] text-muted-foreground">
              {location.latitude} / {location.longitude}
            </p>
          </div>

          <div className="lg:col-span-6">
            <dl className="border-t border-border">
              <div className="border-b border-border py-8">
                <dt className="rule-label">Address</dt>
                <dd className="mt-4 font-display text-2xl font-light leading-snug text-foreground">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>

              <div className="border-b border-border py-8">
                <dt className="rule-label">Telephone</dt>
                <dd className="mt-4 space-y-2">
                  {contact.telephones.map((t) => (
                    <a
                      key={t}
                      href={`tel:${t.replace(/\s/g, "")}`}
                      className="block w-fit border-b border-transparent font-mono text-[13px] tracking-[0.14em] text-foreground transition-colors duration-300 hover:border-brass hover:text-brass"
                    >
                      {t}
                    </a>
                  ))}
                </dd>
              </div>

              <div className="border-b border-border py-8">
                <dt className="rule-label">Electronic Correspondence</dt>
                <dd className="mt-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="block w-fit border-b border-transparent font-mono text-[13px] tracking-[0.14em] text-foreground transition-colors duration-300 hover:border-brass hover:text-brass"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

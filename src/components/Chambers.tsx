import { contact, location, office } from "@/lib/firmData";

export function Chambers() {
  return (
    <section id="chambers" className="border-b border-[#23120B]/10 bg-[#F4F0E8] text-[#23120B]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">04 / CHAMBERS</p>
            <h2 className="mt-6 font-display text-6xl font-light leading-[0.95] tracking-[0.01em] text-[#23120B] sm:text-7xl lg:text-8xl">
              CHAMBERS
              <span className="block italic text-[#B99A62]">JAIPUR</span>
            </h2>
            <div className="mt-10 h-px w-24 bg-[#B99A62]" />
            <p className="mt-5 font-mono text-[10px] tracking-[0.26em] text-[#23120B]/60">
              {location.latitude} / {location.longitude}
            </p>
          </div>

          <div className="lg:col-span-6">
            <dl className="border-t border-[#23120B]/10">
              <div className="border-b border-[#23120B]/10 py-8">
                <dt className="rule-label text-[#23120B]/50">Address</dt>
                <dd className="mt-4 font-display text-2xl font-light leading-snug text-[#23120B]">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>

              <div className="border-b border-[#23120B]/10 py-8">
                <dt className="rule-label text-[#23120B]/50">Telephone</dt>
                <dd className="mt-4 space-y-2">
                  {contact.telephones.map((t) => (
                    <a
                      key={t}
                      href={`tel:${t.replace(/\s/g, "")}`}
                      className="block w-fit border-b border-transparent font-mono text-[13px] tracking-[0.14em] text-[#23120B] transition-colors duration-300 hover:border-[#B99A62] hover:text-[#B99A62]"
                    >
                      {t}
                    </a>
                  ))}
                </dd>
              </div>

              <div className="border-b border-[#23120B]/10 py-8">
                <dt className="rule-label text-[#23120B]/50">Electronic Correspondence</dt>
                <dd className="mt-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="block w-fit border-b border-transparent font-mono text-[13px] tracking-[0.14em] text-[#23120B] transition-colors duration-300 hover:border-[#B99A62] hover:text-[#B99A62]"
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

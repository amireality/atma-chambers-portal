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
                <dt className="rule-label text-[#23120B]/50">Address</dt>
                <dd className="mt-4 font-display text-2xl font-light leading-snug text-[#23120B]">
                  <a 
                    href="https://share.google/DD14SsWJDK4NTWl08" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block transition-colors hover:text-[#B99A62]"
                  >
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </a>
                </dd>
              </div>

              <div className="border-b border-[#23120B]/10 py-8">
                <dt className="rule-label text-[#23120B]/50">Telephone & WhatsApp</dt>
                <dd className="mt-4 flex flex-col gap-3">
                  {contact.telephones.map((t) => (
                    <div key={t} className="flex items-center gap-4">
                      <a
                        href={`tel:${t.replace(/\s/g, "")}`}
                        className="w-fit border-b border-transparent font-mono text-[13px] tracking-[0.14em] text-[#23120B] transition-colors duration-300 hover:border-[#B99A62] hover:text-[#B99A62]"
                      >
                        {t}
                      </a>
                      {t.includes("89558") && (
                        <a
                          href={`https://wa.me/${t.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
                          title="Chat on WhatsApp"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                          </svg>
                        </a>
                      )}
                    </div>
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

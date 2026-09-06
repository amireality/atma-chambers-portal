import { associates, leadCounsel } from "@/lib/firmData";

type Row = {
  name: string;
  role: string;
  meta: string[];
};

const rows: Row[] = [
  {
    name: leadCounsel.name,
    role: leadCounsel.role,
    meta: [leadCounsel.qualifications, leadCounsel.registration],
  },
  ...associates.map((a) => ({ name: a.name, role: a.role, meta: [] })),
];

export function CounselRoster() {
  return (
    <section id="counsel" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] tracking-[0.32em] text-brass">02 / COUNSEL</p>
            <h2 className="mt-6 font-display text-5xl font-light tracking-[0.02em] text-foreground sm:text-6xl">
              THE CHAMBERS
            </h2>
            <p className="mt-6 font-mono text-[10px] tracking-[0.26em] text-muted-foreground">
              PROFESSIONAL PARTICULARS
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-border">
              {rows.map((row, i) => (
                <li key={row.name} className="group border-b border-border">
                  <div className="grid grid-cols-1 items-baseline gap-3 py-8 transition-colors duration-300 group-hover:bg-surface/60 sm:grid-cols-12 sm:gap-6 sm:px-2">
                    <span className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground sm:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="sm:col-span-6">
                      <h3 className="font-display text-3xl font-light tracking-[0.01em] text-foreground transition-transform duration-300 group-hover:-translate-y-px group-hover:text-brass-highlight sm:text-[34px]">
                        {row.name}
                      </h3>
                      <div className="mt-3 h-px w-8 bg-brass/50 transition-all duration-300 group-hover:w-20 group-hover:bg-brass" />
                    </div>

                    <div className="sm:col-span-5 sm:text-right">
                      <p className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        {row.role}
                      </p>
                      {row.meta.map((m) => (
                        <p
                          key={m}
                          className="mt-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground/80 transition-colors duration-300 group-hover:text-brass"
                        >
                          {m}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

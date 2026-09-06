import { firm, location } from "@/lib/firmData";

const nav = [
  { label: "COUNSEL", href: "#counsel" },
  { label: "PRACTICE", href: "#practice" },
  { label: "CHAMBERS", href: "#chambers" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 h-[72px] border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 sm:px-10">
        <a
          href="#top"
          className="font-mono text-[12px] tracking-[0.32em] text-foreground transition-colors hover:text-brass"
        >
          {firm.shortName}
        </a>

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="border-b border-transparent pb-1 font-mono text-[10px] tracking-[0.26em] text-muted-foreground transition-colors duration-300 hover:border-brass hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span className="font-mono text-[10px] tracking-[0.26em] text-muted-foreground">
          {location.city} / IN
        </span>
      </div>

      <nav aria-label="Sections" className="md:hidden">
        <ul className="flex items-center justify-center gap-8 border-b border-border bg-background/70 py-3 backdrop-blur-xl">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

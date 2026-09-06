import { useEffect, useRef, useState } from "react";
import { disclaimer, firm } from "@/lib/firmData";

export function ComplianceGate({ children }: { children: React.ReactNode }) {
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ok = false;
    try {
      ok = window.localStorage.getItem(disclaimer.storageKey) === "true";
    } catch {
      ok = false;
    }
    setAccepted(ok);
  }, []);

  useEffect(() => {
    if (accepted === false) {
      document.body.style.overflow = "hidden";
      acceptRef.current?.focus();
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
    return undefined;
  }, [accepted]);

  const onAccept = () => {
    try {
      window.localStorage.setItem(disclaimer.storageKey, "true");
    } catch {
      /* storage unavailable — proceed for this session */
    }
    setAccepted(true);
  };

  const gateOpen = accepted !== true;

  return (
    <>
      <div
        aria-hidden={gateOpen}
        {...(gateOpen ? { inert: "" as unknown as boolean } : {})}
        className={
          gateOpen
            ? "pointer-events-none select-none blur-[10px] saturate-50 brightness-[0.55]"
            : undefined
        }
      >
        {children}
      </div>

      {gateOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="bci-disclaimer-heading"
          className="gate-backdrop fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-5 py-10"
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();
              acceptRef.current?.focus();
            }
          }}
        >
          <div className="w-full max-w-2xl border border-border bg-card/80 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-10">
              <span className="font-mono text-[10px] tracking-[0.28em] text-brass">
                {firm.shortName}
              </span>
              <span className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground">
                BAR COUNCIL OF INDIA · RULE 36
              </span>
            </div>

            <div className="px-6 py-10 sm:px-10 sm:py-12">
              <h1
                id="bci-disclaimer-heading"
                className="font-display text-3xl font-light tracking-[0.06em] text-foreground sm:text-4xl"
              >
                {disclaimer.heading}
              </h1>
              <div className="mt-6 h-px w-16 bg-brass" />

              <div className="mt-8 space-y-5">
                {disclaimer.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="text-[13px] leading-[1.85] text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-border px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <span className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground">
                {firm.domain.toUpperCase()}
              </span>
              <button
                ref={acceptRef}
                type="button"
                onClick={onAccept}
                className="border border-brass/60 px-8 py-3 font-mono text-[11px] tracking-[0.28em] text-brass-highlight transition-colors duration-300 hover:border-brass hover:bg-brass hover:text-primary-foreground"
              >
                ACCEPT &amp; ENTER →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

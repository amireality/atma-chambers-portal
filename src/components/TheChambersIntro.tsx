import { Link } from "@tanstack/react-router";

export function TheChambersIntro() {
  return (
    <section className="relative border-b border-[#23120B]/10 bg-white text-[#23120B]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="max-w-4xl">
          <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">THE CHAMBERS</p>
          <h2 className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-[0.01em] text-terracotta">
            A collaborative legal practice anchored by rigorous analytical standards and profound institutional experience.
          </h2>
          <div className="mt-12 space-y-6 text-lg font-light leading-relaxed text-[#23120B]/80 max-w-2xl">
            <p>
              Advocate Tarun Mishra & Associates is structured as a collaborative legal practice, bringing together advocates and legal practitioners across litigation, regulatory, commercial and public law matters.
            </p>
            <p>
              The Chambers approaches each matter through careful factual examination, legal research, strategic assessment and focused representation.
            </p>
          </div>
          <div className="mt-12">
            <Link to="/about" className="group inline-flex items-center gap-4 font-mono text-[10px] tracking-widest text-[#23120B] hover:text-terracotta transition-colors">
              ABOUT THE CHAMBERS 
              <span className="text-[#B99A62] transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

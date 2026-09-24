import { associates, leadCounsel } from "@/lib/firmData";
import { Link } from "@tanstack/react-router";

export function CounselRoster() {
  // Only display verified associates
  const activeAssociates = associates.filter(a => a.id !== "shubham-agarwal");

  return (
    <section id="counsel" className="relative border-b border-[#23120B]/10 bg-[#F4F0E8] text-[#23120B]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-32 pb-24 sm:px-10 sm:pt-40 sm:pb-32">
        <div className="mb-16 flex flex-col items-start animate-fade-in-up">
          <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62]">THE TEAM</p>
          <h2 className="mt-6 font-display text-5xl font-light tracking-[0.02em] text-[#23120B] sm:text-7xl">
            COUNSEL
          </h2>
          <div className="mt-12 space-y-6 text-lg font-light leading-relaxed text-[#23120B]/80 max-w-3xl">
            <p>
              Tarun Mishra & Associates is led by Founder and Lead Counsel Adv. Tarun Kumar Mishra and supported by Associate Advocates Adv. J. P. Bhardwaj and Adv. Dikshant Prajapat.
            </p>
            <p>
              The Chambers follows a collaborative approach in which legal strategy, research, preparation, drafting and representation are brought together according to the requirements of each matter.
            </p>
            <p>
              Adv. Tarun Kumar Mishra provides the principal legal direction and strategic oversight of the practice, while the associate advocates contribute to the detailed research, documentation, drafting and preparation involved in matters undertaken by the Chambers.
            </p>
            <p>
              This structure enables the practice to approach legal matters as complete factual and legal problems, taking into account the applicable law, documentary record, procedural position and available legal remedies.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* Lead Counsel Section */}
          <div className="w-full max-w-lg mb-16">
            <h3 className="font-display text-2xl text-terracotta mb-6 text-center">Lead Counsel</h3>
            <Link
              to={`/profiles/${leadCounsel.id}`}
              className="group block bg-white border border-[#23120B]/10 rounded-sm overflow-hidden flex flex-col hover:border-terracotta/30 transition-all shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-[#F4F0E8] relative border-b border-[#23120B]/10">
                {leadCounsel.imageUrl && (
                  <img src={leadCounsel.imageUrl} alt={leadCounsel.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                )}
              </div>
              <div className="p-8 md:p-10 flex-grow flex flex-col items-center text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B99A62] mb-4 block">
                  {leadCounsel.role}
                </span>
                <h4 className="font-display text-4xl text-[#23120B] mb-4">
                  {leadCounsel.name}
                </h4>
                <div className="font-mono text-[11px] tracking-[0.15em] text-[#23120B]/70 space-y-1 mb-8">
                  <p>{leadCounsel.qualifications}</p>
                  <p>{leadCounsel.registration}</p>
                </div>
                <div className="flex items-center justify-center gap-4 mt-auto">
                  <span className="font-mono text-[10px] tracking-widest text-[#23120B]/60 transition-colors group-hover:text-[#B99A62] flex items-center gap-2">
                    VIEW FULL PROFILE →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Associate Advocates Section */}
          <div className="w-full max-w-4xl">
            <h3 className="font-display text-2xl text-terracotta mb-6 text-center">Associate Advocates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {activeAssociates.map((associate) => (
                <div key={associate.id} className="bg-white border border-[#23120B]/10 rounded-sm overflow-hidden flex flex-col">
                  <div className="aspect-[4/3] sm:aspect-[3/2] bg-[#F4F0E8] relative border-b border-[#23120B]/10 flex-shrink-0">
                    {associate.imageUrl && (
                      <img src={associate.imageUrl} alt={associate.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                    )}
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B99A62] mb-3 block">
                      {associate.role}
                    </span>
                    <h4 className="font-display text-2xl text-[#23120B] mb-4">
                      {associate.name}
                    </h4>
                    <div className="text-sm font-light leading-relaxed text-[#23120B]/80 space-y-3 line-clamp-4">
                      <p>{associate.profileText[0]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

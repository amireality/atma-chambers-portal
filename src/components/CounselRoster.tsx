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

        {/* Lead Counsel Section */}
        <div className="mb-24">
          <h3 className="font-display text-3xl text-terracotta mb-8">Lead Counsel</h3>
          <Link
            to={`/profiles/${leadCounsel.id}`}
            className="group block relative overflow-hidden rounded-sm border border-[#23120B]/10 bg-white hover:border-terracotta/30 transition-all max-w-4xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="aspect-square md:aspect-auto md:h-full bg-white relative border-r border-[#23120B]/10">
                {leadCounsel.imageUrl && (
                  <img src={leadCounsel.imageUrl} alt={leadCounsel.name} className="absolute inset-0 w-full h-full object-cover" />
                )}
              </div>
              <div className="p-8 md:p-12 md:col-span-2 flex flex-col justify-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B99A62] mb-4 block">
                  {leadCounsel.role}
                </span>
                <h4 className="font-display text-4xl text-[#23120B] mb-4">
                  {leadCounsel.name}
                </h4>
                <div className="font-mono text-[11px] tracking-[0.15em] text-[#23120B]/70 space-y-2 mb-8">
                  <p>{leadCounsel.qualifications}</p>
                  <p>{leadCounsel.registration}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-[#23120B]/20 transition-all duration-300 group-hover:w-24 group-hover:bg-[#B99A62]" />
                  <span className="font-mono text-[10px] tracking-widest text-[#23120B]/40 transition-colors group-hover:text-[#B99A62] flex items-center gap-2">
                    VIEW FULL PROFILE →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Associate Advocates Section */}
        <div>
          <h3 className="font-display text-3xl text-terracotta mb-8">Associate Advocates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {activeAssociates.map((associate) => (
              <div key={associate.id} className="bg-white border border-[#23120B]/10 rounded-sm overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-white relative border-b border-[#23120B]/10">
                  {associate.imageUrl && (
                    <img src={associate.imageUrl} alt={associate.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                  )}
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B99A62] mb-4 block">
                    {associate.role}
                  </span>
                  <h4 className="font-display text-3xl text-[#23120B] mb-6">
                    {associate.name}
                  </h4>
                  <div className="text-sm font-light leading-relaxed text-[#23120B]/80 space-y-4 flex-grow">
                    {associate.profileText.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Flow Graph */}
        <div className="mt-24 max-w-4xl border-t border-[#23120B]/10 pt-16">
          <h3 className="font-display text-3xl text-terracotta mb-12 text-center">Team Flow</h3>
          <div className="flex flex-col items-center font-mono text-xs tracking-widest text-[#23120B]">
            
            {/* Top Node */}
            <div className="text-center mb-4">
              <span className="block font-medium text-sm mb-1">{leadCounsel.name.toUpperCase()}</span>
              <span className="text-[#B99A62]">{leadCounsel.role}</span>
            </div>
            
            <div className="h-6 w-px bg-[#23120B]/20 mb-4" />
            <span className="text-[10px] text-terracotta tracking-[0.3em] mb-4">LEGAL DIRECTION</span>
            <div className="h-6 w-px bg-[#23120B]/20 mb-0" />
            
            {/* Branch */}
            <div className="w-full max-w-md h-px bg-[#23120B]/20 relative">
              <div className="absolute left-0 top-0 w-px h-6 bg-[#23120B]/20" />
              <div className="absolute right-0 top-0 w-px h-6 bg-[#23120B]/20" />
            </div>
            
            {/* Middle Nodes */}
            <div className="flex justify-between w-full max-w-lg mt-6 mb-4 px-4">
              <div className="text-center w-1/2">
                <span className="block font-medium mb-1">ADV. J. P. BHARDWAJ</span>
                <span className="text-[#B99A62] text-[10px]">ASSOCIATE ADVOCATE</span>
              </div>
              <div className="text-center w-1/2">
                <span className="block font-medium mb-1">ADV. DIKSHANT PRAJAPAT</span>
                <span className="text-[#B99A62] text-[10px]">ASSOCIATE ADVOCATE</span>
              </div>
            </div>
            
            {/* Join */}
            <div className="w-full max-w-md h-px bg-[#23120B]/20 relative mt-4">
              <div className="absolute left-0 bottom-0 w-px h-6 bg-[#23120B]/20" />
              <div className="absolute right-0 bottom-0 w-px h-6 bg-[#23120B]/20" />
            </div>
            
            <div className="h-6 w-px bg-[#23120B]/20 mt-0 mb-4" />
            
            {/* Flow Steps */}
            <div className="flex flex-col items-center space-y-4 w-full max-w-xs">
              <div className="w-full text-center border border-[#23120B]/10 p-3 bg-white/50">RESEARCH & PREPARATION</div>
              <div className="h-4 w-px bg-[#23120B]/20" />
              <div className="w-full text-center border border-[#23120B]/10 p-3 bg-white/50">DRAFTING & ANALYSIS</div>
              <div className="h-4 w-px bg-[#23120B]/20" />
              <div className="w-full text-center border border-[#23120B]/10 p-3 bg-white/50">MATTER PREPARATION</div>
              <div className="h-4 w-px bg-[#23120B]/20" />
              <div className="w-full text-center border border-terracotta p-3 bg-terracotta text-white font-medium">REPRESENTATION / ADVICE</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

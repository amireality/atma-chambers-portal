import { createFileRoute } from '@tanstack/react-router';
import { associates, leadCounsel } from '@/lib/firmData';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/profiles/$id')({
  component: ProfilePage,
});

function ProfilePage() {
  const { id } = Route.useParams();
  
  const allCounsel = [leadCounsel, ...associates];
  const profile = allCounsel.find((p) => p.name.toLowerCase().replace(/\s+/g, '-') === id);

  if (!profile) {
    return <div className="pt-40 text-center">Profile Not Found</div>;
  }

  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <article className="mx-auto max-w-5xl px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] bg-[#23120B]/5 rounded-[2rem] border border-[#23120B]/10 overflow-hidden relative"
            >
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#23120B]/20 to-transparent mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-mono text-[10px] tracking-[0.32em] text-[#B99A62] uppercase">
                {profile.role}
              </p>
              <h1 className="mt-4 font-display text-5xl sm:text-7xl font-light tracking-[0.02em]">
                {profile.name}
              </h1>
              
              {'qualifications' in profile && (
                <div className="mt-8 space-y-2">
                  <p className="font-mono text-[10px] tracking-widest text-[#23120B]/60">
                    {profile.qualifications}
                  </p>
                  <p className="font-mono text-[10px] tracking-widest text-[#23120B]/60">
                    {profile.registration}
                  </p>
                </div>
              )}
              
              <div className="mt-12 h-px w-full max-w-md bg-[#23120B]/10" />

              <div className="mt-12 space-y-6 text-lg font-light leading-relaxed text-[#23120B]/80 max-w-2xl">
                <p>
                  With an extensive background in complex litigation and advisory, {profile.name} brings rigorous analytical standards to the chambers. The approach is deeply rooted in comprehensive legal research and strategic foresight.
                </p>
                <p>
                  Representing clients before various tribunals, high courts, and the supreme court, the practice spans across multiple domains of civil, commercial, and constitutional law.
                </p>
              </div>

              <div className="mt-16">
                <a href="mailto:contact@firm.com" className="inline-flex items-center justify-center border border-[#23120B] px-8 py-4 font-mono text-[10px] tracking-[0.2em] text-[#23120B] transition-all hover:bg-[#23120B] hover:text-[#F4F0E8] rounded-full">
                  CONTACT COUNSEL
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </article>
    </main>
  );
}

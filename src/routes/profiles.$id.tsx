import { createFileRoute, Link } from '@tanstack/react-router';
import { associates, leadCounsel, practiceAreas } from '@/lib/firmData';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/profiles/$id')({
  component: ProfilePage,
});

function ProfilePage() {
  const { id } = Route.useParams();
  
  const allCounsel = [leadCounsel, ...associates];
  // Match using the robust 'id' field now present on the objects
  const profile = allCounsel.find((p) => p.id === id);

  if (!profile) {
    return <div className="pt-40 text-center">Profile Not Found</div>;
  }

  const profilePracticeAreas = practiceAreas.filter(area => profile.practiceAreas.includes(area.code));

  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#23120B] pt-32 pb-24">
      <article className="mx-auto max-w-5xl px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] bg-[#23120B]/5 rounded-sm border border-[#23120B]/10 overflow-hidden relative"
            >
              {profile.imageUrl && (
                <img src={profile.imageUrl} alt={profile.name} className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#23120B]/40 via-transparent to-transparent mix-blend-multiply" />
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
              
              {(profile.qualifications || profile.registration) && (
                <div className="mt-8 space-y-2">
                  {profile.qualifications && (
                    <p className="font-mono text-[11px] tracking-widest text-[#23120B]/70">
                      {profile.qualifications}
                    </p>
                  )}
                  {profile.registration && (
                    <p className="font-mono text-[11px] tracking-widest text-[#23120B]/70">
                      {profile.registration}
                    </p>
                  )}
                </div>
              )}
              
              <div className="mt-12 h-px w-full max-w-md bg-terracotta" />

              <div className="mt-12 space-y-6 text-lg font-light leading-relaxed text-[#23120B]/80 max-w-2xl">
                <h3 className="font-display text-2xl text-[#23120B]">Professional Profile</h3>
                {profile.profileText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {profilePracticeAreas.length > 0 && (
                <div className="mt-16">
                  <h3 className="font-display text-2xl text-[#23120B] mb-8">Areas of Practice</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {profilePracticeAreas.map((area) => (
                      <Link
                        key={area.code}
                        to="/practice/$areaId"
                        params={{ areaId: area.code.toLowerCase().replace('/', '-') }}
                        className="group flex items-center justify-between p-6 bg-white border border-[#23120B]/10 hover:border-terracotta transition-colors"
                      >
                        <span className="font-display text-lg tracking-wide group-hover:text-terracotta transition-colors">{area.title}</span>
                        <span className="text-[#B99A62] transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-16">
                <a href="mailto:tkm1971@gmail.com" className="inline-flex items-center justify-center border border-[#23120B] px-8 py-4 font-mono text-[10px] tracking-[0.2em] text-[#23120B] transition-all hover:bg-[#23120B] hover:text-[#F4F0E8] rounded-full">
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

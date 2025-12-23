import PageShell from "../shared/page-shell";
import GlassCard from "../shared/glass-card";

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      subtitle="A little context about who I am and what I like building."
    >
      <GlassCard>
        <h2 className="text-xl font-bold text-white">Quick intro</h2>
        <p className="mt-3 leading-relaxed text-white/75">
          I’m Safwan — a software engineer who enjoys building clean UI and
          reliable backends. I care a lot about clarity, speed, and design that
          feels calm.
        </p>
      </GlassCard>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <h3 className="text-lg font-bold text-white">Currently focused on</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
            <li>Full-stack web apps (Next.js + TypeScript)</li>
            <li>Cloud + infrastructure fundamentals</li>
            <li>Better UI motion + polish</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <h3 className="text-lg font-bold text-white">Tech I use</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "React", "Tailwind", "Node", "AWS"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}

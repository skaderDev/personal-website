import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import ContentCard from "@/components/content-card";
import NycInterlude from "@/components/nyc-interlude";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Safwan Kader, a New York-based software engineer working on platform systems at Compass.",
};

export default function AboutPage() {
  return (
    <PageShell
      id="about"
      title="About"
      subtitle="A little context about who I am and what I like building."
    >
      <div className="about-grid">
        <ContentCard className="about-intro">
          <p className="section-kicker">The short version</p>
          <h2 className="text-2xl font-bold text-white">Engineer, tinkerer, New Yorker.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/75">
            I’m Safwan, a software engineer who enjoys building useful things
            and experimenting with technology. I care about reliable systems,
            clear product experiences, and the small details that make software
            feel considered. Away from a screen, I’m usually playing tennis or
            exploring another part of NYC.
          </p>
        </ContentCard>

        <NycInterlude />

        <div className="about-details">
          <ContentCard>
            <h3 className="text-lg font-bold text-white">What draws me in</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
              <li>Useful products with a clear reason to exist</li>
              <li>Reliable systems and thoughtful infrastructure</li>
              <li>Calm interfaces with careful interaction details</li>
            </ul>
          </ContentCard>

          <ContentCard>
            <h3 className="text-lg font-bold text-white">Tech I use</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind",
                "Node",
                "AWS",
                "Kubernetes",
                "PostgreSQL",
                "Spring Boot",
                "Python",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </ContentCard>
          <ContentCard>
            <h3 className="text-lg font-bold text-white">Education</h3>
            <p className="mt-3 text-white/75">
              Stony Brook University — B.S. Computer Science (May 2024)
            </p>
          </ContentCard>

          <ContentCard>
            <h3 className="text-lg font-bold text-white">Certification</h3>
            <p className="mt-3 text-white/75">
              AWS Certified Solutions Architect – Associate (June 2025)
            </p>
          </ContentCard>
        </div>
      </div>
    </PageShell>
  );
}

import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import ContentCard from "@/components/content-card";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Safwan Kader, a New York-based software engineer working on platform systems at Compass.",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      subtitle="A little context about who I am and what I like building."
    >
      <div className="grid gap-6">
        {/* Top row */}
        <div className="grid gap-6 md:grid-cols-2">
          <ContentCard>
            <h2 className="text-xl font-bold text-white">Quick intro</h2>
            <p className="mt-3 leading-relaxed text-white/75">
              I’m Safwan — a New York-based software engineer who enjoys
              building reliable platforms and clean product experiences. I care
              about clarity, resilience, and design that feels calm.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80">
                Platform engineering
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80">
                Full-stack
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80">
                Notifications
              </span>
            </div>
          </ContentCard>

          <ContentCard>
            <h3 className="text-lg font-bold text-white">What I do</h3>
            <p className="mt-3 leading-relaxed text-white/75">
              At Compass, I work on the platform side of notifications and email
              deliverability, helping make customer communications reliable and
              observable. Outside work, I build full-stack products and focus on
              polish, motion, and “feels good” UX.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/5 p-3">
                <div className="text-sm font-semibold text-white/80">Now</div>
                <div className="mt-1 text-white">
                  Notifications + deliverability
                </div>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <div className="text-sm font-semibold text-white/80">
                  Building
                </div>
                <div className="mt-1 text-white">
                  Next.js apps + AWS backends
                </div>
              </div>
            </div>
          </ContentCard>
        </div>

        {/* Highlights */}
        <ContentCard>
          <h3 className="text-lg font-bold text-white">Highlights</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="text-2xl font-extrabold text-white">500+</div>
              <div className="mt-1 text-sm text-white/70">
                high-impact incidents debugged (AWS/K8s/networking)
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="text-2xl font-extrabold text-white">40%</div>
              <div className="mt-1 text-sm text-white/70">
                debugging efficiency improvement via dashboards + log pipelines
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="text-2xl font-extrabold text-white">1M+</div>
              <div className="mt-1 text-sm text-white/70">
                users supported by a CloudTrail widget I built at AWS
              </div>
            </div>
          </div>
        </ContentCard>

        {/* Focus + Tech */}
        <div className="grid gap-6 md:grid-cols-2">
          <ContentCard>
            <h3 className="text-lg font-bold text-white">Currently focused on</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
              <li>Reliable notification and email infrastructure</li>
              <li>Full-stack apps (Next.js + TypeScript)</li>
              <li>UI polish: motion, spacing, and interaction details</li>
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
        </div>

        {/* Credentials */}
        <div className="grid gap-6 md:grid-cols-2">
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

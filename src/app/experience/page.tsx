import PageShell from "../shared/page-shell";
import GlassCard from "../shared/glass-card";
import TimelineItem from "../shared/timeline-item";

export default function ExperiencePage() {
  return (
    <PageShell
      title="Experience"
      subtitle="Roles, impact, and the kind of problems I like working on."
    >
      <GlassCard>
        <div className="space-y-8">
          <TimelineItem
            title="Solution Engineer"
            subtitle="Cloud / Support Engineering"
            date="2024 — Present"
            bullets={[
              "Built tooling / automation to reduce operational overhead.",
              "Troubleshot production issues across cloud + networking.",
              "Worked cross-functionally with engineering and infra teams.",
            ]}
          />

          <TimelineItem
            title="Projects + Labs"
            subtitle="Personal / learning-driven"
            date="Ongoing"
            bullets={[
              "Building a portfolio of small projects with strong polish.",
              "Improving system design fundamentals and clean architecture.",
            ]}
          />
        </div>
      </GlassCard>
    </PageShell>
  );
}

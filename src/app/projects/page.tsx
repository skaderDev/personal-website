import PageShell from "../shared/page-shell";
import ProjectCard from "../shared/project-card";

export default function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      subtitle="A few things I’ve built (and what I learned building them)."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="Wayfeel"
          description="Location-based social app with a clean, visual UI."
          tags={["Next.js", "TypeScript", "AWS", "Postgres"]}
          href="/projects"
        />
        <ProjectCard
          title="Fintech ML Sprint"
          description="Exploring market classification signals with SPY."
          tags={["Python", "ML", "Data"]}
        />
      </div>
    </PageShell>
  );
}

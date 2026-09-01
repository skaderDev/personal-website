import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected full-stack, cloud, and machine learning projects by Safwan Kader.",
};

export default function ProjectsPage() {
  return (
    <PageShell
      id="projects"
      title="Projects"
      subtitle="A few thoughtful builds, from product ideas to focused technical explorations."
    >
      <div className="projects-grid">
        <ProjectCard
          title="Wayfeel"
          description="A location-based social app focused on expressive UI, calm interactions, and clean architecture."
          purpose="An exploration of how a map-driven social product can feel expressive without becoming noisy."
          featured
          tags={[
            "Next.js",
            "TypeScript",
            "AWS",
            "AppSync",
            "PostgreSQL",
          ]}
          highlights={[
            "Designed a map-driven interface with emoji-based markers and visual context",
            "Built a serverless backend using GraphQL, Lambda, and Postgres",
            "Focused heavily on UI polish, motion, and interaction details",
          ]}
        />

        <ProjectCard
          title="Tick"
          description="A personal finance and stock-tracking app built to explore full-stack architecture and data modeling."
          purpose="A practical way to strengthen backend fundamentals through financial data and transaction workflows."
          tags={[
            "Spring Boot",
            "PostgreSQL",
            "REST APIs",
            "Finance",
          ]}
          highlights={[
            "Designed backend APIs and schemas with clean separation of concerns",
            "Explored financial data modeling and transaction workflows",
            "Used the project to reinforce backend fundamentals and system design",
          ]}
        />

        <ProjectCard
          title="Fintech ML Sprint"
          description="A series of small machine learning experiments focused on market classification and signal exploration."
          purpose="A focused way to build intuition around feature engineering and evaluation without chasing model complexity."
          tags={[
            "Python",
            "Machine Learning",
            "Pandas",
            "NumPy",
          ]}
          highlights={[
            "Built simple classifiers to explore SPY price movement signals",
            "Focused on feature engineering and evaluation over model complexity",
            "Used short, focused sprints to build intuition quickly",
          ]}
        />
      </div>
    </PageShell>
  );
}

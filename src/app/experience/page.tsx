import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import TimelineItem from "@/components/timeline-item";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Safwan Kader's software engineering experience across platform systems, cloud infrastructure, and full-stack products.",
};

export default function ExperiencePage() {
  return (
    <PageShell
      id="experience"
      title="Experience"
      subtitle="Roles, impact, and the kind of problems I like working on."
    >
      <section className="experience-grid" aria-label="Professional experience">
        {/* Compass */}
        <TimelineItem
          title="Software Engineer"
          subtitle="Compass — Platform / Notifications"
          date="Current"
          bullets={[
            "Work on platform systems that power notifications and customer communications across Compass.",
            "Focus on email deliverability, reliability, and the operational health of communication workflows.",
            "Partner across engineering teams to improve shared infrastructure and the experience of teams building on it.",
          ]}
        />

        {/* Appian */}
        <TimelineItem
          title="Solutions Engineer"
          subtitle="Appian — Cloud / DevOps / Production Support"
          date="Previous role"
          bullets={[
            "Resolved 500+ high-impact production incidents across AWS, Kubernetes, networking, and backend services.",
            "Built internal automation and tooling to reduce manual operational overhead and improve cross-region handoffs.",
            "Designed Grafana dashboards and OpenSearch log pipelines, improving debugging speed and system visibility.",
            "Worked closely with infrastructure and product engineering teams to diagnose root causes and prevent regressions.",
            "Regularly operated in high-pressure environments, prioritizing reliability, clarity, and ownership.",
          ]}
        />

        {/* AWS */}
        <TimelineItem
          title="Software Development Engineer Intern"
          subtitle="Amazon Web Services (AWS)"
          date="May 2023 — Aug 2023"
          bullets={[
            "Developed a CloudTrail visualization widget used by over 1M AWS customers to audit and explore account activity.",
            "Built backend services using AWS Lambda, AppSync, DynamoDB, and S3.",
            "Collaborated with senior engineers to design scalable APIs and production-ready infrastructure.",
            "Focused on performance, security, and clear developer experience in customer-facing tooling.",
          ]}
        />
      </section>
    </PageShell>
  );
}

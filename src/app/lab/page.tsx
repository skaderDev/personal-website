import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import NotesPlaceholder from "@/components/notes-placeholder";
import { labItems } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Lab",
  description: "Small experiments, prototypes, utilities, and works in progress by Safwan Kader.",
};

export default function LabPage() {
  return (
    <PageShell
      id="lab"
      title="Lab"
      subtitle="A looser space for experiments, useful scraps, and ideas in progress."
    >
      <div className="lab-layout">
        <section className="lab-workbench" aria-labelledby="workbench-title" data-reveal>
          <div className="lab-intro">
            <p className="section-kicker">Workbench</p>
            <h2 id="workbench-title">Not everything needs to be a case study.</h2>
            <p>
              This is where smaller builds can stay small—and where unfinished
              can still mean interesting.
            </p>
          </div>

          <div className="lab-list">
            {labItems.map((item) => (
              <article className="lab-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span>{item.status}</span>
              </article>
            ))}
          </div>
        </section>

        <NotesPlaceholder />
      </div>
    </PageShell>
  );
}

type PageShellProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function PageShell({ id, title, subtitle, children }: PageShellProps) {
  const sectionLabels: Record<string, string> = {
    About: "01 — About",
    Experience: "02 — Experience",
    Projects: "03 — Selected work",
    Lab: "04 — Lab notes",
    Contact: "05 — Contact",
  };

  return (
    <section id={id} className="page-shell" data-section-reveal>
      <header className="page-header" data-reveal>
        <p className="section-kicker">{sectionLabels[title] ?? title}</p>
        <h1>{title}</h1>
        {subtitle ? (
          <p>{subtitle}</p>
        ) : null}
      </header>

      <div className="page-content">{children}</div>
    </section>
  );
}

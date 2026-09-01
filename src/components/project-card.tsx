type ProjectCardProps = {
  title: string;
  description: string;
  purpose: string;
  highlights?: string[];
  tags: string[];
  featured?: boolean;
  links?: { label: string; href: string }[];
};

export default function ProjectCard({
  title,
  description,
  purpose,
  tags,
  highlights = [],
  featured = false,
  links = [],
}: ProjectCardProps) {
  return (
    <article
      className={`project-card ${featured ? "project-card-featured" : ""}`}
      data-reveal
    >
      <div className="project-card-header">
        <div>
          {featured ? <p className="section-kicker">Featured project</p> : null}
          <h2>{title}</h2>
        </div>
        <span className="project-index" aria-hidden="true">
          {featured ? "01" : "—"}
        </span>
      </div>
      <p className="project-description">{description}</p>

      <div className="project-purpose">
        <span>Why it exists</span>
        <p>{purpose}</p>
      </div>

      {highlights.length > 0 ? (
        <ul className="project-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}

      <div className="project-footer">
        <div className="project-tags" aria-label="Technologies">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/75"
          >
            {t}
          </span>
        ))}
        </div>
        {links.length > 0 ? (
          <div className="project-links">
            {links.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

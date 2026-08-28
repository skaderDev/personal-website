type ProjectCardProps = {
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  tags,
  highlights = [],
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/15 bg-[#312e67] p-6 shadow-[0_12px_30px_rgba(24,20,62,0.24)] transition-colors duration-200 hover:border-white/25 hover:bg-[#393574]">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>

      {highlights.length > 0 ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/75"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

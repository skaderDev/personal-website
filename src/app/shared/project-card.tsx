import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  href,
}: ProjectCardProps) {
  const content = (
    <div className="rounded-2xl border border-white/10 bg-slate-900/25 p-6 backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/75"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
}

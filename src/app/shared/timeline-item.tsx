type TimelineItemProps = {
  title: string;
  subtitle: string;
  date: string;
  bullets: string[];
};

export default function TimelineItem({
  title,
  subtitle,
  date,
  bullets,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white/70" />
      <div className="absolute left-[5px] top-6 h-full w-px bg-white/15" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-white/70">{subtitle}</p>
        </div>
        <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">
          {date}
        </span>
      </div>

      <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

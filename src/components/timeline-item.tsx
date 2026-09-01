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
    <article className="timeline-item" data-reveal>

      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-4">
        <div>
          <h3>{title}</h3>
          <p className="timeline-subtitle">{subtitle}</p>
        </div>
        <span className="timeline-date">
          {date}
        </span>
      </div>

      <ul>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

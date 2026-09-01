import { currentlyItems } from "@/content/site-content";

export default function Currently() {
  return (
    <section className="currently" aria-labelledby="currently-title" data-reveal>
      <div className="currently-heading">
        <span className="currently-dot" aria-hidden="true" />
        <h2 id="currently-title">Currently</h2>
      </div>
      <dl className="currently-list">
        {currentlyItems.map(({ label, value }) => (
          <div className="currently-item" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

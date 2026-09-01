import { notesPlaceholder } from "@/content/site-content";

export default function NotesPlaceholder() {
  return (
    <aside className="notes-placeholder" aria-labelledby="notes-placeholder-title" data-reveal>
      <p className="section-kicker">On the shelf</p>
      <h2 id="notes-placeholder-title">{notesPlaceholder.title}</h2>
      <p>{notesPlaceholder.description}</p>
    </aside>
  );
}

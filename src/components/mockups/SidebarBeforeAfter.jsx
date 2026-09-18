import MiniSidebar from './MiniSidebar.jsx';

const NOTES = [
  {
    n: 1,
    title: 'Clear labels',
    text: 'In the redesigned sidebar, every item and action carries a plain-text label. In the conventional version, many actions are icon-only and must be learned.',
  },
  {
    n: 2,
    title: 'Prominent "New Chat"',
    text: 'The primary action becomes a large, labelled button instead of a small, unnamed "＋".',
  },
  {
    n: 3,
    title: 'Larger interaction targets',
    text: 'Targets grow to roughly 48px with comfortable spacing — easier for users with less precise motor control.',
  },
  {
    n: 4,
    title: 'Reduced information density',
    text: 'A short, curated conversation list replaces a long, truncated history with time groupings and unread dots.',
  },
  {
    n: 5,
    title: 'Important actions remain visible',
    text: 'Help and Voice become a permanent, labelled "Assistance" section rather than a buried settings icon.',
  },
];

export default function SidebarBeforeAfter() {
  return (
    <div>
      <div className="ba-grid">
        <figure className="ba-panel">
          <figcaption className="ba-head ba-head-before">Before · Conventional sidebar</figcaption>
          <div className="ba-body">
            <MiniSidebar variant="before" />
          </div>
        </figure>
        <figure className="ba-panel">
          <figcaption className="ba-head ba-head-after">After · Redesigned sidebar</figcaption>
          <div className="ba-body">
            <MiniSidebar variant="after" />
          </div>
        </figure>
      </div>

      <div className="ba-notes">
        {NOTES.map((note) => (
          <div className="ba-note" key={note.n}>
            <span className="pin pin-static">{note.n}</span>
            <div>
              <strong>{note.title}</strong>
              <p>{note.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
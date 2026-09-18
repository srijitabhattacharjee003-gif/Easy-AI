export default function SectionHeading({ eyebrow, title, lead, center = false }) {
  return (
    <div className={`section-heading${center ? ' center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
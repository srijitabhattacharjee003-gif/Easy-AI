export default function QuoteBlock({ children, cite, boxed = false }) {
  return (
    <blockquote className={`quote-block${boxed ? ' quote-boxed' : ''}`}>
      <p className="quote-text">{children}</p>
      {cite && <footer className="quote-cite">— {cite}</footer>}
    </blockquote>
  );
}
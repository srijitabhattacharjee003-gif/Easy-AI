import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <section className="section">
      <div className="container">
        <div className="notfound">
          <h1>Page not found</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 480 }}>
            The page you are looking for does not exist. Head back to the overview to continue
            exploring the research.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
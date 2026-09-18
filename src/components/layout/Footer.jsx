import { Link } from 'react-router-dom';
import Icon from '../Icon.jsx';
import { ALL_LINKS } from '../../data/navLinks.js';

export default function Footer() {
  const pagesCol = ALL_LINKS.slice(0, 4);
  const moreCol = ALL_LINKS.slice(4);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">
              <Icon name="chat" size={18} />
            </span>
            <span className="brand-text">
              <span className="brand-title">Easy AI</span>
              <span className="brand-sub">HCI Research · IIT Kharagpur</span>
            </span>
          </Link>
          <p>
            An interactive HCI research case study on designing AI chat interfaces for adults aged
            55–70 — conducted during a summer research internship at IIT Kharagpur.
          </p>
          <p className="footer-mentor">Mentor: Prof. Dr. Sourangshu Bhattacharya</p>
        </div>

        <nav className="footer-col" aria-label="Footer — pages">
          <h4>Pages</h4>
          <ul>
            {pagesCol.map((l) => (
              <li key={l.to}>
                <Link className="footer-link" to={l.to}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Footer — more pages">
          <h4>More</h4>
          <ul>
            {moreCol.map((l) => (
              <li key={l.to}>
                <Link className="footer-link" to={l.to}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="footer-link" to="/demo">
                Interactive Demo
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer-col">
          <h4>About this site</h4>
          <p>
            Built with React. The interactive demo is a local simulation — no data leaves your
            browser, and no real AI service is used.
          </p>
          <Link to="/demo" className="btn btn-outline btn-sm">
            Open the Demo
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>Human–Computer Interaction Research Showcase · IIT Kharagpur</p>
        <p>Design outcomes described here reflect the tested participants and are presented for educational purposes.</p>
      </div>
    </footer>
  );
}
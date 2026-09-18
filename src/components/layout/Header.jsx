import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from '../Icon.jsx';
import { RESEARCH_LINKS, PRIMARY_LINKS, ALL_LINKS } from '../../data/navLinks.js';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  // Close menus whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
  }, [location.pathname]);

  // Close the dropdown when clicking anywhere outside it
  useEffect(() => {
    function handleDocClick(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    }
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const researchActive = RESEARCH_LINKS.some((l) => l.to === location.pathname);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark">
            <Icon name="chat" size={20} />
          </span>
          <span className="brand-text">
            <span className="brand-title">Easy AI</span>
            <span className="brand-sub">HCI Research · IIT Kharagpur</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>

          <div className={`nav-drop${dropOpen ? ' open' : ''}`} ref={dropRef}>
            <button
              type="button"
              className={`nav-link nav-drop-btn${researchActive ? ' active' : ''}`}
              onClick={() => setDropOpen((o) => !o)}
              aria-expanded={dropOpen}
            >
              The Research <Icon name="chevron-down" size={14} />
            </button>
            <div className="nav-drop-menu">
              {RESEARCH_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => `drop-link${isActive ? ' active' : ''}`}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          {PRIMARY_LINKS.filter((l) => l.to !== '/').map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {l.label}
            </NavLink>
          ))}

          <Link to="/demo" className="btn btn-primary btn-sm nav-cta">
            Try the Demo
          </Link>
        </nav>

        <button
          type="button"
          className="nav-burger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <Icon name={mobileOpen ? 'x' : 'menu'} size={22} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="nav-mobile" aria-label="Mobile">
          {ALL_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/demo" className="btn btn-primary nav-mobile-cta" onClick={() => setMobileOpen(false)}>
            Experience the Demo
          </Link>
        </nav>
      )}
    </header>
  );
}
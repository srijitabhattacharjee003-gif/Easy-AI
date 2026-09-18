import { useEffect } from 'react';
import Icon from '../Icon.jsx';

export default function HelpModal({ onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="help-card"
        role="dialog"
        aria-label="How to use this chat"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="help-head">
          <h3>
            <Icon name="help" size={22} /> How to use this chat
          </h3>
          <button type="button" className="icon-btn a11y-lg-close" onClick={onClose} aria-label="Close help">
            <Icon name="x" size={18} />
          </button>
        </header>

        <ol className="help-steps">
          <li>
            <strong>Type your question.</strong> Use your own words — short questions work well.
          </li>
          <li>
            <strong>Press the Send button.</strong> Your question appears on the right, and the
            answer appears on the left.
          </li>
          <li>
            <strong>Read Aloud</strong> makes the browser read the answer out loud. Press it again
            to stop.
          </li>
          <li>
            <strong>Explain More Simply</strong> repeats the last answer in even easier words.
          </li>
          <li>
            <strong>Ask Another Question</strong> shows example questions you can try.
          </li>
          <li>
            <strong>Accessibility Options</strong> (in the left panel) lets you change text size,
            contrast, and motion.
          </li>
        </ol>

        <p className="help-note">Nothing you type is sent anywhere — this is a local demonstration.</p>

        <button type="button" className="btn btn-primary help-close" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}
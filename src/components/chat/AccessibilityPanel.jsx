import { useEffect } from 'react';
import Icon from '../Icon.jsx';

export default function AccessibilityPanel({
  textStep,
  onSetText,
  highContrast,
  onToggleContrast,
  reduceMotion,
  onToggleMotion,
  onReset,
  onClose,
}) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <aside className="a11y-drawer" role="dialog" aria-label="Accessibility options">
      <header className="a11y-head">
        <h3>
          <Icon name="settings" size={20} /> Accessibility Options
        </h3>
        <button type="button" className="icon-btn a11y-lg-close" onClick={onClose} aria-label="Close accessibility options">
          <Icon name="x" size={18} />
        </button>
      </header>

      <div className="a11y-row">
        <p className="a11y-label">Text Size</p>
        <p className="a11y-desc">Make all text in this chat larger and easier to read.</p>
        <div className="seg-control">
          <button
            type="button"
            className={textStep === -1 ? 'active' : ''}
            onClick={() => onSetText(-1)}
          >
            <span className="seg-glyph">A−</span> Decrease
          </button>
          <button
            type="button"
            className={textStep === 0 ? 'active' : ''}
            onClick={() => onSetText(0)}
          >
            <span className="seg-glyph">A</span> Default
          </button>
          <button
            type="button"
            className={textStep === 1 ? 'active' : ''}
            onClick={() => onSetText(1)}
          >
            <span className="seg-glyph">A+</span> Increase
          </button>
        </div>
      </div>

      <div className="a11y-row">
        <div className="a11y-row-top">
          <div>
            <p className="a11y-label">High Contrast</p>
            <p className="a11y-desc">Stronger colours and more visible borders.</p>
          </div>
          <button
            type="button"
            className="switch"
            role="switch"
            aria-checked={highContrast}
            aria-label="Toggle high contrast"
            onClick={onToggleContrast}
          >
            <span />
          </button>
        </div>
        <p className={`a11y-state${highContrast ? ' on' : ''}`}>{highContrast ? 'On' : 'Off'}</p>
      </div>

      <div className="a11y-row">
        <div className="a11y-row-top">
          <div>
            <p className="a11y-label">Reduce Motion</p>
            <p className="a11y-desc">Calms movement and animation in the interface.</p>
          </div>
          <button
            type="button"
            className="switch"
            role="switch"
            aria-checked={reduceMotion}
            aria-label="Toggle reduce motion"
            onClick={onToggleMotion}
          >
            <span />
          </button>
        </div>
        <p className={`a11y-state${reduceMotion ? ' on' : ''}`}>{reduceMotion ? 'On' : 'Off'}</p>
      </div>

      <div className="a11y-row">
        <button type="button" className="a11y-reset" onClick={onReset}>
          <Icon name="refresh" size={18} /> Reset to Defaults
        </button>
      </div>

      <p className="a11y-foot">
        These controls demonstrate the accessibility settings explored in the research, built
        directly into the interface.
      </p>
    </aside>
  );
}
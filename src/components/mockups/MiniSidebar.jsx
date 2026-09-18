import Icon from '../Icon.jsx';

/* Small static sidebar used in the before/after section and the A/B variant cards. */
export default function MiniSidebar({ variant }) {
  if (variant === 'after') {
    return (
      <div className="mini-sb mini-after">
        <div className="msb-new">
          ＋ New Chat <span className="pin">2</span>
        </div>
        <p className="msb-label">
          Your Conversations <span className="pin">1</span>
        </p>
        <div className="msb-item msb-active">
          <Icon name="chat" size={14} /> Weather this week
        </div>
        <div className="msb-item">
          <Icon name="chat" size={14} /> Email to the bank
        </div>
        <div className="msb-item">
          <Icon name="chat" size={14} /> Recipes with oats <span className="pin">3</span>
        </div>
        <p className="msb-label">Assistance</p>
        <div className="msb-tool">
          <Icon name="help" size={14} /> Help &amp; Guide <span className="pin">5</span>
        </div>
        <div className="msb-tool">
          <Icon name="mic" size={14} /> Voice Input
        </div>
        <p className="msb-foot">
          Reduced information density <span className="pin">4</span>
        </p>
      </div>
    );
  }

  return (
    <div className="mini-sb mini-before">
      <div className="msb-row">
        <span className="msb-logo" />
        <span className="msb-plus">
          ＋<span className="pin pin-b">2</span>
        </span>
      </div>
      <div className="msb-search">Search</div>
      <p className="msb-time">Today</p>
      <div className="msb-mini">react_hooks_debug</div>
      <div className="msb-mini">
        trip_itinerary_v3 <span className="msb-dot" />
      </div>
      <div className="msb-mini">
        paper_summarizer <span className="pin pin-b">3</span>
      </div>
      <p className="msb-time">Yesterday</p>
      <div className="msb-mini">regex_help</div>
      <div className="msb-mini">csv_cleaner</div>
      <p className="msb-time">Previous 7 days</p>
      <div className="msb-mini">
        startup_names <span className="msb-dot" />
      </div>
      <div className="msb-mini">ml_notes_2</div>
      <div className="msb-icons">
        <span className="msb-ib">
          <Icon name="settings" size={11} />
        </span>
        <span className="msb-ib">
          <Icon name="help" size={11} />
          <span className="pin pin-b">5</span>
        </span>
        <span className="msb-ib">
          <Icon name="mic" size={11} />
        </span>
        <span className="msb-ib">
          <Icon name="user" size={11} />
          <span className="pin pin-b">1</span>
        </span>
      </div>
      <p className="msb-foot">
        High density · icon-only actions <span className="pin pin-b">4</span>
      </p>
    </div>
  );
}
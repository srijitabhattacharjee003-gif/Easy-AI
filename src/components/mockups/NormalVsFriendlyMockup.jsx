import Icon from '../Icon.jsx';

const NORMAL_POINTS = [
  'Small text and tight spacing',
  'Icon-only actions — meaning must be guessed',
  'Help and Voice hidden behind unnamed icons',
  'Terse, technical answers',
];

const FRIENDLY_POINTS = [
  'Larger text and generous spacing',
  'Every action clearly labelled in words',
  'Help and Voice always visible',
  'Plain answers, with “Explain More Simply”',
];

const WHY_CARDS = [
  {
    icon: 'type',
    title: 'Not just “bigger fonts”',
    text: 'Larger text helps — but the real difference is organization: fewer elements, clearer labels, and important actions kept visible instead of hidden.',
  },
  {
    icon: 'compass',
    title: 'Designed around adults aged 55–70',
    text: 'Each choice — target size, wording, spacing — responds to usability challenges identified through user research with participants aged 55–70.',
  },
  {
    icon: 'target',
    title: 'And it was measured',
    text: 'In A/B testing, the redesigned sidebar received approximately 35% higher usage than the baseline among the tested participants.',
  },
];

export default function NormalVsFriendlyMockup() {
  return (
    <div className="nvf">
      <div className="nvf-grid">
        {/* ---------- Conventional interface ---------- */}
        <div className="nvf-col">
          <span className="nvf-tag nvf-tag-normal">
            <Icon name="user" size={13} /> Normal UI · Conventional
          </span>

          <div className="nvf-window nvf-window-normal" aria-hidden="true">
            <aside className="nvf-sb">
              <div className="nvf-sb-head">
                <span className="nvf-sb-logo" />
                <span className="nvf-sb-plus">＋</span>
              </div>
              <div className="nvf-sb-search">Search</div>
              <p className="nvf-sb-time">Today</p>
              <p className="nvf-sb-item">react_hooks_debug</p>
              <p className="nvf-sb-item active">trip_itinerary_v3</p>
              <p className="nvf-sb-time">Yesterday</p>
              <p className="nvf-sb-item">regex_help</p>
              <p className="nvf-sb-item">csv_cleaner</p>
              <div className="nvf-sb-icons">
                <span className="nvf-sb-ib"><Icon name="settings" size={9} /></span>
                <span className="nvf-sb-ib"><Icon name="help" size={9} /></span>
                <span className="nvf-sb-ib"><Icon name="mic" size={9} /></span>
                <span className="nvf-sb-ib"><Icon name="user" size={9} /></span>
              </div>
            </aside>

            <div className="nvf-main">
              <div className="nvf-top">Assistant</div>
              <div className="nvf-msgs">
                <div className="nvf-user">Explain transformers</div>
                <div className="nvf-ai">
                  Transformers are a neural architecture based on self-attention, enabling parallel
                  sequence processing.
                </div>
                <div className="nvf-mini-actions">
                  <span className="nvf-mini-act"><Icon name="refresh" size={9} /></span>
                  <span className="nvf-mini-act"><Icon name="volume" size={9} /></span>
                  <span className="nvf-mini-act"><Icon name="help" size={9} /></span>
                </div>
              </div>
              <div className="nvf-input">
                Message assistant…
                <span className="nvf-send-ic"><Icon name="send" size={9} /></span>
              </div>
            </div>
          </div>

          <ul className="check-list muted nvf-points">
            {NORMAL_POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        {/* ---------- Older-adult-friendly interface ---------- */}
        <div className="nvf-col">
          <span className="nvf-tag nvf-tag-friendly">
            <Icon name="sparkle" size={13} /> Older-Friendly UI · Redesigned
          </span>

          <div className="nvf-window nvf-window-friendly" aria-hidden="true">
            <aside className="nvf-sbf">
              <div className="nvf-sbf-new">
                <Icon name="plus" size={13} /> New Chat
              </div>
              <p className="nvf-sbf-label">Your Conversations</p>
              <p className="nvf-sbf-item active">
                <Icon name="chat" size={13} /> Weather this week
              </p>
              <p className="nvf-sbf-item">
                <Icon name="chat" size={13} /> Email to the bank
              </p>
              <p className="nvf-sbf-label">Assistance</p>
              <div className="nvf-sbf-tool"><Icon name="help" size={13} /> Help &amp; Guide</div>
              <div className="nvf-sbf-tool"><Icon name="mic" size={13} /> Voice Input</div>
            </aside>

            <div className="nvf-mainf">
              <div className="nvf-topf">
                <span className="nvf-dot" /> AI Assistant
              </div>
              <div className="nvf-msgsf">
                <div className="nvf-userf">What is artificial intelligence?</div>
                <div className="nvf-aif">
                  AI is technology that helps computers do tasks that usually need human thinking —
                  like answering questions or recognizing images.
                </div>
                <div className="nvf-pills">
                  <span className="nvf-pill"><Icon name="volume" size={10} /> Read Aloud</span>
                  <span className="nvf-pill"><Icon name="bulb" size={10} /> Explain Simply</span>
                  <span className="nvf-pill"><Icon name="refresh" size={10} /> Ask Another</span>
                </div>
              </div>
              <div className="nvf-inputf">
                Type your question here…
                <span className="nvf-sendf">Send</span>
              </div>
            </div>
          </div>

          <ul className="check-list nvf-points">
            {FRIENDLY_POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="nvf-vs" aria-hidden="true">VS</div>

      <div className="nvf-why">
        {WHY_CARDS.map((c) => (
          <div className="nvf-why-card" key={c.title}>
            <span className="nvf-why-icon">
              <Icon name={c.icon} size={19} />
            </span>
            <div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
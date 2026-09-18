import Icon from '../Icon.jsx';

const CONVENTIONAL_GROUPS = [
  { key: 'today', label: 'Today' },
  { key: 'yesterday', label: 'Yesterday' },
  { key: 'week', label: 'Previous 7 days' },
];

export default function Sidebar({
  mode,
  chats,
  activeChatId,
  sidebarOpen,
  onSelectChat,
  onNewChat,
  onOpenHelp,
  onOpenVoice,
  onOpenA11y,
}) {
  const accessible = mode === 'accessible';

  if (accessible) {
    return (
      <aside className={`chat-sidebar${sidebarOpen ? ' open' : ''}`} aria-label="Conversations and assistance">
        <div className="sb-head">
          <button type="button" className="sb-new-btn" onClick={onNewChat}>
            <Icon name="plus" size={20} /> New Chat
          </button>
        </div>

        <div className="sb-body">
          <p className="sb-section-label">Your Conversations</p>
          <ul className="sb-list">
            {chats.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  className={`sb-item${activeChatId === c.id ? ' active' : ''}`}
                  onClick={() => onSelectChat(c)}
                >
                  <Icon name="chat" size={19} />
                  <span className="sb-item-text">{c.title}</span>
                  <span className="sb-item-meta">{c.meta}</span>
                </button>
              </li>
            ))}
          </ul>

          <p className="sb-section-label">Assistance</p>
          <ul className="sb-list">
            <li>
              <button type="button" className="sb-tool" onClick={onOpenHelp}>
                <Icon name="help" size={19} /> Help &amp; Guide
              </button>
            </li>
            <li>
              <button type="button" className="sb-tool" onClick={onOpenVoice}>
                <Icon name="mic" size={19} /> Voice Input
              </button>
            </li>
            <li>
              <button type="button" className="sb-tool" onClick={onOpenA11y}>
                <Icon name="settings" size={19} /> Accessibility Options
              </button>
            </li>
          </ul>
        </div>

        <div className="sb-footer">
          <span className="sb-avatar">
            <Icon name="user" size={18} />
          </span>
          <span className="sb-user">
            <span className="sb-user-name">You</span>
            <span className="sb-user-sub">Demo account · private</span>
          </span>
        </div>
      </aside>
    );
  }

  return (
    <aside className={`chat-sidebar${sidebarOpen ? ' open' : ''}`} aria-label="Chat history">
      <div className="sb-head sb-head-compact">
        <span className="sb-logo">
          <Icon name="sparkle" size={13} />
        </span>
        <button type="button" className="icon-btn" onClick={onNewChat} title="New chat" aria-label="New chat">
          <Icon name="plus" size={14} />
        </button>
      </div>

      <div className="sb-search">
        <Icon name="search" size={12} /> Search
      </div>

      <div className="sb-body">
        {CONVENTIONAL_GROUPS.map((group) => (
          <div key={group.key}>
            <p className="sb-time">{group.label}</p>
            {chats
              .filter((c) => c.group === group.key)
              .map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`sb-mini-item${activeChatId === c.id ? ' active' : ''}`}
                  onClick={() => onSelectChat(c)}
                >
                  <span className="sb-mini-title">{c.title}</span>
                  {c.unread && <span className="sb-unread" />}
                  <span className="sb-item-meta">{c.meta}</span>
                </button>
              ))}
          </div>
        ))}
      </div>

      <div className="sb-iconrow">
        <button type="button" className="icon-btn" title="Settings" aria-label="Settings">
          <Icon name="settings" size={14} />
        </button>
        <button type="button" className="icon-btn" title="Help" aria-label="Help" onClick={onOpenHelp}>
          <Icon name="help" size={14} />
        </button>
        <button type="button" className="icon-btn" title="Voice" aria-label="Voice" onClick={onOpenVoice}>
          <Icon name="mic" size={14} />
        </button>
        <button type="button" className="icon-btn" title="Account" aria-label="Account">
          <Icon name="user" size={14} />
        </button>
      </div>
    </aside>
  );
}
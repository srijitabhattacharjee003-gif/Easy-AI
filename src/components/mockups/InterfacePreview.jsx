import Icon from '../Icon.jsx';

/* Static, decorative illustration of the older-adult-friendly interface (home hero). */
export default function InterfacePreview() {
  return (
    <div className="preview-shell" aria-hidden="true">
      <div className="preview-window">
        <aside className="preview-sidebar">
          <div className="pv-new">
            <Icon name="plus" size={13} /> New Chat
          </div>
          <p className="pv-label">Your Conversations</p>
          <div className="pv-item pv-active">
            <Icon name="chat" size={13} /> Weather this week
          </div>
          <div className="pv-item">
            <Icon name="chat" size={13} /> Email to the bank
          </div>
          <div className="pv-item">
            <Icon name="chat" size={13} /> Recipes with oats
          </div>
          <p className="pv-label">Assistance</p>
          <div className="pv-tool">
            <Icon name="help" size={13} /> Help &amp; Guide
          </div>
          <div className="pv-tool">
            <Icon name="mic" size={13} /> Voice Input
          </div>
        </aside>

        <div className="preview-main">
          <div className="pv-topbar">
            <span className="pv-dot" /> AI Assistant
          </div>
          <div className="pv-msgs">
            <div className="pv-row pv-user">What is artificial intelligence?</div>
            <div className="pv-row pv-ai">
              AI is technology that helps computers do tasks that usually need human thinking — like
              answering questions or recognizing images.
            </div>
            <div className="pv-actions">
              <span className="pv-pill">
                <Icon name="volume" size={11} /> Read Aloud
              </span>
              <span className="pv-pill">
                <Icon name="bulb" size={11} /> Explain More Simply
              </span>
              <span className="pv-pill">
                <Icon name="refresh" size={11} /> Ask Another
              </span>
            </div>
          </div>
          <div className="pv-input">
            Type your question here…<span className="pv-send">Send</span>
          </div>
        </div>
      </div>

      <div className="preview-badge">
        <strong>~35%</strong>
        <span>higher usage*</span>
      </div>
    </div>
  );
}
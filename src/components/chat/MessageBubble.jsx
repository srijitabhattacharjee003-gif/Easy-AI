import Icon from '../Icon.jsx';

export default function MessageBubble({
  msg,
  accessible,
  isLatestAssistant,
  canExplain,
  speaking,
  onReadAloud,
  onExplain,
  onAskAnother,
}) {
  const isUser = msg.role === 'user';

  return (
    <div className={`msg-row ${isUser ? 'user' : 'assistant'}`}>
      {!isUser && (
        <span className="msg-avatar" aria-hidden="true">
          <Icon name="sparkle" size={accessible ? 20 : 13} />
        </span>
      )}

      <div className="msg-stack">
        {!isUser && accessible && <span className="msg-author">AI Assistant</span>}

        <div className={`bubble ${isUser ? 'bubble-user' : 'bubble-ai'}${msg.simpler ? ' bubble-simpler' : ''}`}>
          {msg.text}
          {msg.simpler && accessible && (
            <span className="simpler-tag">
              <Icon name="check" size={13} /> Simpler explanation
            </span>
          )}
        </div>

        {!isUser && accessible && isLatestAssistant && (
          <div className="msg-actions">
            <button
              type="button"
              className={`action-pill${speaking ? ' speaking' : ''}`}
              onClick={onReadAloud}
            >
              <Icon name={speaking ? 'x' : 'volume'} size={17} />
              {speaking ? 'Stop Reading' : 'Read Aloud'}
            </button>

            {canExplain && (
              <button type="button" className="action-pill" onClick={onExplain}>
                <Icon name="bulb" size={17} /> Explain More Simply
              </button>
            )}

            <button type="button" className="action-pill" onClick={onAskAnother}>
              <Icon name="refresh" size={17} /> Ask Another Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
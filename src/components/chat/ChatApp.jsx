import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '../Icon.jsx';
import Sidebar from './Sidebar.jsx';
import MessageBubble from './MessageBubble.jsx';
import AccessibilityPanel from './AccessibilityPanel.jsx';
import HelpModal from './HelpModal.jsx';
import {
  CHAT_TOPICS,
  SUGGESTIONS,
  ACCESSIBLE_CHATS,
  CONVENTIONAL_CHATS,
} from '../../data/chatData.js';

let idCounter = 0;
const nextId = () => `m${++idCounter}`;

function keywordHit(q, kw) {
  if (q === kw) return true;
  if (kw.length >= 5 && q.includes(kw)) return true;
  const words = q.split(' ');
  return kw.split(' ').every((w) => words.includes(w));
}

function findTopic(query) {
  const q = query.toLowerCase().trim().replace(/\s+/g, ' ');
  if (!q) return null;
  let best = null;
  let bestScore = 0;
  for (const topic of CHAT_TOPICS) {
    for (const kw of topic.keywords) {
      if (keywordHit(q, kw)) {
        const score = kw.length + (q === kw ? 5 : 0);
        if (score > bestScore) {
          bestScore = score;
          best = topic;
        }
      }
    }
  }
  return best;
}

const FALLBACK_TOPIC = CHAT_TOPICS.find((t) => t.id === 'fallback');

function EmptyState({ accessible, suggestions, onPick }) {
  if (!accessible) {
    return (
      <div className="empty-state empty-conventional">
        <p className="empty-title-sm">Start a conversation</p>
        <div className="chip-row">
          {suggestions.map((s) => (
            <button key={s} type="button" className="chip chip-sm" onClick={() => onPick(s)}>
              {s}
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="empty-state">
      <span className="empty-icon">
        <Icon name="sparkle" size={26} />
      </span>
      <h3 className="empty-title">Hello! I&apos;m your AI assistant.</h3>
      <p className="empty-sub">
        You can type a question below, in your own words — or choose one of these to try:
      </p>
      <div className="empty-suggestions">
        {suggestions.map((s) => (
          <button key={s} type="button" className="suggestion-btn" onClick={() => onPick(s)}>
            <Icon name="chat" size={18} /> {s}
          </button>
        ))}
      </div>
    </div>
  );
}

function TypingIndicator({ accessible }) {
  return (
    <div className="msg-row assistant">
      <span className="msg-avatar" aria-hidden="true">
        <Icon name="sparkle" size={accessible ? 20 : 13} />
      </span>
      <div className="msg-stack">
        <div className="bubble bubble-ai typing">
          <span className="typing-text">Assistant is typing</span>
          <span className="typing-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ChatApp() {
  const [mode, setMode] = useState('accessible');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [textStep, setTextStep] = useState(0); // -1 | 0 | 1
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [notice, setNotice] = useState(null);
  const [speakingId, setSpeakingId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeChatId, setActiveChatId] = useState(null);

  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimer = useRef(null);
  const noticeTimer = useRef(null);

  const accessible = mode === 'accessible';
  const chats = accessible ? ACCESSIBLE_CHATS : CONVENTIONAL_CHATS;
  const textClass = textStep === -1 ? 'txt-down' : textStep === 1 ? 'txt-up' : '';

  const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant');

  const showToast = useCallback((text, tone = 'info') => {
    setNotice({ id: nextId(), text, tone });
    if (noticeTimer.current) clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(null), 6000);
  }, []);

  const stopSpeech = useCallback(() => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setSpeakingId(null);
  }, []);

  /* Cleanup on unmount */
  useEffect(() => {
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
      if (noticeTimer.current) clearTimeout(noticeTimer.current);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  /* Auto-scroll to the newest message */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [messages, isTyping, reduceMotion]);

  function dismissNotice() {
    if (noticeTimer.current) clearTimeout(noticeTimer.current);
    setNotice(null);
  }

  function loadChat(chat) {
    stopSpeech();
    if (typingTimer.current) clearTimeout(typingTimer.current);
    setIsTyping(false);
    setActiveChatId(chat.id);
    setSidebarOpen(false);
    setLastTopicFromSeed(chat);
    setMessages((chat.seed ?? []).map((m) => ({ ...m, id: nextId() })));
  }

  function setLastTopicFromSeed(chat) {
    const seedAssistant = (chat.seed ?? []).find((m) => m.role === 'assistant');
    lastTopicRef.current = seedAssistant?.topicId ?? null;
  }

  const lastTopicRef = useRef(null);

  function startNewChat() {
    stopSpeech();
    if (typingTimer.current) clearTimeout(typingTimer.current);
    setIsTyping(false);
    setActiveChatId(null);
    setMessages([]);
    lastTopicRef.current = null;
    setShowSuggestions(false);
    setSidebarOpen(false);
    if (accessible) {
      showToast('Started a new conversation. Type a question below, or pick one of the examples.', 'friendly');
    }
  }

  function switchMode(next) {
    if (next === mode) return;
    stopSpeech();
    if (typingTimer.current) clearTimeout(typingTimer.current);
    setMode(next);
    setMessages([]);
    setIsTyping(false);
    lastTopicRef.current = null;
    setShowSuggestions(false);
    setActiveChatId(null);
    setA11yOpen(false);
    setHelpOpen(false);
    showToast(
      next === 'accessible'
        ? 'You switched to the Older-Adult-Friendly interface. Notice the larger text, clear labels, and visible Help and Voice actions.'
        : 'You switched to the Conventional interface. Notice the smaller text, compact sidebar, and icon-only controls.',
      'info'
    );
  }

  function send(text) {
    const trimmed = (text ?? input).trim();
    if (!trimmed || isTyping) return;
    stopSpeech();

    const topic = findTopic(trimmed) ?? FALLBACK_TOPIC;
    lastTopicRef.current = topic.id;

    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text: trimmed }]);
    setInput('');
    setShowSuggestions(false);
    setIsTyping(true);

    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: 'assistant',
          topicId: topic.id,
          text: accessible ? topic.friendly : topic.standard,
        },
      ]);
    }, reduceMotion ? 350 : 900);
  }

  function explainSimply() {
    if (!lastAssistant || isTyping) return;
    const topic = CHAT_TOPICS.find((t) => t.id === lastAssistant.topicId);
    const text =
      topic?.simpler ??
      'Simply put: I take your question, try to understand it, and give you the most helpful answer I can.';
    stopSpeech();
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: 'assistant', topicId: lastAssistant.topicId, text, simpler: true },
    ]);
  }

  function readAloud(msg) {
    if (!('speechSynthesis' in window)) {
      showToast(
        'Read Aloud is not supported by this browser, so nothing went wrong — everything else still works. In a compatible browser, this button would read the answer out loud.',
        'friendly'
      );
      return;
    }
    if (speakingId === msg.id) {
      stopSpeech();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(msg.text);
    utterance.rate = 0.95;
    utterance.onend = () => setSpeakingId((cur) => (cur === msg.id ? null : cur));
    utterance.onerror = () => setSpeakingId((cur) => (cur === msg.id ? null : cur));
    setSpeakingId(msg.id);
    window.speechSynthesis.speak(utterance);
  }

  function askAnother() {
    setShowSuggestions(true);
    if (inputRef.current) inputRef.current.focus();
    showToast('Pick one of the example questions — or just type your own below.', 'friendly');
  }

  function openHelp() {
    if (accessible) {
      setHelpOpen(true);
    } else {
      showToast(
        'Help exists here too — but as a small, unnamed "?" icon. In the friendly interface, Help is a clearly visible, plainly worded action.',
        'info'
      );
    }
  }

  function openVoice() {
    showToast(
      'Voice Input lets you speak your question instead of typing. It is highlighted here to show how important features can be made visible and clearly labelled.',
      'info'
    );
  }

  const changeText = (dir) => setTextStep((s) => Math.min(1, Math.max(-1, s + dir)));

  function resetA11y() {
    setTextStep(0);
    setHighContrast(false);
    setReduceMotion(false);
    showToast('Accessibility settings restored to their defaults.', 'friendly');
  }

  return (
    <div
      className={`chat-app mode-${accessible ? 'accessible' : 'conventional'} ${textClass} ${
        highContrast ? 'a11y-contrast' : ''
      } ${reduceMotion ? 'a11y-reduce-motion' : ''}`}
    >
      <Sidebar
        mode={mode}
        chats={chats}
        activeChatId={activeChatId}
        sidebarOpen={sidebarOpen}
        onSelectChat={loadChat}
        onNewChat={startNewChat}
        onOpenHelp={openHelp}
        onOpenVoice={openVoice}
        onOpenA11y={() => setA11yOpen(true)}
      />
      {sidebarOpen && <div className="chat-backdrop" onClick={() => setSidebarOpen(false)} />}

      <div className="chat-main">
        <header className="chat-topbar">
          <button
            type="button"
            className="icon-btn sb-toggle"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label="Toggle conversations"
          >
            <Icon name="menu" size={18} />
          </button>

          <div className="chat-title">
            <span className="chat-title-name">{accessible ? 'AI Assistant' : 'Assistant'}</span>
            <span className="chat-title-status">
              <span className="status-dot" /> {accessible ? 'Here to help' : 'online'}
            </span>
          </div>

          <div className="mode-switch" role="group" aria-label="Interface version">
            <button
              type="button"
              className={!accessible ? 'active' : ''}
              onClick={() => switchMode('conventional')}
            >
              <span className="ms-full">Conventional</span>
              <span className="ms-short">Normal</span>
            </button>
            <button
              type="button"
              className={accessible ? 'active' : ''}
              onClick={() => switchMode('accessible')}
            >
              <span className="ms-full">Older-Adult-Friendly</span>
              <span className="ms-short">Friendly</span>
            </button>
          </div>

          {accessible ? (
            <button type="button" className="topbar-help" onClick={openHelp}>
              <Icon name="help" size={20} /> Help
            </button>
          ) : (
            <button
              type="button"
              className="icon-btn"
              onClick={openHelp}
              title="Help"
              aria-label="Help"
            >
              <Icon name="help" size={14} />
            </button>
          )}
        </header>

        <div className="chat-scroll" ref={scrollRef}>
          {messages.length === 0 && !isTyping ? (
            <EmptyState accessible={accessible} suggestions={SUGGESTIONS[mode]} onPick={send} />
          ) : (
            <>
              {messages.map((m) => (
                <MessageBubble
                  key={m.id}
                  msg={m}
                  accessible={accessible}
                  isLatestAssistant={lastAssistant?.id === m.id}
                  canExplain={lastAssistant?.id === m.id && Boolean(m.topicId)}
                  speaking={speakingId === m.id}
                  onReadAloud={() => readAloud(m)}
                  onExplain={explainSimply}
                  onAskAnother={askAnother}
                />
              ))}
              {isTyping && <TypingIndicator accessible={accessible} />}
            </>
          )}
        </div>

        {notice && (
          <div className={`chat-notice notice-${notice.tone}`} role="status">
            <Icon name={notice.tone === 'friendly' ? 'check' : 'info'} size={19} />
            <p>{notice.text}</p>
            <button type="button" className="notice-close" onClick={dismissNotice} aria-label="Dismiss">
              <Icon name="x" size={15} />
            </button>
          </div>
        )}

        <footer className="chat-composer">
          {showSuggestions && messages.length > 0 && (
            <div className="chip-row">
              {SUGGESTIONS[mode].map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`chip ${accessible ? 'chip-lg' : 'chip-sm'}`}
                  onClick={() => send(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            className="composer-form"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              ref={inputRef}
              className="composer-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={accessible ? 'Type your question here…' : 'Message assistant…'}
              aria-label="Type your question"
            />
            {accessible ? (
              <button type="submit" className="send-btn" disabled={!input.trim() || isTyping}>
                <Icon name="send" size={19} /> Send
              </button>
            ) : (
              <button
                type="submit"
                className="icon-btn send-icon"
                disabled={!input.trim() || isTyping}
                aria-label="Send"
                title="Send"
              >
                <Icon name="send" size={14} />
              </button>
            )}
          </form>

          {accessible && (
            <div className="composer-meta">
              <Icon name="info" size={14} />
              <span>This is a simulation — answers are prepared in advance and nothing is sent to a server.</span>
            </div>
          )}
        </footer>
      </div>

      {a11yOpen && (
        <>
          <div className="a11y-backdrop" onClick={() => setA11yOpen(false)} />
          <AccessibilityPanel
            textStep={textStep}
            onSetText={setTextStep}
            highContrast={highContrast}
            onToggleContrast={() => setHighContrast((v) => !v)}
            reduceMotion={reduceMotion}
            onToggleMotion={() => setReduceMotion((v) => !v)}
            onReset={resetA11y}
            onClose={() => setA11yOpen(false)}
          />
        </>
      )}

      {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}
    </div>
  );
}
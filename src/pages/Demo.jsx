import ChatApp from '../components/chat/ChatApp.jsx';
import Callout from '../components/ui/Callout.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Demo() {
  usePageTitle('Interactive Demo');

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Interactive Demonstration</p>
          <h1 className="page-title">Experience the Difference</h1>
          <p className="page-lead">
            See how the same AI concept can be adapted through interface design. Switch between the
            two versions, ask a question, and try the accessibility controls — everything on this
            page works.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <Callout title="Presenting this demo?" icon="info">
            <p>
              Ask “What is artificial intelligence?” in both modes to compare the answers, then try{' '}
              <strong>Read Aloud</strong>, <strong>Explain More Simply</strong>, and the{' '}
              <strong>Accessibility Options</strong> panel in the left sidebar of the
              Older-Adult-Friendly mode.
            </p>
          </Callout>

          <ChatApp />

          <div className="notice-grid">
            <div className="notice-col">
              <h3>What to notice — Conventional</h3>
              <ul className="check-list muted">
                <li>Small text, tight spacing, compact controls</li>
                <li>Icon-only sidebar actions — no labels</li>
                <li>Help is a single small “?” with no name</li>
                <li>Terse, technical answer style</li>
                <li>No accessibility settings offered anywhere</li>
              </ul>
            </div>
            <div className="notice-col notice-col-accent">
              <h3>What to notice — Older-Adult-Friendly</h3>
              <ul className="check-list">
                <li>Larger text and clearly labelled buttons</li>
                <li>“New Chat”, “Help &amp; Guide”, “Voice Input” — visible in words</li>
                <li>Plain-language answers with clear next steps</li>
                <li>“Explain More Simply” re-explains the last answer in easier words</li>
                <li>Working controls for text size, contrast, and motion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
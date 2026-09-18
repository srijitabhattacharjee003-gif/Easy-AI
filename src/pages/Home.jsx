import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import InterfacePreview from '../components/mockups/InterfacePreview.jsx';
import NormalVsFriendlyMockup from '../components/mockups/NormalVsFriendlyMockup.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import StatCard from '../components/ui/StatCard.jsx';
import QuoteBlock from '../components/ui/QuoteBlock.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

const PROCESS_STEPS = [
  'User Research',
  'Usability Challenges',
  'Design Iterations',
  'A/B Testing',
  'Analyze Usage',
  'Design Improvement',
];

const PRESENTATION_PATH = [
  { to: '/', label: 'Home' },
  { to: '/research', label: 'Research Problem' },
  { to: '/design', label: 'What I Changed' },
  { to: '/comparison', label: 'Normal vs Friendly' },
  { to: '/ab-testing', label: 'A/B Testing' },
  { to: '/results', label: '~35% Result' },
  { to: '/demo', label: 'Interactive Demo' },
];

export default function Home() {
  usePageTitle('Making AI More Accessible for Older Adults');

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Human–Computer Interaction Research · IIT Kharagpur</p>
            <h1 className="hero-title">Making AI More Accessible for Older Adults</h1>
            <p className="hero-subtitle">My HCI Research at IIT Kharagpur</p>
            <p className="hero-lead">
              Exploring how AI chat interfaces can become easier, clearer, and more intuitive for
              older adults through user research, interface redesign, and A/B testing.
            </p>
            <div className="hero-actions">
              <Link to="/research" className="btn btn-primary btn-lg">
                Explore the Research <Icon name="arrow-right" size={18} />
              </Link>
              <Link to="/demo" className="btn btn-outline btn-lg">
                Experience the Demo
              </Link>
            </div>
            <p className="hero-meta">
              Summer internship research · Mentored by Prof. Dr. Sourangshu Bhattacharya
            </p>
          </div>

          <div className="hero-visual">
            <InterfacePreview />
            <p className="preview-note">
              The older-adult-friendly interface explored in this research. *Usage measured among
              the tested participants aged 55–70, compared with the baseline design.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Key facts ---------- */}
      <section className="section section-tight">
        <div className="container">
          <div className="grid grid-4">
            <StatCard value="55–70" label="Participant age range" />
            <StatCard value="A/B Testing" label="Research approach" />
            <StatCard value="~35%" label="Higher usage among tested participants" accent />
            <StatCard value="Sidebar" label="Major design focus" />
          </div>
        </div>
      </section>

      {/* ---------- Research question ---------- */}
      <section className="section section-alt">
        <div className="container question-band">
          <p className="eyebrow">The Research Question</p>
          <QuoteBlock>
            “How can we make modern AI tools easier and more intuitive for older adults?”
          </QuoteBlock>
          <p className="section-lead center">
            This project examined that question through the interface of AI chat applications — and
            asked what changes in design could measurably improve usability and engagement for
            adults aged 55–70.
          </p>
        </div>
      </section>

      {/* ---------- Normal UI vs Older-Friendly UI (side-by-side comparison) ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Normal UI vs Older-Friendly UI"
            title="Same AI. Two very different experiences."
            lead="One glance tells the story of this research. On the left, a conventional AI chat built for experienced users. On the right, the same concept redesigned for adults aged 55–70."
            center
          />
          <NormalVsFriendlyMockup />
          <div
            className="center-link"
            style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/demo" className="btn btn-primary">
              Try it live in the demo <Icon name="arrow-right" size={17} />
            </Link>
            <Link to="/comparison" className="btn btn-outline">
              See the detailed comparison
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Two interfaces (text detail) ---------- */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="The Core Idea"
            title="Two interfaces. Same AI. Very different experience."
            lead="The research contrasted a conventional AI chat interface with a version redesigned around the needs of older adults."
          />
          <div className="grid grid-2 idea-grid">
            <article className="card idea-card">
              <div className="idea-head">
                <h3>Conventional AI Interface</h3>
                <span className="tag">Typical modern chat app</span>
              </div>
              <ul className="check-list muted">
                <li>Compact layout with small text and small controls</li>
                <li>Dense sidebar with icon-only actions</li>
                <li>Help and voice exist — but are hard to find</li>
                <li>Terse, technical language</li>
              </ul>
              <Link className="text-link" to="/comparison">
                See the full comparison <Icon name="arrow-right" size={15} />
              </Link>
            </article>

            <article className="card idea-card idea-card-accent">
              <div className="idea-head">
                <h3>Older-Adult-Friendly Interface</h3>
                <span className="tag tag-accent">Redesigned in this research</span>
              </div>
              <ul className="check-list">
                <li>Larger readable typography and larger buttons</li>
                <li>Clearly labelled sidebar with prominent “New Chat”</li>
                <li>Help and Voice always visible, in plain words</li>
                <li>Supportive language with “Explain More Simply”</li>
              </ul>
              <Link className="text-link" to="/demo">
                Try it in the interactive demo <Icon name="arrow-right" size={15} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Process overview ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How the Research Was Done"
            title="A complete HCI research process"
            lead="From first observations with participants to a measured design outcome."
            center
          />
          <ol className="process-strip">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step} className="process-pill">
                <span className="process-num">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="center-link">
            <Link to="/methodology" className="text-link">
              Explore the methodology step by step <Icon name="arrow-right" size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Result teaser ---------- */}
      <section className="section section-alt">
        <div className="container">
          <div className="result-teaser">
            <div className="result-number">
              <span className="result-big">~35%</span>
              <span className="result-cap">higher usage</span>
            </div>
            <div className="result-text">
              <h2>The redesigned sidebar was used about 35% more.</h2>
              <p>
                Among the tested participants aged 55–70, the redesigned sidebar received
                approximately 35% higher usage than the baseline design. The result describes the
                tested participants — it is not presented as a universal outcome for every older
                adult.
              </p>
              <Link to="/results" className="text-link">
                Read the full outcome <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Presentation path ---------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="For Presentations"
            title="A 3–5 minute walkthrough"
            lead="If you are short on time, this path tells the whole story in order."
            center
          />
          <div className="path-grid">
            {PRESENTATION_PATH.map((p, i) => (
              <Link key={p.to + p.label} to={p.to} className="path-step">
                <span className="path-num">{i + 1}</span>
                <span className="path-label">{p.label}</span>
                <Icon name="arrow-right" size={15} className="path-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section section-alt cta-band">
        <div className="container">
          <div className="cta-card">
            <h2>Experience the difference yourself</h2>
            <p>
              Switch between the two interfaces, ask questions, and use the accessibility controls —
              no setup required.
            </p>
            <Link to="/demo" className="btn btn-primary btn-lg">
              Open the Interactive Demo <Icon name="arrow-right" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
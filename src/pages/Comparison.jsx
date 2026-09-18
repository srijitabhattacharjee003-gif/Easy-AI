import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Callout from '../components/ui/Callout.jsx';
import { COMPARISON_ROWS } from '../data/comparisonData.js';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Comparison() {
  usePageTitle("What's Actually Different?");

  return (
    <>
      <PageHero
        eyebrow="Interface Comparison"
        title="What's Actually Different?"
        lead="A side-by-side look at the design decisions that separate a conventional AI interface from the older-adult-friendly version explored in this research."
      />

      <section className="section">
        <div className="container">
          <Callout title="How to read this page" icon="info">
            <p>
              This is a comparison of <strong>design approaches</strong>, not a scoreboard. Neither
              interface is universally “better” — each is tuned for a different audience. The
              shaded column simply highlights the behaviours introduced by the redesign studied
              here.
            </p>
          </Callout>

          {/* --- Concrete visual: type scale & target size --- */}
          <div className="visual-pair">
            <div className="card-plain type-compare">
              <div className="type-sample">
                <span className="tag">Conventional</span>
                <p className="type-text-sm">
                  AI systems can process information and respond to requests in seconds.
                </p>
                <span className="mini-btn mini-btn-sm">Send</span>
              </div>
              <div className="type-sample type-friendly">
                <span className="tag tag-accent">Older-Adult-Friendly</span>
                <p className="type-text-lg">
                  AI systems can process information and respond to requests in seconds.
                </p>
                <span className="mini-btn mini-btn-lg">Send message</span>
              </div>
            </div>

            <div className="card-plain target-demo">
              <h3>Interaction target size</h3>
              <p className="small-note">
                The same two actions, drawn at the typical sizes used in each interface style.
              </p>
              <div className="target-row">
                <span className="target-item">
                  <span className="target-box target-small" /> ~30px target
                </span>
                <span className="target-item">
                  <span className="target-box target-large" /> ~50px target
                </span>
              </div>
              <p className="small-note">
                Larger targets are easier to hit accurately — especially for users with reduced
                fine-motor control. <em>(General HCI principle: Fitts&apos;s Law.)</em>
              </p>
            </div>
          </div>

          {/* --- Comparison table --- */}
          <div className="cmp-table">
            <div className="cmp-head">
              <div>Design Area</div>
              <div>Conventional AI</div>
              <div>Older-Adult-Friendly AI</div>
            </div>
            {COMPARISON_ROWS.map((row) => (
              <div className="cmp-row" key={row.aspect}>
                <div className="cmp-aspect">{row.aspect}</div>
                <div className="cmp-cell" data-label="Conventional AI">
                  {row.conventional}
                </div>
                <div className="cmp-cell cmp-cell-friendly" data-label="Older-Adult-Friendly AI">
                  {row.friendly}
                </div>
              </div>
            ))}
          </div>
          <p className="small-note cmp-note">
            Note: the shaded column marks the redesigned behaviours studied in this research — it is
            a highlight, not a judgement.
          </p>

          <Callout title="Grounded in HCI theory" tone="principle" icon="check">
            <p>
              These differences are applications of well-established accessibility and HCI
              principles — such as Fitts&apos;s Law for target size and WCAG guidance for contrast
              and text size. What this research contributed is a measured evaluation of such
              principles in the specific context of AI chat interfaces for adults aged 55–70.
            </p>
          </Callout>

          <div className="center-link">
            <Link to="/demo" className="btn btn-primary">
              See these differences in the live demo <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
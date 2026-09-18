import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Callout from '../components/ui/Callout.jsx';
import MiniSidebar from '../components/mockups/MiniSidebar.jsx';
import AbTestChart from '../components/mockups/AbTestChart.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function ABTesting() {
  usePageTitle('A/B Testing');

  return (
    <>
      <PageHero
        eyebrow="Evaluation"
        title="A/B Testing the Sidebar"
        lead="To understand whether the redesign actually helped, the conventional sidebar (Variant A) and the redesigned sidebar (Variant B) were compared with participants aged 55–70."
      />

      <section className="section">
        <div className="container">
          <div className="variant-grid">
            <article className="variant-card">
              <div className="variant-head">
                <h3>Variant A — Baseline</h3>
                <span className="tag">Conventional sidebar</span>
              </div>
              <div className="variant-body">
                <MiniSidebar variant="before" />
                <ul className="variant-points">
                  <li>• Dense conversation list grouped by time</li>
                  <li>• Small, icon-only utility actions</li>
                  <li>• Compact targets and tight spacing</li>
                  <li>• Represents a typical modern AI chat sidebar</li>
                </ul>
              </div>
            </article>

            <article className="variant-card variant-card-accent">
              <div className="variant-head">
                <h3>Variant B — Redesigned</h3>
                <span className="tag tag-accent">Redesigned sidebar</span>
              </div>
              <div className="variant-body">
                <MiniSidebar variant="after" />
                <ul className="variant-points">
                  <li>• Curated list under clear section labels</li>
                  <li>• Prominent, labelled “New Chat”</li>
                  <li>• Larger targets and generous spacing</li>
                  <li>• Help and Voice visible as labelled actions</li>
                </ul>
              </div>
            </article>
          </div>

          <SectionHeading
            eyebrow="The Outcome"
            title="What the comparison showed"
            lead="Usage was compared between the two variants among the tested participants aged 55–70."
          />
          <AbTestChart />

          <Callout title="Reading this result honestly" tone="caution" icon="alert">
            <p>
              The reported outcome — approximately <strong>35% higher usage</strong> — describes{' '}
              <strong>the tested participants aged 55–70</strong>, compared with the baseline
              design. It is not a universal result for every older adult, and no claims about
              statistical significance are made anywhere on this website.
            </p>
          </Callout>

          <div className="center-link">
            <Link to="/results" className="btn btn-primary">
              Continue to the full results <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
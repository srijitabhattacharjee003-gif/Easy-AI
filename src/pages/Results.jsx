import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Callout from '../components/ui/Callout.jsx';
import AbTestChart from '../components/mockups/AbTestChart.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

const LESSONS = [
  {
    icon: 'eye',
    title: 'User research reveals invisible problems',
    text: 'Difficulties that seem minor from a designer\'s desk can be significant barriers in real use. Research shows what assumptions hide.',
  },
  {
    icon: 'layers',
    title: 'Interface organization influences interaction',
    text: 'How elements are arranged and grouped changed how — and how much — participants engaged with the tool.',
  },
  {
    icon: 'target',
    title: 'Accessibility belongs in the first sketch',
    text: 'Accessibility should be considered during design, not retrofitted after the interface is finished.',
  },
  {
    icon: 'refresh',
    title: 'Iterative design is essential',
    text: 'Each round of observation and refinement made the design direction clearer and more grounded.',
  },
  {
    icon: 'check',
    title: 'A/B testing turns opinion into observation',
    text: 'Comparing two variants provided evidence about interface changes that discussion alone could not.',
  },
  {
    icon: 'user',
    title: 'Designing for older adults requires understanding',
    text: 'Their interaction needs must be understood directly — assumptions are not a substitute for research with real participants.',
  },
];

export default function Results() {
  usePageTitle('Results & Outcome');

  return (
    <>
      <PageHero
        eyebrow="Results & Outcome"
        title="What the research found"
        lead="One measured outcome, reported carefully — and what the process of getting there taught me."
      />

      <section className="section">
        <div className="container">
          <div className="result-panel">
            <div className="result-panel-number">~35%</div>
            <div className="result-panel-body">
              <h2>Higher usage with the redesigned sidebar</h2>
              <p className="result-sentence">
                “The redesigned sidebar resulted in approximately <strong>35% higher usage</strong>{' '}
                among the tested participants aged 55–70 compared with the baseline design.”
              </p>
              <div className="result-chips">
                <span className="tag tag-accent">Variant B · Redesigned sidebar</span>
                <span className="tag">vs. Variant A · Baseline</span>
                <span className="tag">Participants aged 55–70</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Interpreting Carefully"
            title="What this result does — and does not — tell us"
            lead="Academic honesty about scope is part of good research communication."
          />
          <div className="does-grid">
            <div className="does-card does-yes">
              <h3>What it does tell us</h3>
              <ul className="check-list">
                <li>
                  For the tested participants aged 55–70, the redesigned sidebar was used
                  approximately 35% more than the baseline.
                </li>
                <li>Interface organisation alone can meaningfully change engagement with an AI tool.</li>
                <li>Accessibility-oriented design decisions were the ones participants used more.</li>
              </ul>
            </div>
            <div className="does-card does-no">
              <h3>What it does not tell us</h3>
              <ul className="check-list muted">
                <li>It does not generalise to every older adult — the result describes the tested participants.</li>
                <li>No statistical significance, p-values, or confidence intervals are claimed.</li>
                <li>It does not isolate which single change produced the effect — the sidebar was redesigned as a whole.</li>
              </ul>
            </div>
          </div>

          <SectionHeading
            eyebrow="Visualising the Outcome"
            title="A conceptual picture of the difference"
            lead="A deliberately labelled illustration — not a chart of measured data."
          />
          <AbTestChart />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Reflection"
            title="What the research experience taught me"
          />
          <div className="grid grid-3">
            {LESSONS.map((l) => (
              <article className="card" key={l.title}>
                <span className="card-icon">
                  <Icon name={l.icon} size={21} />
                </span>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </article>
            ))}
          </div>

          <div className="center-link">
            <Link to="/demo" className="btn btn-primary btn-lg">
              See the redesigned interface in action <Icon name="arrow-right" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
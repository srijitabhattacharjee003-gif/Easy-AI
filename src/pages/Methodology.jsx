import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Callout from '../components/ui/Callout.jsx';
import ProcessTimeline from '../components/process/ProcessTimeline.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

const STEPS = [
  {
    title: 'User Research',
    tag: 'Research',
    text: 'Studied how adults aged 55–70 interact with AI chat applications — focusing on where they hesitated, what they overlooked, and which interface patterns caused confusion.',
  },
  {
    title: 'Identify Usability Challenges',
    tag: 'Research',
    text: 'Synthesised the observations into recurring usability challenges: navigation, information density, small text, icon-only controls, and the discoverability of key actions.',
  },
  {
    title: 'Design Iterations',
    tag: 'Design',
    text: 'Redesigned the sidebar of an AI chat application — reworking information organisation, navigation, and interaction patterns around clarity and discoverability.',
  },
  {
    title: 'A/B Testing',
    tag: 'Research',
    text: 'Compared the baseline sidebar (Variant A) with the redesigned sidebar (Variant B). Participants in the 55–70 age group used one of the two variants, and their interaction with each version was compared.',
  },
  {
    title: 'Analyze Usage',
    tag: 'Research',
    text: 'Compared usage across the two variants. The redesigned sidebar received approximately 35% higher usage than the baseline among the tested participants.',
  },
  {
    title: 'Design Improvement',
    tag: 'Design',
    text: 'Translated the observed outcome into concrete design refinements — reinforcing what worked and forming the basis of the older-adult-friendly interface shown on this website.',
  },
];

const METHODS = [
  {
    icon: 'eye',
    title: 'User Research',
    text: 'Understanding real interaction behaviour before designing anything — letting observed difficulties, not assumptions, drive the design direction.',
  },
  {
    icon: 'layers',
    title: 'Interface Prototyping',
    text: 'Translating findings into concrete sidebar redesigns: organisation, navigation, and interaction patterns that could actually be used and tested.',
  },
  {
    icon: 'shuffle',
    title: 'A/B Testing',
    text: 'Comparing two interface variants with the target age group, so that design decisions could be evaluated against observed usage rather than opinion.',
  },
];

export default function Methodology() {
  usePageTitle('Research Methodology');

  return (
    <>
      <PageHero
        eyebrow="Research Methodology"
        title="How the research was conducted"
        lead="The project followed a complete HCI research loop: understand the problem, design a change, measure its effect, and improve again."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The Process"
            title="Six stages, from observation to improvement"
          />
          <ProcessTimeline steps={STEPS} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Callout
            title="Research facts vs. general HCI principles"
            tone="principle"
            icon="check"
          >
            <p>
              Throughout this website, a distinction is maintained between{' '}
              <strong>what this research did and found</strong> (for example, the A/B comparison of
              two sidebars) and <strong>general HCI principles</strong> that informed the design
              (for example, Fitts&apos;s Law or WCAG guidance). The principles are established in
              the field; the ~35% outcome belongs to this research and its tested participants
              alone.
            </p>
          </Callout>

          <SectionHeading
            eyebrow="Methods Used"
            title="Three methods, one question"
            lead="Each method answered a different part of the research question."
          />
          <div className="grid grid-3">
            {METHODS.map((m) => (
              <article className="card" key={m.title}>
                <span className="card-icon">
                  <Icon name={m.icon} size={21} />
                </span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>

          <div className="center-link">
            <Link to="/design" className="btn btn-primary">
              See what was designed <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
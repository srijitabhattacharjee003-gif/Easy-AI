import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Callout from '../components/ui/Callout.jsx';
import SidebarBeforeAfter from '../components/mockups/SidebarBeforeAfter.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

const DECISIONS = [
  {
    icon: 'type',
    title: 'Typography & Readability',
    changed: 'Body text and labels increased in size, with generous line spacing.',
    matters: 'Comfortable reading is the foundation of every other interaction.',
  },
  {
    icon: 'target',
    title: 'Larger Interaction Targets',
    changed: 'Buttons and list rows sized to roughly 48px.',
    matters: 'Forgiving targets reduce mis-taps — and the hesitation that comes with them.',
  },
  {
    icon: 'layers',
    title: 'Sidebar Organization',
    changed: 'Conversations curated under clear section names; assistance tools given their own labelled section.',
    matters: 'The sidebar is the map of the product — clear structure makes the whole app legible.',
  },
  {
    icon: 'compass',
    title: 'Navigation',
    changed: 'Flat, labelled navigation; no core action is hidden behind a menu.',
    matters: 'Every key action can be seen, not remembered.',
  },
  {
    icon: 'tag',
    title: 'Clear Labels over Icons',
    changed: 'Icons are always paired with words.',
    matters: 'No symbol has to be guessed or memorised.',
  },
  {
    icon: 'help',
    title: 'Visible Help',
    changed: 'A labelled “Help & Guide” action sits permanently in the sidebar, with plain-language steps.',
    matters: 'Support appears at the moment of confusion, before frustration turns into abandonment.',
  },
  {
    icon: 'mic',
    title: 'Voice as a First-Class Option',
    changed: 'Voice Input surfaced as a labelled action — an alternative to typing.',
    matters: 'Typing speed or confidence should not gate access to the tool.',
  },
  {
    icon: 'grid',
    title: 'Information Density',
    changed: 'Fewer elements on screen, each given room and a purpose.',
    matters: 'Less to scan means the important things stand out.',
  },
  {
    icon: 'eye',
    title: 'Spacing & Visual Hierarchy',
    changed: 'Generous whitespace and one clear primary action per view.',
    matters: 'The layout itself guides attention to what matters next.',
  },
  {
    icon: 'chat',
    title: 'Plain Language',
    changed: 'Friendly, concrete wording: “Read Aloud”, “Explain More Simply”, “Ask Another Question”.',
    matters: 'Interface language should match how people actually speak.',
  },
];

export default function Design() {
  usePageTitle('Design Process');

  return (
    <>
      <PageHero
        eyebrow="Design Process"
        title="What I changed — and why it matters"
        lead="The redesign was not decoration. Every change below responds to a usability challenge identified in the research, and the sidebar was the centrepiece."
      />

      <section className="section">
        <div className="container">
          <div className="principle-banner">
            <p className="eyebrow">A Core Principle of This Research</p>
            <p className="principle-statement">
              “Designing for older adults is not simply about making everything bigger.”
            </p>
            <p className="principle-sub">
              The goal is to make important interactions easier to understand, easier to discover,
              and easier to use. Size is one tool among many — alongside clear labels, visible
              actions, plain language, and reduced density.
            </p>
          </div>

          <SectionHeading
            eyebrow="The Centrepiece"
            title="The sidebar, before and after"
            lead="The conventional sidebar packs history, search, and utilities into a dense, icon-heavy strip. The redesign reorganises it around clarity."
          />
          <SidebarBeforeAfter />

          <Callout
            title="Grounded in principle, validated by testing"
            tone="principle"
            icon="check"
          >
            <p>
              These decisions apply well-established HCI and accessibility principles. What this
              research added was a measured evaluation of those principles in a real context — A/B
              testing with participants aged 55–70, which showed approximately 35% higher usage for
              the redesigned sidebar.
            </p>
          </Callout>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Design Decisions"
            title="Ten decisions, each with a reason"
            lead="What changed in the interface — and the usability reasoning behind each change."
          />
          <div className="grid grid-3">
            {DECISIONS.map((d) => (
              <article className="card decision-card" key={d.title}>
                <span className="card-icon">
                  <Icon name={d.icon} size={21} />
                </span>
                <h3>{d.title}</h3>
                <p className="decision-what">
                  <strong>What changed:</strong> {d.changed}
                </p>
                <p className="decision-why">
                  <strong>Why it matters:</strong> {d.matters}
                </p>
              </article>
            ))}
          </div>

          <div className="center-link" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/comparison" className="btn btn-outline">
              See a side-by-side comparison
            </Link>
            <Link to="/demo" className="btn btn-primary">
              Try the redesigned interface <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
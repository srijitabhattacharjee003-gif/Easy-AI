import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import Callout from '../components/ui/Callout.jsx';
import QuoteBlock from '../components/ui/QuoteBlock.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

const BARRIERS = [
  {
    icon: 'compass',
    title: 'Navigation',
    text: 'Menus and actions organised for experienced users; key features sit behind unfamiliar paths.',
  },
  {
    icon: 'grid',
    title: 'Information Density',
    text: 'Many options shown at once, demanding more scanning, attention, and working memory.',
  },
  {
    icon: 'type',
    title: 'Small Text',
    text: 'Body text and labels tuned for compactness rather than reading comfort.',
  },
  {
    icon: 'alert',
    title: 'Unclear Controls',
    text: 'Controls whose purpose is not obvious from simply looking at them.',
  },
  {
    icon: 'eye',
    title: 'Icon-Only Actions',
    text: 'Meaning hidden behind symbols that must be learned, guessed, or discovered by trial and error.',
  },
  {
    icon: 'search',
    title: 'Discoverability',
    text: 'Important features exist, but are effectively invisible unless you already know where to look.',
  },
  {
    icon: 'shuffle',
    title: 'Interaction Complexity',
    text: 'Multi-step patterns that assume prior experience with similar tools.',
  },
];

export default function Research() {
  usePageTitle('The Research Problem');

  return (
    <>
      <PageHero
        eyebrow="The Research Problem"
        title="Why can modern AI interfaces be hard to use for older adults?"
        lead="Many modern AI applications use interaction patterns designed primarily around younger, digitally experienced users. This research asked what that means in practice — and what design can do about it."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <SectionHeading
                eyebrow="The Mismatch"
                title="Powerful tools, unfamiliar doors"
              />
              <p style={{ marginBottom: 16 }}>
                Modern AI tools are powerful — but their interfaces are usually designed by, and
                for, people who are already fluent in digital products. Icon-only buttons, dense
                layouts, small text, and multi-step interaction patterns all assume experience that
                many older adults have not had the opportunity to build.
              </p>
              <p style={{ marginBottom: 16 }}>
                The result is not a lack of capability on the user&apos;s side, but a{' '}
                <strong>mismatch between interface design and user needs</strong>. The same AI
                engine can feel either welcoming or exclusionary, depending entirely on how its
                interface is organised.
              </p>
              <p>
                This is the gap the research set out to understand: which parts of a real AI chat
                interface create unnecessary barriers, and whether redesigning them changes how
                much people actually use the tool.
              </p>
            </div>

            <div className="card focus-card">
              <h3>Research Focus</h3>
              <p>
                The <strong>sidebar of AI chat applications</strong> — the “map” of the product —
                as a high-leverage target for accessibility improvements.
              </p>
              <ul className="lever-list">
                <li>
                  <strong>Information organization</strong>
                  <span>What appears where, and in what groupings</span>
                </li>
                <li>
                  <strong>Navigation</strong>
                  <span>How people move between conversations and features</span>
                </li>
                <li>
                  <strong>Interaction patterns</strong>
                  <span>How actions are triggered, labelled, and confirmed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Where Barriers Appear"
            title="Seven ways an interface can get in the way"
            lead="These are widely recognised accessibility considerations that motivated the research direction. Not every barrier affects every person — but each one raises the effort required to use a tool."
          />
          <div className="grid grid-3">
            {BARRIERS.map((b) => (
              <article className="card" key={b.title}>
                <span className="card-icon">
                  <Icon name={b.icon} size={21} />
                </span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>

          <Callout title="A note on scope" tone="caution" icon="alert">
            <p>
              This project does not claim that all older adults struggle with AI interfaces, nor
              that the barriers listed affect everyone equally. They are recognised accessibility
              considerations that shaped the research direction — nothing more.
            </p>
          </Callout>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="question-band">
            <p className="eyebrow">The Question Guiding the Work</p>
            <QuoteBlock>
              “How can we make modern AI tools easier and more intuitive for older adults?”
            </QuoteBlock>
          </div>
          <div className="center-link">
            <Link to="/methodology" className="btn btn-primary">
              See how the research approached it <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
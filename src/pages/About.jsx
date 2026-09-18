import PageHero from '../components/ui/PageHero.jsx';
import Callout from '../components/ui/Callout.jsx';
import QuoteBlock from '../components/ui/QuoteBlock.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

const FACTS = [
  { label: 'Programme', value: 'Summer Research Internship' },
  { label: 'Institution', value: 'IIT Kharagpur' },
  { label: 'Research Area', value: 'Human–Computer Interaction' },
  { label: 'Focus', value: 'Accessible AI Interfaces' },
  { label: 'Participants', value: '55–70 years' },
  { label: 'Method', value: 'User Research + A/B Testing' },
  { label: 'Mentor', value: 'Prof. Dr. Sourangshu Bhattacharya' },
];

export default function About() {
  usePageTitle('About the Research');

  return (
    <>
      <PageHero
        eyebrow="About the Research"
        title="About the project"
        lead="A summer research internship exploring how interface design can make AI tools genuinely usable for older adults."
      />

      <section className="section">
        <div className="container">
          <div className="fact-grid">
            {FACTS.map((f) => (
              <div className="fact-card" key={f.label}>
                <p className="fact-label">{f.label}</p>
                <p className="fact-value">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2">
            <QuoteBlock boxed cite="Personal reflection">
              “This experience gave me valuable exposure to the complete HCI research process — from
              identifying usability challenges and designing interfaces to conducting user studies,
              A/B testing, analyzing results, and translating findings into design improvements.”
            </QuoteBlock>
            <QuoteBlock boxed>
              “Good technology should adapt to its users, rather than expecting users to adapt to
              technology.”
            </QuoteBlock>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Callout title="A note about this website" tone="principle" icon="check">
            <p>
              This website is itself a small accessibility demonstration: the interactive demo
              includes working text-size, contrast, and motion controls, and every page follows the
              same principles the research explored. All AI responses are simulated locally — no
              data leaves your browser.
            </p>
          </Callout>

          <div className="fact-grid">
            <div className="fact-card">
              <p className="fact-label">Key Outcome</p>
              <p className="fact-value">
                Approximately 35% higher usage for the redesigned sidebar among the tested
                participants aged 55–70
              </p>
            </div>
            <div className="fact-card">
              <p className="fact-label">Major Design Focus</p>
              <p className="fact-value">The sidebar of AI chat applications — its organization, navigation, and interaction patterns</p>
            </div>
            <div className="fact-card">
              <p className="fact-label">Research Approach</p>
              <p className="fact-value">User research followed by A/B testing of two sidebar variants</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
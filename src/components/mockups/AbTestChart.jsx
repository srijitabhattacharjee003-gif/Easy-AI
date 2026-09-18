export default function AbTestChart() {
  return (
    <figure className="ab-chart">
      <figcaption className="ab-title">
        Conceptual illustration of the reported relative outcome — <strong>not a chart of measured data</strong>.
      </figcaption>

      <div className="ab-row">
        <div className="ab-label">
          <strong>Variant A</strong>
          <span>Baseline sidebar</span>
        </div>
        <div className="ab-track">
          <div className="bar bar-a" style={{ width: '62%' }} />
        </div>
        <div className="ab-value">Reference</div>
      </div>

      <div className="ab-row">
        <div className="ab-label">
          <strong>Variant B</strong>
          <span>Redesigned sidebar</span>
        </div>
        <div className="ab-track">
          <div className="bar bar-b" style={{ width: '84%' }} />
        </div>
        <div className="ab-value ab-value-accent">≈ +35% usage</div>
      </div>

      <p className="ab-footnote">
        Bar lengths are chosen only to visualise the relative difference (“approximately 35% higher
        usage”). They do not represent raw usage data. The reported outcome describes the tested
        participants aged 55–70 and is not generalised to all older adults.
      </p>
    </figure>
  );
}
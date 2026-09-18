export default function ProcessTimeline({ steps }) {
  return (
    <ol className="timeline">
      {steps.map((step, i) => (
        <li className="tl-step" key={step.title}>
          <span className="tl-num">{i + 1}</span>
          <div className="tl-body">
            <div className="tl-head">
              <h3 className="tl-title">{step.title}</h3>
              {step.tag && (
                <span className={`tag ${step.tag === 'Research' ? 'tag-research' : 'tag-design'}`}>
                  {step.tag}
                </span>
              )}
            </div>
            <p className="tl-text">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
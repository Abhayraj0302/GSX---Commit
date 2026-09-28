const workflowSteps = [
  {
    number: '01',
    title: 'Detect',
    text: 'Mark candidate objects in a side-scan sonar image for closer inspection.',
  },
  {
    number: '02',
    title: 'Verify',
    text: 'Let a reviewer confirm, reject, or flag each candidate.',
  },
  {
    number: '03',
    title: 'Explain',
    text: 'Keep the image evidence, score, class, and source context together.',
  },
  {
    number: '04',
    title: 'Locate',
    text: 'Show coordinates only when their association with the image is verified.',
  },
  {
    number: '05',
    title: 'Prioritize',
    text: 'Organize follow-up inspection using visible evidence and available context.',
  },
];

export default function Workflow() {
  return (
    <section className="workflow-section section-shell" id="workflow" aria-labelledby="workflow-title">
      <div className="section-intro">
        <div>
          <p className="overline">A review sequence</p>
          <h2 id="workflow-title">Keep each finding explainable.</h2>
          <p className="section-lede">The interface is designed around traceable evidence and human review, from a sonar return to a documented follow-up.</p>
        </div>
        <span className="section-index" aria-hidden="true">01—05</span>
      </div>
      <ol className="workflow-list">
        {workflowSteps.map((step) => (
          <li className="workflow-step" key={step.number}>
            <span className="workflow-number">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

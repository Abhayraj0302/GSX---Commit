const classes = [
  {
    number: '01',
    name: 'Pipe',
    detail: 'Pipeline returns in side-scan sonar, with survey and dataset provenance kept attached.',
  },
  {
    number: '02',
    name: 'Shipwreck',
    detail: 'Wreck structures represented as detection boxes for the unified review view.',
  },
  {
    number: '03',
    name: 'Mine-like Contact',
    detail: 'A cautious dataset label. It does not establish that an object is an explosive mine.',
  },
  {
    number: '04',
    name: 'Crab Pot',
    detail: 'Fishing-gear returns, with source release and annotation provenance tracked.',
  },
];

export default function ClassOverview() {
  return (
    <section className="class-section section-shell" id="classes" aria-labelledby="classes-title">
      <div className="section-intro">
        <div>
          <p className="overline">Four scope classes</p>
          <h2 id="classes-title">Name what the data supports.</h2>
          <p className="section-lede">These are the four core classes in the current project scope. Each result should retain enough source context to review how it was labeled.</p>
        </div>
        <span className="section-index" aria-hidden="true">CORE / 04</span>
      </div>
      <div className="class-list">
        {classes.map((item) => (
          <article className="class-row" key={item.number}>
            <span className="class-number">{item.number}</span>
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
      <aside className="experimental-note">
        <div>
          <p className="overline">Separate experimental branch</p>
          <h3>Ghost Net</h3>
        </div>
        <p>Synthetic-only results can describe an experiment, but they do not establish field accuracy. Ghost Net is not part of the validated four-class claim.</p>
      </aside>
    </section>
  );
}

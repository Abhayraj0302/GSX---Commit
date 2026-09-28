const locationStates = [
  { type: 'Real', description: 'Image-to-navigation association has been verified.' },
  { type: 'Simulated', description: 'A display coordinate is illustrative and clearly marked.' },
  { type: 'Unavailable', description: 'No verified coordinate is available for this image.' },
];

export default function Limitations() {
  return (
    <section className="limitations-section section-shell" id="limitations" aria-labelledby="limitations-title">
      <div className="section-intro">
        <div>
          <p className="overline">Evidence before certainty</p>
          <h2 id="limitations-title">Useful context. Honest limits.</h2>
          <p className="section-lede">A sonar candidate is a prompt for inspection. It is not proof of object identity, exact position, or cleanup priority.</p>
        </div>
      </div>
      <div className="limitations-content">
        <div className="location-guide">
          <h3>Location labels</h3>
          <dl>
            {locationStates.map((item) => (
              <div key={item.type}>
                <dt><span className={`location-state state-${item.type.toLowerCase()}`}>{item.type}</span></dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="human-review-note">
          <p className="overline">Decision support</p>
          <p className="human-review-statement">The prototype is not a substitute for expert sonar interpretation, navigation verification, physical confirmation, or cleanup operations.</p>
          <p className="human-review-detail">The controls in this sample workspace change local display state only. They do not submit or preserve a review.</p>
        </div>
      </div>
    </section>
  );
}

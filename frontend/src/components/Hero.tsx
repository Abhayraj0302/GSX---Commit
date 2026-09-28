import TopoField from './ui/TopoField';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <TopoField />
        <div className="hero-readability" />
      </div>
      <div className="hero-inner">
        <p className="hero-kicker"><span /> Side-scan sonar · Research prototype</p>
        <h1 id="hero-title">Make the unseen <span>reviewable.</span></h1>
        <p className="hero-description">
          A careful way to inspect underwater objects in sonar imagery, with evidence and source context alongside every sample finding.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#workspace">Explore the sample workspace</a>
          <a className="button button-secondary" href="#workflow">See how review works</a>
        </div>
        <p className="hero-note">Four supported classes · Human review stays in the loop</p>
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span> / 04</div>
    </section>
  );
}

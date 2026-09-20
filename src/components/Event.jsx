import React from 'react';

export default function Event() {
  return (
    <section className="events" id="events">
      <div className="events-container">
        <div className="section-label">Events</div>

        {/* Coming soon banner */}
        <div className="events-coming-soon">
          <h2 className="events-coming-soon-heading">
            Something Big is <span className="highlight">Brewing.</span>
          </h2>
          <p className="events-coming-soon-text">
            Our first wave of events, hackathons, and workshops are being planned right now. Stay tuned — registrations will open soon.
          </p>
          <div className="events-coming-soon-badge">
            <span className="pulse-dot" />
            Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}

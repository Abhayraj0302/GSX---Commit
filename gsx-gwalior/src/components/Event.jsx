import React from 'react';

export default function Event() {
  return (
    <section className="section" id="events">
      <div className="section-container">
        <h2 className="section-title">Featured Events</h2>
        <div className="event-card">
          <img src="/event-poster.png" alt="Event Poster" className="event-poster-img" />
          <div className="event-info">
            <h3>Flagship Tech Summit</h3>
            <p>Join keynotes, competitive hack sessions, and expert panels.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

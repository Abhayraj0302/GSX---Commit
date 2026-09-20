import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1 className="hero-title">Welcome to GSX Gwalior</h1>
        <p className="hero-subtitle">
          Empowering builders, creators, and innovators across technology and design.
        </p>
        <div className="hero-actions">
          <a href="#events" className="btn btn-primary">Explore Events</a>
          <a href="#schedule" className="btn btn-secondary">View Schedule</a>
        </div>
      </div>
    </section>
  );
}

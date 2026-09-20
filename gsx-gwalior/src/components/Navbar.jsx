import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img src="/logo.png" alt="GSX Gwalior" className="brand-logo" />
          <span className="brand-text">GSX Gwalior</span>
        </a>
        <nav className="navbar-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#activities" className="nav-link">Activities</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#workshops" className="nav-link">Workshops</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar" style={scrolled ? { borderBottomColor: 'rgba(255,255,255,0.08)' } : {}}>
      <div className="navbar-container">
        {/* Brand */}
        <a href="#" className="navbar-brand" aria-label="GSX Gwalior Chapter">
          <SparkleIcon />
          <span>GSX Gwalior Chapter</span>
        </a>

        {/* Register button */}
        <div className="navbar-cta" style={{ display: 'flex' }}>
          <a href="#events" className="btn btn-primary">Register Now</a>
        </div>
      </div>
    </header>
  );
}

/* Sparkle SVG matching the screenshot brand icon */
function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

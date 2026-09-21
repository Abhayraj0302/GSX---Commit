import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { ShinyButton } from './ui/shiny-button';

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
          <Logo size={22} className="navbar-logo" />
          <span>GSX Gwalior Chapter</span>
        </a>

        {/* Register button */}
        <div className="navbar-cta" style={{ display: 'flex' }}>
          <ShinyButton href="#events">Register Now</ShinyButton>
        </div>
      </div>
    </header>
  );
}


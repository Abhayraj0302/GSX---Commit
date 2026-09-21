import React from 'react';
import { HyperText } from './ui/hyper-text';

export default function Hero({ introPhase = 2 }) {
  return (
    <section className="hero" id="home">
      {/* Decorative dot grids */}
      <DotGrid className="hero-dots hero-dots-left" />
      <DotGrid className="hero-dots hero-dots-right" />

      {/* Small decorative sparkle on left edge */}
      <div className="hero-sparkle-accent" aria-hidden="true">
        <Sparkle size={12} />
      </div>

      <div className="hero-container">
        {/* Giant title — GSX GWALIOR — animates in FIRST with letter scramble */}
        <div className={`hero-title-group intro-title ${introPhase >= 1 ? 'intro-visible' : ''}`}>
          <h1 className="hero-title-line hero-title-gsx">
            <span className="hero-hyper-letter">GSX</span>
          </h1>
          <div className="hero-title-line hero-title-gwalior">
            <HyperText
              text="GWALIOR"
              duration={1100}
              className="hero-hyper-letter"
            />
          </div>
        </div>

        {/* Rest of hero content — animates in SECOND */}
        <div className={`intro-content ${introPhase >= 2 ? 'intro-visible' : ''}`}>
          {/* Subtitle */}
          <p className="hero-subtitle">
            The hub for builders, creators, and contributors at MITS‑DU Gwalior.
            <br />
            We build. We deploy. We contribute.
          </p>

          {/* CTA button */}
          <div className="hero-actions">
            <a href="#events" className="btn btn-secondary">
              Explore Events
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="hero-scroll" aria-hidden="true">
            <span>Scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sparkle SVG */
function Sparkle({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" fill="currentColor" />
    </svg>
  );
}

/* 3×3 dot grid decoration */
function DotGrid({ className }) {
  return (
    <div className={className} aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

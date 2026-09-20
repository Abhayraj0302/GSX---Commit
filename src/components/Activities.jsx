import React from 'react';

export default function Activities() {
  return (
    <section className="cta-section" id="updates">
      <div className="cta-card">
        {/* Sparkle decorations */}
        <div className="cta-sparkle cta-sparkle-1" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" fill="currentColor" />
          </svg>
        </div>
        <div className="cta-sparkle cta-sparkle-2" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" fill="currentColor" />
          </svg>
        </div>

        <div className="cta-content">
          <h2 className="cta-heading">
            Follow Us for
            <br />
            <span className="highlight">Updates</span>
          </h2>
          <p className="cta-subtitle">
            Stay in the loop with events, registrations, and announcements from GSX Gwalior.
          </p>
          <div className="cta-actions">
            <a href="#events" className="btn btn-primary">
              Register Now <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://www.instagram.com/gsxgwaliorchapter"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

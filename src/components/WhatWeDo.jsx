import React from 'react';
import { UniqueAccordion } from './ui/interactive-accordion';

export default function WhatWeDo() {
  return (
    <section className="whatwedo" id="whatwedo">
      <div className="whatwedo-container">
        <div className="section-label">What We Do</div>

        <div className="whatwedo-layout">
          {/* Left — heading */}
          <div className="whatwedo-heading-col">
            <h2 className="whatwedo-title">
              Building the
              <br />
              future, <span className="highlight">together.</span>
            </h2>
            <p className="whatwedo-subtitle">
              From hands-on workshops to competitive hackathons, everything at GSX is designed to turn curiosity into real-world capability.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="whatwedo-accordion-col">
            <UniqueAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}

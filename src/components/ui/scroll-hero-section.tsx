'use client';

import React, { useEffect } from 'react';

type Theme = 'system' | 'light' | 'dark';

export type ShipStickyHeaderProps = {
  /** Words that cycle under "you can …" */
  items?: string[];
  /** Prefix text before the cycling words (default: "you can ") */
  prefix?: string;
  /** Sets CSS var --count automatically from items length */
  showFooter?: boolean;
  /** Show decorative bear links */
  showBears?: boolean;
  /** UI theme (affects color-scheme + switch color) */
  theme?: Theme;
  /** Enable view-timeline animations if supported */
  animate?: boolean;
  /** Accent hue (0–359) */
  hue?: number;
  /** Where the highlight band starts (vh) */
  startVh?: number; // default 50
  /** Space (vh) below the sticky header block */
  spaceVh?: number; // default 50
  /** Debug outline (for dev) */
  debug?: boolean;
  /** Optional custom intro text under the header */
  taglineHTML?: string;
  /** Custom content to render inside the expanding main section */
  children?: React.ReactNode;
  /** Custom wrapper class */
  className?: string;
};

export function WordHeroPage({
  items = ['design.', 'prototype.', 'solve.', 'build.', 'develop.', 'cook.', 'ship.'],
  prefix = 'you can ',
  showFooter = false,
  showBears = false,
  theme = 'dark',
  animate = true,
  hue = 280,
  startVh = 50,
  spaceVh = 50,
  debug = false,
  taglineHTML,
  children,
  className = '',
}: ShipStickyHeaderProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.animate = String(animate);
    root.dataset.debug = String(debug);
  }, [animate, debug]);

  return (
    <div
      className={`scroll-hero-container ${className}`}
      data-theme={theme}
      data-animate={String(animate)}
      data-debug={String(debug)}
      style={
        {
          ['--count' as any]: items.length,
          ['--hue' as any]: hue,
          ['--start' as any]: `${startVh}vh`,
          ['--space' as any]: `${spaceVh}vh`,
        } as React.CSSProperties
      }
    >
      {/* Sticky Word Header */}
      <div className="scroll-hero-sticky-header">
        <div className="scroll-hero-sticky-inner">
          <h2 className="scroll-hero-prefix" aria-label={`${prefix} ${items.join(', ')}`}>
            <span aria-hidden="true">{prefix}&nbsp;</span>
          </h2>

          {/* Visible cycling words */}
          <ul className="scroll-hero-word-list" aria-hidden="true">
            {items.map((word, i) => (
              <li
                key={i}
                className="scroll-hero-word-item"
                style={{ ['--i' as any]: i } as React.CSSProperties}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expanding Section */}
      <div className="scroll-hero-reveal-panel">
        {children ? (
          children
        ) : (
          <div className="scroll-hero-default-content">
            {taglineHTML ? (
              <p
                className="scroll-hero-fluid-text"
                dangerouslySetInnerHTML={{ __html: taglineHTML }}
              />
            ) : (
              <p className="scroll-hero-fluid-text">
                and we&apos;ll show you how.
              </p>
            )}
          </div>
        )}

        {showBears && (
          <>
            <a
              className="scroll-hero-bear-link"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Follow on X"
            >
              <BearSVG />
            </a>
            <a
              className="scroll-hero-bear-link"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ left: '4.5rem' }}
              aria-label="Follow on X (secondary)"
            >
              <BearSVG />
            </a>
          </>
        )}
      </div>

      {showFooter && (
        <footer className="scroll-hero-footer">
          ʕ⊙ᴥ⊙ʔ GSX &copy; {new Date().getFullYear()}
        </footer>
      )}
    </div>
  );
}

export function BearSVG() {
  return (
    <svg className="w-9" viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20" />
      <circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20" />
      <circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor" />
      <circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor" />
      <path d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z" fill="currentColor" />
      <rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default WordHeroPage;

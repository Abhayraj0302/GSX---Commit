import React from 'react';

/**
 * ShinyButton — Animated CTA button with a rotating conic-gradient border,
 * shimmer overlay, and dot-grid mask. Adapted from the shiny-cta pattern.
 *
 * Colour CSS custom properties (--shiny-cta-highlight, etc.) are overridden
 * in index.css so the button blends with the site's purple accent palette.
 */
export function ShinyButton({ children, onClick, href, className = '', ...rest }) {
  const Tag = href ? 'a' : 'button';
  const linkProps = href ? { href, ...rest } : { onClick, ...rest };

  return (
    <Tag className={`shiny-cta ${className}`} {...linkProps}>
      <span>{children}</span>
    </Tag>
  );
}

export default ShinyButton;

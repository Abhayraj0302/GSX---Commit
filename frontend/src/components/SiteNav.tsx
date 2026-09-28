import { useState } from 'react';

const links = [
  { label: 'Workspace', href: '#workspace' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Classes', href: '#classes' },
  { label: 'Principles', href: '#limitations' },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-nav-wrap">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-nav">
        <a className="brand" href="#top" aria-label="Pelagic home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-name">PELAGIC</span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-subtitle">SONAR REVIEW</span>
        </a>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className={`menu-lines${menuOpen ? ' is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>

        <nav id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

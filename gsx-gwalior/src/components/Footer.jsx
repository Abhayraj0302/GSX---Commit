import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">
          © {new Date().getFullYear()} GSX Gwalior. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#home">Back to top</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

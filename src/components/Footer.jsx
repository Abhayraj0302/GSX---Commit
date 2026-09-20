import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} GSX Gwalior Chapter — MITS-DU. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Back to top</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.instagram.com/gsxgwaliorchapter" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

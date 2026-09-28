const footerLinks = [
  { label: 'Workspace', href: '#workspace' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Classes', href: '#classes' },
  { label: 'Principles', href: '#limitations' },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#top" aria-label="Pelagic, return to top">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-name">PELAGIC</span>
        </a>
        <p>SIH26057 · Marine Debris &amp; Anomaly Detection</p>
        <nav aria-label="Footer navigation">
          {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href="#privacy-note">Privacy</a>
          <a href="#terms-note">Terms</a>
        </nav>
      </div>
      <div className="footer-policies">
        <section id="privacy-note" aria-labelledby="privacy-title">
          <h2 id="privacy-title">Privacy</h2>
          <p>This frontend has no upload service. Images selected here are previewed in your browser and are not sent to a server by this page.</p>
        </section>
        <section id="terms-note" aria-labelledby="terms-title">
          <h2 id="terms-title">Terms</h2>
          <p>Sample detections are illustrative interface content, not findings or operational guidance. Use real sonar analysis only with appropriate expert review.</p>
        </section>
      </div>
      <div className="footer-bottom">
        <span>Frontend demonstration · browser-only sample state</span>
        <span>© {new Date().getFullYear()} Pelagic</span>
      </div>
    </footer>
  );
}

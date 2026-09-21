import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Small helper: merge classNames ─── */
function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

/* ─── Magnetic Button ─── */
function MagneticButton({ as: Tag = 'button', className, children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x * 0.35,
        y: y * 0.35,
        scale: 1.05,
        ease: 'power2.out',
        duration: 0.4,
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'elastic.out(1, 0.3)',
        duration: 1.2,
      });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <Tag ref={ref} className={cx('cursor-pointer', className)} {...props}>
      {children}
    </Tag>
  );
}

/* ─── Marquee strip ─── */
function MarqueeItem() {
  return (
    <div className="cfoot-marquee-items">
      <span>Open Source</span> <span className="cfoot-dot">✦</span>
      <span>Build</span> <span className="cfoot-dot">✦</span>
      <span>Ship</span> <span className="cfoot-dot">✦</span>
      <span>Grow</span> <span className="cfoot-dot">✦</span>
      <span>GSX Gwalior</span> <span className="cfoot-dot">✦</span>
      <span>MITS-DU</span> <span className="cfoot-dot">✦</span>
      <span>Contribute</span> <span className="cfoot-dot">✦</span>
      <span>Pull Requests</span> <span className="cfoot-dot">✦</span>
      <span>Git & GitHub</span> <span className="cfoot-dot">✦</span>
      <span>Hacktoberfest</span> <span className="cfoot-dot">✦</span>
      <span>First Contributions</span> <span className="cfoot-dot">✦</span>
      <span>Community</span> <span className="cfoot-dot">✦</span>
      <span>Code Reviews</span> <span className="cfoot-dot">✦</span>
      <span>Hackathons</span> <span className="cfoot-dot">✦</span>
      <span>Issue Tracking</span> <span className="cfoot-dot">✦</span>
      <span>Fork & Clone</span> <span className="cfoot-dot">✦</span>
      <span>CI/CD</span> <span className="cfoot-dot">✦</span>
      <span>DevOps</span> <span className="cfoot-dot">✦</span>
      <span>Cloud Native</span> <span className="cfoot-dot">✦</span>
      <span>Documentation</span> <span className="cfoot-dot">✦</span>
      <span>Open Innovation</span> <span className="cfoot-dot">✦</span>
      <span>Maintainers</span> <span className="cfoot-dot">✦</span>
      <span>Full Stack</span> <span className="cfoot-dot">✦</span>
      <span>APIs</span> <span className="cfoot-dot">✦</span>
      <span>Collaboration</span> <span className="cfoot-dot">✦</span>
    </div>
  );
}

/* ─── LinkedIn icon ─── */
function LinkedInIcon() {
  return (
    <svg className="cfoot-social-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── Instagram icon ─── */
function InstagramIcon() {
  return (
    <svg className="cfoot-social-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

/* ================================================================
   MAIN FOOTER COMPONENT
   ================================================================ */
export default function Footer() {
  const wrapperRef = useRef(null);
  const giantTextRef = useRef(null);
  const headingRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: '10vh', scale: 0.8, opacity: 0 },
        {
          y: '0vh',
          scale: 1,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 40%',
            end: 'bottom bottom',
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div
      ref={wrapperRef}
      className="cfoot-reveal"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <footer className="cfoot">
        {/* Ambient aurora + grid */}
        <div className="cfoot-aurora" aria-hidden="true" />
        <div className="cfoot-grid" aria-hidden="true" />

        {/* Giant background text */}
        <div ref={giantTextRef} className="cfoot-giant-text" aria-hidden="true">
          GSX
        </div>

        {/* ── Diagonal marquee ── */}
        <div className="cfoot-marquee-strip">
          <div className="cfoot-marquee-track">
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

        {/* ── Main centre content ── */}
        <div className="cfoot-center">
          <h2 ref={headingRef} className="cfoot-heading">
            Join the community
          </h2>

          <div ref={linksRef} className="cfoot-links">
            {/* Social follow pills */}
            <div className="cfoot-primary-row">
              <MagneticButton
                as="a"
                href="https://www.linkedin.com/company/gsx-gwalior-chapter/"
                target="_blank"
                rel="noreferrer"
                className="cfoot-pill cfoot-pill-primary"
              >
                <LinkedInIcon />
                Follow us on LinkedIn
              </MagneticButton>

              <MagneticButton
                as="a"
                href="https://www.instagram.com/gsxgwaliorchapter"
                target="_blank"
                rel="noreferrer"
                className="cfoot-pill cfoot-pill-primary"
              >
                <InstagramIcon />
                Follow us on Instagram
              </MagneticButton>
            </div>

            {/* Secondary links */}
            <div className="cfoot-secondary-row">
              <MagneticButton as="a" href="#about" className="cfoot-pill cfoot-pill-secondary">
                About
              </MagneticButton>
              <MagneticButton as="a" href="#events" className="cfoot-pill cfoot-pill-secondary">
                Events
              </MagneticButton>
              <MagneticButton as="a" href="#home" className="cfoot-pill cfoot-pill-secondary">
                Home
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="cfoot-bottom">
          <div className="cfoot-copyright">
            © {new Date().getFullYear()} GSX Gwalior Chapter — MITS-DU. All rights reserved.
          </div>

          <MagneticButton
            as="button"
            onClick={scrollToTop}
            className="cfoot-pill cfoot-back-top"
            aria-label="Back to top"
          >
            <svg
              className="cfoot-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </MagneticButton>
        </div>
      </footer>
    </div>
  );
}

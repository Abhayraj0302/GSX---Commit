import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Terminal, Rocket, Users, Globe, ArrowUpRight } from 'lucide-react';

const PILLARS = [
  {
    id: 'workshops',
    number: '01',
    icon: Terminal,
    title: 'Workshops & Bootcamps',
    description:
      'Learn by making. Guided sessions and self-paced labs turn core concepts and emerging tools into practical skills you can use in class, on a team, or in your next project.',
    tags: ['Hands-on learning', 'Core concepts', 'Emerging technology'],
  },
  {
    id: 'hackathons',
    number: '02',
    icon: Rocket,
    title: 'Hackathons & Dev Sprints',
    description:
      'Build around a prompt, a problem, or an open brief. Join a short sprint or a multi-day challenge to explore ideas, collaborate across disciplines, and take a prototype as far as the format allows.',
    tags: ['Build challenges', 'Team collaboration', 'From idea to demo'],
  },
  {
    id: 'community',
    number: '03',
    icon: Users,
    title: 'Community & Mentorship',
    description:
      'Find people to learn and build with. Peer support, shared practice, and mentor conversations make it easier to ask questions, exchange feedback, and keep growing at any experience level.',
    tags: ['Peer learning', 'Mentor support', 'Open to all levels'],
  },
  {
    id: 'industry',
    number: '04',
    icon: Globe,
    title: 'Industry & Open Source',
    description:
      'Connect learning to the wider tech community through practitioner perspectives, open-source contributions, and projects shaped by real users and real constraints.',
    tags: ['Industry perspectives', 'Open source', 'Real-world projects'],
  },
];

const WORDS = ['design.', 'prototype.', 'solve.', 'build.', 'develop.', 'cook.', 'ship.'];

export default function WhatWeDo() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(WORDS.length - 1, Math.max(0, Math.floor(latest * WORDS.length)));
    setActiveIndex(idx);
  });

  return (
    <section className="whatwedo-scroll-section" id="whatwedo">
      <div className="whatwedo-scroll-track" ref={trackRef}>
        <div className="whatwedo-sticky-stage">
          <div className="scroll-hero-center-wrap">
            <h2 className="scroll-hero-heading-row">
              <span className="scroll-hero-prefix">you can</span>
              <span className="scroll-hero-word-slot">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={WORDS[activeIndex]}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="scroll-hero-purple-word"
                  >
                    {WORDS[activeIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Expanding Reveal Panel with 4 Pillars */}
      <div className="whatwedo-reveal-wrapper">
        <motion.div
          className="whatwedo-reveal-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header inside reveal card */}
          <div className="whatwedo-reveal-header">
            <div className="whatwedo-reveal-title-wrap">
              <h2 className="whatwedo-reveal-title">
                Building the future, <span className="highlight">together.</span>
              </h2>
              <p className="whatwedo-reveal-subtitle">
                A place to explore technology, practice your craft, and make useful things with other curious people.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid based on FAQ / Accordion questions & answers */}
          <div className="whatwedo-pillars-grid">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  className="whatwedo-pillar-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                >
                  <div className="pillar-card-top">
                    <div className="pillar-icon-badge">
                      <Icon size={22} className="pillar-icon" />
                    </div>
                    <span className="pillar-number">{pillar.number}</span>
                  </div>

                  <h3 className="pillar-title">
                    {pillar.title}
                    <ArrowUpRight size={18} className="pillar-arrow" />
                  </h3>

                  <p className="pillar-description">{pillar.description}</p>

                  <div className="pillar-tags">
                    {pillar.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="pillar-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

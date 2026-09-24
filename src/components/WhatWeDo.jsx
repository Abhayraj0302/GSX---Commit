import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Terminal, Rocket, Users, Globe, ArrowUpRight, Sparkles } from 'lucide-react';

const WORDS = ['design.', 'prototype.', 'solve.', 'build.', 'develop.', 'cook.', 'ship.'];

const PILLARS = [
  {
    id: 'workshops',
    number: '01',
    icon: Terminal,
    title: 'Workshops & Bootcamps',
    description:
      'Intensive, hands-on sessions on Git, GitHub, AI/ML, web development, and emerging tech — led by peers and industry professionals to bridge the gap between theory and practice.',
    tags: ['Git & GitHub', 'Agentic AI', 'Web Development'],
  },
  {
    id: 'hackathons',
    number: '02',
    icon: Rocket,
    title: 'Hackathons & Dev Sprints',
    description:
      '48-hour build marathons and competitive coding events where teams ideate, prototype, and ship real products — pushing creative and technical boundaries under pressure.',
    tags: ['48h Sprints', 'Rapid Prototyping', 'Product Shipping'],
  },
  {
    id: 'community',
    number: '03',
    icon: Users,
    title: 'Community & Mentorship',
    description:
      'A tight-knit network of builders across all branches and years. We run peer mentoring circles, study groups, and open office hours to help every member level up.',
    tags: ['Peer Circles', 'Study Groups', 'Office Hours'],
  },
  {
    id: 'industry',
    number: '04',
    icon: Globe,
    title: 'Industry & Open Source',
    description:
      'Guest talks from tech leaders, internship pipelines, and collaborative open-source projects that give members real-world experience and industry-ready portfolios.',
    tags: ['Open Source PRs', 'Tech Talks', 'Career Pipelines'],
  },
];

export default function WhatWeDo() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll through the sticky stage with extra reading time
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Discrete complete word state — never gets stuck halfway between words
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(WORDS.length - 1, Math.max(0, Math.floor(latest * WORDS.length)));
    setActiveIndex(idx);
  });

  return (
    <section className="whatwedo-scroll-section" id="whatwedo">
      {/* Sticky Word Cycle Stage */}
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
            <div className="section-label">
              <Sparkles size={14} className="inline mr-1 text-purple-400" />
              What We Do
            </div>

            <div className="whatwedo-reveal-title-wrap">
              <h2 className="whatwedo-reveal-title">
                Building the future, <span className="highlight">together.</span>
              </h2>
              <p className="whatwedo-reveal-subtitle">
                From hands-on workshops to competitive hackathons, everything at GSX is crafted to turn curiosity into real-world engineering capability.
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
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
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

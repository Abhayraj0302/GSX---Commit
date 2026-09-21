import React from 'react';
import { TypingEffect } from './ui/typing-effect';
import Logo from './Logo';

const marqueeItems = [
  'Design Sprints',
  'CTF Challenges',
  'Networking',
  'Mentorship',
  'Hackathons',
  'Workshops',
  'Tech Talks',
  'Open Source',
];

const stats = [
  { value: '60+', label: 'Members' },
  { value: '20+', label: 'Events/Year' },
  { value: '∞', label: 'Contributions' },
  { value: '100%', label: 'Passion' },
];

const features = [
  {
    icon: '⚡',
    title: 'Technical Excellence',
    description:
      'Competitive programming, hackathons, dev sprints — we push technical limits and celebrate engineering craft.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    description:
      'A tight-knit family of curious minds. We mentor, collaborate, and grow together across all branches and years.',
  },
  {
    icon: '🚀',
    title: 'Ship Real Things',
    description:
      'We build products, not just projects. Members leave with portfolios, not just certificates.',
  },
  {
    icon: '🌐',
    title: 'Industry Connect',
    description:
      'Guest talks, internship networks, and partnerships that bridge campus with the real tech world.',
  },
];

const rotatingWords = ['build.', 'create.', 'develop.', 'innovate.'];

export default function About() {
  return (
    <>
      {/* Marquee ticker */}
      <div className="marquee-section" aria-hidden="true">
        <div className="marquee-track">
          <div className="marquee-content">
            {marqueeItems.map((item, i) => (
              <span className="marquee-item" key={`a-${i}`}>{item}</span>
            ))}
          </div>
          <div className="marquee-content">
            {marqueeItems.map((item, i) => (
              <span className="marquee-item" key={`b-${i}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* About section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="section-label">Who We Are</div>

          <div className="about-content">
            {/* Left — text */}
            <div className="about-text-column">
              <h2 className="about-heading">
                Built for the
                <br />
                ones who
                <br />
                <TypingEffect
                  texts={rotatingWords}
                  className="highlight"
                  typingSpeed={120}
                  rotationInterval={2500}
                />
              </h2>
              <p className="about-text">
                GSX Gwalior is a student-led technology community at MIT-DU Gwalior, built to bridge the gap between academic learning and real-world engineering. We create a space where students can learn, build, connect, and grow through hands-on experiences.
              </p>
              <p className="about-text">
                From open-source contributions, competitive coding, and emerging technologies to real-world projects, hackathons, design, startup ideation, peer learning, and industry interaction, GSX brings together students with different interests and skill levels.
              </p>
              <p className="about-text">
                Whether you're a beginner exploring technology, a developer building projects, a creative mind, or someone passionate about community and innovation — GSX Gwalior is a place to turn curiosity into creation and ideas into impact.
              </p>
            </div>

            {/* Right — stats card */}
            <div className="stats-card">
              <div className="stats-card-icon">
                <Logo size={34} />
              </div>
              <div className="stats-grid">
                {stats.map((stat, i) => (
                  <div className="stat-item" key={i}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="features-grid">
            {features.map((feature, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-card-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

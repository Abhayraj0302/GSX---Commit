import React from 'react';

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
  { value: '150+', label: 'Members' },
  { value: '20+', label: 'Events/Year' },
  { value: '3+', label: 'Years Active' },
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
                <span className="highlight">build.</span>
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
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11C6.8 11 8.5 9.3 8.5 6.5V4C8.5 6.8 10.2 8.5 13 8.5C10.2 8.5 8.5 10.2 8.5 13V11Z" fill="#8B5CF6" opacity="0.8" />
                  <path d="M24 11C21.2 11 19.5 9.3 19.5 6.5V4C19.5 6.8 17.8 8.5 15 8.5C17.8 8.5 19.5 10.2 19.5 13V11Z" fill="#8B5CF6" opacity="0.8" />
                  <path d="M4 17C6.8 17 8.5 18.7 8.5 21.5V24C8.5 21.2 10.2 19.5 13 19.5C10.2 19.5 8.5 17.8 8.5 15V17Z" fill="#8B5CF6" opacity="0.8" />
                  <path d="M24 17C21.2 17 19.5 18.7 19.5 21.5V24C19.5 21.2 17.8 19.5 15 19.5C17.8 19.5 19.5 17.8 19.5 15V17Z" fill="#8B5CF6" opacity="0.8" />
                </svg>
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

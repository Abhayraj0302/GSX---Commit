import React from 'react';
import { Handshake, Rocket } from 'lucide-react';
import { TypingEffect } from './ui/typing-effect';
import Logo from './Logo';

const FlashIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.31993 13.2805H12.4099V20.4805C12.4099 21.5405 13.7299 22.0405 14.4299 21.2405L21.9999 12.6405C22.6599 11.8905 22.1299 10.7205 21.1299 10.7205H18.0399V3.52046C18.0399 2.46046 16.7199 1.96046 16.0199 2.76046L8.44994 11.3605C7.79994 12.1105 8.32993 13.2805 9.31993 13.2805Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 4H1.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 20H1.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.5 12H1.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeEditIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 8.99961C8.84 7.04961 15.16 7.04961 21 8.99961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.21 15.741L15.67 19.281C15.53 19.421 15.4 19.681 15.37 19.871L15.18 21.221C15.11 21.711 15.45 22.051 15.94 21.981L17.29 21.791C17.48 21.761 17.75 21.631 17.88 21.491L21.42 17.951C22.03 17.341 22.32 16.631 21.42 15.731C20.53 14.841 19.82 15.131 19.21 15.741Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.7001 16.25C19.0001 17.33 19.8401 18.17 20.9201 18.47" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
    icon: FlashIcon,
    title: 'Technical Excellence',
    description:
      'Competitive programming, hackathons, dev sprints — we push technical limits and celebrate engineering craft.',
  },
  {
    icon: Handshake,
    title: 'Community First',
    description:
      'A tight-knit family of curious minds. We mentor, collaborate, and grow together across all branches and years.',
  },
  {
    icon: Rocket,
    title: 'Ship Real Things',
    description:
      'We build products, not just projects. Members leave with portfolios, not just certificates.',
  },
  {
    icon: GlobeEditIcon,
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
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div className="feature-card" key={i}>
                  <div className="feature-card-icon">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';

export default function Team() {
  const members = [
    { name: 'Core Lead', role: 'Community Organizer' },
    { name: 'Tech Lead', role: 'Technical Track' },
    { name: 'Design Lead', role: 'Creative & UI/UX' },
  ];

  return (
    <section className="section" id="team">
      <div className="section-container">
        <h2 className="section-title">Organizing Team</h2>
        <div className="team-grid">
          {members.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-avatar-placeholder" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function Schedule() {
  return (
    <section className="section" id="schedule">
      <div className="section-container">
        <h2 className="section-title">Schedule</h2>
        <div className="schedule-timeline">
          <div className="schedule-item">
            <span className="time">10:00 AM</span>
            <div className="details">
              <h4>Opening Ceremony & Keynote</h4>
              <p>Welcome address by organizers and lead speakers.</p>
            </div>
          </div>
          <div className="schedule-item">
            <span className="time">11:30 AM</span>
            <div className="details">
              <h4>Workshops & Hands-on Labs</h4>
              <p>Interactive learning tracks.</p>
            </div>
          </div>
          <div className="schedule-item">
            <span className="time">02:30 PM</span>
            <div className="details">
              <h4>Project Demos & Networking</h4>
              <p>Community project showcase and mentor feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

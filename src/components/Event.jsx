import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock3, MapPin } from 'lucide-react';

const EVENTS = [
  {
    id: 'gsx-commit-1',
    name: 'GSX Commit 1.0',
    date: '03 October 2026',
    time: '10:00 AM – 1:00 PM',
    venue: 'MITS-DU',
    registrationUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSf98MjrMb0FOey76Ttg51WTkQ3xWWkgU8Qxj4LBFt4spo92pA/viewform?usp=header',
  },
];

const EVENT_START = new Date('2026-10-03T10:00:00+05:30');

function getTimeLeft() {
  const difference = Math.max(0, EVENT_START.getTime() - Date.now());
  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isLive: difference === 0,
  };
}

export default function Event() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="events" id="events">
      <div className="events-container">
        <div className="section-label">Events</div>

        <div className="events-content-simple">
          {EVENTS.map((event) => (
            <motion.div
              key={event.id}
              className="event-featured-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="event-details">
                <div className="event-intro">
                  <h2 className="event-title-clean">{event.name}</h2>
                </div>

                <div className="event-countdown" role="timer" aria-label={timeLeft.isLive ? 'GSX Commit 1.0 is live' : `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds until GSX Commit 1.0`}>
                  <p className="event-countdown-heading">Starting in</p>
                  <div className="event-countdown-units" aria-hidden="true">
                    {[
                      ['Days', timeLeft.days, 'days'],
                      ['Hours', timeLeft.hours, 'hours'],
                      ['Minutes', timeLeft.minutes, 'minutes'],
                      ['Seconds', timeLeft.seconds, 'seconds'],
                    ].map(([label, value]) => (
                      <div className="event-countdown-unit" key={label}>
                        <span className="event-countdown-value">{String(value).padStart(2, '0')}</span>
                        <span className="event-countdown-label">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="event-meta-row">
                  <div className="event-meta-item">
                    <CalendarDays size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="event-meta-item">
                    <Clock3 size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-meta-item">
                    <MapPin size={16} />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <div className="event-actions-clean">
                  <a
                    href={event.registrationUrl}
                    className="btn flow-button event-flow-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowRight className="flow-button-arrow flow-button-arrow-left" aria-hidden="true" />
                    <span className="flow-button-label">Register Now</span>
                    <span className="flow-button-fill" aria-hidden="true" />
                    <ArrowRight className="flow-button-arrow flow-button-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

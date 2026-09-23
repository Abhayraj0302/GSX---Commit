import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const EVENTS = [
  {
    id: 'gsx-commit-1',
    name: 'GSX Commit 1.0',
    badge: 'Inaugural Event',
    description:
      'The inaugural event of GSX Gwalior, featuring hands-on sessions on Git, GitHub, and Agentic AI — learn the tools and workflows used by modern builders to build and ship projects together.',
    date: '1st October 2026',
    time: '10:00 AM – 1:00 PM',
    venue: 'MITS-DU',
    registrationUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSf98MjrMb0FOey76Ttg51WTkQ3xWWkgU8Qxj4LBFt4spo92pA/viewform?usp=header',
  },
];

export default function Event() {
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
                <span className="event-badge-simple">{event.badge}</span>

                <h3 className="event-title-clean">{event.name}</h3>

                <p className="event-desc-clean">{event.description}</p>

                <div className="event-meta-row">
                  <div className="event-meta-item">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="event-meta-item">
                    <Clock size={16} />
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
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Register Now</span>
                    <ArrowRight size={15} />
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

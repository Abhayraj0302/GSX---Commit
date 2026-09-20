import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Who can attend GSX Gwalior events?',
      answer: 'Anyone interested in technology, design, and development is welcome to participate.',
    },
    {
      question: 'Are the workshops free of charge?',
      answer: 'Yes, our community workshops and knowledge sessions are free to join.',
    },
    {
      question: 'How do I register for events?',
      answer: 'You can register through the registration link on the event cards above.',
    },
  ];

  return (
    <section className="section" id="faq">
      <div className="section-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <h4 className="faq-question">{item.question}</h4>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

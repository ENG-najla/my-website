// src/components/Contact.js
import React from 'react';
import '../style/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className={`contact-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2 className="contact-title">Contact</h2>
      <p className="contact-description">Feel free to reach out to me through any of the platforms below:</p>
      <div className="contact-info">
        <a href="https://wa.me/[your-whatsapp-number]" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
          WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/najla-alshammri-a62234237" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          LinkedIn
        </a>
        <a href="mailto:your-email@example.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          joolia91@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;

// src/components/Contact.js
import React from 'react';
import '../style/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
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
        <a href="https://api.whatsapp.com/send/?phone=966550468744&text&type=phone_number&app_absent=0" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
          WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/najla-alshammri-a62234237" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          LinkedIn
        </a>
        <a href="mailto:joolia91@gmail.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          Email
        </a>
        <a href="https://github.com/ENG-najla" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;

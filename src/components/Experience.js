// src/components/Experience.js
import React from 'react';
import '../style/Experience.css';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Saudi Red Crescent Authority',
      duration: '2022 Aug – 2023 Feb',
      role: 'Administrative',
      duties: []
    },
    {
      company: 'SMSA Express',
      duration: '2016 Nov – 2018 Aug',
      duties: [
        'Receive customer inquiries',
        'Report customer requirements',
        'Follow-up with customer tickets',
        'Report for higher management'
      ]
    },
    {
      company: 'HRDF',
      duration: '2013 Jan – 2013 Sept',
      role: 'Programmer',
      duties: [
        'Read and apply documentations',
        'Web development using HTML, CSS, JS, PHP, MySQL',
        'Data analysis (SQL)'
      ]
    }
  ];

  return (
    <section id="experience" className={`experience-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3 className="experience-company">{experience.company}</h3>
            <p className="experience-duration">{experience.duration}</p>
            {experience.role && <p className="experience-role"><strong>Role:</strong> {experience.role}</p>}
            {experience.duties.length > 0 && (
              <ul className="experience-duties">
                {experience.duties.map((duty, idx) => (
                  <li key={idx}>{duty}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

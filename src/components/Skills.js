// src/components/Skills.js
import React from 'react';
import '../style/Skills.css';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faBootstrap, faPhp, faJava,  faJoomla,  } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faPalette, faLaptopCode, faProjectDiagram,  faChartLine, faTasks, faFileAlt, faFileSignature, faComments, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: 'JavaScript', icon: faJs },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'jQuery', icon: faJoomla },
    { name: 'PHP & MySQL', icon: faPhp },
    { name: 'Responsive Design', icon: faLaptopCode },
    { name: 'Java', icon: faJava },
    { name: 'C++', icon: faLaptopCode },
    { name: 'C#', icon: faLaptopCode },
    { name: 'Graphic Design (Photoshop)', icon: faPalette },
    { name: 'SQL & Data Analysis', icon: faDatabase },
  ];

  const softSkills = [
    { name: 'Customer Relationship Management', icon: faUsers },
    { name: 'Writing and Preparing Documents', icon: faFileAlt },
    { name: 'Reporting to Higher Management', icon: faFileSignature },
    { name: 'Decision Maker', icon: faTasks },
    { name: 'Business Requirements Analysis', icon: faChartLine },
    { name: 'Small Projects Management', icon: faProjectDiagram },
    { name: 'Verbal and Written Communication Skills', icon: faComments },
    { name: 'Self-Learning', icon: faUserGraduate },
    { name: 'Team Player', icon: faUsers },
  ];

  return (
    <section id="skills" className={`skills-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-list technical-skills">
          <h3>Technical Skills</h3>
          <ul>
            {technicalSkills.map((skill, index) => (
              <li key={index} className="skill-item">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" /> {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="skills-list soft-skills">
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index} className="skill-item">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" /> {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

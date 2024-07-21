// src/components/Courses.js
import React from 'react';
import '../style/Courses.css';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faCode, faUserGraduate, faBriefcase, faBusinessTime, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons'; // Correct import for the React icon

const Courses = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courses = [
    { name: 'Technical Support', icon: faLaptop },
    { name: 'Full Stack Web Development', icon: faCode },
    { name: 'Self-Development', icon: faUserGraduate },
    { name: 'Work Skills Development', icon: faBriefcase },
    { name: 'Business Requirements Analysis', icon: faBusinessTime },
    { name: 'Critical Thinking and Decision Making', icon: faLightbulb },
    { name: 'React Development', icon: faReact }, // Added React Development course
  ];

  return (
    <section id="courses" className={`courses-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2 className="courses-title">Courses</h2>
      <div className="courses-container">
        <ul className="courses-list">
          {courses.map((course, index) => (
            <li key={index} className="course-item">
              <FontAwesomeIcon icon={course.icon} className="course-icon" /> {course.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Courses;

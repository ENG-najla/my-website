// src/components/Portfolio.js
import React from 'react';
import '../style/Portfolio.css';
import { useInView } from 'react-intersection-observer';
import banner from '../images/banner.png';
import screen3 from '../images/screen_3.png';
import screen4 from '../images/screen_4.png';
import screen5 from '../images/screen_5.png';
import calendar from '../images/calender.jfif';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'To-Do List Application',
      description: 'The To-Do List application is a classic example of a beginner-friendly React basic project. It involves creating a simple web application that allows users to create, read, update, and delete tasks. This project is a great way to understand the basics of React, including state management and event handling.',
      image: banner,
      link: 'http://example.com/project-one'
    },
    {
      title: 'Expense Tracker',
      description: 'The Expense Tracker is a practical project that involves building a web application for tracking expenses. It allows users to input and categorize expenses, view spending trends, and generate reports. You will learn how to manage state, work with forms, and implement data visualization after doing this project.',
      images: [screen3, screen4, screen5],
      link: 'http://example.com/project-two'
    },
    {
      title: 'Calendar Application',
      description: 'The Calendar application is a practical project that involves building a web application for managing events and appointments. It allows users to create, view, and edit events on a calendar. This project will help you to work with dates and times in a React application.',
      image: calendar,
      link: 'http://example.com/project-three'
    }
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className={`portfolio-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h2 className="portfolio-title">Portfolio</h2>
      <p className="portfolio-description">Here are some of my projects:</p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            {project.images ? (
              <Carousel>
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img src={image} alt={`${project.title} ${imgIndex + 1}`} />
                  </div>
                ))}
              </Carousel>
            ) : (
              <img src={project.image} alt={project.title} className="portfolio-image" />
            )}
            <h3 className="portfolio-item-title">{project.title}</h3>
            <p className="portfolio-item-description">{project.description}</p>
            <a href={project.link} className="portfolio-item-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

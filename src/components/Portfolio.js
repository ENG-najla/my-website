// src/components/Portfolio.js
import React from 'react';
import '../style/Portfolio.css';
import { useInView } from 'react-intersection-observer';
import movie from '../images/movie.webp';
import screen3 from '../images/screen_3.png';
import screen4 from '../images/screen_4.png';
import screen5 from '../images/screen_5.png';
import calendar from '../images/calender.jfif';
import ecommerce1 from '../images/screeny1.png'; // Add your images here
import ecommerce2 from '../images/screeny2.png'; // Add your images here
import ecommerce3 from '../images/screeny3.png'; // Add your images here
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Movie Database',
      description: 'The Movie Database is a popular project that involves building a web application for browsing and searching for movies. It allows users to view details about a movie, including its rating, cast, and plot. This project will teach you how to work with APIs, implement search and filtering, and create dynamic components.',
      image: movie,
      link: 'https://github.com/ENG-najla/React-movie-app-main'
    },
    {
      title: 'Expense Tracker',
      description: 'The Expense Tracker is a practical project that involves building a web application for tracking expenses. It allows users to input and categorize expenses, view spending trends, and generate reports. You will learn how to manage state, work with forms, and implement data visualization after doing this project.',
      images: [screen3, screen4, screen5],
      link: 'https://github.com/ENG-najla/expense-tracker-react-master'
    },
    {
      title: 'Calendar Application',
      description: 'The Calendar application is a practical project that involves building a web application for managing events and appointments. It allows users to create, view, and edit events on a calendar. This project will help you to work with dates and times in a React application.',
      image: calendar,
      link: 'https://github.com/ENG-najla/react-calendar-main/tree/main'
    },
    {
      title: 'E-Commerce Website',
      description: 'The E-Commerce Website is a comprehensive project that involves building a web application for an online store. It allows users to browse products, add them to a cart, and proceed to checkout. This project will help you learn about state management, routing, and working with external APIs in React.',
      images: [ecommerce1, ecommerce2, ecommerce3],
      link: 'https://github.com/ENG-najla/E-commerce-Website'
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

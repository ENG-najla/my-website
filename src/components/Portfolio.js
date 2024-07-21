// src/components/Portfolio.js
import React from 'react';
import '../style/Portfolio.css';
import { useInView } from 'react-intersection-observer';
import movie from '../images/movie.webp';
import screen3 from '../images/screen_3.png';
import screen4 from '../images/screen_4.png';
import screen5 from '../images/screen_5.png';
import calendar from '../images/calender.jfif';
import ecommerce1 from '../images/screeny1.png'; 
import ecommerce2 from '../images/screeny2.png'; 
import ecommerce3 from '../images/screeny3.png'; 
import website1 from '../images/image.png'; // Add your website project images here

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
      description: 'The Movie Database project involves building a web application to browse and search for movies. Users can view movie details, ratings, cast, and plot. This project teaches working with APIs, implementing search and filtering, and creating dynamic components, ensuring a comprehensive learning experience.',
      image: movie,
      link: 'https://github.com/ENG-najla/React-movie-app-main'
    },
    {
      title: 'Expense Tracker',
      description: 'The Expense Tracker project involves building a web app to track expenses. Users can input, categorize expenses, view trends, and generate reports. This project helps in learning state management, working with forms, and data visualization, providing practical experience in managing user inputs and data presentation.',
      images: [screen3, screen4, screen5],
      link: 'https://github.com/ENG-najla/expense-tracker-react-master'
    },
    {
      title: 'Calendar Application',
      description: 'The Calendar Application project involves creating a web app for managing events and appointments. Users can create, view, and edit events on a calendar. This project helps in working with dates and times in React, offering a comprehensive understanding of handling dynamic data in a user-friendly interface.',
      image: calendar,
      link: 'https://github.com/ENG-najla/react-calendar-main/tree/main'
    },
    {
      title: 'E-Commerce Website',
      description: 'The E-Commerce Website project involves building a comprehensive online store application. Users can browse products, add to cart, and checkout. This project teaches state management, routing, and working with external APIs in React, providing a full-stack development experience in building e-commerce solutions.',
      images: [ecommerce1, ecommerce2, ecommerce3],
      link: 'https://github.com/ENG-najla/E-commerce-Website'
    },
    {
      title: 'Personal Website',
      description: 'The Personal Website project showcases a professional portfolio, blog, and contact information. It demonstrates skills in creating a professional online presence using modern web technologies, ensuring a comprehensive understanding of front-end development and user interface design, essential for personal branding.',
      images: [website1],
      link: 'https://github.com/ENG-najla/my-website/tree/main'
    }
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

import React, { useEffect, useState } from 'react';
import './Hero.css';
// Import your image from assets folder
import profileImage from '../assets/profile-image.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const roles = ['Software Developer', 'Problem Solver', 'Tech Enthusiast', 'Java Developer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
          <div className="shape shape-7"></div>
          <div className="shape shape-8"></div>
          <div className="shape shape-9"></div>
          <div className="shape shape-10"></div>
          <div className="shape shape-11"></div>
          <div className="shape shape-12"></div>
          <div className="shape shape-13"></div>
          <div className="shape shape-14"></div>
          <div className="shape shape-15"></div>
          <div className="shape shape-16"></div>
          <div className="shape shape-17"></div>
          <div className="shape shape-18"></div>
        </div>
        <div 
          className="cursor-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>
      
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="hero-left">
            <div className="greeting">
              <span className="wave">👋</span>
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="hero-title">
              <span className="name-wrapper">
                <span className="highlight gradient-text">Jyothsna Thangudu</span>
              </span>
            </h1>
            
            <h2 className="hero-subtitle">
              <span className="role-prefix">I'm a </span>
              <span className="role-switcher">{roles[currentRole]}</span>
              <span className="cursor-blink">|</span>
            </h2>
            
            <p className="hero-description">
              <span className="highlight-accent">Computer Science Engineering student</span> with expertise in Java, React, and Spring Boot. 
              Passionate about building <span className="highlight-accent">scalable applications</span> and contributing to innovative projects 
              with optimal performance.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1588</span>
                <span className="stat-label">LeetCode Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">9.33</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <div className="btn-shine"></div>
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <span>Get In Touch</span>
                <div className="btn-ripple"></div>
              </button>
            </div>
            
            <div className="social-preview">
              <a href="https://github.com/JyothsnaThangudu" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jyothsna-thangudu-972135257/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://leetcode.com/u/Jyothsna_Thangudu/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fas fa-code"></i>
              </a>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-profile">
              <div className="profile-image-hero">
                <div className="image-glow-hero"></div>
                <div className="image-border-hero"></div>
                <img 
                  src={profileImage} 
                  alt="Jyothsna Thangudu" 
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;

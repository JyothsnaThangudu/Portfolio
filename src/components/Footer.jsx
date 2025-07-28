import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-background">
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
        </div>
        <div 
          className="cursor-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <div className={`footer-section ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h3>Jyothsna Thangudu</h3>
            <p>Java Developer & Full Stack Engineer building innovative solutions with modern technologies.</p>
          </div>
          <div className={`footer-section ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className={`footer-section ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.5s' }}>
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/jyothsna" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
              <a href="https://linkedin.com/in/jyothsna-thangudu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
              </div>
          </div>
        </div>
        <div className={`footer-bottom ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.7s' }}>
          <p>&copy; 2025 Jyothsna Thangudu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

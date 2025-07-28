import React, { useState, useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);
  const education = [
    {
      year: "2022-2026",
      degree: "Bachelor of Technology",
      institution: "Shri Vishnu Engineering College for Women",
      description: "Computer Science Engineering(AI & ML) with CGPA: 9.33/10"
    },
    {
      year: "2020-2022",
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      description: "Mathematics, Physics, Chemistry with 97.4%"
    },
    {
      year: "2019-2020",
      degree: "10th Grade",
      institution: "HEAL School",
      description: "92%"
    }
  ];

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="education-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
          <div className="shape shape-7"></div>
          <div className="shape shape-8"></div>
        </div>
        <div 
          className="cursor-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>
      <div className="education-container">
        <div className="section-header">
          <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>Education</h2>
          <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>My academic journey and learning milestones</p>
        </div>
        
        <div className="education-content">
          <div className={`education-visual ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="education-image-container">
              <div className={`education-stats ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                <div className="stat-item">
                  <span className="stat-number">2026</span>
                  <span className="stat-label">Expected Graduation</span>
                </div>
              </div>
              <div className={`education-illustration ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.5s' }}>
                <div className="book-stack">
                  <div className="book book-1"></div>
                  <div className="book book-2"></div>
                  <div className="book book-3"></div>
                </div>
                <div className="graduation-cap">
                  <div className="cap-top"></div>
                  <div className="cap-base"></div>
                  <div className="tassel"></div>
                </div>
                <div className="academic-elements">
                  <div className={`element element-1 ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>📚</div>
                  <div className={`element element-2 ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.7s' }}>🎓</div>
                  <div className={`element element-3 ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.8s' }}>💡</div>
                  <div className={`element element-4 ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.9s' }}>🏆</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`education-timeline ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="timeline-line"></div>
            {education.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className={`timeline-year ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${0.6 + index * 0.2}s` }}>{item.year}</div>
                  <h3 className={`education-degree ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${0.7 + index * 0.2}s` }}>{item.degree}</h3>
                  <h4 className={`education-institution ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${0.8 + index * 0.2}s` }}>{item.institution}</h4>
                  {item.description && (
                    <p className={`education-description ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${0.9 + index * 0.2}s` }}>{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

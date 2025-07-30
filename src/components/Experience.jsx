import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const experiences = [
    {
      title: 'Java Developer Intern',
      company: 'SmartX Technologies',
      duration: 'July 2025 - Present',
      location: 'Remote',
      responsibilities: [
        'Contributing to PayFlow AI development using Spring Boot and MySQL',
        'Building and integrating backend APIs for scalable applications',
        'Designing modules for payroll and user management systems',
        'Collaborating in agile sprints and version-controlled environments'
      ]
    },
    {
      title: 'Contributor',
      company: 'IEEE Summer of Code',
      duration: 'May 2025 – June 2025',
      location: 'Remote',
      responsibilities: [
        'Contributed to SMILE, an NLP-based project for photo capture',
        'Implemented user image download feature improving usability by 25%',
        'Worked with computer vision and natural language processing',
        'Collaborated with remote mentors and fellow developers'
      ]
    },
    {
      title: 'Student Coordinator',
      company: 'ISTE - Indian Society for Technical Education',
      duration: '2022 – 2026',
      location: 'Shri Vishnu Engineering College',
      responsibilities: [
        'Organized Ice Breaking event for 250+ students, boosting engagement by 85%',
        'Mentored junior coordinators for leadership development',
        'Led gamified activities to improve student participation',
        'Sustained engagement across multiple batches'
      ]
    }
  ];

  const achievements = [
    'Semifinalist - Adobe GenSolve Hackathon conducted by GeeksforGeeks',
    'LeetCode Contest Rating: 1588',
    'Certified Smart Coder from SmartInterviews',
    '1st Place - College-level Group Discussion competition',
    '1st Place - Zonal level Volleyball Tournament',
    'Oracle Certified: Java & DBMS'
    
  ];

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="experience-background">
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
        </div>
        <div 
          className="cursor-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>
      <div className="experience-container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>Experience & Achievements</h2>
        
        <div className="experience-layout">
          {/* Professional Journey Section */}
          <div className="journey-section">
            <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
              <h3 className="subsection-title">
                <span className="title-icon">💼</span>
                Professional Journey
              </h3>
              <p className="section-description">Building expertise through diverse roles and impactful contributions</p>
              <div className="section-divider"></div>
            </div>
            
            <div className="experience-timeline">
              <div className="timeline-line"></div>
              {experiences.map((exp, index) => (
                <div key={index} className={`timeline-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                  <div className="timeline-dot">
                    <div className="dot-inner"></div>
                    <div className="dot-pulse"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="job-card">
                      <div className="job-header">
                        <div className="job-title-section">
                          <h4 className="job-title">{exp.title}</h4>
                          <div className="job-badge">
                            <span className="job-duration">{exp.duration}</span>
                          </div>
                        </div>
                        <div className="company-section">
                          <h5 className="company-name">{exp.company}</h5>
                          <span className="job-location">{exp.location}</span>
                        </div>
                      </div>
                      <div className="responsibilities-section">
                        <h6 className="responsibilities-title">Key Contributions:</h6>
                        <ul className="responsibilities">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="responsibility-item">
                              <span className="bullet-point">▶</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
              <h3 className="subsection-title">
                <span className="title-icon">🏆</span>
                Key Achievements
              </h3>
              <div className="section-divider"></div>
            </div>
            
            <div className="achievements-container">
              {achievements.map((achievement, index) => (
                <div key={index} className={`achievement-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className="achievement-content">
                    <div className="achievement-icon">
                      <div className="icon-glow"></div>
                      ✨
                    </div>
                    <p className="achievement-text">{achievement}</p>
                  </div>
                </div>
              ))}
              
              {/* Stats Cards */}
              <div className={`stats-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.9s' }}>
                <h4 className="stats-title">Key Metrics</h4>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Hackathons</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">Top 5%</span>
                    <span className="stat-label">AdobeGenSolve</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Open Source</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">250+</span>
                    <span className="stat-label">Students Led</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

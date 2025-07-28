import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ experience: 0, projects: 0, technologies: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const animateCounters = () => {
    const targets = { experience: 3, projects: 15, technologies: 12 };
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        technologies: Math.floor(targets.technologies * progress)
      });

      if (step >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, stepDuration);
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-background">
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
        </div>
        <div 
          className="cursor-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>

      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">Get to know me</span>
          <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>About Me</h2>
          <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`}>
            Passionate developer with a drive for innovation
          </p>
        </div>
        
        <div className="about-content">
          <div className={`about-intro ${isVisible ? 'animate-in' : ''}`}>
            <p className="intro-text">
              I'm a passionate <strong>Computer Science Engineering student</strong> at Shri Vishnu Engineering College for Women, 
              currently working as a <strong>Java Developer Intern at SmartX Technologies</strong>. I specialize in building 
              scalable web applications and AI-powered solutions that deliver exceptional user experiences.
            </p>
          </div>

          <div className={`about-grid ${isVisible ? 'animate-in' : ''}`}>
            <div className="about-card">
              <div className="card-header">
                <i className="fas fa-laptop-code"></i>
                <h3>Development Expertise</h3>
              </div>
              <div className="card-content">
                <p>Full-stack development with Java, Spring Boot, React, and modern web technologies. 
                   Experience building enterprise-grade applications and scalable system architectures.</p>
                <div className="tech-tags">
                  <span className="tag">Java</span>
                  <span className="tag">Spring Boot</span>
                  <span className="tag">React</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="card-header">
                <i className="fas fa-brain"></i>
                <h3>AI & Innovation</h3>
              </div>
              <div className="card-content">
                <p>Developing AI-powered applications including PayFlow AI at SmartX Technologies. 
                   Focus on machine learning integration and intelligent system design.</p>
                <div className="tech-tags">
                  <span className="tag">Python</span>
                  <span className="tag">AI/ML</span>
                  <span className="tag">Data Analysis</span>
                  <span className="tag">Algorithms</span>
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="card-header">
                <i className="fas fa-database"></i>
                <h3>System Design</h3>
              </div>
              <div className="card-content">
                <p>Database design, system architecture, and performance optimization. 
                   Creating robust backend solutions with efficient data management.</p>
                <div className="tech-tags">
                  <span className="tag">MySQL</span>
                  <span className="tag">System Design</span>
                  <span className="tag">APIs</span>
                  <span className="tag">Architecture</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`about-stats ${isVisible ? 'animate-in' : ''}`}>
            <div className="stat-item">
              <div className="stat-number">{counters.experience}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.projects}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.technologies}+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        <div className={`about-cta ${isVisible ? 'animate-in' : ''}`}>
          <div className="cta-content">
            <h3>Ready to collaborate?</h3>
            <p>Let's create something amazing together!</p>
            <button className="cta-button" onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>Let's Connect</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

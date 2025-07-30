import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
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

  const projects = [
    {
      title: 'AI-ChatMate - Intelligent Q&A Assistant',
      icon: '🧠',
      description: 'AI-powered Q&A chatbot using React and Gemini API with 95%+ accuracy and real-time responses under 1 second. Deployed on Vercel with 99.9% uptime.',
      technologies: ['React', 'Gemini API', 'JavaScript', 'HTML', 'CSS', 'Vercel'],
      demoLink: 'https://chatmate-xi.vercel.app/',
      codeLink: 'https://github.com/JyothsnaThangudu/AI-Chatbot'
    },
    {
      title: 'Sorting Visualizer - Algorithm Learning Tool',
      icon: '🎯',
      description: 'Interactive visualization of 4+ sorting algorithms with animations and speed control, improving concept retention by 40% and reducing user confusion by 25%.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Algorithms'],
      demoLink: 'https://sort-itt-out.netlify.app/',
      codeLink: 'https://github.com/JyothsnaThangudu/Sort-it-Out'
    },
    {
      title: 'PayFlow AI - Enterprise Payroll System',
      icon: '🏢',
      description: 'Contributing to backend development using Spring Boot and MySQL. Building scalable modules for payroll and user management in agile environment.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Git','React'],
      codeLink: 'https://github.com/JyothsnaThangudu/PayFlow'
    },
    {
      title: 'Online Testing System - Digital Assessment Platform',
      icon: '🎓',
      description: 'Full-stack testing platform with user registration, exam-taking, and performance analysis. Achieved 60% faster result processing with secure Django authentication.',
      technologies: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/JyothsnaThangudu/online-testing-system'
    },
    {
      title: 'BiblioSEEK - Smart Library Management',
      icon: '📖',
      description: 'A comprehensive library management system with book search, user management, and borrowing functionality. Features advanced search capabilities and user-friendly interface.',
      technologies: ['Python', 'Tkinter', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/JyothsnaThangudu/BiblioSEEK'
    },
    {
      title: 'WhatsApp Chat Analysis - Communication Insights',
      icon: '📱',
      description: 'Data analysis tool for WhatsApp chat exports with sentiment analysis, message statistics, and interactive visualizations. Provides insights into communication patterns.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'NLP', 'Data Analysis'],
      codeLink: 'https://github.com/JyothsnaThangudu/WhatsApp_Chat_Analysis'
    },
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-background">
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
        </div>
        <div 
          className="cursor-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>

      <div className="projects-container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>Projects</h2>
        <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`}>
          Here are some projects that showcase my skills and creativity
        </p>
        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <div key={index} className={`project-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              <div className="project-content">
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack-section">
                  <h4 className="tech-stack-label">Technologies Used:</h4>
                  <div className="tech-stack">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.demoLink && (
                    <a href={project.demoLink} className="project-link">
                      🚀 Live
                    </a>
                  )}
                  <a href={project.codeLink} className="project-link">
                    📝 View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <button 
            className={`view-all-btn ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: '0.6s' }}
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? 'Show Less' : 'View All Projects'}
            <span className="btn-arrow">
              {showAllProjects ? '↑' : '→'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

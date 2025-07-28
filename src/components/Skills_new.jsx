import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'Java',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
          <path d="M8.5 17.5C8.5 16.12 9.62 15 11 15S13.5 16.12 13.5 17.5 12.38 20 11 20 8.5 18.88 8.5 17.5Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Python',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2V6H10V4H8V8H16V2H14Z" fill="currentColor"/>
          <path d="M8 16V20H10V18H14V22H16V16H8Z" fill="currentColor"/>
          <circle cx="9" cy="5" r="1" fill="currentColor"/>
          <circle cx="15" cy="19" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/>
          <path d="M12 18C10.34 18 9 16.66 9 15V9H11V15C11 15.55 11.45 16 12 16S13 15.55 13 15V9H15V15C15 16.66 13.66 18 12 18Z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'React',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 10.11C13.03 10.11 13.87 10.95 13.87 12C13.87 13.05 13.03 13.89 12 13.89C10.97 13.89 10.13 13.05 10.13 12C10.13 10.95 10.97 10.11 12 10.11Z" fill="currentColor"/>
          <path d="M7.37 20C8.8 18.82 10.8 18.11 12 18.11C13.2 18.11 15.2 18.82 16.63 20C18.96 19.54 21 17.64 21 15.41C21 13.18 18.96 11.28 16.63 10.82C15.2 12 13.2 12.71 12 12.71C10.8 12.71 8.8 12 7.37 10.82C5.04 11.28 3 13.18 3 15.41C3 17.64 5.04 19.54 7.37 20Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'HTML5',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L5.5 20L12 22L18.5 20L20 2H4ZM17 8H9L9.5 11H16.5L15.5 16L12 17L8.5 16L8.3 14H10.8L10.9 15L12 15.3L13.1 15L13.2 14H8L7 9H17V8Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'CSS3',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L5.5 20L12 22L18.5 20L20 2H4ZM16.5 8H9L9.5 11H16L15.5 16L12 17L8.5 16L8.3 14H10.8L10.9 15L12 15.3L13.1 15L13.2 13H8L7 9H17L16.5 8Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Spring Boot',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM17 13H15V17H9V13H7L12 8L17 13Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Django',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3Z" fill="currentColor"/>
          <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'MongoDB',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.5 2 5.73 4.11 4.64 7.06C4.5 7.68 4.5 8.32 4.64 8.94C5.73 11.89 8.5 14 12 14S18.27 11.89 19.36 8.94C19.5 8.32 19.5 7.68 19.36 7.06C18.27 4.11 15.5 2 12 2Z" fill="currentColor"/>
          <path d="M12 14V22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor"/>
          <path d="M12 7V17" stroke="white" strokeWidth="2"/>
          <path d="M7 9.5L17 9.5" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Git',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 6.32V17.68L12 22L2 17.68V6.32L12 2Z" fill="currentColor"/>
          <circle cx="8" cy="12" r="2" fill="white"/>
          <circle cx="16" cy="12" r="2" fill="white"/>
          <path d="M10 12H14" stroke="white" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

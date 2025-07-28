import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Java', 'Python', 'JavaScript', 'C++']
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: ['React', 'HTML5', 'CSS3', 'Responsive Design', 'JavaScript ES6+']
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: ['Spring Boot', 'Django', 'REST APIs', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'MongoDB', 'SQLite', 'Database Design']
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git/GitHub', 'VS Code', 'Postman', 'Maven', 'npm']
    },
    {
      title: 'Other Skills',
      icon: '🚀',
      skills: ['Data Structures & Algorithms', 'Problem Solving', 'Computer Vision', 'Machine Learning Basics']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

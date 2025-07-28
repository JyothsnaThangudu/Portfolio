import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
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
  const skills = [
    {
      name: 'Java',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218" fill="#ED8B00"/>
          <path d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573" fill="#ED8B00"/>
          <path d="M19.33 20.504s.679.559-.747.99c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.819M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118" fill="#ED8B00"/>
          <path d="M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627" fill="#ED8B00"/>
        </svg>
      )
    },
    {
      name: 'Python',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" fill="url(#python-gradient)"/>
          <defs>
            <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3776ab"/>
              <stop offset="100%" stopColor="#ffd43b"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
          <path d="M12.023 19.417c.317 0 .574-.111.77-.333.196-.222.294-.518.294-.888v-4.234h1.958v4.234c0 .888-.244 1.593-.731 2.114-.487.52-1.158.78-2.013.78-.888 0-1.57-.26-2.046-.78-.476-.521-.714-1.226-.714-2.114h1.97c0 .37.097.666.285.888.188.222.433.333.734.333M7.688 19.417c.301 0 .546-.111.734-.333.188-.222.282-.518.282-.888v-4.234h1.958v4.234c0 .888-.244 1.593-.731 2.114-.487.52-1.158.78-2.013.78-.888 0-1.57-.26-2.046-.78-.476-.521-.714-1.226-.714-2.114h1.97c0 .37.097.666.285.888.188.222.433.333.275.333" fill="#000"/>
        </svg>
      )
    },
    {
      name: 'React',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <path d="M12 7c2.76 0 5.658.45 7.5 1.203C21.326 8.797 22 9.66 22 10.5s-.674 1.703-2.5 2.297C17.658 13.55 14.76 14 12 14s-5.658-.45-7.5-1.203C2.674 12.203 2 11.34 2 10.5s.674-1.703 2.5-2.297C6.342 7.45 9.24 7 12 7z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
          <path d="M8.5 18.4c1.38 2.39 3.338 4.29 4.793 4.29s3.413-1.9 4.793-4.29c.689-1.195 1.077-2.403 1.077-3.4s-.388-2.205-1.077-3.4C16.707 9.21 14.748 7.31 13.293 7.31S9.88 9.21 8.5 11.6c-.689 1.195-1.077 2.403-1.077 3.4s.388 2.205 1.077 3.4z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
          <path d="M8.5 5.6c1.38-2.39 3.338-4.29 4.793-4.29s3.413 1.9 4.793 4.29c.689 1.195 1.077 2.403 1.077 3.4s-.388 2.205-1.077 3.4C16.707 14.79 14.748 16.69 13.293 16.69S9.88 14.79 8.5 12.4c-.689-1.195-1.077-2.403-1.077-3.4s.388-2.205 1.077-3.4z" stroke="#61DAFB" strokeWidth="1" fill="none"/>
        </svg>
      )
    },
    {
      name: 'HTML5',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#E34F26"/>
          <path d="M12 22.034l6.922-1.919L20.5 2H12v20.034z" fill="#FF5722"/>
          <path d="M12 9.273H7.09l.369 4.127H12v-4.127zM12 4.909H6.455l.369 4.364H12V4.909z" fill="#EBEBEB"/>
          <path d="M12 18.979v-4.175h-.12l-3.91 1.055-.265-2.968h4.295v-4.127H5.508l.733 8.215L12 18.979z" fill="#EBEBEB"/>
          <path d="M18.455 9.273l-.369 4.127-.369 4.127L12 18.979v-4.175l3.91-1.055.265-2.968H12V9.273h6.455z" fill="#FFF"/>
        </svg>
      )
    },
    {
      name: 'CSS3',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" fill="#1572B6"/>
          <path d="M12 22.034l6.922-1.919L20.5 2H12v20.034z" fill="#33A9DC"/>
          <path d="M12 9.273H7.09l.369 4.127H12v-4.127zM12 4.909H6.455l.369 4.364H12V4.909z" fill="#EBEBEB"/>
          <path d="M12 18.979v-4.175h-.12l-3.91 1.055-.265-2.968h4.295v-4.127H5.508l.733 8.215L12 18.979z" fill="#EBEBEB"/>
          <path d="M18.455 9.273l-.369 4.127-.369 4.127L12 18.979v-4.175l3.91-1.055.265-2.968H12V9.273h6.455z" fill="#FFF"/>
        </svg>
      )
    },
    {
      name: 'Spring Boot',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#6DB33F"/>
          <path d="M8.5 17c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2z" fill="white"/>
          <path d="M15.5 17c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2z" fill="white"/>
          <path d="M12 10c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z" fill="white"/>
          <path d="M6 7.5c0-.828.672-1.5 1.5-1.5S9 6.672 9 7.5 8.328 9 7.5 9 6 8.328 6 7.5z" fill="white"/>
          <path d="M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Django',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#092E20"/>
          <path d="M12 3v6h3V6.5c0-.83.67-1.5 1.5-1.5S18 5.67 18 6.5V9h3V6.5c0-2.485-2.015-4.5-4.5-4.5S12 4.015 12 6.5z" fill="#FFF"/>
          <path d="M6 9h3v12H6V9zM12 9h3v12h-3V9z" fill="#FFF"/>
          <circle cx="13.5" cy="15" r="1.5" fill="#092E20"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.152z" fill="#00758F"/>
          <path d="M18.79 15.777c-.617 0-1.014.414-1.014.97 0 .555.397.97 1.014.97.617 0 1.014-.415 1.014-.97 0-.556-.397-.97-1.014-.97z" fill="#F29111"/>
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm6.405 16.676c-1.14 0-1.846-.84-1.846-2.02 0-1.18.706-2.02 1.846-2.02s1.846.84 1.846 2.02c0 1.18-.706 2.02-1.846 2.02z" fill="#00758F"/>
          <path d="M5.77 18.675c-.617 0-1.014-.415-1.014-.97 0-.556.397-.97 1.014-.97.617 0 1.014.414 1.014.97 0 .555-.397.97-1.014.97z" fill="#F29111"/>
        </svg>
      )
    },
    {
      name: 'MongoDB',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 5.17-3.972 4.292-11.375z" fill="#4DB33D"/>
          <path d="M11.5 23.5c.338-1.117.506-2.254.5-3.392 0 0-2.725-2.207-2.725-7.108s2.725-7.108 2.725-7.108c0 1.138-.162 2.275-.5 3.392 0 0 2.725 2.207 2.725 7.108s-2.725 7.108-2.725 7.108z" fill="#6CAD3E"/>
          <path d="M12.751 21.338c0-1.138-.338-2.275-1.014-3.275-.676 1-1.014 2.137-1.014 3.275 0 1.138.338 2.275 1.014 3.275.676-1 1.014-2.137 1.014-3.275z" fill="#4FAD2D"/>
        </svg>
      )
    },
    {
      name: 'Git',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" fill="#F34F29"/>
        </svg>
      )
    },
    {
      name: 'Machine Learning',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#FF6B35"/>
          <circle cx="8" cy="8" r="2" fill="#FFF"/>
          <circle cx="16" cy="8" r="2" fill="#FFF"/>
          <circle cx="8" cy="16" r="2" fill="#FFF"/>
          <circle cx="16" cy="16" r="2" fill="#FFF"/>
          <circle cx="12" cy="12" r="1.5" fill="#FFF"/>
          <path d="M8 8L12 12L16 8" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 16L12 12L16 16" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 8L8 16" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 8L16 16" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-background">
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
        </div>
        <div 
          className="cursor-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>
      <div className="skills-container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>Skills</h2>
        <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`}>
          Technologies and tools I work with
        </p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
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

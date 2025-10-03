import React, { useState, useEffect } from 'react';
import './App.css';
import DragonAnimation from './components/DragonAnimation';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="background-animation"></div>
      <DragonAnimation />
    <div className="App">
        <header className="header">
          <h1 className="glitter-name">Deon George</h1>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
      </header>

        <section id="about" className="section reveal-section">
          <h2>About Me</h2>
          <p>Hello! I'm a passionate web developer with expertise in React and modern web technologies. I love creating responsive and user-friendly applications that solve real-world problems.</p>
          <p>With a strong foundation in front-end development and a keen eye for design, I strive to build seamless user experiences that are both functional and aesthetically pleasing.</p>
          <div className="cta-container">
            <a href="#contact" className="cta-button">Get In Touch</a>
            <a href="#projects" className="cta-button secondary">View Projects</a>
          </div>
        </section>

        <section id="projects" className="section reveal-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Task Manager Pro</h3>
              <p>A React-based web application for task management with drag-and-drop functionality and real-time updates.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">Firebase</span>
              </div>
            </div>
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p>A full-featured online store with product catalog, shopping cart, and secure payment processing.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Portfolio Template</h3>
              <p>A customizable portfolio website template for creative professionals with modern animations.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Framer Motion</span>
                <span className="tech-tag">CSS3</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section reveal-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>Git</li>
            <li>Responsive Design</li>
            <li>UI/UX Design</li>
            <li>RESTful APIs</li>
          </ul>
        </section>

        <section id="contact" className="section contact-section reveal-section">
          <h2>Contact Me</h2>
          <p>I'm always open to new opportunities and collaborations. Feel free to reach out to me at:</p>
          <p className="email-link"><a href="mailto:example@email.com">example@email.com</a></p>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <div className="availability">
            <span className="status-indicator available"></span>
            <span>Available for new opportunities</span>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Deon George. All rights reserved.</p>
        </footer>
        
        {showScrollTop && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            ↑
          </button>
        )}
    </div>
    </>
  );
}

export default App;

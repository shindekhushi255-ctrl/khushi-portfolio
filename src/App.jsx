import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

const [scrollProgress, setScrollProgress] = useState(0);
const [showTopButton, setShowTopButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    setScrollProgress(
      scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
    );

    setShowTopButton(scrollTop > 300);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, []);


useEffect(() => {
  const elements = document.querySelectorAll(
    '.about-heading, .about-content, .skills-heading, .skills-container, .projects-heading, .projects-container, .experience-card, .contact-container'
  );

  elements.forEach((element) => {
    element.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
  entry.target.classList.add('reveal-visible');
} else {
  entry.target.classList.remove('reveal-visible');
}
      });
    },
    {
      threshold: 0.15
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);

  return (
    <div className="portfolio">
      <div
  className="scroll-progress"
  style={{ width: `${scrollProgress}%` }}
></div>

      
{/* Navbar */}
<nav className="navbar">
  <a href="#home" className="logo">
    Khushi<span>.</span>
  </a>

  <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
    aria-expanded={menuOpen}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
    {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        onClick={() => setMenuOpen(false)}
      >
        {item}
      </a>
    ))}
  </div>

  <a href="#contact" className="nav-button">
    Let's Talk ↗
  </a>
</nav>


  
      
{/* Home Section */}

{/* HOME / HERO SECTION */}

<section className="hero hero-editorial" id="home">

  <div className="hero-content">

    <p className="hero-eyebrow">
      <span className="status-dot"></span>
      HELLO, I'M KHUSHI SHINDE
    </p>

    <h1 className="editorial-title">
  Aspiring
  <br />
  <span>Web Developer</span>
  <br />
  <i>Creating Ideas.</i>
</h1>

    <p className="description">
      I create beautiful and user-friendly digital experiences.
      Currently pursuing my BCA and exploring the world of
      React.js, Next.js and modern web development.
    </p>

    <div className="hero-buttons">

      <a href="#projects" className="hero-button">
        Explore My Work ↗
      </a>

      <a href="#contact" className="hero-secondary-button">
        Let's Connect
      </a>

    </div>

    <div className="hero-bottom-info">
      <span>BASED IN SURAT, INDIA</span>
      <span>WEB DEVELOPER INTERN</span>
    </div>

  </div>

  <div className="hero-image editorial-image">

    <div className="image-placeholder">
      <img src="/khushi.jpg.jpeg" alt="Khushi Shinde" />
    </div>

    <div className="floating-card">
      <span>✳</span>
      <p>Learning. Creating. Growing.</p>
    </div>

    <p className="hero-image-caption">
      Turning ideas into digital experiences.
    </p>

  </div>

</section>

{/* MOVING TEXT */}

<div className="marquee">
  <div className="marquee-track">
    <span>DESIGN ✳ DEVELOP ✳ CREATE ✳ EXPLORE ✳ </span>
    <span>DESIGN ✳ DEVELOP ✳ CREATE ✳ EXPLORE ✳ </span>
  </div>
</div>


      
{/* About Section */}

<section className="about" id="about">

  <div className="about-heading">
    <p className="section-tag">GET TO KNOW ME</p>
    <h2>A Little About <span>Me</span></h2>
    <p className="about-subtitle">
      My journey, education and passion for web development.
    </p>
  </div>

  <div className="about-content">

    <div className="about-text">
      <p className="about-label">WHO I AM</p>

      <h3>Hello! I'm Khushi Shinde.</h3>

      <p>
        I am a BCA Final Year student and an aspiring web developer
        who enjoys turning ideas into beautiful and functional websites.
      </p>

      <p>
        I love learning new technologies and improving my frontend
        development skills. My goal is to create responsive websites
        that are simple, attractive and easy to use.
      </p>

      <a href="#contact" className="about-button">
        Let's Connect →
      </a>
    </div>

    <div className="about-details">

      <div className="detail-card">
        <span>01</span>
        <h4>Education</h4>
        <p>BCA Final Year</p>
        <small>Vanita Vishram Women's University</small>
      </div>

      <div className="detail-card">
        <span>02</span>
        <h4>Current Role</h4>
        <p>Website Developer Intern</p>
        <small>DesignPav</small>
      </div>

      <div className="detail-card">
        <span>03</span>
        <h4>Currently Learning</h4>
        <p>React.js & Next.js</p>
        <small>Frontend Development</small>
      </div>

      <div className="detail-card">
        <span>04</span>
        <h4>My Interests</h4>
        <p>UI Design & Frontend</p>
        <small>Creative Web Experiences</small>
      </div>

    </div>

  </div>

</section>


      {/* Skills Section */}

{/* Skills Section */}

{/* Skills Section */}
<section className="skills" id="skills">

  <div className="skills-heading">
    <p className="section-tag">MY KNOWLEDGE & TOOLKIT</p>
    <h2>Things I <span>Work With.</span></h2>
    <p>A collection of technologies and tools I have explored through learning and practical projects.</p>
  </div>

  <div className="skills-container">

    {/* Frontend */}
    <div className="skill-card skill-featured">
      <div className="skill-top">
        <span className="skill-number">01</span>
        <span className="skill-label">WEB DEVELOPMENT</span>
      </div>
      <h3>Frontend Development</h3>
      <p>Building web pages, creating responsive layouts and exploring modern frontend technologies.</p>
      <div className="skill-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React.js</span>
        <span>Next.js</span>
        <span>Bootstrap</span>
      </div>
      <div className="skill-card-mark">01</div>
    </div>

    {/* Programming */}
    <div className="skill-card">
      <div className="skill-top">
        <span className="skill-number">02</span>
        <span className="skill-label">CODING</span>
      </div>
      <h3>Programming</h3>
      <p>Exploring programming concepts and building a foundation in different languages.</p>
      <div className="skill-tags">
        <span>Python</span>
        <span>PHP</span>
        <span>C</span>
        <span>Java</span>
        <span>ASP.NET</span>
      </div>
    </div>

    {/* Database */}
    <div className="skill-card">
      <div className="skill-top">
        <span className="skill-number">03</span>
        <span className="skill-label">DATA</span>
      </div>
      <h3>Database Management</h3>
      <p>Understanding database concepts, relational structures and working with databases.</p>
      <div className="skill-tags">
        <span>DBMS</span>
        <span>RDBMS</span>
        <span>SQL</span>
        <span>MySQL</span>
      </div>
    </div>

    {/* Tools */}
    <div className="skill-card skill-tools">
      <div className="skill-top">
        <span className="skill-number">04</span>
        <span className="skill-label">MY WORKSPACE</span>
      </div>
      <h3>Tools & Platforms</h3>
      <p>Tools I use while developing, managing and deploying my projects.</p>
      <div className="skill-tags">
        <span>VS Code</span>
        <span>GitHub</span>
        <span>npm</span>
        <span>Vercel</span>
      </div>
    </div>

  </div>
</section>


    
      {/* Projects Section */}

{/* Projects Section */}
<section className="projects" id="projects">

  <div className="editorial-project-heading">
    <p className="section-tag">A SELECTION OF MY WORK — 2026</p>
    <h2>Made with curiosity.<br />
      <span>Built with creativity.</span>
    </h2>
    <p>Some of the projects I have explored and developed during my learning journey.</p>
  </div>

  <div className="project-showcase">

    {/* LearnHub */}
    <article className="showcase-item">
      <div className="showcase-image">
        <img src="/learn.png.png" alt="LearnHub website" />
        <span>01</span>
      </div>

      <div className="showcase-content">
        <p className="showcase-category">LEARNING PLATFORM / 2026</p>
        <h3>LearnHub<span>.</span></h3>
        <p className="showcase-description">
          An online learning landing page featuring course cards,
          navigation and a clean user-friendly layout.
        </p>
        <div className="showcase-tags">
          <span>React.js</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <div className="showcase-links">
          <a href="https://myapp1-project-22bp.vercel.app/" target="_blank" rel="noreferrer">Explore Project ↗</a>
          <a href="https://github.com/shindekhushi255-ctrl/myapp" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </article>

    {/* WanderIndia */}
    <article className="showcase-item reverse">
      <div className="showcase-image">
        <img src="/wanderindia.png.png" alt="WanderIndia website" />
        <span>02</span>
      </div>

      <div className="showcase-content">
        <p className="showcase-category">TRAVEL WEBSITE / 2026</p>
        <h3>WanderIndia<span>.</span></h3>
        <p className="showcase-description">
          A travel website showcasing destinations with multiple
          pages and smooth navigation using React Router.
        </p>
        <div className="showcase-tags">
          <span>React.js</span>
          <span>React Router</span>
          <span>CSS</span>
        </div>
        <div className="showcase-links">
          <a href="https://wander-india-two.vercel.app/" target="_blank" rel="noreferrer">Explore Project ↗</a>
          <a href="https://github.com/shindekhushi255-ctrl/WanderIndia" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </article>

    {/* Fashion Card App */}
    <article className="showcase-item">
      <div className="showcase-image">
        <img src="/fashion.png.png" alt="Fashion Card App" />
        <span>03</span>
      </div>

      <div className="showcase-content">
        <p className="showcase-category">SHOPPING INTERFACE / 2026</p>
        <h3>Fashion Card App<span>.</span></h3>
        <p className="showcase-description">
          A fashion shopping interface featuring reusable product
          cards, dynamic content and Add to Cart functionality.
        </p>
        <div className="showcase-tags">
          <span>React.js</span>
          <span>Props</span>
          <span>CSS</span>
        </div>
        <div className="showcase-links">
          <a href="https://fashion-card-app.vercel.app/" target="_blank" rel="noreferrer">Explore Project ↗</a>
          <a href="https://github.com/shindekhushi255-ctrl/fashion-card-app" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </article>

  </div>
</section>

      

      {/* Experience Section */}

      
{/* Experience Section */}

<section className="experience" id="experience">

  <div className="experience-heading">
    <p className="section-tag">MY JOURNEY</p>
    <h2>Internship <span>Experience</span></h2>
    <p className="experience-subtitle">
      Learning, exploring and growing through practical experience.
    </p>
  </div>

  <div className="experience-card">

    <div className="experience-card-top">
      <div className="experience-company">
        <span className="experience-symbol">D.</span>
        <div>
          <p className="experience-type">MY FIRST INTERNSHIP</p>
          <h3>DesignPav</h3>
        </div>
      </div>

      <span className="experience-date">
        26 Oct — 30 Nov, 2026
      </span>
    </div>

    <div className="experience-divider"></div>

    <div className="experience-role">
      <div>
        <h4>Website Developer Intern</h4>
        <p>
          Exploring modern web technologies and building practical
          projects while improving my frontend development skills.
        </p>
      </div>
      <span className="experience-arrow">↗</span>
    </div>

    <div className="experience-tags">
      <span>React.js</span>
      <span>Next.js</span>
      <span>GitHub</span>
      <span>Vercel</span>
      <span>Frontend Development</span>
    </div>

    <div className="experience-bottom">
      <span>LEARNING THROUGH PRACTICE</span>
      <span>01 / EXPERIENCE</span>
    </div>

  </div>

</section>


      {/* Contact Section */}

      
{/* Contact Section */}

<section className="contact" id="contact">

  <div className="contact-heading">
    <p className="section-tag">GET IN TOUCH</p>
    <h2>Let's Start a <span>Conversation.</span></h2>
    <p>
      Have an opportunity, an idea or just want to say hello?
      My inbox is always open.
    </p>
  </div>

  <div className="contact-container">

    <div className="contact-info">
      <span className="contact-small-title">CONTACT DETAILS</span>
      <h3>Let's make something <span>meaningful.</span></h3>

      <p className="contact-intro">
        I am always excited to learn, collaborate and explore
        new opportunities in web development.
      </p>

      <div className="contact-detail">
        <span>EMAIL ADDRESS</span>
        <p>
          <a href="mailto:shindekhushi255@gmail.com">
            shindekhushi255@gmail.com
          </a>
        </p>
      </div>

      <div className="contact-detail">
        <span>LOCATION</span>
        <p>Surat, Gujarat, India</p>
      </div>

      <div className="contact-note">
        <span className="contact-note-dot"></span>
        Open to learning & opportunities
      </div>
    </div>

    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for contacting me!");
        e.target.reset();
      }}
    >

      <div className="form-heading">
        <span>01 — SAY HELLO</span>
        <h3>Send me a message</h3>
      </div>

      <label>Your Name</label>
      <input type="text" placeholder="Enter your name" required />

      <label>Your Email</label>
      <input type="email" placeholder="Enter your email" required />

      <label>Subject</label>
      <input type="text" placeholder="What is this about?" required />

      <label>Your Message</label>
      <textarea placeholder="Write your message here..." rows="4" required />

      <button type="submit">
        Send Message <span>↗</span>
      </button>

    </form>

  </div>

</section>


      {/* Footer Section */}

{/* Footer */}

<footer className="footer">

  <div className="footer-top">
    <div className="footer-brand">
      <a href="#home" className="footer-logo">Khushi<span>.</span></a>
      <p>Turning ideas into meaningful digital experiences.</p>
    </div>

    <div className="footer-message">
      <p>HAVE A GOOD IDEA?</p>
      <a href="#contact">Let's create something together <span>↗</span></a>
    </div>
  </div>

  <div className="footer-line"></div>

  <div className="footer-middle">
    <div className="footer-nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-social">
      <a href="https://github.com/shindekhushi255-ctrl" target="_blank" rel="noreferrer">GitHub ↗</a>
      <a href="mailto:shindekhushi255@gmail.com">Email ↗</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 Khushi Shinde. All rights reserved.</p>
    <a href="#home">BACK TO TOP ↑</a>
  </div>

</footer>

     
            {showTopButton && (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        >
          ↑
        </button>
      )}




</div>

    
  );
}

export default App;

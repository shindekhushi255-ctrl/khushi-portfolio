import './App.css';
function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Khushi.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">Let's Talk</a>
      </nav>

      {/* Home Section */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="intro">HELLO, I'M KHUSHI 👋</p>

          <h1>
            Aspiring Web
            <br />
            <span>Developer.</span>
          </h1>

          <p className="description">
            I am a BCA student passionate about creating
            beautiful and user-friendly websites.
          </p>

          <a href="#projects" className="hero-button">
          Explore My Work →
          </a>
         
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
  <img src="/khushi.jpg.jpeg" alt="Khushi" />
</div>
          <p>Creative Mind. Growing Developer.</p>
          <div className="tech-badges">
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
  <span>React.js</span>
  <span>Next.js</span>
</div>
        </div>

      </section>
           
      {/* About Section */}

      <section className="about" id="about">

        <div className="about-heading">
          <p className="section-tag">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>Hello! I'm Khushi Shinde.</h3>

            <p>
              I am a Web Developer passionate about creating
              beautiful and responsive websites that are easy
              to use and provide a great experience across all devices.
            </p>
          </div>

          <div className="about-details">

            <div className="detail-card">
              <h4>Education</h4>
              <p>BCA – Final Year, Vanita Vishram Women's University</p>
            </div>

            <div className="detail-card">
              <h4>Current Role</h4>
              <p>Website Developer Intern</p>
            </div>

            <div className="detail-card">
              <h4>Currently Learning</h4>
              <p>React.js & Next.js</p>
            </div>

            <div className="detail-card">
              <h4>Interest</h4>
              <p>UI Design & Frontend Development</p>
            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}

      <section className="skills" id="skills">

        <div className="skills-heading">
          <p className="section-tag">WHAT I WORK WITH</p>
          <h2>My <span>Skills</span></h2>
          <p className="skills-subtitle">
            Technologies and tools I use and continue to explore.
          </p>
        </div>

        <div className="skills-container">

          <div className="skill-card">
            <div className="skill-icon">01</div>
            <h3>Frontend Development</h3>
            <p>Building responsive and interactive user interfaces.</p>
            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Next.js</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">02</div>
            <h3>Programming</h3>
            <p>Programming concepts and logical problem solving.</p>
            <div className="skill-tags">
              <span>Python</span>
              <span>PHP</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">03</div>
            <h3>Database</h3>
            <p>Database concepts and data management.</p>
            <div className="skill-tags">
              <span>SQL</span>
              <span>MySQL</span>
            </div>
          </div>

        </div>

      </section>

      {/* Projects Section */}

      <section className="projects" id="projects">

        <div className="projects-heading">
          <p className="section-tag">MY RECENT WORK</p>
          <h2>Featured <span>Projects</span></h2>
          <p className="projects-subtitle">
            A collection of projects I have worked on while learning and exploring web development.
          </p>
        </div>

        <div className="projects-container">

          
{/* Project 1 */}

<div className="project-card">
  <div className="project-top">
    <span>01</span>
    <span className="project-type">React.js</span>
  </div>

  <h3>LearnHub</h3>

  <p>
    An online learning landing page featuring course
    cards, navigation and a clean user-friendly layout.
  </p>

  <div className="project-tags">
    <span>React.js</span>
    <span>CSS</span>
    <span>HTML</span>
  </div>

  <div className="project-actions">
    <a href="https://myapp1-project-22bp.vercel.app/" className="project-link">View Project ↗</a>
    <a href="https://github.com/shindekhushi255-ctrl/myapp" className="project-link">View Code ↗</a>
  </div>
</div>


          
{/* Project 2 */}

<div className="project-card">
  <div className="project-top">
    <span>02</span>
    <span className="project-type">React.js</span>
  </div>

  <h3>WanderIndia</h3>

  <p>
    A travel website with multiple pages, destination
    details and navigation using React Router.
  </p>

  <div className="project-tags">
    <span>React.js</span>
    <span>React Router</span>
    <span>CSS</span>
  </div>

  <div className="project-actions">
    <a href="https://wander-india-two.vercel.app/" className="project-link">View Project ↗</a>
    <a href="https://github.com/shindekhushi255-ctrl/WanderIndia" className="project-link">View Code ↗</a>
  </div>
</div>


          {/* Project 3 */}

<div className="project-card">
  <div className="project-top">
    <span>03</span>
    <span className="project-type">React.js</span>
  </div>

  <h3>Fashion Card App</h3>

  <p>
    A fashion shopping interface featuring reusable
    product cards, dynamic content and Add to Cart
    functionality using React.
  </p>

  <div className="project-tags">
    <span>React.js</span>
    <span>Props</span>
    <span>CSS</span>
  </div>

  <div className="project-actions">
    <a href="https://fashion-card-app.vercel.app/" className="project-link">View Project ↗</a>
    <a href="https://github.com/shindekhushi255-ctrl/fashion-card-app" className="project-link">View Code ↗</a>
  </div>
  </div>

        </div>
      </section>

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

          <div className="experience-top">
            <div>
              <h3>Website Developer Intern</h3>
              <h4>DesignPav</h4>
            </div>

            <span className="experience-date">
              Oct 2026 – Present
            </span>
          </div>

          <p className="experience-description">
            Currently working as a Website Developer Intern,
            learning modern web development technologies and
            building practical projects. Exploring React.js and
            Next.js while improving my frontend development skills.
          </p>

          <div className="experience-tags">
            <span>React.js</span>
            <span>Next.js</span>
            <span>GitHub</span>
            <span>Vercel</span>
            <span>Frontend Development</span>
          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section className="contact" id="contact">

        <div className="contact-heading">
          <p className="section-tag">GET IN TOUCH</p>
          <h2>Let's Work <span>Together</span></h2>
          <p>
            Have a project or an opportunity in mind?
            I'd love to hear from you!
          </p>
        </div>

        <div className="contact-container">

          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I am always excited to learn new things,
              explore opportunities and connect with people.
            </p>

            <div className="contact-detail">
  <span>Email</span>
  <p>
    <a href="mailto:shindekhushi255@gmail.com">
      shindekhushi255@gmail.com
    </a>
  </p>
</div>

            <div className="contact-detail">
              <span>Location</span>
              <p>Surat, Gujarat, India</p>
            </div>
          </div>

          <form className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for contacting me!");
              e.target.reset();
            }}>

            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="text" placeholder="Subject" required />

            <textarea placeholder="Your Message" rows="5" required />

            <button type="submit">Send Message</button>

          </form>

        </div>

      </section>

      {/* Footer Section */}

      <footer className="footer">
        <h2>Khushi.</h2>

        <p>Creating beautiful experiences through code.</p>

        <div className="footer-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>

  <a
    href="https://github.com/shindekhushi255-ctrl"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
</div>

        <div className="footer-bottom">
          <p>© 2026 Khushi Shinde. All Rights Reserved.</p>
        </div>
      </footer>




</div>

    
  );
}

export default App;

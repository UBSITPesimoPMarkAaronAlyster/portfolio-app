import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="skills-project-section" id="skills">
        <div className="skills-left">
          <p className="section-label">MY SKILLS</p>

          <h1>Learning to Build Real Systems</h1>

          <div className="line"></div>

          <div className="skill-grid">
            <div className="skill-box">
              <h3>Frontend</h3>
              <p>React TypeScript HTML CSS</p>
            </div>

            <div className="skill-box">
              <h3>Backend</h3>
              <p>Node, APIs</p>
            </div>

            <div className="skill-box">
              <h3>Database</h3>
              <p>MongoDB MySQL</p>
            </div>

            <div className="skill-box">
              <h3>Programming</h3>
              <p>C# ASP.NET CRUD</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <p className="section-label">ACHIEVEMENTS</p>

        <h1>My Projects</h1>

        <div className="project-gallery row g-4">
          <div className="project-card col-lg-3 col-md-6 col-sm-12">
            <h3>Student Information Portal</h3>
            <p>A student directory and activities portal.</p>
            <a
              href="https://ubsitpesimopmarkaaronalyster.github.io/club-dashboard-lab/"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <div className="project-card col-lg-3 col-md-6 col-sm-12">
            <h3>Student Portal System</h3>
            <p>A university portal for requests and feedback.</p>
            <a
              href="https://ubsitpesimopmarkaaronalyster.github.io/STUDENT_PORTAL/"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <div className="project-card col-lg-3 col-md-6 col-sm-12">
            <h3>Event Registration Dashboard</h3>
            <p>A system for managing campus event registrations.</p>
            <a
              href="https://ubsitpesimopmarkaaronalyster.github.io/MG_LAB4_PESIMO/"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <div className="project-card col-lg-3 col-md-6 col-sm-12">
            <h3>Library Book Request System</h3>
            <p>A form system for student book requests.</p>
            <a
              href="https://ubsitpesimopmarkaaronalyster.github.io/PESIMO_MG_LAB3/"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

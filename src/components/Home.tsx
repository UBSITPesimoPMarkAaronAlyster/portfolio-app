import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <header className="top-header navbar navbar-expand-lg">
        <h2 className="logo">ALYSTER'S PORTFOLIO</h2>

        <nav className="navbar-nav d-flex flex-row gap-4">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero-section" id="about">
        <div className="hero-images">
          <div className="profile-frame"></div>
        </div>

        <div className="hero-text">
          <p className="section-label">ABOUT ME</p>

          <h1>Hi! My name is Alyster Pesimo, I'm an IT student.</h1>

          <div className="line"></div>

          <p>I build systems using React, Node.js, MongoDB, MySQL and C#.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

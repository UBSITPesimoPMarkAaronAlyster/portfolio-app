import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home-page">
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

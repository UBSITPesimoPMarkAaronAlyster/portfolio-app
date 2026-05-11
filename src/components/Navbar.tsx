import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="top-header navbar navbar-expand-lg">
      <h2 className="logo">ALYSTER'S PORTFOLIO</h2>

      <nav className="navbar-nav d-flex flex-row gap-4">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
};

export default Navbar;

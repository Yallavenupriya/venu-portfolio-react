import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">PORTFOLIO</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#skills">Skills</a>
      </div>
    </div>
  );
}

export default Navbar;

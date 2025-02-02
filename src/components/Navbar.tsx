import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.css"; // We'll create this file next

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="hibiscus (2).png" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-list">
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={faHouseUser} className="home-icon" />
          </a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

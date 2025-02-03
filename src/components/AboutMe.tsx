import React, { useEffect, useState } from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`about-me-container ${animate ? "animate" : ""}`}>
      <div className={`description ${animate ? "animate" : ""}`}>
        <h2>About Me</h2>
        <p>
          My name is Saja Moussa, I’m a passionate student and coding enthusiast currently diving
          into full-stack development, where I’m building web applications and
          exploring both front-end and back-end technologies. I’m also venturing
          into the exciting worlds of AI and machine learning, aiming to deepen
          my expertise in these cutting-edge fields.
        </p>
        <div className="education">
          <p>
            Education: Junior with a major in Information Technology and a minor in Business Analytics at  {" "}
              <a href="https://tunis-business-school.tn" target="_blank" rel="noopener noreferrer">Tunis Business School ↗</a>
          </p>
        </div>
        <button>
                  <a href="#contact">Contact Me</a>
                </button>
      </div>
      <div className={`image-container ${animate ? "animate" : ""}`}>
        <div className="border-wrapper">
          <img
            src="src/components/potfolio pic.jpeg"
            alt="About Me"
            className="about-me-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import star from '..stars.png';
import React, { useEffect, useRef, useState } from "react";
import "./AboutMe.css";
const AboutMe: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  // Prevent default drag behavior
  const handleDragStart = (event: React.DragEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Trigger animation when in view
          } else {
            setAnimate(false); // Reset animation state when out of view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutMeRef} className={`about-me-container ${animate ? "animate" : ""}`}>
      <div className={`description ${animate ? "animate" : ""}`}>
      <div className="title-container">
      
        <h2>About Me</h2><img
            src={star} // Path to your start.png image
            alt="Star"
            className="star-image"
            onDragStart={handleDragStart} // Prevent dragging the image
          /></div>
        <p>
          My name is Saja Moussa, I’m a passionate student and coding enthusiast currently diving
          into full-stack development, where I’m building web applications and
          exploring both front-end and back-end technologies. I’m also venturing
          into the exciting worlds of AI and machine learning, aiming to deepen
          my expertise in these cutting-edge fields.
        </p>
        <div className="education">
          <p>
            Education: Junior with a major in Information Technology and a minor in Business Analytics at {" "}
            <a
              href="https://tunis-business-school.tn"
              target="_blank"
              rel="noopener noreferrer"
              onDragStart={handleDragStart} // Prevent dragging the link
            >
              Tunis Business School ↗
            </a>
          </p>
        </div>
        <button>
          <a href="#contact">Contact Me</a>
        </button>
      </div>
      <div className={`image-container ${animate ? "animate" : ""}`}>
        <div className="border-wrapper">
          <img
            src="potfolio pic.jpeg"
            alt="About Me"
            className="about-me-image"
            onDragStart={handleDragStart} // Prevent dragging the image
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
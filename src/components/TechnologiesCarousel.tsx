import React, { useEffect, useRef, useState } from "react";
import "./TechnologiesCarousel.css"; // Import your CSS file

const technologies = [
  { name: "React", image: "tools/physics.png" },
  { name: "Node.js", image: "tools/node-js-svgrepo-com.png" },
  { name: "Python", image: "tools/python.png" },
  { name: "JavaScript", image: "tools/js.png" },
  { name: "CSS", image: "tools/css-3-svgrepo-com.png" },
  { name: "Java", image: "tools/java.png" },
  { name: "Postman", image: "tools/postman-icon-svgrepo-com.png" },
  { name: "Angular", image: "tools/angular-icon-svgrepo-com.png" },
  { name: "HTML", image: "tools/html.png" },
  { name: "Docker", image: "tools/docker-svgrepo-com.png" },
  { name: "Linux", image: "tools/linux-svgrepo-com.png" },
  { name: "Jupyter", image: "tools/jupyter-svgrepo-com.png" },
  { name: "MySQL", image: "tools/mysql-logo-svgrepo-com.png" },
  { name: "MongoDB", image: "tools/mongo-svgrepo-com.png" }
  // Add more technologies as needed
];

const TechnologiesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false); // State for animation
  const [activeArrow, setActiveArrow] = useState<"left" | "right" | null>(null); // State for active arrow
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? technologies.length - 1 : prevIndex - 1
    );
    setActiveArrow("left"); // Set left arrow as active
    setTimeout(() => setActiveArrow(null), 200); // Reset after 200ms
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === technologies.length - 1 ? 0 : prevIndex + 1
    );
    setActiveArrow("right"); // Set right arrow as active
    setTimeout(() => setActiveArrow(null), 200); // Reset after 200ms
  };

  // Effect to update the carousel scroll position
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].clientWidth + 20; // Width of one item + margin
      carouselRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex]);

  // Effect to trigger animation when the carousel comes into view
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Effect to handle keyboard arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrev(); // Move to the previous item
      } else if (event.key === "ArrowRight") {
        handleNext(); // Move to the next item
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrev, handleNext]); // Dependencies to ensure the latest functions are used

  return (
    <div className="carousel-wrapper">
      <div ref={containerRef} className={`technologies-carousel ${animate ? "animate" : ""}`}>
        <hr />
        <h3>Technologies And Tools</h3>
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {technologies.map((tech, index) => (
              <div
                className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                key={index}
              >
                <img src={tech.image} alt={tech.name} className="tech-image" />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
      <button
        className={`carousel-arrow left ${activeArrow === "left" ? "active" : ""}`}
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className={`carousel-arrow right ${activeArrow === "right" ? "active" : ""}`}
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default TechnologiesCarousel;
import React, { useEffect, useRef, useState } from "react";
import "./TechnologiesCarousel.css"; // Import your CSS file

const technologies = [
  { name: "React", image: "src/components/tools/physics.png" },
  { name: "Node.js", image: "src/components/tools/node-js-svgrepo-com.png" },
  { name: "Python", image: "src/components/tools/python.png" },
  { name: "JavaScript", image: "src/components/tools/js.png" },
  { name: "CSS", image: "src/components/tools/css-3-svgrepo-com.png" },
  { name: "Java", image: "src/components/tools/java.png" },
  { name: "Postman", image: "src/components/tools/postman-icon-svgrepo-com.png" },
  { name: "Angular", image: "src/components/tools/angular-icon-svgrepo-com.png" },
  { name: "HTML", image: "src/components/tools/html.png" },
  { name: "Docker", image: "src/components/tools/docker-svgrepo-com.png" },
  { name: "Linux", image: "src/components/tools/linux-svgrepo-com.png" },
  { name: "Jupyter", image: "src/components/tools/jupyter-svgrepo-com.png" },
  { name: "MySQL", image: "src/components/tools/mysql-logo-svgrepo-com.png" },
  { name: "MongoDB", image: "src/components/tools/mongo-svgrepo-com.png" }
  // Add more technologies as needed
];

const TechnologiesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? technologies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === technologies.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Effect to update the carousel scroll position
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].clientWidth + 20; // Width of one item + margin
      carouselRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex]);

  return (
    <div className="technologies-carousel">
      <hr />
      <h3>Technologies And Tools</h3>
      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={handlePrev}>
          &lt;
        </button>
        <div className="carousel" ref={carouselRef}>
          {technologies.map((tech, index) => (
            <div
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
              key={index}
            >
              <img src={tech.image} alt={tech.name} className="tech-image" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <hr />
    </div>
  );
};

export default TechnologiesCarousel;
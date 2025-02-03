import React, { useEffect, useRef, useState } from "react";
import "./Home.css"; // Import the CSS file

// Define the type for the props
interface HomeProps {
  rows: number;
  cols: number;
}

const Home: React.FC<HomeProps> = ({ rows, cols }) => {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility if it goes out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <div
      id="home"
      ref={homeRef}
      className={`matrix ${isVisible ? "fade-in" : ""}`}
    >
      {Array.from({ length: rows * cols }).map((_, index) => {
        const rowIndex = Math.floor(index / cols);
        const colIndex = index % cols;

        // Define the special area range
        if (rowIndex > 1 && rowIndex < 5 && colIndex >= 1 && colIndex < 8) {
          if (rowIndex === 2 && colIndex === 1) {
            return (
              <div key={`${rowIndex}-${colIndex}`} className="special-cell">
                <div className="sparkle-container">
                  <img
                    src="src/components/sparkle.png" // Use forward slashes for paths
                    alt="Sparkle"
                    className="sparkle-icon"
                  />
                </div>
                Hi, this is my personal portfolio.
                <br />
                Get to know more about me
                <button>
                  <a href="#about">About Me</a>
                </button>
                <div className="sparkle-container2">
                  <img
                    src="src/components/sparkle.png" // Use forward slashes for paths
                    alt="Sparkle"
                    className="sparkle-icon"
                  />
                </div>
              </div>
            );
          }
          return null; // Remove extra rendering instead of using display: "none"
        }

        return (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="line"
            ref={(el) => {
              if (el) {
                el.style.setProperty("--index", `${index}`); // Set the CSS variable
              }
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Home;

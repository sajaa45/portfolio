import React, { useEffect, useRef, useState } from "react";
import "./Home.css"; // Import the CSS file

// Define the type for the props
interface HomeProps {
  rows: number; // Fixed number of rows
}

const Home: React.FC<HomeProps> = ({ rows }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cols, setCols] = useState(9); // Default number of columns based on original CSS
  const homeRef = useRef<HTMLDivElement>(null);

  // Prevent default drag behavior
  const handleDragStart = (event: React.DragEvent) => {
    event.preventDefault();
  };

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

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      // Calculate columns based on width
      if (width < 480) {
        setCols(3); // 3 columns for very small devices
      } else if (width < 768) {
        setCols(5); // 5 columns for tablets
      } else if (width < 1200) {
        setCols(7); // 7 columns for larger tablets
      } else {
        setCols(9); // 9 columns for desktop
      }
    };
    updateCols(); // Set initial columns based on current width
    window.addEventListener("resize", updateCols); // Update columns on resize

    return () => {
      window.removeEventListener("resize", updateCols); // Cleanup listener
    };
  }, []);

  return (
    <div
      id="home"
      ref={homeRef}
      className={`matrix ${isVisible ? "fade-in" : ""}`}
      style={{ gridTemplateColumns: `repeat(${Math.max(cols, 3)}, 1fr)` }} // Ensure at least 3 columns
    >
      {Array.from({ length: rows * cols }).map((_, index) => {
        const rowIndex = Math.floor(index / cols);
        const colIndex = index % cols;

        // Check if the number of columns is as expected
        if (index === 0) {
          console.log(`Columns: ${cols}, Rows: ${rows}, Total Items: ${rows * cols}`);
        }

        // Define the special area range
        if (cols > 3 && rowIndex > 1 && rowIndex < 5 && colIndex >= 1 && colIndex < cols - 1) {
          if (rowIndex === 2 && colIndex === 1) {
            const spanCols = Math.min(7, cols - 2); // Ensure it doesn't exceed available columns
            const spanRows = 3; // Fixed span for rows

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="special-cell"
                style={{
                  gridColumn: `span ${spanCols}`,
                  gridRow: `span ${spanRows}`,
                }}
              >
                <div className="sparkle-container">
                  <img
                    src="sparkle.png" // Use forward slashes for paths
                    alt="Sparkle"
                    className="sparkle-icon sparkle-icon1"
                    onDragStart={handleDragStart} // Prevent dragging the sparkle icon
                  />
                </div>
                Hi, this is my personal portfolio.
                <br />
                Get to know more about me
                <button>
                  <a href="#about" onDragStart={handleDragStart}>About Me</a> {/* Prevent dragging the link */}
                </button>
                <div className="sparkle-container2">
                  <img
                    src="sparkle.png" // Use forward slashes for paths
                    alt="Sparkle"
                    className="sparkle-icon sparkle-icon2"
                    onDragStart={handleDragStart} // Prevent dragging the sparkle icon
                  />
                </div>
              </div>
            );
          }
          return null; // Remove extra rendering instead of using display: "none"
        } else if (cols === 3 && rowIndex > 1 && rowIndex < 5 && colIndex >= 0 && colIndex <= 3) {
          if (rowIndex === 2 && colIndex === 0) {
            const spanCols = 3; // Span 3 columns
            const spanRows = 3; // Fixed span for rows

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="special-cell"
                style={{
                  gridColumn: `span ${spanCols}`,
                  gridRow: `span ${spanRows}`,
                }}
              >
                <div className="sparkle-container">
                  <img
                    src="sparkle.png" // Use forward slashes for paths
                    alt="Sparkle"
                    className="sparkle-icon sparkle-icon1"
                    onDragStart={handleDragStart} // Prevent dragging the sparkle icon
                  />
                </div>
                Hi, this is my personal portfolio.
                <br />
                Get to know more about me
                <button>
                  <a href="#about" onDragStart={handleDragStart}>About Me</a>
                </button>
                <div className="sparkle-container2">
                  <img
                    src="sparkle.png" // Use forward slashes for paths
                    alt="Sparkle"
                    className="sparkle-icon sparkle-icon2"
                    onDragStart={handleDragStart} // Prevent dragging the sparkle icon
                  />
                </div>
              </div>
            );
          }return null;
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
import React from "react";
import "./Home.css"; // Import the CSS file

// Define the type for the props
interface HomeProps {
  rows: number;
  cols: number;
}

const Home: React.FC<HomeProps> = ({ rows, cols }) => {
  return (
    <div className="matrix">
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
                    src="src\components\sparkle.png"
                    alt="Sparkle"
                    className="sparkle-icon"
                  />
                </div>
                Hi, this is my personal portfoli.
                <br />
                Get to know more about me
                <button>
                  <a href="#about">About Me</a>
                </button>
                <div className="sparkle-container2">
                  <img
                    src="src\components\sparkle.png"
                    alt="Sparkle"
                    className="sparkle-icon"
                  />
                </div>
              </div>
            );
          }
          return null; // Remove extra rendering instead of using display: "none"
        }

        return <div key={`${rowIndex}-${colIndex}`} className="line"></div>;
      })}
    </div>
  );
};

export default Home;

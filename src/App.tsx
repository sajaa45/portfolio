import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TechnologiesCarousel from "./components/TechnologiesCarousel";
const App: React.FC = () => {
   /*useEffect(() => {
   const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault(); // Prevent the context menu from appearing
    };

    // Add event listener to the document
    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);*/
  return (
    <div className="App">
      <Navbar />
      <section id="home" className="section">
        <Home rows={7}  />
      </section>
      <section id="about" className="section">
        <AboutMe />
      </section>
      <section id="technologies" className="section">
        <TechnologiesCarousel />
      </section>
      <section id="projects" className="section">
        Projects Section
        <img src="src\cursor (1).png" alt="About Me" />
      </section>
      <section id="experience" className="section">
        Experience Section
      </section>
      <section id="contact" className="section">
        Contact Me Section
      </section>
    </div>
  );
};

export default App;

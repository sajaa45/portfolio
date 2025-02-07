import React, { useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechnologiesCarousel from "./components/TechnologiesCarousel";
const App: React.FC = () => {
   useEffect(() => {
   const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault(); // Prevent the context menu from appearing
    };

    // Add event listener to the document
    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
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
        <Projects/>
      </section>
      <section id="experience" className="section">
        <Experience/>
      </section>
      <section id="contact" className="section">
        <ContactMe/>
      </section>
    </div>
  );
};

export default App;

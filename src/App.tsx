import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="home" className="section">
        <Home rows={7} cols={9} />
      </section>
      <section id="about" className="section">
        <AboutMe />
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

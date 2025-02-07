import { useEffect, useRef, useState } from "react";
import star from '../../public/stars.png';
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Ecovista",
    subtitle: "A Web Services Platform for Sustainable Ecotourism in Tunisia",
    des: [
      "Developed a full-stack web platform using React, Flask, and MySQL.",
      "Implemented CRUD operations for managing different services.",
      "Integrated JWT authentication and optimized database performance for scalability."
    ],
    iconLists: [
      "tools-projects/flask-svgrepo-com.png",
      "tools-projects/react-javascript-js-framework-facebook-svgrepo-com.png",
      "tools-projects/mysql-svgrepo-com (1).png",
      "tools-projects/postman-svgrepo-com.png"
    ],
    link: "https://github.com/sajaa45/Ecovista",
  },
  {
    id: 2,
    title: "Car Resale Data Analysis Management System",
    subtitle: "A Data Analysis Management System Using Object-Oriented Programming",
    des: [
      "Developed a car resale price prediction system using Java, JavaFX, and machine learning for data analysis.",
      "Implemented data ingestion, analysis, and visualization with predictive modeling for price estimation.",
      "Optimized data processing, integrating ML models to analyze car attributes and improve accuracy."
    ],
    iconLists: [
      "tools-projects/java-svgrepo-com.png",
      "tools-projects/icons8-scene-builder-64.png",
      "tools-projects/mysql-svgrepo-com (1).png",
      "tools-projects/postman-svgrepo-com.png"
    ],
    link: "https://github.com/sajaa45/Car-Resale-Data-Analysis-Management-System",
  },
  {
    id: 3,
    title: "Retail Inventory Optimization",
    subtitle: "Business Intelligence and Data Analytics project",
    des: [
      "Developed a BI solution for retail inventory optimization using ETL pipelines and data warehousing.",
      "Built an interactive dashboard with Tableau, analyzing sales trends, product demand, and store performance.",
      "Implemented predictive analytics for demand forecasting, improving inventory management and decision-making."
    ],
    iconLists: [
      "tools-projects/python-127-svgrepo-com.png",
      "tools-projects/tableau-svgrepo-com.png",
      "tools-projects/mysql-svgrepo-com (1).png"
    ],
    link: "https://github.com/sajaa45/Retail-Inventory-Optimization",
  },
];

const Projects = () => {
  const [animate, setAnimate] = useState(false);
  const projectsRef = useRef(null);
  const handleDragStart = (event: React.DragEvent) => {
      event.preventDefault();
    };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setAnimate(entry.isIntersecting); // Toggle animation based on visibility
      },
      { threshold: 0.2 } // Trigger animation when 20% of the element is visible
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div ref={projectsRef} className={`projects-container ${animate ? "animate" : ""}`}>
        <div className="title-container">
      <h1 className="heading">A small selection of recent projects</h1><img
            src={star} // Path to your start.png image
            alt="Star"
            className="star-image"
            onDragStart={handleDragStart} // Prevent dragging the image
          /></div>
      <div className="projects-wrapper">
        {projects.map((item) => (
          <div className={`project-card ${animate ? "fade-in" : "fade-out"}`} key={item.id}>
            <h2 className="project-title">{item.title}</h2>
            <h3 className="project-subtitle">{item.subtitle}</h3>
            <ul className="project-description">
              {item.des.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
            <div className="project-icons">
              {item.iconLists.map((icon, index) => (
                <img key={index} src={icon} alt="icon" className="icon" />
              ))}
            </div>
            <div className="project-link-container">
            <a href={item.link} target="_blank" className="project-link" rel="noopener noreferrer">
              Check Github →
            </a></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

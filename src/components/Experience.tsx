import { useEffect, useRef, useState } from "react";
import star from '../../public/stars.png';
import "./Experience.css";

const Experience = () => {
    const [animate, setAnimate] = useState(false);
    const experienceRef = useRef(null);

    const experiences = [
      {
        jobTitle: 'Full-Stack Developer Intern',
        duration: 'July 2024 – Aug 2024',
        companyTitle: 'GPRO consulting',
        category: 'IT Services and IT Consulting',
        description: [
          'Created a task management web application using SpringBoot (Backend) and Angular (Frontend)',
          'Collaborated with the team to integrate web solutions and streamline processes for clients'
        ],
        link: 'https://github.com/sajaa45/ToDoList',
      },
      {
        jobTitle: 'Intern',
        duration: 'June 2023 – July 2023',
        companyTitle: 'SPG Pneumatics',
        category: 'Pneumatics Import Supply Services',
        description: [
          'Gained hands-on experience across various departments within a large importing company.',
          'Observed and learned daily tasks, acquiring a clear vision of preferred future work roles.'
        ]
      }
    ];

    const handleDragStart = (event: React.DragEvent) => {
      event.preventDefault();
    };

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setAnimate(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );

      if (experienceRef.current) {
        observer.observe(experienceRef.current);
      }

      return () => {
        if (experienceRef.current) {
          observer.unobserve(experienceRef.current);
        }
      };
    }, []);

    return (
      <div ref={experienceRef} className={`experience-container ${animate ? "animate" : ""}`}>
        <div className="title-container">
          <h2 className="heading">Work Experience</h2>
          <img
            src={star}
            alt="Star"
            className="star-image"
            onDragStart={handleDragStart}
          />
        </div>
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-item ${animate ? "fade-in" : "fade-out"}`}>
            <h3>{exp.jobTitle}</h3>
            <div className="experience-header">
              <p className='company'>{exp.companyTitle}</p>
              <p className="duration"><strong>{exp.duration}</strong></p>
            </div>
            <p> {exp.category}</p>
            <ul>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            {exp.link && (
              <div className="experience-footer">
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="experience-link">
                  View Project →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

export default Experience;

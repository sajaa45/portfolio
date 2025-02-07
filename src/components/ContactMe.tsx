import { useEffect, useRef, useState } from "react";
import star from '../../public/stars.png';
import "./ContactMe.css";

const ContactMe = () => {
  const [animate, setAnimate] = useState(false);
  const contactRef = useRef(null);
    const handleDragStart = (event: React.DragEvent) => {
        event.preventDefault();
      };
    
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setAnimate(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div ref={contactRef} className={`contact-container ${animate ? "animate" : ""}`}>
        <div className="title-container">
      <h2 className="contact-heading">Contact Me</h2><img
            src={star} // Path to your start.png image
            alt="Star"
            className="star-image"
            onDragStart={handleDragStart} // Prevent dragging the image
          /></div>
      <div className="contact-info">
        <div className="contact-pair">
        <div className="contact-item">
            <img src="icons/outlook.png" alt="Outlook" />
            <a href="mailto:moussasaja@tbs.u-tunis.tn">moussasaja@tbs.u-tunis.tn</a>
          </div>
          <div className="contact-item">
            <img src="icons/gmail-logo.png" alt="Gmail" />
            <a href="mailto:moussa.saja@gmail.com">moussa.saja@gmail.com</a>
          </div>
          
        </div>

        <div className="contact-pair">
        <div className="contact-item">
            <img src="icons/github-sign.png" alt="GitHub" />
            <a href="https://github.com/sajaa45" target="_blank" rel="noopener noreferrer">
              sajaa45
            </a>
          </div>
          <div className="contact-item">
            <img src="icons/linkedin.png" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/saja-moussa-9a594b323/" target="_blank" rel="noopener noreferrer">
            saja-moussa
            </a>
          </div>
          
        </div>

        <div className="contact-pair">
          <div className="contact-item">
            <img src="icons/phone-call.png" alt="Phone" />
            <span>+94867547</span>
          </div>
          <div className="contact-item">
            <img src="icons/maps-and-flags.png" alt="Location" />
            <span>Mourouj, Tunis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

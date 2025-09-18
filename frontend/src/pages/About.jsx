import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import admin1 from '../assets/admin1.png'; // Replace with real paths
import admin2 from '../assets/admin2.png'; // Replace with real paths
import '../styles/About.css'; // Import your CSS styles
function About() {
  return (
    <div className="about-container">
      {/* About Psyberly Section */}
      <section className="about-intro">
        <h1>About Psyberly</h1>
        <p>
          Psyberly is a Nepali-driven cyber squad making the web safer — one secure site and fun article at a time. We learn, build, and laugh (mostly at bugs).
        </p>
        <p>
          With every post and project, we help learners, developers, and enthusiasts create smarter, safer web apps — all while growing a culture of security and knowledge.
        </p>
      </section>

      {/* Admin Section */}
      <div className="adminhead"><h1>Admin</h1></div>
      <section className="admin-section">
        <div className="admin-card">
          <img src={admin1} alt="Admin 1" className="admin-image" />
          <h3>Aagaman K.C.</h3>
          <p>Cybersecurity Engineer</p>
          <div className="social-icons">
            <a href="https://linkedin.com/in/pratik" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/pratik" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:pratik@example.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="admin-card">
          <img src={admin2} alt="Admin 2" className="admin-image" />
          <h3>Anurag Acharya</h3>
          <p>Cybersecurity Analyst</p>
          <div className="social-icons">
            <a href="https://linkedin.com/in/rita" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/rita" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:rita@example.com"><FaEnvelope /></a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:teampsyberly@gmail.com">teampsyberly@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/company/psyberly" target="_blank" rel="noopener noreferrer">Psyberly on LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/psyberly" target="_blank" rel="noopener noreferrer">github.com/psyberly</a></p>
      </section>
    </div>
  );
}

export default About;

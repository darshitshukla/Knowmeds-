import React from "react";
import "../App.css";
import Navbar from "./navbar";


const About = () => {
  return (
    <>
  <Navbar />
  
    <div className="about-container">
      <h1 className="about-title">About Knowmeds</h1>
      <p className="about-intro">
        Knowmeds is your personal medicine guide — helping you make safe, smart, and informed decisions about your health.
      </p>

      <div className="about-sections">
        <div className="about-card">
          <h3>💊 Our Mission</h3>
          <p>
            To empower individuals with personalized medicine recommendations based on trusted healthcare data and AI-driven analysis.
          </p>
        </div>

        <div className="about-card">
          <h3>🔬 Why Knowmeds?</h3>
          <p>
            We simplify the complexity of medicine. Our system analyzes your symptoms and needs to suggest relevant medicines — responsibly and efficiently.
          </p>
        </div>

        <div className="about-card">
          <h3>🤝 Our Commitment</h3>
          <p>
            Accuracy, accessibility, and user safety are at the heart of Knowmeds. We continuously update our database and work with verified sources.
          </p>
        </div>
      </div>

      <div className="about-footer">
        <p>Knowmeds is not a substitute for medical advice. Always consult a licensed doctor when needed.</p>
      </div>
    </div>
    </>
  );
};

export default About;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import bgimage from "./bgimage.png";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./navbar";

const Home = () => {

  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate("/search");
  };
  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Add scrolled class when user scrolls down
      } else {
        navbar.classList.remove("scrolled"); // Remove scrolled class when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [medicineCount, setMedicineCount] = useState(0);
  const [usersHelped, setUsersHelped] = useState(0);
  const [supportHours, setSupportHours] = useState(0);

  useEffect(() => {
    let medicineInterval = setInterval(() => {
      setMedicineCount((prev) => (prev < 1000 ? prev + 10 : 1000));
    }, 10);
    let usersInterval = setInterval(() => {
      setUsersHelped((prev) => (prev < 500 ? prev + 5 : 500));
    }, 15);
    let supportInterval = setInterval(() => {
      setSupportHours((prev) => (prev < 24 ? prev + 1 : 24));
    }, 100);

    return () => {
      clearInterval(medicineInterval);
      clearInterval(usersInterval);
      clearInterval(supportInterval);
    };
  }, []);

  const healthTips = [
    "💧 Stay Hydrated: Drink 8 glasses of water daily!",
    "🍏 Eat More Greens: Boost your immunity naturally.",
    "🏃‍♂️ Stay Active: 30 mins of daily exercise improves health.",
    "😴 Sleep Well: 7-8 hours of sleep is crucial for recovery.",
    "🛡️ Boost Immunity: Include Vitamin C foods daily.",
    "🧘‍♂️ Stress Less: Meditation helps balance hormones.",
  ];
  return (
    <>
       <Navbar/>
      <div className="container-fluid">
        <div className="content">
          <img src={bgimage} alt="" className="bgimage"></img>
          <button className="start-button" onClick={handleStartClick}>
            Explore <FaArrowRight />
          </button>
        </div>
      </div>
      <section id="health-tips" className="health-tips">
        <h2>Health Tips</h2>
        <p>Here are some tips to help you stay healthy:</p>

        {/* Health Tip Cards */}
        <div className="tip-cards">
          <div className="tip-card">
            <h3>Stay Hydrated</h3>
            <p>
              Drink at least 8 glasses of water daily to stay hydrated and
              maintain healthy skin.
            </p>
          </div>
          <div className="tip-card">
            <h3>Get Enough Sleep</h3>
            <p>
              Aim for 7-8 hours of sleep each night for optimal health and
              well-being.
            </p>
          </div>
          <div className="tip-card">
            <h3>Exercise Regularly</h3>
            <p>
              Engage in physical activity for at least 30 minutes a day to
              maintain a healthy body and mind.
            </p>
          </div>
          <div className="tip-card">
            <h3>Eat a Balanced Diet</h3>
            <p>
              Include a variety of fruits, vegetables, whole grains, and lean
              proteins in your diet.
            </p>
          </div>
        </div>
      </section>

       {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature-card">
            <h3>🔎 Medicine Recommendations</h3>
            <p>AI-suggested medicines tailored to your symptoms.</p>
          </div>
          <div className="feature-card">
            <h3>📋 Alternative Medicines</h3>
            <p>Find affordable or available substitutes instantly.</p>
          </div>
          <div className="feature-card">
            <h3>💬 Virtual Doctor Consultation</h3>
            <p>Ask health queries and get guidance from experts.</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure & Private</h3>
            <p>Your health data is encrypted and secured.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How KnowMeds Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Describe Symptoms</h3>
            <p>Type your illness or medicine name.</p>
          </div>
          <div className="step">
            <h3>2. Get Recommendations</h3>
            <p>Our AI suggests the best options for you.</p>
          </div>
          <div className="step">
            <h3>3. Explore Alternatives</h3>
            <p>Choose affordable or available substitutes.</p>
          </div>
          <div className="step">
            <h3>4. Consult a Doctor</h3>
            <p>Get professional help if needed.</p>
          </div>
        </div>
      </section>

      {/* Animated Counters Section */}
      <section className="counters-section">
        <div className="counter">
          <h2>{medicineCount}+</h2>
          <p>Medicines Recommended</p>
        </div>
        <div className="counter">
          <h2>{usersHelped}+</h2>
          <p>Users Helped</p>
        </div>
        <div className="counter">
          <h2>{supportHours}/7</h2>
          <p>Health Support</p>
        </div>
      </section>

      {/* Health Tips Carousel */}
      <section className="health-tips-section">
        <h2>Health Tips</h2>
        <div className="carousel">
          <div className="carousel-track">
            {healthTips.map((tip, index) => (
              <div className="tip" key={index}>{tip}</div>
            ))}
            {/* Duplicate for smooth infinite scroll */}
            {healthTips.map((tip, index) => (
              <div className="tip" key={"dup-" + index}>{tip}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="reviews">
        <h2>What Our Customers Say</h2>

        {/* Review Cards Grid */}
        <div className="review-cards">
          <div className="review-card">
            <div className="review-content">
              <h3>John D.</h3>
              <div className="review-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">☆</span>
              </div>
              <p>
                "Knowmeds helped me find the perfect medicine for my condition.
                The recommendations were spot on!"
              </p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-content">
              <h3>Sarah K.</h3>
              <div className="review-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">☆</span>
              </div>
              <p>
                "Great service! I love how easy it is to search for medicines
                and get trusted advice."
              </p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-content">
              <h3>Emily P.</h3>
              <div className="review-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p>
                "Excellent platform for finding medicines. Highly recommend
                Knowmeds to others!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer Section */}
      <section id="disclaimer" className="disclaimer">
        <p>
          <strong>Disclaimer:</strong> The recommendations provided by Knowmeds
          are for informational purposes only and should not be considered as a
          substitute for professional medical advice. Always consult your
          healthcare provider before taking any medication.
        </p>
      </section>

      <section id="social-media" className="social-media">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a
            href="https://www.facebook.com/Knowmeds"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/Knowmeds"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/Knowmeds"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;

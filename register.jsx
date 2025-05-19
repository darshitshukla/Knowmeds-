import React from "react";
import "../App.css";
import registerImage from './register.jpg';

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-image-section">
          <img src={registerImage} alt="Pharma Registration" />
        </div>
        <div className="register-form-section">
          <h2>Create a New Account</h2>
          <form className="register-form">
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" required />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />

            <button type="submit">Register</button>
            <p className="login-link">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

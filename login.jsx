import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../App.css"; 
import loginimg from './login.png'


const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image-section">
          <img src={loginimg} alt="Pharma" />
        </div>
        <div className="login-form-section">
          <h2>Welcome Back to KnowMeds</h2>
          <form className="login-form">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" required />
            <button type="submit">Login</button>
            <p className="register-link">Don’t have an account?<Link to="/register">Register here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

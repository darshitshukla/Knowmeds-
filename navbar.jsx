// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./logo1.png";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
  <div className="navbar-container">
    <div className="navbar-left">
      <Link to="/home">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>

    <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/search">Search</Link>
    </ul>

    <div className="navbar-right">
      <Link to="/login" className="login-button">Login</Link>
    </div>

    <div className="hamburger" onClick={toggleMenu}>☰</div>
  </div>
</div>
  );
};

export default Navbar;

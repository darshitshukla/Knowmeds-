import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "./logo.jpeg";
import '../App.css';

const Preloader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // Redirects to the "/home" route after 5 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="container">
      <div className="preloader">
        <div><img src={Image} alt="Logo" /></div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Preloader;
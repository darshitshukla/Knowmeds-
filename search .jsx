import React, { useState } from "react";
import "../App.css";
import Navbar from "./navbar";

const Search = () => {
  const [symptoms, setSymptoms] = useState("");
  const [doctorResponse, setDoctorResponse] = useState("");

  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleConsultation = async () => {
    if (symptoms.trim() === "") {
      alert("Please describe your symptoms.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      });

      const data = await response.json();

      if (response.ok) {
        setDoctorResponse(data.reply);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error during consultation:", error);
      alert("An error occurred while consulting the AI doctor.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="search-container">
        <div className="search-header">
          <h1>Find the Right Medicine</h1>
          <p>Describe your illness and get the right recommendation</p>
        </div>

        <div className="search-box">
          <textarea
            className="medicine-input"
            placeholder="Type your medicine name whose alternative is to be recommended"
            rows="4"
          />
          <div className="search-buttons">
            <button className="btn medicine-use-btn">
              Uses of the Medicine
            </button>
            <button className="btn recommend-btn">Recommend Medicine</button>
          </div>
        </div>

        <div className="search-box" style={{ marginTop: "50px" }}>
          <textarea
            className="illness-input"
            placeholder="Describe the illness"
            rows="4"
          />
          <div className="search-buttons">
            <button className="btn recommend-btn">Recommend Medicine</button>
          </div>
        </div>

        {/* AI Doctor Consultation Section */}
        <div className="consultation-box" style={{ marginTop: "50px" }}>
          <h2>AI Doctor Consultation</h2>
          <textarea
            className="symptoms-input"
            placeholder="Describe your symptoms to the AI doctor"
            rows="4"
            value={symptoms}
            onChange={handleSymptomsChange}
          />
          <div className="consultation-buttons">
            <button className="btn consult-btn" onClick={handleConsultation}>
              Consult AI Doctor
            </button>
          </div>
          {doctorResponse && (
            <div className="doctor-response">
              <h3>Doctor's Response:</h3>
              <p>{doctorResponse}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;

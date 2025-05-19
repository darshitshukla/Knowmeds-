import React, { useState } from "react";
import "../App.css";
import Navbar from "./navbar";

const faqData = [
  {
    question: "What is Knowmeds?",
    answer:
      "Knowmeds is an AI-powered medicine recommendation system that suggests appropriate medicines based on symptoms entered by users."
  },
  {
    question: "Is Knowmeds a replacement for doctors?",
    answer:
      "No, Knowmeds is not a replacement for professional medical advice. Always consult a licensed physician for serious medical conditions."
  },
  {
    question: "How accurate are the medicine recommendations?",
    answer:
      "Knowmeds uses a trained AI model and verified medical data sources to recommend medicines, but accuracy may vary. Use it as a supportive tool."
  },
  {
    question: "Is Knowmeds free to use?",
    answer:
      "Yes! Knowmeds is currently free to use for all users during its beta phase."
  },
  {
    question: "Can I save or download my recommendations?",
    answer:
      "Yes, you can save your recommendations for future reference and even download a summary if needed."
  },
  {
    question: "How does Knowmeds recommend medicines?",
    answer: "It analyzes the illness description or medicine name you provide using advanced machine learning models trained on healthcare data."
  },
  {
    question: "Can I search for alternatives to a specific medicine?",
    answer: "Yes, Knowmeds offers alternative medicine suggestions based on the selected drug."
  },
  {
    question: "Does Knowmeds provide dosage information?",
    answer: "Currently, Knowmeds focuses on recommending medicines but does not provide detailed dosage instructions. Please consult a doctor for dosage guidance."
  },
  {
    question: "Is my data safe with Knowmeds?",
    answer: "Yes, we prioritize your privacy. No personal information is stored without your consent."
  },
  {
    question: "Can I use Knowmeds on mobile devices?",
    answer: "Absolutely! Knowmeds is mobile-friendly and works on smartphones, tablets, and desktops."
  },
  {
    question: "Will Knowmeds add more features in the future?",
    answer: "Yes, we are continuously working on adding more features like doctor consultations, medicine reminders, and health tips."
  },
  {
    question: "What should I do if I can't find my medicine?",
    answer: "Try searching with alternate spellings or generic names. If not found, consult your healthcare provider."
  },
  {
    question: "How often is the medicine database updated?",
    answer: "Our team updates the database regularly to ensure you have access to the latest medicines and information."
  },
  {
    question: "Can I consult a doctor directly through Knowmeds?",
    answer: "We are working towards integrating real-time doctor consultations. Stay tuned for updates!"
  },
  {
    question: "Is Knowmeds available globally?",
    answer: "Currently, Knowmeds is optimized for use in India, but we plan to expand globally in future versions."
  }
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
    <Navbar/>
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQ;

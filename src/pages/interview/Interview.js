import React, { useState } from "react";
import '../interview/Interview.css';

const Interview = () => {
  const [selectedJob, setSelectedJob] = useState("Custom Job Description");
  const [customDescription, setCustomDescription] = useState("");
  const [generatedDescription, setGeneratedDescription] = useState("Enter your custom description...");

  const jobDescriptions = {
    "Custom Job Description": "",
    "Business Analyst": "A business analyst is responsible for analyzing business processes and identifying opportunities for improvement.",
    "Product Manager": "A product manager is responsible for managing the development and launch of a product.",
    "Software Engineer": "A software engineer designs, develops, and maintains software applications.",
    "Marketing Specialist": "A marketing specialist creates and implements marketing campaigns to promote products or services.",
    "Customer Service Representative": "A customer service representative assists customers with inquiries, complaints, and issues.",
    "Sales Representative": "A sales representative sells products or services to customers.",
    "Human Resources Specialist": "A human resources specialist manages various HR functions, including recruitment, training, and employee relations.",
    "Data Analyst": "A data analyst analyzes data to provide insights and support decision-making.",
    "UX/UI Designer": "A UX/UI designer designs user interfaces and experiences for digital products.",
    "QA Engineer": "A QA engineer tests software applications to ensure they meet quality standards.",
  };

  const handleJobSelection = (job) => {
    setSelectedJob(job);
    if (job === "Custom Job Description") {
      setCustomDescription("");
      setGeneratedDescription("Enter your custom description...");
    } else {
      setCustomDescription(jobDescriptions[job]);
      setGeneratedDescription(jobDescriptions[job]);
    }
  };

  const handleDescriptionChange = (event) => {
    if (selectedJob === "Custom Job Description") {
      setCustomDescription(event.target.value);
    } else {
      setGeneratedDescription(event.target.value);
    }
  };

  return (
    <div className="interview-container">
      
        <h1>
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>Q</span>
          <span>U</span>
          <span>E</span>
          <span>S</span>
          <span>T</span>
        </h1>
       

      <h2 class="glowing-text">Select Job discription</h2>
      <div className="options-container">
        {Object.keys(jobDescriptions).map((job, index) => (
          <div key={index} className={`job-option ${job === selectedJob ? 'selected' : ''}`} onClick={() => handleJobSelection(job)}>
            {job}
          </div>
        ))}
      </div>

      <div className="description-box">
        <h2>{selectedJob}</h2>
        <textarea 
          value={selectedJob === "Custom Job Description" ? customDescription : generatedDescription}
          onChange={handleDescriptionChange}
          placeholder="Enter your custom description..." 
          rows="4" 
          cols="50" 
        />
      </div>

      <button className="generate-button" disabled={!selectedJob}>
        Generate Questions
      </button>

      <p className="footer" data-text="[Make Yourself Interview Ready]">Make Yourself Interview Ready</p>

    </div>
  );
};

export default Interview;

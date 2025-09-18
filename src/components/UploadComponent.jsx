import React, { useState } from "react";
import "../styles/UploadComponent.css";
import PdfIcon from "../assets/svg/pdf_icon.svg";
import UploadIcon from "../assets/svg/upload_icon.svg";

const UploadComponent = ({ defaultFileName = "Medical Certificate.pdf" }) => {
  const [uploadedFile, setUploadedFile] = useState({
    name: defaultFileName,
    details: "11 Sep, 2023 | 12:24pm | 13MB"
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        details: new Date().toLocaleDateString('en-GB', { 
          day: 'numeric', 
          month: 'short', 
          year: 'numeric' 
        }) + " | " + new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        }) + " | " + (file.size / (1024 * 1024)).toFixed(1) + "MB"
      });
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-area">
        <div className="upload-content">
          <img src="/src/assets/svg/pdf_icon.svg" alt="PDF" className="pdf-icon" />
          
          <div className="file-info">
            <div className="file-name">{uploadedFile.name}</div>
            <div className="file-details">{uploadedFile.details}</div>
          </div>
          
          <img src="/src/assets/svg/upload_icon.svg" alt="Upload" className="upload-icon" />
        </div>
        
        <input 
          type="file" 
          accept=".pdf,.doc,.docx" 
          onChange={handleFileUpload}
          className="file-input"
          id="file-upload"
        />
      </div>
    </div>
  );
};

export default UploadComponent;

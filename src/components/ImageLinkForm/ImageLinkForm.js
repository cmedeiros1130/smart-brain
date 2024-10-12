import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="image-link-form">
      <div className="image-link-form-content">
        <p className="face-detect-p">
          This Magic Brain will detect faces in your pictures. Give it a try
        </p>
        <div className="input-container">
          <input
            className="image-detect-input"
            type="text"
            placeholder="Enter image URL"
            onChange={onInputChange}
          />
          <button className="image-link-btn" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

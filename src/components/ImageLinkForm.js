import "./ImageLinkForm.css";

function ImageLinkForm() {
  return (
    <div className="image-link-form">
      <div className="image-link-form-content">
        <p className="face-detect-p">
          This Magic Brain will detect faces in your pictures. Give it a try.
        </p>
        <div className="form image-link-btn-input">
          <input className="image-detect-input" type="text" />
          <button className="image-link-btn">Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;

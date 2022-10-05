import React from "react";
import './DragDrop.css'
import UploadIcon from './Icon (Stroke).png';

function handleFile(files) {
  const formData = new FormData();
  formData.append('file', files[0]);
  fetch(
    'http://localhost:8000/upload-img/',
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


// drag drop file component
function DragDropFile() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  return (
    <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
      <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
        <div className="row upload-logo">
          <img className="upload-img" src={UploadIcon} alt='Upload Icon'></img>
        </div>
        <div className="row upload-text">
          <h2>Drag and drop or browse your file</h2>
        </div>
      </label>
      {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
    </form>
  );
};

export default DragDropFile;
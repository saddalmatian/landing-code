import { useRef, useState } from "react";
import "./DragDrop.css";
import UploadIcon from "./Icon (Stroke).png";
import BottleOpenerTest from "./standard_images/bottle_opener.jpg";

// drag drop file component
function DragDropFile() {
  const [Img, setImg] = useState(false);
  const [Labels, setLabels] = useState(false);
  const [Filename, setFilename] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
      setIsLoading(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setIsLoading(true);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    setIsLoading(true);
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  function handleFile(files) {
    const formData = new FormData();
    formData.append("file", files[0]);
    setFilename(files[0].name);
    fetch("http://13.211.236.249:8000/upload-img/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setIsLoading(false);
        setImg(result.s3link);
        setLabels(result.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return !Img ? (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <div className="row upload-logo">
          <img className="upload-img" src={UploadIcon} alt="Upload Icon"></img>
        </div>
        <div className="row upload-text">
          <h2>{isLoading ? "Loading" : "Drag and drop or browse your file"}</h2>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  ) : (
    <>
      <div className="result-img-div">
        <img src={Img} alt="resultImg" className="result-img" />
        <p>
          <b>Uploaded</b> <u>{Filename}</u>
        </p>
      </div>
      <div className="result-text-div">
        <h1
          style={{
            display: "inline-block",
            width: "20%",
            color: "white",
          }}
        >
          Result
        </h1>
        <div className="white-border"></div>
        <div className="result-box">
          <div className="result-details">
            <div className="left-image">
              <img
                src={BottleOpenerTest}
                alt="bottleOpener"
                className="img-result-left"
              ></img>
            </div>
            <div className="right-text">
              <h4 style={{ marginTop: "10px" }}>{Labels}</h4>
              <hr
                style={{
                  marginTop: "0px",
                  marginRight: "10px",
                }}
              ></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DragDropFile;

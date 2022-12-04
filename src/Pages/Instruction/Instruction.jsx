import "./instruction.css";
import iconStroke from "./Icon (Stroke).png";
import image1 from "./image1.png";
import Navbar from "../../Components/Navbar/Navbar";
import image2 from "./image2.png";
import image3 from "./272848f9a97b6a13e6b755db35e357da.png";
function Instruction(props) {
  return (
    <div>
      <Navbar />
      <div className="wrapper-instruction">
        {/* <h1>Get Start</h1> */}

        <div className="instruction-step">
          <div className="circle-item">
            <div className="number-circle-item">1</div>
          </div>
          <div className="underground-line"></div>
          <div className="instruction-description-right">
            <div className="instruction-text px-3">
              At the homepage, upload your images by touch, your photo folder
              will look up
              <br /> If you want to only get the object names, you can tick the
              check box: ”Return object names only”
            </div>
            <div className="instruction-image">
              <img className="image-item" src={image2} alt="" />
            </div>
          </div>
        </div>
        <div className="instruction-step">
          <div className="d-flex justify-content-end">
            <div className="circle-item-left">
              <div className="number-circle-item">2</div>
            </div>
          </div>
          <div className="underground-line"></div>
          <div className="instruction-description-left">
            <div className="instruction-image-left">
              <img className="image-item" src={image1} alt="" />
            </div>
            <div className="instruction-text-left px-3">
              Select photos in your folder. By selecting the photo and pressing
              open
              <br /> Our system only accepts PNG, JPG and JPEG files.
            </div>
          </div>
        </div>
        <div className="instruction-step">
          <div className="circle-item">
            <div className="number-circle-item">3</div>
          </div>
          <div className="underground-line"></div>
          <div className="instruction-description-right">
            <div className="instruction-text px-3">
              You will get the result like this after waiting for couple of
              seconds
              <br />
              It will return to you:
              <li>The name</li>
              <li>The detail</li>
              <li>The categories concerned to it</li>
              <br />
              And we have a Report button at below, you can report to our admin
              if the result returned was not correct.
            </div>
            <div className="instruction-image">
              <img className="image-item" src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instruction;

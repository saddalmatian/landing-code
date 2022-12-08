import { useRef, useState } from "react";
import "./DragDrop.css";
import UploadIcon from "./Icon (Stroke).png";
import { publicRequest } from "../../requestmethod";
import { getProducts } from "../../redux/apicall";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// drag drop file component
function DragDropFile() {
  let navigate = useNavigate();
  const ChangeRouteDetail = (_id) => {
    let path = `/${_id}`;
    navigate(path);
  };
  const dispatch = useDispatch();
  const catergory = useSelector((product) => product.products.products);
  const [Img, setImg] = useState(false);
  const [Labels, setLabels] = useState([]);
  const [result, setRusult] = useState([]);
  const [Item, setItem] = useState([]);
  const [Dis, setDis] = useState(false);

  const [Filename, setFilename] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);
  /// post report

  const [ReportForm, setReportForm] = useState({});
  const onChangeReportForm = (e, id) => {
    const value = e.target.value;
    if (value.length > 0) {
      const ButtonReport = document.getElementById(`button-report-${id}`);
      ButtonReport.removeAttribute("disabled", true);
    } else {
      const ButtonReport = document.getElementById(`button-report-${id}`);
      ButtonReport.setAttribute("disabled", true);
    }
    const TextReport = document.getElementById(`form-text-${id}`).value;
    return setReportForm({
      ...ReportForm,
      [e.target.name]: TextReport,
      ori_image_s3_key: Filename,
      s3key_detected_img: result.s3key_detected_img,
      item_reported:
        Item[id].ItemName === "Bread Knife"
          ? "bread_knife"
          : "false" && Item[id].ItemName === "Masher"
            ? "masher"
            : "false" && Item[id].ItemName === "Bottle Opener"
              ? "bottle_opener"
              : "false" && Item[id].ItemName === "Tongs"
                ? "tongs"
                : "false" && Item[id].ItemName === "Spatula"
                  ? "spatula"
                  : "false",
    });
  };

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
    fetch(
      "https://apidev.phantomal.site/upload-img/",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        getProducts(dispatch);
        console.log(result);
        console.log("Success:", result);
        setIsLoading(false);
        setImg(result.s3link);
        setLabels(result.results);
        setItem(result.results);
        setRusult(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const HandleReport = (id) => {
    const FormReport = document.getElementById(`form-report-${id}`);
    FormReport.classList.toggle("open");
    const ButtonReport = document.getElementById(`button-report-${id}`);
    ButtonReport.setAttribute("disabled", true);
  };

  const HandleSubmitFormReport = async (id) => {
    const Report = async () => {
      const report = publicRequest
        .post(
          `/report/?ori_image_s3_key=${ReportForm.ori_image_s3_key}&s3key_detected_img=${ReportForm.s3key_detected_img}&message=${ReportForm.message}&item_reported=${ReportForm.item_reported}`
        )
        .then((res) => {
          if (res.statusText === "OK") {
            const alert = document.getElementById(`alert-message-success${id}`);
            alert.style.display = "block";
            setTimeout(() => {
              alert.style.display = "none";
            }, 4000);
            const btnReport = document.getElementById("btn-report");
            btnReport.style.display = "none";
            const inputReport = document.getElementById(`form-report-${id}`);
            inputReport.style.display = "none";
          }
          const TextReport = document.getElementById(`form-text-${id}`);
          TextReport.value = "";
        })
        .catch((err) => {
          if (err.response.status === 422) {
            const alert = document.getElementById(`alert-message-failed${id}`);
            alert.style.display = "block";
            setTimeout(() => {
              alert.style.display = "none";
            }, 4000);
          }
        });
    };
    Report();
  };

  const ShowInformationRelated = catergory
    .filter((e) => e.ID !== Item[0]?.ID)
    .map((e, i) => {
      return (
        <div
          key={i}
          className="item-image"
          onClick={() => ChangeRouteDetail(e.Alias)}
        >
          <img className="image-related" src={e.MainImages} alt="" />
        </div>
      );
    });

  const HandleChangeResultIMG = () => {
    const id = catergory.filter((e) => e.ID === Item[0].ID);
    let path = `/${id[0]?.Alias}`;
    navigate(path);
  };

  const ShowResult = Item.map((e, id) => {
    return (
      <div key={id}>
        <div
          className="alert-message-success"
          id={"alert-message-success" + `${id}`}
        >
          <strong>
            Successfully report to the Admin, we will re-train the model for
            more accuracy action.
          </strong>
        </div>
        <div
          className="alert-message-failed"
          id={"alert-message-failed" + `${id}`}
        >
          <strong> Your report can't be executed !</strong>
        </div>
        <div className="result-box">
          <div className="result-details">
            <div className="left-image" onClick={HandleChangeResultIMG}>
              <img
                src={e.MainImage}
                alt="bottleOpener"
                className="img-result-left"
              ></img>
            </div>
            <div className="right-text">
              <div className="d-flex justify-content-between">
                <h4 style={{ marginTop: "10px", marginLeft: "15px" }}>
                  {e.ItemName}
                </h4>
                <button
                  onClick={() => HandleReport(id)}
                  id="btn-report"
                  className="btn-report"
                >
                  Report
                </button>
              </div>
              <hr
                style={{
                  marginTop: "0px",
                  marginRight: "10px",
                }}
              ></hr>
              <div className="description-text-right">
                <h4>Description</h4>
                <div>{e.Description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-report" id={"form-report-" + `${id}`}>
          <div className="box-report">
            <h1
              style={{
                display: "inline-block",
                width: "20%",
                color: "white",
              }}
            >
              Report
            </h1>
            <div className="white-border-report"></div>

            <textarea
              onChange={(e) => onChangeReportForm(e, id)}
              placeholder="your report is here"
              className="box-input-report"
              type="text"
              id={"form-text-" + `${id}`}
              name="message"
            />
          </div>
          <button
            id={`button-report-` + `${id}`}
            type="submit"
            className="btn-submit-report"
            onClick={() => HandleSubmitFormReport(id)}
          >
            submit
          </button>
        </div>
      </div>
    );
  });

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
        <div className="result-img-content">
          <div className="img-wrap">
            <img src={Img} alt="resultImg" className="result-img" />
          </div>
        </div>
        <p>
          <b>Uploaded:</b> <u>{Filename}</u>
        </p>
      </div>
      <div className="result-text-div">
        <h1
          className="mb-0"
          style={{
            display: "inline-block",
            width: "20%",
            color: "white",
          }}
        >
          Result
        </h1>
        <div className="white-border"></div>
        {ShowResult}
        <div className="my-4">
          <h1
            style={{
              display: "inline-block",
              padding: "20px 0",
              color: "white",
            }}
          >
            Information Related
          </h1>
          <div className="information-related">{ShowInformationRelated}</div>
        </div>
      </div>
    </>
  );
}

export default DragDropFile;

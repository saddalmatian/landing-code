import NavbarAdmin from "../../Components/Navbaradmin/Navbaradmin";
import "./DetailReport.css";
import { useEffect } from "react";
import { GetDetailReport } from "../../redux/apicall";
import { useDispatch, useSelector } from "react-redux";
function DetailReport() {
  const dispatch = useDispatch();
  const report = useSelector(
    (detailReport) => detailReport.detailReport.report
  );
  console.log(report);
  const sk = window.location.pathname.slice(6);

  useEffect(() => {
    const Getdeital = async () => {
      try {
        GetDetailReport(dispatch, sk);
      } catch (error) {
        console.log(error);
      }
    };
    Getdeital();
  }, [sk, dispatch]);

  const HandleDownloadIMG = (url) => {
    window.open(url, "_blank").focus();
  };

  const ShowReport = report.ItemsReporteds?.map((e, i) => {
    console.log(e);
    return (
      <div className="main-body-result py-3" key={i}>
        <div className="content-report">
          <div className="list-item-detail">
            <div className="item-detail">
              <div className="image-item-reuslt d-flex">
                <img src={e.SubImages[0]} alt="" />
                <div className="px-4 des-report">
                  <div>{e.ItemName}</div>
                  <div className="under-line-report"></div>
                  <div>
                    {e.Description}
                    <li>a jar of coffee/pickled onions</li>
                  </div>
                </div>
              </div>
              <div className="description-result">
                <div>{report?.CreatedAt.slice(0, 16)}</div>
                <div className="underline-result"></div>
                <p>{report?.Message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <NavbarAdmin />
      <div className="wrapper-detail-report">
        <div className="d-flex justify-content-center py-5 content-admin">
          <div className="underline-admin"></div>
          <h3>
            ADMIN WORKSPACE
            <p>Detect objects in image</p>
          </h3>
        </div>
        <div className="main-detailreport">
          <div className="img-results justify-content-around">
            <div className="img-customer">
              <p>Image uploaded</p>
              <img className="img-detail-report" src={report?.OriImg} alt="" />
              <div className="download-image">
                <button
                  className="btn-download-image"
                  onClick={() => HandleDownloadIMG(report?.OriImg)}
                >
                  Download Image
                </button>
              </div>
            </div>
            <div className="img-result-system">
              <p>Detected objects</p>
              <img
                className="img-detail-report"
                src={report?.DetectedImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-body-result">{ShowReport}</div>
    </div>
  );
}

export default DetailReport;

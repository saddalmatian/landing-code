import NavbarAdmin from "../../Components/Navbaradmin/Navbaradmin";
import "./ListReport.css";
function ListReport() {
  return (
    <div>
      <NavbarAdmin />
      <div className="d-flex justify-content-center py-5 content-admin">
        <div className="underline-admin"></div>
        <h3>
          ADMIN WORKSPACE
          <p>Detect objects in image</p>
        </h3>
      </div>
      <div className="main-listreport">
        <div className="title-listreport">
          <h2>REPORTS LIST</h2>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
}

export default ListReport;

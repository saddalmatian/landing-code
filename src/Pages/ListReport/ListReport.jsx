import NavbarAdmin from "../../Components/Navbaradmin/Navbaradmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./ListReport.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetReport } from "../../redux/apicall";
import { useSelector } from "react-redux";
function ListReport() {
  const dispatch = useDispatch();
  useEffect(() => {
    GetReport(dispatch);
  }, []);
  const report = useSelector((item) => item.report.report);
  let navigate = useNavigate();
  const ChangeRouteDetailReport = (SK) => {
    let path = `/item/${SK}`;
    navigate(path);
  };

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <div
              className="main-results py-4"
              key={i}
              onClick={() => ChangeRouteDetailReport(item.SK)}
            >
              <div className="item">
                <div className="content">
                  <div>
                    <img className="image-item" src={item.OriImageSrc} alt="" />
                  </div>
                  <div className="text-item px-3">
                    <div className="calendar-item">
                      <div className="d-flex">
                        <div className="day-item d-flex">
                          <span className="icon-day">
                            <FontAwesomeIcon icon={faCalendarDay} />
                          </span>
                          <p>{item.CreatedAt?.slice(0, 10)}</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="time-item d-flex">
                          <span className="icon-time">
                            <FontAwesomeIcon icon={faClock} />
                          </span>
                          <p>{item.CreatedAt?.slice(11, 16)}</p>
                        </div>
                      </div>
                      <div className="underline"></div>
                    </div>
                    <div>
                      <div>
                        <p>Object delected:</p>
                      </div>
                      {item.ItemsReported.map((e, i) => (
                        <div key={i}>
                          <li>{e}</li>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems() {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 4;
    const currentItems = report.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(report.length / 4);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * 4) % report.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          className="paginate-list"
          breakLabel="..."
          nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <div className="wrapper-listreport">
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
      <div>{PaginatedItems()}</div>
      <div className="footer"></div>
    </div>
  );
}

export default ListReport;

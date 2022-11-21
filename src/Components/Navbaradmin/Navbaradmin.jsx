import logo from "./Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

import "./Navbaradmin.css";
function NavbarAdmin() {
  const location = window.location.pathname;
  if (location === "/admin") {
  }
  const ShowNabar = () => {
    if (location === "/admin") {
      return (
        <div>
          <div className="navbar-admin-page">
            <img className="image-logo-login" src={logo} alt="" />
            <div className="wrapper-admin-workspace">
              <h3>ADMIN WORKSPACE</h3>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="navbar-admin-page">
            <div>
              <img className="image-logo-loginsuccess" src={logo} alt="" />
            </div>
            <div className="wrapper-admin-workspace">
              <h3>ADMIN WORKSPACE</h3>
            </div>
            <div className="info-user">
              <span className="icon-user">
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              <div className="username-admin">user</div>
              <div className="linevertical"></div>
              <span className="icon-logout">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </span>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div>{ShowNabar()}</div>;
}

export default NavbarAdmin;

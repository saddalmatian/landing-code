import { React, Component } from "react";
import "./Navbar.css";
import Logo from "./Logo.png";
import { Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

class Navbar extends Component {
  render() {
    return (
      <div className="wrapper-navbar">
        <Container>
          <div className="navbar d-flex">
            <div className="logo-wrap">
              <Link to="/" className="logo-link">
                <img className="logo-img" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="navbar-list-wrap d-flex align-items-center">
              <div className="navbar-link">
                <NavLink to="/" end>
                  Home
                </NavLink>
              </div>
              <div className="navbar-link">
                <NavLink to="/instruction" end>
                  Instruction
                </NavLink>
              </div>
              <div className="navbar-link">
                <NavLink to="/category" end>
                  Category
                </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Navbar;

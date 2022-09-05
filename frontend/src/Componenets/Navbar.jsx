import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import { UserContext } from "../App";
import Logo from "../logo/logo.png";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderManu = () => {
    if (state) {
      return (
        <>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0 nav_change_side">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/logout"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </>
      );
    } else {
      return (
        <>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0 nav_change_side">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink
            exact
            activeClassName="active"
            className="navbar-brand brand_name"
            to="/"
          >
            <img src={Logo} alt="Logo" />
            RaZa
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <RenderManu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

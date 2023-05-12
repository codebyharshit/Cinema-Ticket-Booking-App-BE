import React from "react";
import { Link } from "react-router-dom";

// Header code for showing Nav bar on every page
const Header = () => {

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-4 link-dark fw-bold menu-link">
              Home Page
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="nav-link px-4 link-dark fw-bold menu-link"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/addMovie"
              className="nav-link px-4 link-dark fw-bold menu-link"
            >
              Add Movie
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

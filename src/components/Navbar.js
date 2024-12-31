import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ background }) => {
  return (
    <nav className="navbar" style={{ backgroundImage: background }}>
      <div className="navbar-content">
        <h1>Whether?</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

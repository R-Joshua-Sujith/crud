import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-items">
        Home
      </Link>
      <div className="subNavbar">
        <Link to="/students" className="nav-items menu-full">
          View Students
        </Link>
        <Link to="/teachers" className="nav-items menu-full">
          View Teachers
        </Link>
        <Link to="/add-user" className="nav-items menu-full">
          Create Users
        </Link>
        <Link to="/menu" className="nav-items menu">
          Menu
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

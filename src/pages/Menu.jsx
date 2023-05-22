import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";
const Menu = () => {
  return (
    <div className="Menu">
      <Link className="menu-item" to="/students">
        View Students
      </Link>
      <Link className="menu-item" to="/teachers">
        View Teachers
      </Link>
      <Link className="menu-item" to="/add-user">
        Create User
      </Link>
    </div>
  );
};

export default Menu;

import React from "react";
import { Link } from "react-router-dom";
import "./css/styleNavigate.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Main page</Link>
      <Link
        to={{
          pathname: "/about",
          state: {
            fromLocation: true,
          },
        }}
      >
        About
      </Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navigation;
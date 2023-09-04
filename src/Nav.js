import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ user }) {
  return (
    <div className="nav">
      <Link to="/" className="nav_logo">
        FLIXXIT
      </Link>
      <div className="nav_items">
        {user ? (
          <Link to="/" className="nav_avatar">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Netflix Avatar"
            />
          </Link>
        ) : (
          <Link to="/login" className="nav_loginButton">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;

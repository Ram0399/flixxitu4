import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./LoginScreen.css";

function LoginScreen() {
  const location = useLocation(); // Get current location

  const isSignUpPage = location.pathname === "/signup"; // Check if on sign-up page

  return (
    <div className={`loginScreen ${isSignUpPage ? "signupBackground" : ""}`}>
      <div className="loginScreen_background">
        <Link to="/login" className="loginScreen_button">
          Sign In
        </Link>
        <div className="loginScreen_gradient" />
      </div>
    </div>
  );
}

export default LoginScreen;

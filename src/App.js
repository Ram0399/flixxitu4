import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Nav from "./Nav";
import "./App.css";

function App() {
  const user = null; // Set to the actual user object if authenticated

  return (
    <div className="app">
      <Router>
        <Nav user={user} />
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Nav from "./Nav";
import "./App.css";

function App() {
  // Define the user variable as null (not authenticated)
  const user = null;

  return (
    <div className="app">
      <Router>
        <Nav user={user} />
        <Routes>
          {/* Use a route guard to protect the HomeScreen route */}
          <Route
            path="/"
            element={user ? <HomeScreen user={user} /> : <SignInMessage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

// A component to display a message or UI indicating the user should sign in
function SignInMessage() {
  return (
    <div>
      <p>Please sign in to access the content.</p>
      {/* You can add a "Sign In" button here when you have the login screen */}
    </div>
  );
}

export default App;

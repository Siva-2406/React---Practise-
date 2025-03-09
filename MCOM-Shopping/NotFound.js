import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default NotFound;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from "react-router-dom";


const isAuthenticated = () => localStorage.getItem("token");


const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/not-found" replace />;
};


const Navbar = () => (
  <nav style={{ padding: "10px", background: "#ddd" }}>
    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/settings">Settings</Link>
  </nav>
);


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      localStorage.setItem("token", "dummy-token");
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

const Home = ({ onLogin }) => {
  return (
    <div>
      <h2>Home Page</h2>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

const About = () => <h2>About Page (Protected)</h2>;
const Dashboard = () => <h2>Dashboard Page (Protected)</h2>;
const Settings = () => <h2>Settings Page (Protected)</h2>;
const NotFound = () => (
  <div style={{ textAlign: "center" }}>
    <h2>404 - Page Not Found</h2>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/006/549/647/small/404-landing-page-free-vector.jpg" alt="404 Not Found" style={{ maxWidth: "100%" }} />
  </div>
);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onLogin={() => setLoggedIn(true)} />} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
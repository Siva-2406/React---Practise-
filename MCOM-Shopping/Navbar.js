import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop All</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <img src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149688666.jpg?t=st=1741541290~exp=1741544890~hmac=b59d7d16358278e1977677a462941bbb670bc767abd50f92e90b4e3c316b875f&w=1060" alt="MCOM Logo" className="logo" />
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li>
            <input type="text" placeholder="Search Product..." className="search-bar" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

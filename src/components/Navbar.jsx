import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Akash</h1>
      <ul>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;

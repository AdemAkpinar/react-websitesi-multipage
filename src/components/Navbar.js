import React from "react";
import Logo from "../assets/hamburgerlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <img src={Logo} />

      <div
        class="collapse navbar-collapse d-flex justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <Link class="nav-link" to="/">
            Home
          </Link>
        </ul>

        <ul class="navbar-nav mr-auto">
          <Link class="nav-link" to="/menu">
            Menu
          </Link>
        </ul>

        <ul class="navbar-nav mr-auto">
          <Link class="nav-link" to="/about">
            About
          </Link>{" "}
        </ul>

        <ul class="navbar-nav mr-auto">
          <Link class="nav-link" to="/contact">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

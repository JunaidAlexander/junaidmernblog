import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid  ">
        <a class="navbar-brand" href="#">
          <Link to="/">
            <h2 className="text-3xl font-bold text-orange-600">JourneyVerse</h2>
          </Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center pt-3 pb-3 "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2  ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <Link to="/">
                  <li>HOME</li>
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/blog">BLOG</Link>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link " href="#">
                <Link to="/createblog">
                  <li>CREATE BLOG</li>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

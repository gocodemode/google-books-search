import React, { Component } from "react";
import { Link } from "react-router-dom"; 

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning text-dark">
          <Link to="/search" class="navbar-brand">
            Google Books
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link to="/search" class="nav-link active">
                Search <span class="sr-only">(current)</span>
                </Link>
                <Link to="/saved" class="nav-link active">
                Saved
                </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

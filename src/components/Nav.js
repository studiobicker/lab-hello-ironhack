import React, { Component } from "react";
import logo from "../images/ironhack-logo.svg";

class Nav extends Component {
  render() {
    return (
      <nav className="App-nav">
        <img src={logo} className="App-logo" alt="logo" />
        <svg width="24" height="13" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="square"
          >
            <path d="M1.5 1.5h21M1.5 11.25h13" />
          </g>
        </svg>
      </nav>
    );
  }
}

export default Nav;

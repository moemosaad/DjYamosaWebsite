import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleResponsiveNav = this.handleResponsiveNav.bind(this);
  }

  handleResponsiveNav() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  render() {
    return (
      <div className="navbar" id="topNav">
        <div className="navbar-container">
          <ul>
            <li className="nav-buttons" id="logo">
              <Link to="/" id="logo">
                Dj Yamosa
              </Link>
            </li>
            <li className="nav-buttons links">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-buttons links">
              <Link to="/events">Events</Link>
            </li>
            <li className="nav-buttons links">
              <Link to="/media">Media</Link>
            </li>
            <li className="nav-buttons links">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-buttons links">
              <Link to="/about">About</Link>
            </li>
            <li className="bars-icon links" onClick={this.handleResponsiveNav}>
              <i className="fa fa-bars" />
            </li>
          </ul>
          {/* <a href="#logo" id="logo">
        DJ YAMOSA
      </a>
      <a className="nav-buttons" href="/">
        HOME
      </a>
      <a className="nav-buttons" href="/events">
        EVENTS
      </a>
      <a className="nav-buttons" href="/contact">
        CONTACT
      </a>
      <a className="nav-buttons" href="/about">
        ABOUT
      </a> */}
        </div>
      </div>
    );
  }
}

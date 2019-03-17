import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes.jsx";

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);

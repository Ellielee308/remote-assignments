import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";

import App from "./components/App";
import AppAssignment4 from "./components_assignment4/AppAssignment4";
import AppAssignment5 from "./components_assignment5/AppAssignment5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/assignment3" element={<App />} />
        <Route path="/assignment4" element={<AppAssignment4 />} />
        <Route path="/assignment5" element={<AppAssignment5 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

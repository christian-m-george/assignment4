import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-link">
        <Link to={"/"}>Home</Link>
      </div>
      <div className="navigation-link">
        <Link to={"/user"}>User</Link>
      </div>
    </div>
  );
};

export default NavigationBar;

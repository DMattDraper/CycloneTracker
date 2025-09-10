/** @module components/Header */
import React, { JSX } from "react";
import "./style.scss";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <h1 className="Title">CycloneTracker</h1>
    </div>
  );
}

export default Header;
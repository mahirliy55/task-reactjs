import React from "react";
import "./sideMenu.css";

const SideMenu = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default SideMenu;

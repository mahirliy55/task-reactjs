import React from "react";
import "./sideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;

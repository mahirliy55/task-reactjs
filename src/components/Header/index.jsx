import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./header.css";

const Header = (props) => (
  <header className="header">
    <nav className="header_navigator">
      <div />
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
      <div className="header_logo">
        <a href="/">Logo</a>
      </div>
      <div className="spacer" />
      <div className="header_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;

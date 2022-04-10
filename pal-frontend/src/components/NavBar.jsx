import React from "react";

import "./css/NavBar.css";

import pal_logo from "../img/pal-logo.svg";
import user_image from "../img/user-image.svg";

function NavBar() {
  return (
    <React.Fragment>
      <div className="image-box">
        <img src={pal_logo} className="pal-logo" />
      </div>

      <div className="navigation-box">
        <button className="navigation-button-search">Поиск</button>
        <button className="navigation-button-people">Люди</button>
        <img src={user_image} className="navigation-user-image" />
      </div>
    </React.Fragment>
  );
}

export default NavBar;
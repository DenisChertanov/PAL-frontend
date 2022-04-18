import React from "react";

import "./css/NavBar.css";

import pal_logo from "../img/pal-logo.svg";
import user_image from "../img/user-image.svg";
import { Link } from "react-router-dom";

function NavBar({ userId }) {
  return (
    <React.Fragment>
      <div className="image-box">
        <Link to={"/anime"}>
          <img src={pal_logo} className="pal-logo" />
        </Link>
      </div>

      <div className="navigation-box">
        <button className="navigation-button-search">Поиск</button>
        <button className="navigation-button-people">Люди</button>

        <Link to={`/user/${userId}`}>
          <img src={user_image} className="navigation-user-image" />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default NavBar;

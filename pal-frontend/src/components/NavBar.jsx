import React from "react";

import "./css/NavBar.css";

import pal_logo from "../img/pal-logo.svg";
import user_image from "../img/user-image.svg";
import { Link } from "react-router-dom";

function NavBar({ userId, userInfo }) {
  return (
    <React.Fragment>
      <div className="image-box">
        <Link to={"/anime"}>
          <img src={pal_logo} className="pal-logo" />
        </Link>
      </div>

      <div className="navigation-box">
        <Link to={"/anime"}>
          <button className="navigation-button-search">Поиск</button>
        </Link>

        <Link to={"/user-search"}>
          <button className="navigation-button-people">Люди</button>
        </Link>

        <Link to={`/user/${userId}`}>
          <img
            src={userInfo != undefined ? userInfo.imageUrl : null}
            className="navigation-user-image"
          />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default NavBar;

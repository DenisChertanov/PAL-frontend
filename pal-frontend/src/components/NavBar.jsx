import React from "react";

import "./css/NavBar.css";

import pal_logo from "../img/pal-logo.svg";
import { Link } from "react-router-dom";
import EmptyUserLogo from "../img/empty-user-logo.png";

function NavBar({ userId, username, userInfo }) {
  return (
    <React.Fragment>
      <div className="image-box">
        <Link to={"/main"}>
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

        <Link to={`/user/${userInfo != undefined ? userInfo.userName : null}`}>
          <img
            src={
              userInfo != undefined
                ? userInfo.imageUrl
                  ? userInfo.imageUrl
                  : EmptyUserLogo
                : null
            }
            className="navigation-user-image"
            onError={(e) => {
              e.target.src = EmptyUserLogo;
            }}
          />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default NavBar;

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
        <Link to={"/anime"}>
          <button className="navigation-button-search">Поиск</button>
        </Link>

        <Link to={"/user-search"}>
          <button className="navigation-button-people">Люди</button>
        </Link>

        <Link to={`/user/${userId}`}>
          {/* <img src={user_image} className="navigation-user-image" /> */}
          <img
            src="http://localhost:9000/images-bucket/images/37e78463-9555-427d-b5a6-9a40856afa06/rascal-does-not-dream-of-a-dreaming-girl.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio_access_key%2F20220510%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220510T201732Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4ed0d6a01d2d4ab911291595d64acb71f3355bf1bc9692ba7fe82321880b18a5"
            className="navigation-user-image"
          />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default NavBar;

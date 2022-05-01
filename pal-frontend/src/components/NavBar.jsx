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
            src="http://localhost:9000/images-bucket/images/65249707-be33-47bc-b16f-978da8c53205/rascal-does-not-dream-of-a-dreaming-girl.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio_access_key%2F20220429%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220429T093921Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3de643c38cb1e9c0224d67685f144f663d7d47ab1f2160bb911e2a5e7fe98519"
            className="navigation-user-image"
          />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default NavBar;

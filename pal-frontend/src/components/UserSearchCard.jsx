import React from "react";
import { Link } from "react-router-dom";

import CntIcon from "../img/cnt-icon.png";
import EmptyUserLogo from "../img/empty-user-logo.png";

import "./css/UserSearchCard.css";

function UserSearchCard({ user }) {
  return (
    <Link to={`/user/${user.userId}`}>
      <div className="user-search-card">
        <img
          src={user.imageUrl ? user.imageUrl : EmptyUserLogo}
          className="user-search-card-logo"
          onError={(e) => {
            e.target.src = EmptyUserLogo;
          }}
        />
        <div className="user-search-card-info">
          <h1 className="user-search-card-name">
            {user.firstName.concat(" ").concat(user.lastName)}
          </h1>
          <h1 className="user-search-card-username">{user.userName}</h1>

          <div className="user-search-card-icons-list">
            <div
              className="user-search-card-icon"
              style={{ gridRow: "1", gridColumn: "1" }}
            >
              <i
                className="fa-regular fa-clock"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "25px",
                  color: "#d72323",
                }}
              ></i>
              <h1 className="user-search-card-icon-text">
                {user.animeSpentHours.toFixed(1).toString().concat(" ч")}
              </h1>
            </div>

            <div
              className="user-search-card-icon"
              style={{ gridRow: "1", gridColumn: "2" }}
            >
              <img src={CntIcon} className="user-search-card-icon-image" />
              <h1 className="user-search-card-icon-text">
                {user.animeCount.toString().concat(" шт")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UserSearchCard;

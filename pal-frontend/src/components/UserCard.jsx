import React from "react";

import CntIcon from "../img/cnt-icon.png";
import DrStone from "../img/dr-stone.jpeg";

import "./css/UserCard.css";

function UserCard({ num }) {
  return (
    <div className="user-card">
      <img src={DrStone} className="user-card-logo" />
      <div className="user-card-info">
        <h1 className="user-card-name">Денис Чертанов</h1>
        <h1 className="user-card-username">DChertanov</h1>

        <div className="user-card-icons-list">
          <div
            className="user-card-icon"
            style={{ gridRow: "1", gridColumn: "1" }}
          >
            <i
              className="fa-regular fa-clock"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                textClign: "center",
                width: "100%",
                fontSize: "25px",
                color: "#d72323",
              }}
            ></i>
            <h1 className="user-card-icon-text">14.6 ч</h1>
          </div>

          <div
            className="user-card-icon"
            style={{ gridRow: "1", gridColumn: "2" }}
          >
            <img src={CntIcon} className="user-card-icon-image" />
            <h1 className="user-card-icon-text">11 шт</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;

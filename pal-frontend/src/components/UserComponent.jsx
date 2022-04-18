import React, { useState } from "react";

import CntIcon from "../img/cnt-icon.png";
import LogOutIcon from "../img/logout-icon.png";
import DrStone from "../img/dr-stone.jpeg";
import RightArrowIcon from "../img/right-arrow-icon.png";

import LastWatchedAnimeBlock from "./LastWatchedAnimeBlock";

import "./css/UserComponent.css";

function UserComponent({
  authJwtToken,
  userInfo,
  userStatistic,
  lastWatchedAnimes,
}) {
  const lastWatchedList = lastWatchedAnimes.map((anime) => (
    <LastWatchedAnimeBlock key={anime.animeId} anime={anime} />
  ));

  return (
    <React.Fragment>
      <div className="user-card">
        <div className="user-photo-div">
          <img src={userInfo.imageUrl} className="user-card-logo" />
          <button className="change-photo-button">Изменить фото</button>
        </div>

        <div className="user-card-info">
          <h1 className="user-card-name">
            {userInfo.firstName.concat(" ").concat(userInfo.lastName)}
          </h1>
          <h1 className="user-card-username">{userInfo.userName}</h1>

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
                  textAlign: "center",
                  width: "100%",
                  fontSize: "50px",
                  color: "#d72323",
                }}
              ></i>
              <h1 className="user-card-icon-text">
                {userStatistic.animeSpentHours
                  .toFixed(1)
                  .toString()
                  .concat(" ч")}
              </h1>
            </div>

            <div
              className="user-card-icon"
              style={{ gridRow: "1", gridColumn: "2" }}
            >
              <img src={CntIcon} alt="" className="user-card-icon-image" />
              <h1 className="user-card-icon-text">
                {userStatistic.animeCount.toString().concat(" шт")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="logout-div">
        <img src={LogOutIcon} className="logout-icon" />
      </div>

      <div className="image-preview-div">
        <div className="image-preview-all-button">
          <h1 className="image-preview-all-button-text">
            Последние просмотренные аниме
          </h1>
        </div>

        <div className="horizontal-scroll-view">
          <div className="image-preview-grid">{lastWatchedList}</div>
        </div>
      </div>

      <div className="image-preview-div" style={{ gridRow: "4" }}>
        <div className="image-preview-all-button">
          <h1 className="image-preview-all-button-text">Плейлисты</h1>
          <img src={RightArrowIcon} className="playlists-right-arrow" />
        </div>

        <div className="horizontal-scroll-view">
          <div className="image-preview-grid">
            <button className="add-playlist-button">
              <i
                className="fa-solid fa-plus"
                style={{
                  color: "#d72323",
                  marginBottom: "auto",
                  marginTop: "auto",
                }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserComponent;

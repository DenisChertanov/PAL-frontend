import React, { useState } from "react";
import axios from "axios";

import CntIcon from "../img/cnt-icon.png";
import LogOutIcon from "../img/logout-icon.png";
import DrStone from "../img/dr-stone.jpeg";
import RightArrowIcon from "../img/right-arrow-icon.png";

import LastWatchedAnimeBlock from "./LastWatchedAnimeBlock";

import "./css/UserComponent.css";
import { Link } from "react-router-dom";
import PlaylistPreview from "./playlist/PlaylistPreview";
import Modal from "./Modal";

function UserComponent({
  userId,
  profileUserId,
  authJwtToken,
  userInfo,
  userStatistic,
  lastWatchedAnimes,
  animePlaylists,
  isModalOpen,
  modalChildren,
  ...props
}) {
  const addPlaylistButton = (
    <button
      className="add-playlist-button"
      onClick={() => createEmptyPlaylist()}
    >
      <i
        className="fa-solid fa-plus"
        style={{
          color: "#d72323",
          marginBottom: "auto",
          marginTop: "auto",
        }}
      ></i>
    </button>
  );

  const lastWatchedList = lastWatchedAnimes.map((anime) => (
    <Link key={anime.animeId} to={`/anime/${anime.animeId}`}>
      <LastWatchedAnimeBlock key={anime.animeId} anime={anime} />
    </Link>
  ));

  const playlistsItems = animePlaylists.map((playlist) => {
    // console.log(playlist);
    return (
      <PlaylistPreview
        key={playlist.animePlaylistId}
        userId={userId}
        profileUserId={profileUserId}
        animePlaylists={animePlaylists}
        playlist={playlist}
        authJwtToken={authJwtToken}
        setIsModalOpen={props.setIsModalOpen}
        modalChildren={modalChildren}
        setModalChildren={props.setModalChildren}
        updatePlaylists={props.updatePlaylists}
        setUpdateModal={props.setUpdateModal}
      />
    );
  });

  async function createEmptyPlaylist() {
    axios
      .get(`http://localhost:8081/api/public/anime-playlist/create-empty`, {
        headers: {
          Authorization: "Bearer ".concat(authJwtToken),
        },
      })
      .then((response) => {
        props.addPlaylist(response.data);
      });
  }

  async function uploadImage(file) {
    const form = new FormData();
    form.append("file", file);

    axios
      .post(`http://localhost:8081/api/public/user/upload-image`, form, {
        headers: {
          Authorization: "Bearer ".concat(authJwtToken),
          "Content-Type": "multipart/form-data;charset=utf-8",
        },
      })
      .then((response) => {
        props.setUserInfo(response.data);
      });
  }

  const hiddenFileInput = React.useRef(null);

  const handleUserImageClick = (event) => {
    if (userId !== profileUserId) {
      return;
    }

    hiddenFileInput.current.click();
  };

  const handleChangeFileInput = (event) => {
    const fileUploaded = event.target.files[0];
    uploadImage(fileUploaded);
  };

  return (
    <div className="scroll-div-user">
      <div className="user-top">
        <div className="user-card">
          <div className="user-photo-div">
            <img
              src={userInfo.imageUrl}
              className="user-card-logo"
              style={{ cursor: "pointer" }}
              onClick={handleUserImageClick}
            />
            <input
              ref={hiddenFileInput}
              onChange={handleChangeFileInput}
              type="file"
              style={{ display: "none" }}
            />
            {/* <button className="change-photo-button">Изменить фото</button> */}
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
          <div className="playlist-image-preview-grid">
            {userId === profileUserId && addPlaylistButton}
            {playlistsItems}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserComponent;

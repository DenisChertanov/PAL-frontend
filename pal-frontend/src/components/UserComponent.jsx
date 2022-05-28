import React, { useEffect, useState } from "react";
import axios from "axios";

import CntIcon from "../img/cnt-icon.png";
import LogOutIcon from "../img/logout-icon.png";
import EmptyUserLogo from "../img/empty-user-logo.png";

import LastWatchedAnimeBlock from "./LastWatchedAnimeBlock";

import "./css/UserComponent.css";
import { Link } from "react-router-dom";
import PlaylistPreview from "./playlist/PlaylistPreview";
import Modal from "./Modal";
import FavouriteGenresComponent from "./user-statistic/FavouriteGenresComponent";
import AnimeTypePieChart from "./user-statistic/AnimeTypePieChart";
import AnimeCountLineChart from "./user-statistic/AnimeCountLineChart";
import EmptyListImage from "../img/empty-list-image.png";

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

  let lastWatchedList = lastWatchedAnimes.map((anime) => (
    <Link key={anime.animeId} to={`/anime/${anime.animeId}`}>
      <LastWatchedAnimeBlock key={anime.animeId} anime={anime} />
    </Link>
  ));

  const playlistsItems = animePlaylists.map((playlist) => {
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

  const logOutDiv = (
    <div className="logout-div">
      <img
        src={LogOutIcon}
        className="logout-icon"
        style={{ cursor: "pointer" }}
        onClick={() => props.logOut()}
      />
    </div>
  );

  const [favouriteGenres, setFavouriteGenres] = useState([]);

  const [animeTypesStatisticList, setAnimeTypesStatisticList] = useState([]);

  const [animeCountDistribution, setAnimeCountDistribution] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8081/api/public/statistic/favourite-genres/${profileUserId}`
    )
      .then((result) => result.json())
      .then((userFavouriteGenresList) => {
        setFavouriteGenres(userFavouriteGenresList);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(
      `http://localhost:8081/api/public/statistic/anime-type-distribution/${profileUserId}`
    )
      .then((result) => result.json())
      .then((animeTypeDistribution) => {
        // console.log(animeTypeDistribution);
        setAnimeTypesStatisticList(animeTypeDistribution);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(
      `http://localhost:8081/api/public/statistic/anime-time-distribution/${profileUserId}`
    )
      .then((result) => result.json())
      .then((animeTimeDistribution) => {
        console.log(animeTimeDistribution);
        setAnimeCountDistribution(animeTimeDistribution);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [profileUserId]);

  const lastWatchedEmptyBlock = (
    <div className="last-watched-empty-div">
      <img src={EmptyListImage} className="last-watched-empty-image" />
      <h1 className="last-watched-empty-header">Здесь пока пусто</h1>
    </div>
  );

  const lastWatchedBlock = (
    <div className="horizontal-scroll-view">
      <div className="image-preview-grid">{lastWatchedList}</div>
    </div>
  );

  const playlistsEmptyBlock = (
    <div className="last-watched-empty-div">
      <img src={EmptyListImage} className="last-watched-empty-image" />
      <h1 className="last-watched-empty-header">Здесь пока пусто</h1>
    </div>
  );

  const playlistsBlock = (
    <div className="horizontal-scroll-view">
      <div className="playlist-image-preview-grid">
        {userId === profileUserId && addPlaylistButton}
        {playlistsItems}
      </div>
    </div>
  );

  return (
    <div className="scroll-div-user">
      <div className="user-top">
        <div className="user-card">
          <div className="user-photo-div">
            <img
              src={userInfo.imageUrl ? userInfo.imageUrl : EmptyUserLogo}
              className="user-card-logo"
              style={{ cursor: "pointer" }}
              onClick={handleUserImageClick}
              onError={(e) => {
                e.target.src = EmptyUserLogo;
              }}
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

        <AnimeCountLineChart animeCountDistribution={animeCountDistribution} />

        {userId === profileUserId && logOutDiv}
      </div>

      <div className="outer-second-statistic-div">
        <FavouriteGenresComponent favouriteGenres={favouriteGenres} />

        <AnimeTypePieChart animeTypesStatisticList={animeTypesStatisticList} />
      </div>

      <div className="image-preview-all-button">
        <h1 className="image-preview-all-button-text">
          Последние просмотренные аниме
        </h1>
      </div>
      <div className="image-preview-div">
        {lastWatchedList.length !== 0
          ? lastWatchedBlock
          : lastWatchedEmptyBlock}
      </div>

      <div className="image-preview-all-button">
        <h1 className="image-preview-all-button-text">Плейлисты</h1>
      </div>
      <div className="image-preview-div" style={{ gridRow: "4" }}>
        {userId === profileUserId || playlistsItems.length !== 0
          ? playlistsBlock
          : playlistsEmptyBlock}
      </div>
    </div>
  );
}

export default UserComponent;

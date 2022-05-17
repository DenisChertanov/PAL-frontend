import React, { useState } from "react";
import axios from "axios";

import "./css/PlaylistModal.css";
import PlaylistItem from "./PlaylistItem";

import RedStar from "../../img/red-star.png";
import WhiteStar from "../../img/white-star.png";

function PlaylistModal({
  playlist,
  authJwtToken,
  userId,
  profileUserId,
  ...props
}) {
  const [isTitleFocus, setIsTitleFocus] = useState(false);
  const [isDescriptionFocus, setIsDescriptionFocus] = useState(false);

  const [title, setTitle] = useState(playlist.title);
  const [description, setDescription] = useState(playlist.description);

  function updatePlaylistModal(newPlaylist) {
    props.setModalChildren(
      <PlaylistModal
        playlist={newPlaylist}
        authJwtToken={authJwtToken}
        userId={userId}
        profileUserId={profileUserId}
        updatePlaylists={props.updatePlaylists}
        setModalChildren={props.setModalChildren}
        setIsModalOpen={props.setIsModalOpen}
      />
    );
  }

  const sortedPlaylist = { ...playlist };
  const playlistItems = sortedPlaylist.items
    .sort((a, b) => {
      return a.order > b.order ? 1 : -1;
    })
    .map((item) => {
      return (
        <PlaylistItem
          key={item.anime.animeId}
          playlistItem={item}
          playlist={playlist}
          authJwtToken={authJwtToken}
          userId={userId}
          profileUserId={profileUserId}
          updatePlaylists={props.updatePlaylists}
          setModalChildren={props.setModalChildren}
          setIsModalOpen={props.setIsModalOpen}
          updatePlaylistModal={updatePlaylistModal}
        />
      );
    });

  const generalMarkStars = [1, 2, 3, 4, 5].map((index) => (
    <img
      key={index}
      src={index <= playlist.generalMark ? RedStar : WhiteStar}
      className="playlist-mark-star"
    />
  ));

  const [newUserMark, setNewUserMark] = useState(playlist.userMark);

  const userMarkStars = [1, 2, 3, 4, 5].map((index) => (
    <img
      key={index}
      src={index <= newUserMark ? RedStar : WhiteStar}
      style={{ cursor: "pointer" }}
      className="playlist-mark-star"
      onMouseEnter={() => {
        setNewUserMark(index);
      }}
      onClick={() => sendUserMark(index)}
    />
  ));

  async function sendUserMark(userMark) {
    let request = new URLSearchParams({
      animePlaylistId: playlist.animePlaylistId,
      mark: userMark,
    });

    axios
      .post(
        `http://localhost:8081/api/public/anime-playlist/set-mark`,
        request,
        {
          headers: {
            Authorization: "Bearer ".concat(authJwtToken),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        props.updatePlaylists(response.data);
        updatePlaylistModal(response.data);
      });
  }

  async function sendTitle() {
    if (title === playlist.title) {
      return;
    }

    let request = new URLSearchParams({
      animePlaylistId: playlist.animePlaylistId,
      title: title,
    });

    axios
      .post(
        `http://localhost:8081/api/public/anime-playlist/change-title`,
        request,
        {
          headers: {
            Authorization: "Bearer ".concat(authJwtToken),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        props.updatePlaylists(response.data);
        updatePlaylistModal(response.data);
      });
  }

  async function sendDescription() {
    if (description === playlist.description) {
      return;
    }

    let request = new URLSearchParams({
      animePlaylistId: playlist.animePlaylistId,
      description: description,
    });

    axios
      .post(
        `http://localhost:8081/api/public/anime-playlist/change-description`,
        request,
        {
          headers: {
            Authorization: "Bearer ".concat(authJwtToken),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        props.updatePlaylists(response.data);
        updatePlaylistModal(response.data);
      });
  }

  async function uploadImage(file) {
    const form = new FormData();
    form.append("animePlaylistId", playlist.animePlaylistId);
    form.append("file", file);

    axios
      .post(
        `http://localhost:8081/api/public/anime-playlist/upload-image`,
        form,
        {
          headers: {
            Authorization: "Bearer ".concat(authJwtToken),
            "Content-Type": "multipart/form-data;charset=utf-8",
          },
        }
      )
      .then((response) => {
        props.updatePlaylists(response.data);
        updatePlaylistModal(response.data);
      });
  }

  const hiddenFileInput = React.useRef(null);

  const handlePlaylistImageClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChangeFileInput = (event) => {
    const fileUploaded = event.target.files[0];
    uploadImage(fileUploaded);
  };

  return (
    <div className="playlist-modal-div">
      <div className="playlist-header-div">
        <img
          className="playlist-image"
          src={playlist.imageUrl}
          onClick={handlePlaylistImageClick}
        />
        <input
          ref={hiddenFileInput}
          onChange={handleChangeFileInput}
          type="file"
          style={{ display: "none" }}
        />

        <div className="playlist-info-div">
          <textarea
            className={
              isTitleFocus
                ? "playlist-title-textarea focus"
                : "playlist-title-textarea"
            }
            type="text"
            value={title}
            onFocus={() => {
              if (userId !== profileUserId) {
                return;
              }
              setIsTitleFocus(true);
            }}
            onBlur={() => {
              if (userId !== profileUserId) {
                return;
              }
              setIsTitleFocus(false);
              sendTitle();
            }}
            onChange={(e) => {
              if (userId !== profileUserId) {
                return;
              }
              setTitle(e.target.value);
            }}
            readOnly={userId !== profileUserId}
          />
          <textarea
            className={
              isDescriptionFocus
                ? "playlist-description-textarea focus"
                : "playlist-description-textarea"
            }
            type="text"
            value={description}
            onFocus={() => {
              if (userId !== profileUserId) {
                return;
              }
              setIsDescriptionFocus(true);
            }}
            onBlur={() => {
              if (userId !== profileUserId) {
                return;
              }
              setIsDescriptionFocus(false);
              sendDescription();
            }}
            onChange={(e) => {
              if (userId !== profileUserId) {
                return;
              }
              setDescription(e.target.value);
            }}
            readOnly={userId !== profileUserId}
          />
        </div>

        <div className="playlist-marks-div">
          <h1 className="playlist-mark-header">Общая оценка:</h1>
          <div className="playlist-mark-star-grid">{generalMarkStars}</div>

          <h1 className="playlist-mark-header" style={{ marginTop: "20px" }}>
            Собственная оценка:
          </h1>
          <div
            className="playlist-mark-star-grid"
            onMouseLeave={() => {
              setNewUserMark(playlist.userMark);
            }}
          >
            {userMarkStars}
          </div>
        </div>
      </div>

      <hr className="playlist-modal-header-hr" />

      <div className="playlist-items-scroll-div">{playlistItems}</div>
    </div>
  );
}

export default PlaylistModal;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import PlaylistModal from "./PlaylistModal";

import "./css/PlaylistItem.css";

import RemoveButton from "../../img/svgviewer-output.png";
import UpArrowButton from "../../img/up-arrow.png";
import DownArrowButton from "../../img/down-arrow.png";

function PlaylistItem({
  playlistItem,
  playlist,
  authJwtToken,
  userId,
  username,
  profileUserId,
  ...props
}) {
  async function removeItem() {
    let request = new URLSearchParams({
      animePlaylistId: playlist.animePlaylistId,
      animeId: playlistItem.anime.animeId,
    });

    axios
      .post(
        `http://localhost:8081/api/public/anime-playlist/remove-anime`,
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
        props.updatePlaylistModal(response.data);
      });
  }

  async function changeOrder(newOrder) {
    if (newOrder < 1 || newOrder > playlist.items.length) {
      return;
    }

    let request = new URLSearchParams({
      animePlaylistId: playlist.animePlaylistId,
      animeId: playlistItem.anime.animeId,
      order: newOrder,
    });

    axios
      .post(
        `http://localhost:8081/api/public/anime-playlist/change-anime-order`,
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
        props.updatePlaylistModal(response.data);
      });
  }

  const operationDiv = (
    <div className="playlist-item-operation-div">
      <img
        className="playlist-item-remove-button"
        src={RemoveButton}
        onClick={() => removeItem()}
      />
      <div className="playlist-item-operation-order-div">
        <img
          className="playlist-item-up-arrow-button"
          src={UpArrowButton}
          onClick={() => {
            changeOrder(playlistItem.order - 1);
          }}
        />
        <img
          className="playlist-item-down-arrow-button"
          src={DownArrowButton}
          onClick={() => {
            changeOrder(playlistItem.order + 1);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="playlist-item-outer-div">
      <div className="playlist-item-div">
        <Link
          to={`/anime/${playlistItem.anime.stringId}`}
          className="playlist-item-div-link"
          onClick={() => {
            props.setIsModalOpen(false);
          }}
        >
          <h1 className="playlist-item-order-h1">
            {"#".concat(playlistItem.order)}
          </h1>

          <img
            className="playlist-item-image"
            src={playlistItem.anime.imageUrl}
          />

          <div className="playlist-item-info-div">
            <h1 className="playlist-item-title">
              {playlistItem.anime.title.toUpperCase()}
            </h1>
            <h1 className="anime-mark">{playlistItem.anime.mark}</h1>

            <div className="playlist-item-characteristic-grid">
              <div style={{ gridRow: 1, gridColumn: 1, display: "flex" }}>
                <h1 className="playlist-item-characteristic-item-header">
                  Тип:
                </h1>
                <h1 className="playlist-item-characteristic-item">
                  {playlistItem.anime.typeTitle}
                </h1>
              </div>

              <div style={{ gridRow: 1, gridColumn: 2, display: "flex" }}>
                <h1 className="playlist-item-characteristic-item-header">
                  Статус:
                </h1>
                <h1 className="playlist-item-characteristic-item">
                  {playlistItem.anime.stateTitle}
                </h1>
              </div>

              <div style={{ gridRow: 2, gridColumn: 1, display: "flex" }}>
                <h1 className="playlist-item-characteristic-item-header">
                  Серии:
                </h1>
                <h1 className="playlist-item-characteristic-item">
                  {playlistItem.anime.episodes}
                </h1>
              </div>

              <div style={{ gridRow: 2, gridColumn: 2, display: "flex" }}>
                <h1 className="playlist-item-characteristic-item-header">
                  Год:
                </h1>
                <h1 className="playlist-item-characteristic-item">
                  {playlistItem.anime.year}
                </h1>
              </div>
            </div>
          </div>
        </Link>

        {username === profileUserId && operationDiv}
      </div>

      <hr className="playlist-item-hr" />
    </div>
  );
}

export default PlaylistItem;

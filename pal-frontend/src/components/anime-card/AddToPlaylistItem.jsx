import React from "react";
import axios from "axios";

import "./css/AddToPlaylistItem.css";

function AddToPlaylistItem({ playlist, anime, authJwtToken, ...props }) {
  const isAdded = playlist.items.some((playlistItem) => {
    return playlistItem.anime.animeId === anime.animeId;
  });

  async function addToPlaylist() {
    let request = new URLSearchParams({
      animePlaylistId: playlist.animePlaylistId,
      animeId: anime.animeId,
    });

    axios
      .post(
        `http://localhost:8081/api/public/anime-playlist/push-back-anime`,
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
      });
  }

  return (
    <div
      className="dropdown-playlist-item"
      onClick={(event) => {
        !isAdded && addToPlaylist();
        event.stopPropagation();
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="dropdown-playlist-title-div">
        <img src={playlist.imageUrl} className="dropdown-playlist-logo" />
        <h1
          className="dropdown-playlist-title"
          style={isAdded ? { color: "#9A9999" } : {}}
        >
          {playlist.title}
        </h1>
      </div>

      <hr className="dropdown-hr" />
    </div>
  );
}

export default AddToPlaylistItem;

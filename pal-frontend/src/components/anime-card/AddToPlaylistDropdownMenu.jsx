import React, { useState } from "react";
import AddToPlaylistItem from "./AddToPlaylistItem";

import "./css/AddToPlaylistDropdownMenu.css";

function AddToPlaylistDropdownMenu({
  animePlaylists,
  anime,
  authJwtToken,
  ...props
}) {
  const [playlistPrefix, setPlaylistPrefix] = useState("");

  const playlistItems = animePlaylists
    .filter((playlist) =>
      playlist.title.toLowerCase().startsWith(playlistPrefix)
    )
    .map((playlist) => (
      <AddToPlaylistItem
        key={playlist.animePlaylistId}
        playlist={playlist}
        anime={anime}
        authJwtToken={authJwtToken}
        updatePlaylists={props.updatePlaylists}
      />
    ));

  return (
    <div className="dropdown-playlist-menu">
      <input
        type="text"
        className="dropdown-playlist-search-input"
        placeholder="Искать"
        value={playlistPrefix}
        onChange={(event) => {
          setPlaylistPrefix(event.target.value);
          event.preventDefault();
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      />

      <div className="scroll-div">{playlistItems}</div>
    </div>
  );
}

export default AddToPlaylistDropdownMenu;

import React, { useState } from "react";
import AddToPlaylistItem from "./AddToPlaylistItem";

import "./css/AddToPlaylistDropdownMenu.css";
import EmptyListImage from "../../img/empty-list-image.png";

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

  const playlistsBlock = <div className="scroll-div">{playlistItems}</div>;

  const emptyPlaylistsBlock = (
    <div className="add-to-playlist-empty-div">
      <img src={EmptyListImage} className="add-to-playlist-empty-image" />
      <h1 className="add-to-playlist-empty-header">Здесь пока пусто</h1>
    </div>
  );

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

      {playlistItems.length !== 0 ? playlistsBlock : emptyPlaylistsBlock}
    </div>
  );
}

export default AddToPlaylistDropdownMenu;

import React from "react";

import "./css/PlaylistPreview.css";
import PlaylistModal from "./PlaylistModal";
import EmptyPlaylistImage from "../../img/empty-playlist-image.png";

function PlaylistPreview({
  playlist,
  modalChildren,
  authJwtToken,
  userId,
  username,
  profileUserId,
  ...props
}) {
  const playlistModal = (
    <PlaylistModal
      playlist={playlist}
      authJwtToken={authJwtToken}
      userId={userId}
      username={username}
      profileUserId={profileUserId}
      updatePlaylists={props.updatePlaylists}
      setModalChildren={props.setModalChildren}
      setIsModalOpen={props.setIsModalOpen}
    />
  );

  return (
    <div
      className="playlist-image-preview"
      onClick={() => {
        props.setIsModalOpen(true);
        props.setModalChildren(playlistModal);
      }}
    >
      <img
        src={playlist.imageUrl ? playlist.imageUrl : EmptyPlaylistImage}
        className="playlist-image-preview-image"
        onError={(e) => {
          e.target.src = EmptyPlaylistImage;
        }}
      />
      <h1 className="playlist-image-preview-title">
        {playlist.title.toUpperCase()}
      </h1>
    </div>
  );
}

export default PlaylistPreview;

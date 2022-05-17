import React from "react";

import "./css/PlaylistPreview.css";
import PlaylistModal from "./PlaylistModal";

function PlaylistPreview({
  playlist,
  modalChildren,
  authJwtToken,
  userId,
  profileUserId,
  ...props
}) {
  const playlistModal = (
    <PlaylistModal
      playlist={playlist}
      authJwtToken={authJwtToken}
      userId={userId}
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
      <img src={playlist.imageUrl} className="playlist-image-preview-image" />
      <h1 className="playlist-image-preview-title">
        {playlist.title.toUpperCase()}
      </h1>
    </div>
  );
}

export default PlaylistPreview;

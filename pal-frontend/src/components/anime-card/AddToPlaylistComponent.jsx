import React, { useState, useEffect } from "react";

import "./css/AddToPlaylistComponent.css";

function AddToPlaylistComponent({ authJwtToken, anime, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="playlists"
      onClick={() => setIsOpen(!isOpen)}
      style={
        isOpen
          ? { borderRadius: "10px 10px 0 0", cursor: "pointer" }
          : { cursor: "pointer" }
      }
    >
      <i
        className="fa-solid fa-plus"
        style={{
          color: "#d72323",
          fontSize: "20px",
          marginBottom: "auto",
          marginTop: "auto",
        }}
      ></i>
      <h1 className="add-to-playlist">Добавить в плейлист</h1>

      {isOpen && props.children}
    </div>
  );
}

export default AddToPlaylistComponent;

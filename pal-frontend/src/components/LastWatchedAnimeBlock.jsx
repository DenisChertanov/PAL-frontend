import React from "react";

import "./css/UserComponent.css";

function LastWatchedAnimeBlock({ anime }) {
  return (
    <div className="image-preview">
      <img src={anime.imageUrl} className="image-preview-image" />
      <h1 className="image-preview-title">{anime.title.toUpperCase()}</h1>
    </div>
  );
}

export default LastWatchedAnimeBlock;

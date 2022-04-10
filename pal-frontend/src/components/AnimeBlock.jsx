import React from "react";

import AnimeCover from "../img/dr-stone.jpeg";

import "./css/AnimeBlock.css";

function AnimeBlock({ anime }) {
  return (
    <div className="anime-block">
      <img
        src={anime.imageUrl}
        width="220px"
        height="310px"
        className="anime-block-image"
      />
      <h1 className="anime-block-title">{anime.title.toUpperCase()}</h1>
      <h1 className="anime-block-mark">{anime.mark}</h1>
      <h1 className="anime-block-year">{anime.year} г.</h1>
    </div>
  );
}

export default AnimeBlock;

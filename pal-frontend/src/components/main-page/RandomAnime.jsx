import React from "react";

import "./css/RandomAnime.css";
import RefreshIcon from "../../img/refresh-icon.png";

function RandomAnime({ anime, ...props }) {
  return (
    <div className="random-anime-outer-div">
      <div className="random-anime-header-div">
        <h1 className="random-anime-header">Случайное аниме</h1>
        <img
          src={RefreshIcon}
          className="random-anime-refresh-icon"
          onClick={() => props.refreshRandomAnime()}
        />
      </div>

      <div
        className="random-anime-card-outer-div"
        onClick={() => props.navigateToAnimePage(anime.animeId)}
      >
        <img src={anime.imageUrl} className="random-anime-image" />
        <h1 className="random-anime-title">{anime.title.toUpperCase()}</h1>
        <h1 className="random-anime-mark">{anime.mark}</h1>
        <h1 className="random-anime-year">{anime.year} г.</h1>
      </div>
    </div>
  );
}

export default RandomAnime;

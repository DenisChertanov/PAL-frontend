import React from "react";

import "./css/AnimeRatingScrollItem.css";

function AnimeRatingScrollItem({ anime, ...props }) {
  return (
    <div className="anime-scroll-item-outer-div">
      <div
        className="anime-scroll-item-main-div"
        onClick={() => props.navigateToAnimePage(anime.stringId)}
      >
        <h1 className="anime-scroll-item-order">{"#".concat(anime.order)}</h1>
        <img src={anime.imageUrl} className="anime-scroll-item-image" />

        <div className="anime-scroll-item-info-div">
          <h1 className="anime-scroll-item-title">
            {anime.title.toUpperCase()}
          </h1>
          <h1 className="anime-scroll-item-mark">{anime.mark}</h1>
        </div>

        <div className="anime-scroll-item-description">
          <div
            className="anime-scroll-item-description-group"
            style={{ gridRow: 1, gridColumn: 1 }}
          >
            <h1 className="anime-scroll-item-description-group-name">Тип:</h1>
            <h1 className="anime-scroll-item-description-group-value">
              {anime.type}
            </h1>
          </div>

          <div
            className="anime-scroll-item-description-group"
            style={{ gridRow: 1, gridColumn: 2 }}
          >
            <h1 className="anime-scroll-item-description-group-name">
              Статус:
            </h1>
            <h1 className="anime-scroll-item-description-group-value">
              {anime.state}
            </h1>
          </div>

          <div
            className="anime-scroll-item-description-group"
            style={{ gridRow: 2, gridColumn: 1 }}
          >
            <h1 className="anime-scroll-item-description-group-name">Серии:</h1>
            <h1 className="anime-scroll-item-description-group-value">
              {anime.episodes}
            </h1>
          </div>

          <div
            className="anime-scroll-item-description-group"
            style={{ gridRow: 2, gridColumn: 2 }}
          >
            <h1 className="anime-scroll-item-description-group-name">Год:</h1>
            <h1 className="anime-scroll-item-description-group-value">
              {anime.year}
            </h1>
          </div>
        </div>
      </div>

      <h1 className="anime-scroll-item-hr"></h1>
    </div>
  );
}

export default AnimeRatingScrollItem;

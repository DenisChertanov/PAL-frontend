import React from "react";

import "./css/AnimeRatingSecondThirdComponent.css";

function AnimeRatingSecondThirdComponent({ anime, medal, ...props }) {
  return (
    <div
      className="anime-rating-main-second-third-div"
      onClick={() => props.navigateToAnimePage(anime.stringId)}
    >
      <img src={medal} className="anime-rating-medal" />
      <img
        src={anime.imageUrl}
        className="anime-rating-main-second-third-image"
      />

      <div className="anime-rating-second-third-info-div">
        <h1 className="anime-rating-second-third-info-title">
          {anime.title.toUpperCase()}
        </h1>
        <h1 className="anime-rating-second-third-info-mark">{anime.mark}</h1>

        <div className="anime-rating-second-third-info-description">
          <div
            className="anime-rating-second-third-info-description-group"
            style={{ gridRow: 1, gridColumn: 1 }}
          >
            <h1 className="anime-rating-second-third-info-description-group-name">
              Тип:
            </h1>
            <h1 className="anime-rating-second-third-info-description-group-value">
              {anime.type}
            </h1>
          </div>

          <div
            className="anime-rating-second-third-info-description-group"
            style={{ gridRow: 1, gridColumn: 2 }}
          >
            <h1 className="anime-rating-second-third-info-description-group-name">
              Статус:
            </h1>
            <h1 className="anime-rating-second-third-info-description-group-value">
              {anime.state}
            </h1>
          </div>

          <div
            className="anime-rating-second-third-info-description-group"
            style={{ gridRow: 2, gridColumn: 1 }}
          >
            <h1 className="anime-rating-second-third-info-description-group-name">
              Серии:
            </h1>
            <h1 className="anime-rating-second-third-info-description-group-value">
              {anime.episodes}
            </h1>
          </div>

          <div
            className="anime-rating-second-third-info-description-group"
            style={{ gridRow: 2, gridColumn: 2 }}
          >
            <h1 className="anime-rating-second-third-info-description-group-name">
              Год:
            </h1>
            <h1 className="anime-rating-second-third-info-description-group-value">
              {anime.year}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeRatingSecondThirdComponent;

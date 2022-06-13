import React from "react";
import AnimeRatingSecondThirdComponent from "./AnimeRatingSecondThirdComponent";

import "./css/AnimeRating.css";
import GoldMedal from "../../img/gold-medal.png";
import SilverMedal from "../../img/silver-medal.png";
import BronzeMedal from "../../img/bronze-medal.png";
import AnimeRatingScrollItem from "./AnimeRatingScrollItem";

function AnimeRating({ animeRatingList, animeRatingPeriod, ...props }) {
  const firstAnime = animeRatingList[0];
  const animeScrollItems = animeRatingList
    .filter((anime) => anime.order > 3)
    .map((anime) => (
      <AnimeRatingScrollItem
        key={anime.animeId}
        anime={anime}
        navigateToAnimePage={props.navigateToAnimePage}
      />
    ));

  return (
    <div className="anime-rating-outer-div">
      <div className="anime-rating-header-div">
        <h1 className="anime-rating-header">Рейтинг популярности аниме</h1>

        <div className="anime-rating-header-period-div">
          <h1
            className={
              animeRatingPeriod === "week"
                ? "anime-rating-header-period active"
                : "anime-rating-header-period"
            }
            onClick={() => props.setAnimeRatingPeriod("week")}
          >
            Неделя
          </h1>
          <h1
            className={
              animeRatingPeriod === "month"
                ? "anime-rating-header-period active"
                : "anime-rating-header-period"
            }
            onClick={() => props.setAnimeRatingPeriod("month")}
          >
            Месяц
          </h1>
          <h1
            className={
              animeRatingPeriod === "year"
                ? "anime-rating-header-period active"
                : "anime-rating-header-period"
            }
            onClick={() => props.setAnimeRatingPeriod("year")}
          >
            Год
          </h1>
        </div>
      </div>

      <div className="anime-rating-main-div">
        <div
          className="anime-rating-main-first-div"
          onClick={() => props.navigateToAnimePage(firstAnime.stringId)}
        >
          <img src={GoldMedal} className="anime-rating-medal" />
          <img
            src={firstAnime.imageUrl}
            className="anime-rating-main-first-image"
          />

          <div className="anime-rating-first-info-div">
            <h1 className="anime-rating-first-info-title">
              {firstAnime.title.toUpperCase()}
            </h1>
            <h1 className="anime-rating-first-info-mark">{firstAnime.mark}</h1>

            <div className="anime-rating-first-info-description">
              <div
                className="anime-rating-first-info-description-group"
                style={{ gridRow: 1, gridColumn: 1 }}
              >
                <h1 className="anime-rating-first-info-description-group-name">
                  Тип:
                </h1>
                <h1 className="anime-rating-first-info-description-group-value">
                  {firstAnime.type}
                </h1>
              </div>

              <div
                className="anime-rating-first-info-description-group"
                style={{ gridRow: 1, gridColumn: 2 }}
              >
                <h1 className="anime-rating-first-info-description-group-name">
                  Статус:
                </h1>
                <h1 className="anime-rating-first-info-description-group-value">
                  {firstAnime.state}
                </h1>
              </div>

              <div
                className="anime-rating-first-info-description-group"
                style={{ gridRow: 2, gridColumn: 1 }}
              >
                <h1 className="anime-rating-first-info-description-group-name">
                  Серии:
                </h1>
                <h1 className="anime-rating-first-info-description-group-value">
                  {firstAnime.episodes}
                </h1>
              </div>

              <div
                className="anime-rating-first-info-description-group"
                style={{ gridRow: 2, gridColumn: 2 }}
              >
                <h1 className="anime-rating-first-info-description-group-name">
                  Год:
                </h1>
                <h1 className="anime-rating-first-info-description-group-value">
                  {firstAnime.year}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <h1 className="anime-rating-main-hr-full"></h1>

        <div className="anime-rating-main-second-third-div">
          <AnimeRatingSecondThirdComponent
            anime={animeRatingList[1]}
            medal={SilverMedal}
            navigateToAnimePage={props.navigateToAnimePage}
          />
          <AnimeRatingSecondThirdComponent
            anime={animeRatingList[2]}
            medal={BronzeMedal}
            navigateToAnimePage={props.navigateToAnimePage}
          />
        </div>

        <h1 className="anime-rating-main-hr-full"></h1>

        <div className="anime-rating-main-scroll-outer">
          <div className="anime-rating-main-scroll">{animeScrollItems}</div>
        </div>
      </div>
    </div>
  );
}

export default AnimeRating;

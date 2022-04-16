import React from "react";

import "./css/AnimeCard.css";

import AnimeCharacteristic from "./AnimeCharacteristic";

function AnimeCard({ anime }) {
  return (
    <div className="anime-info">
      <img src={anime.imageUrl} className="anime-info-image" />

      <div className="anime-info-short">
        <h1 className="anime-title">{anime.title}</h1>
        <h1 className="anime-mark">{anime.mark}</h1>

        <div className="anime-characteristic-list">
          <AnimeCharacteristic
            characteristicKey={"Статус:"}
            characteristicValue={anime.stateTitle}
          />
          <AnimeCharacteristic
            characteristicKey={"Год:"}
            characteristicValue={anime.year}
          />
          <AnimeCharacteristic
            characteristicKey={"Жанры:"}
            characteristicValue={anime.animeTags.reduce((a, b) => a + ", " + b)}
          />
          <AnimeCharacteristic
            characteristicKey={"Студия:"}
            characteristicValue={anime.studio}
          />
          <AnimeCharacteristic
            characteristicKey={"Режиссер:"}
            characteristicValue={anime.director}
          />
          <AnimeCharacteristic
            characteristicKey={"Тип:"}
            characteristicValue={anime.typeTitle}
          />
          <AnimeCharacteristic
            characteristicKey={"Серии:"}
            characteristicValue={anime.episodes}
          />
        </div>
      </div>

      <div className="anime-description">
        <h1 className="anime-description-header">Краткое описание:</h1>
        <h1 className="anime-description-body">{anime.description}</h1>
      </div>

      <div className="anime-user-mark">
        <h1 className="anime-user-mark-header">Собственная оценка:</h1>
        <input type="text" className="anime-user-mark-input" placeholder="-" />
      </div>

      <div className="playlists">
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
      </div>

      <div className="anime-user-review">
        <h1 className="anime-user-review-header">Собственный отзыв:</h1>
        <div className="review-textarea-div">
          <textarea
            name="anime-user-review-text"
            className="anime-user-review-input"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;

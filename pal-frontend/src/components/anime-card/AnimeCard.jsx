import React, { useState, useEffect } from "react";
import axios from "axios";

import "./css/AnimeCard.css";

import EditIcon from "../../img/edit-icon.png";
import SaveIcon from "../../img/save.png";
import AnimeCharacteristic from "./AnimeCharacteristic";
import AddToPlaylistComponent from "./AddToPlaylistComponent";
import AddToPlaylistDropdownMenu from "./AddToPlaylistDropdownMenu";

function AnimeCard({ anime, animeActivity, authJwtToken, ...props }) {
  const [userMark, setUserMark] = useState(animeActivity.mark);
  const [isUserMarkChanged, setIsUserMarkChanged] = useState(false);

  const [lastWatchedEpisode, setLastWatchedEpisode] = useState(
    animeActivity.lastWatchedEpisode
  );
  const [isLastWatchedEpisodeChanged, setIsLastWatchedEpisodeChanged] =
    useState(false);

  const [userReview, setUserReview] = useState(animeActivity.review);
  const [isUserReviewChanged, setIsUserReviewChanged] = useState(false);

  const [animePlaylists, setAnimePlaylists] = useState([]);

  async function sendUserMarkToBack(floatNewUserMark) {
    const form = new FormData();
    form.append("mark", floatNewUserMark);

    const response = axios.post(
      `http://localhost:8081/api/private/anime-activity/update-mark/${anime.animeId}`,
      form,
      {
        headers: {
          Authorization: "Bearer ".concat(authJwtToken),
          "Content-Type": "multipart/form-data;charset=UTF-8",
        },
      }
    );
    console.log(response);
  }

  async function sendUserReviewToBack(newUserReview) {
    const form = new FormData();
    form.append("review", newUserReview);
    console.log(newUserReview);

    const response = axios.post(
      `http://localhost:8081/api/private/anime-activity/update-review/${anime.animeId}`,
      form,
      {
        headers: {
          Authorization: "Bearer ".concat(authJwtToken),
          "Content-Type": "multipart/form-data;charset=utf-8",
        },
      }
    );
    console.log(response);
  }

  async function sendUserLastWatchedEpisodeToBack(newUserLastWatchedEpisode) {
    const response = axios.get(
      `http://localhost:8081/api/private/anime-activity/update-last-watched-episode/${anime.animeId}/${newUserLastWatchedEpisode}`,
      {
        headers: {
          Authorization: "Bearer ".concat(authJwtToken),
        },
      }
    );
    console.log(response);
  }

  function sendUserMark(newUserMark) {
    try {
      const floatNewUserMark = parseFloat(newUserMark);
      if (floatNewUserMark >= 0 && floatNewUserMark <= 10) {
        setUserMark(floatNewUserMark);
        props.setAnimeActivityMark(floatNewUserMark);
        sendUserMarkToBack(floatNewUserMark);
      } else {
        setUserMark(animeActivity.mark);
        console.log("Float incorrect");
      }
    } catch {
      setUserMark(animeActivity.mark);
      console.log("Parse error");
    }
  }

  function sendUserReview(newUserReview) {
    setUserReview(newUserReview);
    props.setAnimeActivityReview(newUserReview);
    sendUserReviewToBack(newUserReview);
  }

  function sendUserLastWatchedEpisode(newUserLastWatchedEpisode) {
    try {
      const intNewUserLastWatchedEpisode = parseInt(newUserLastWatchedEpisode);
      console.log(intNewUserLastWatchedEpisode);
      if (
        intNewUserLastWatchedEpisode >= 0 &&
        intNewUserLastWatchedEpisode <= anime.episodes
      ) {
        setLastWatchedEpisode(intNewUserLastWatchedEpisode);
        props.setAnimeActivityLastWatchedEpisode(intNewUserLastWatchedEpisode);
        sendUserLastWatchedEpisodeToBack(intNewUserLastWatchedEpisode);
      } else {
        setLastWatchedEpisode(animeActivity.lastWatchedEpisode);
        console.log("Int incorrect 2");
      }
    } catch {
      setLastWatchedEpisode(animeActivity.lastWatchedEpisode);
      console.log("Parse error 2");
    }
  }

  function updatePlaylists(playlist) {
    let newAnimePlaylists = [...animePlaylists];
    newAnimePlaylists = newAnimePlaylists.map((animePlaylist) => {
      return animePlaylist.animePlaylistId === playlist.animePlaylistId
        ? playlist
        : animePlaylist;
    });

    setAnimePlaylists(newAnimePlaylists);
  }

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer ".concat(authJwtToken),
      },
    };

    fetch(
      "http://localhost:8081/api/public/anime-playlist/all-my",
      requestOptions
    )
      .then((result) => result.json())
      .then((animePlaylists) => {
        setAnimePlaylists(animePlaylists);
      })
      .catch((error) => {
        console.log(error);
        setAnimePlaylists([]);
      });
  }, []);

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
          <AnimeCharacteristic
            characteristicKey={"Сезон:"}
            characteristicValue={anime.season}
          />
          <AnimeCharacteristic
            characteristicKey={"Возрастной рейтинг:"}
            characteristicValue={anime.ageRating}
          />
          <AnimeCharacteristic
            characteristicKey={"Длительность:"}
            characteristicValue={anime.episodeDuration}
          />
          <AnimeCharacteristic
            characteristicKey={"Озвучка:"}
            characteristicValue={anime.voice}
          />
        </div>
      </div>

      <div className="anime-description">
        <h1 className="anime-description-header">Краткое описание:</h1>
        <h1 className="anime-description-body">{anime.description}</h1>
      </div>

      <div className="anime-user-mark">
        <h1 className="anime-user-mark-header">Собственная оценка:</h1>
        <input
          type="text"
          className="anime-user-mark-input"
          value={userMark === 0 ? "-" : userMark}
          readOnly={!isUserMarkChanged}
          onChange={(event) => {
            setUserMark(event.target.value);
            event.preventDefault();
          }}
        />
        <img
          src={EditIcon}
          className="edit-icon"
          style={!isUserMarkChanged ? {} : { display: "none" }}
          onClick={() => {
            setIsUserMarkChanged(!isUserMarkChanged);
          }}
        />
        <img
          src={SaveIcon}
          className="edit-icon"
          style={isUserMarkChanged ? {} : { display: "none" }}
          onClick={() => {
            sendUserMark(userMark);
            setIsUserMarkChanged(!isUserMarkChanged);
          }}
        />

        <h1 className="anime-user-mark-header" style={{ marginLeft: "30px" }}>
          Просмотрено серий:
        </h1>
        <input
          type="text"
          className="anime-user-mark-input"
          placeholder="-"
          readOnly={!isLastWatchedEpisodeChanged}
          value={lastWatchedEpisode === 0 ? "-" : lastWatchedEpisode}
          onChange={(event) => {
            setLastWatchedEpisode(event.target.value);
            event.preventDefault();
          }}
        />
        <h1 className="anime-total-episodes-header">
          {"/ ".concat(anime.episodes)}
        </h1>

        <img
          src={EditIcon}
          className="edit-icon"
          style={!isLastWatchedEpisodeChanged ? {} : { display: "none" }}
          onClick={() => {
            setIsLastWatchedEpisodeChanged(!isLastWatchedEpisodeChanged);
          }}
        />
        <img
          src={SaveIcon}
          className="edit-icon"
          style={isLastWatchedEpisodeChanged ? {} : { display: "none" }}
          onClick={() => {
            sendUserLastWatchedEpisode(lastWatchedEpisode);
            setIsLastWatchedEpisodeChanged(!isLastWatchedEpisodeChanged);
          }}
        />
      </div>

      <AddToPlaylistComponent authJwtToken={authJwtToken} anime={anime}>
        <AddToPlaylistDropdownMenu
          animePlaylists={animePlaylists}
          anime={anime}
          authJwtToken={authJwtToken}
          updatePlaylists={updatePlaylists}
        />
      </AddToPlaylistComponent>

      <div className="anime-user-review">
        <div style={{ display: "flex" }}>
          <h1 className="anime-user-review-header">Собственный отзыв:</h1>

          <img
            src={EditIcon}
            className="edit-icon"
            style={!isUserReviewChanged ? {} : { display: "none" }}
            onClick={() => {
              setIsUserReviewChanged(!isUserReviewChanged);
            }}
          />
          <img
            src={SaveIcon}
            className="edit-icon"
            style={isUserReviewChanged ? {} : { display: "none" }}
            onClick={() => {
              sendUserReview(userReview);
              setIsUserReviewChanged(!isUserReviewChanged);
            }}
          />
        </div>
        <div className="review-textarea-div">
          <textarea
            name="anime-user-review-text"
            className="anime-user-review-input"
            readOnly={!isUserReviewChanged}
            value={userReview}
            onChange={(event) => {
              setUserReview(event.target.value);
              event.preventDefault();
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;

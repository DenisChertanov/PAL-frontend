import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AnimeCard from "../components/anime-card/AnimeCard";

function AnimePage({ authJwtToken, ...props }) {
  const { id } = useParams();
  const [anime, setAnime] = useState();
  const [animeActivity, setAnimeActivity] = useState({
    animeId: id,
    mark: 0.0,
    review: "",
    lastWatchedEpisode: 26,
  });

  function setAnimeActivityMark(newUserMark) {
    let newAnimeActivity = { ...animeActivity };
    newAnimeActivity.mark = newUserMark;
    setAnimeActivity(newAnimeActivity);
  }

  function setAnimeActivityReview(newUserReview) {
    let newAnimeActivity = { ...animeActivity };
    newAnimeActivity.review = newUserReview;
    setAnimeActivity(newAnimeActivity);
  }

  function setAnimeActivityLastWatchedEpisode(newUserLastWatchedEpisode) {
    let newAnimeActivity = { ...animeActivity };
    newAnimeActivity.lastWatchedEpisode = newUserLastWatchedEpisode;
    setAnimeActivity(newAnimeActivity);
  }

  const animeCard = (
    <AnimeCard
      anime={anime}
      animeActivity={animeActivity}
      authJwtToken={authJwtToken}
      setAnimeActivityMark={setAnimeActivityMark}
      setAnimeActivityReview={setAnimeActivityReview}
      setAnimeActivityLastWatchedEpisode={setAnimeActivityLastWatchedEpisode}
    />
  );

  useEffect(() => {
    fetch(`http://localhost:8081/api/public/anime/get-by-id/${id}`)
      .then((result) => result.json())
      .then((animeOutDto) => {
        setAnime(animeOutDto);
      })
      .catch((error) => {
        console.log(error);
      });

    const animeActivityRequestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer ".concat(authJwtToken),
      },
    };
    fetch(
      `http://localhost:8081/api/private/anime-activity/${id}`,
      animeActivityRequestOptions
    )
      .then((result) => result.json())
      .then((animeActivityDto) => {
        setAnimeActivity(animeActivityDto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return anime && animeCard;
}

export default AnimePage;

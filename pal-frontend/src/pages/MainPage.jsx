import React, { useState, useEffect } from "react";
import RandomAnime from "../components/main-page/RandomAnime";
import { useNavigate } from "react-router-dom";

import "./css/MainPage.css";
import UserRating from "../components/main-page/UserRating";
import AnimeRating from "../components/main-page/AnimeRating";

function MainPage() {
  let navigate = useNavigate();

  const [randomAnime, setRandomAnime] = useState();
  const randomAnimeComponent = (
    <RandomAnime
      anime={randomAnime}
      refreshRandomAnime={refreshRandomAnime}
      navigateToAnimePage={navigateToAnimePage}
    />
  );

  const [userRatingPeriod, setRatingPeriod] = useState("");
  const [userRatingList, setUserRatingList] = useState([]);

  // week - Неделя, month - Месяц, year - Год
  const [animeRatingPeriod, setAnimeRatingPeriod] = useState("week");
  const [animeRatingList, setAnimeRatingList] = useState([]);
  const animeRatingComponent = (
    <AnimeRating
      animeRatingPeriod={animeRatingPeriod}
      setAnimeRatingPeriod={setAnimeRatingPeriod}
      animeRatingList={animeRatingList}
      navigateToAnimePage={navigateToAnimePage}
    />
  );

  function navigateToAnimePage(stringId) {
    navigate(`/anime/${stringId}`);
  }

  function navigateToUserPage(username) {
    navigate(`/user/${username}`);
  }

  async function refreshRandomAnime() {
    fetch(`http://localhost:8081/api/public/anime/get-random`)
      .then((result) => result.json())
      .then((anime) => {
        setRandomAnime(anime);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function fetchUserRating() {
    fetch(`http://localhost:8081/api/public/user/activity-rating`)
      .then((result) => result.json())
      .then((result) => {
        setRatingPeriod(result.period);
        setUserRatingList(result.userRatingList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function fetchAnimeRating() {
    fetch(`http://localhost:8081/api/public/anime/rating/${animeRatingPeriod}`)
      .then((result) => result.json())
      .then((result) => {
        setAnimeRatingList(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    refreshRandomAnime();
    fetchUserRating();
  }, []);

  useEffect(() => {
    fetchAnimeRating();
  }, [animeRatingPeriod]);

  return (
    <div className="main-page-outer-div">
      {animeRatingList.length !== 0 && animeRatingComponent}

      <div className="main-page-right-panel">
        <div className="main-page-right-panel-inside-div">
          <UserRating
            userRatingPeriod={userRatingPeriod}
            userRatingList={userRatingList}
            navigateToUserPage={navigateToUserPage}
          />

          {randomAnime && randomAnimeComponent}
        </div>
      </div>
    </div>
  );
}

export default MainPage;

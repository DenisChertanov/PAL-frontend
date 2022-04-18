import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserComponent from "../components/UserComponent";

function UserPage({ authJwtToken }) {
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState();
  const [userStatistic, setUserStatistic] = useState();
  const [lastWatchedAnimes, setLastWatchedAnimes] = useState([]);

  const userComponent = (
    <UserComponent
      authJwtToken={authJwtToken}
      userInfo={userInfo}
      userStatistic={userStatistic}
      lastWatchedAnimes={lastWatchedAnimes}
    />
  );

  useEffect(() => {
    fetch(`http://localhost:8081/api/public/user/get-by-id/${id}`)
      .then((result) => result.json())
      .then((userInfoDto) => {
        setUserInfo(userInfoDto);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(`http://localhost:8081/api/public/statistic/get-by-id/${id}`)
      .then((result) => result.json())
      .then((userStatisticDto) => {
        setUserStatistic(userStatisticDto);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(`http://localhost:8081/api/public/statistic/last-watched-anime/${id}`)
      .then((result) => result.json())
      .then((lastWatchedAnimesDto) => {
        setLastWatchedAnimes([...lastWatchedAnimesDto, ...lastWatchedAnimes]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return userInfo && userStatistic && lastWatchedAnimes && userComponent;
}

export default UserPage;

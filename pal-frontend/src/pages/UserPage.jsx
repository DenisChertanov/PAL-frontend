import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserComponent from "../components/UserComponent";

function UserPage({
  authJwtToken,
  userId,
  isModalOpen,
  modalChildren,
  ...props
}) {
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState();
  const [userStatistic, setUserStatistic] = useState();
  const [lastWatchedAnimes, setLastWatchedAnimes] = useState([]);

  const [animePlaylists, setAnimePlaylists] = useState([]);

  const userComponent = (
    <UserComponent
      userId={userId}
      profileUserId={id}
      authJwtToken={authJwtToken}
      userInfo={userInfo}
      userStatistic={userStatistic}
      lastWatchedAnimes={lastWatchedAnimes}
      animePlaylists={animePlaylists}
      updatePlaylists={updatePlaylists}
      addPlaylist={addPlaylist}
      isModalOpen={isModalOpen}
      setIsModalOpen={props.setIsModalOpen}
      modalChildren={modalChildren}
      setModalChildren={props.setModalChildren}
      setUpdateModal={props.setUpdateModal}
      setUserInfo={setUserInfo}
    />
  );

  function updatePlaylists(playlist) {
    // console.log(playlist);
    // console.log(animePlaylists);
    let newAnimePlaylists = [...animePlaylists];
    newAnimePlaylists = newAnimePlaylists.map((animePlaylist) => {
      return animePlaylist.animePlaylistId === playlist.animePlaylistId
        ? playlist
        : animePlaylist;
    });

    // console.log(newAnimePlaylists);
    setAnimePlaylists(newAnimePlaylists);

    props.setUpdateModal(!isModalOpen);
  }

  function addPlaylist(playlist) {
    setAnimePlaylists([...animePlaylists, playlist]);
  }

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

    let playlistsRequestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer ".concat(authJwtToken),
      },
      body: new URLSearchParams({
        userId: id,
      }),
    };

    fetch(
      `http://localhost:8081/api/public/anime-playlist/all-by-user`,
      playlistsRequestOptions
    )
      .then((result) => result.json())
      .then((playlists) => {
        setAnimePlaylists(playlists);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return userInfo && userStatistic && lastWatchedAnimes && userComponent;
}

export default UserPage;

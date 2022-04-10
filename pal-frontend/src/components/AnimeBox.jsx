import React, { useState, useEffect } from "react";

import AnimeBlock from "./AnimeBlock";

import "./css/AnimeBox.css";

function AnimeBox({ page, ...props }) {
  const [animeList, setAnimeList] = useState([]);

  const animeBlocks = animeList.map((anime) => (
    <AnimeBlock key={anime.animeId} anime={anime} />
  ));

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageNumber: page.pageNumber - 1, pageSize: 8 }),
    };

    fetch("http://localhost:8081/api/public/anime/get-by-page", requestOptions)
      .then((result) => result.json())
      .then((animePage) => {
        setAnimeList(animePage.animeList);
        props.setTotalPages(animePage.totalPages);
      })
      .catch((error) => {
        console.log(error);
        setAnimeList([]);
      });
  }, [page.pageNumber]);

  return <div className="anime-box">{animeBlocks}</div>;
}

export default AnimeBox;

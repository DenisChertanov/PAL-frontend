import React, { useState, useEffect } from "react";

import AnimeBlock from "./AnimeBlock";

import "./css/AnimeBox.css";

function AnimeBox({ page, appliedFilters, authJwtToken, ...props }) {
  const [animeList, setAnimeList] = useState([]);

  const animeBlocks = animeList.map((anime) => (
    <AnimeBlock key={anime.animeId} anime={anime} />
  ));

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(authJwtToken),
      },
      body: JSON.stringify(appliedFilters),
    };

    fetch(
      "http://localhost:8081/api/public/anime-search/search",
      requestOptions
    )
      .then((result) => result.json())
      .then((animePage) => {
        setAnimeList(animePage.animeList);
        props.setTotalPages(animePage.totalPages);
      })
      .catch((error) => {
        console.log(error);
        setAnimeList([]);
      });
  }, [appliedFilters]);

  return <div className="anime-box">{animeBlocks}</div>;
}

export default AnimeBox;

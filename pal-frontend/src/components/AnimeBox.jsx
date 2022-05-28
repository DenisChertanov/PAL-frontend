import React, { useState, useEffect } from "react";

import AnimeBlock from "./AnimeBlock";

import "./css/AnimeBox.css";
import EmptyListImage from "../img/empty-list-image.png";

function AnimeBox({ page, appliedFilters, authJwtToken, ...props }) {
  const [animeList, setAnimeList] = useState([]);

  const animeBlocks = animeList.map((anime) => (
    <AnimeBlock key={anime.animeId} anime={anime} />
  ));

  const animeEmptyBlock = (
    <div className="anime-search-empty-div">
      <img src={EmptyListImage} className="anime-search-empty-image" />
      <h1 className="anime-search-empty-header">Ничего не найдено</h1>
    </div>
  );

  const animeBlock = <div className="anime-box">{animeBlocks}</div>;

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

  return <div>{animeList.length !== 0 ? animeBlock : animeEmptyBlock}</div>;
}

export default AnimeBox;

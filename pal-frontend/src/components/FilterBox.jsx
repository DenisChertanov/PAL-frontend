import React, { useState, useEffect } from "react";

import "./css/FilterBox.css";

import FilterItemGenres from "./filter-items/anime-filter/genres/FilterItemGenres";
import FilterItemTypes from "./filter-items/anime-filter/types/FilterItemTypes";
import FilterItemStates from "./filter-items/anime-filter/states/FilterItemStates";
import FilterItemYear from "./filter-items/anime-filter/year/FilterItemYear";
import FilterItemSortBy from "./filter-items/anime-filter/sort-by/FilterItemSortBy";
import FilterItemWhoWatched from "./filter-items/anime-filter/who-watched/FilterItemWhoWatched";

function FilterBox() {
  const [genres, setGenres] = useState([]);
  const [types, setTypes] = useState([]);
  const [states, setStates] = useState([]);
  const [sorts, setSorts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/public/anime-search/filter-object")
      .then((result) => result.json())
      .then((filtersObject) => {
        setGenres(filtersObject.genres);
        setTypes(filtersObject.types);
        setStates(filtersObject.states);
        setSorts(filtersObject.sorts);
      })
      .catch((error) => {
        console.log(error);
        setGenres([]);
        setTypes([]);
        setStates([]);
        setSorts([]);
      });
  }, []);

  return (
    <div className="filter-box">
      <h1 className="filter-header">ФИЛЬТР АНИМЕ</h1>
      <FilterItemGenres needAdd={true} genres={genres} />
      <FilterItemGenres needAdd={false} genres={genres} />
      <FilterItemTypes types={types} />
      <FilterItemStates states={states} />
      <FilterItemYear />
      <FilterItemSortBy sorts={sorts} />
      <FilterItemWhoWatched />
      <button className="apply-filter-button">ПРИМЕНИТЬ</button>
    </div>
  );
}

export default FilterBox;

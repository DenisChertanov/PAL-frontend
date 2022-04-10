import React from "react";

import GenreFilterItem from "./GenreFilterItem";
import GenreApplyButton from "./GenreApplyButton";

function FilterItemGenres({ needAdd, genres }) {
  const genreFilterItems = genres.map((genre) => (
    <GenreFilterItem key={genre.id} genre={genre} />
  ));

  return (
    <div className="filter-item">
      <h1 className="filter-item-title">
        {needAdd ? "Выбрать жанры" : "Убрать жанры"}
      </h1>

      <div className="filter-item-multi-list">
        <button className="filter-multi-list-plus">
          <i className="fa-solid fa-plus" style={{ color: "#d72323" }}></i>
        </button>

        <div className="dropdown-genres-menu">
          <input
            type="text"
            className="dropdown-search-menu"
            placeholder="Искать"
          />

          <div className="scroll-div">{genreFilterItems}</div>

          <div className="scroll-div"></div>
        </div>

        {/* <div className="filter-buttons-grid">
          <GenreApplyButton />
          <GenreApplyButton />
          <GenreApplyButton />
          <GenreApplyButton />
        </div> */}
      </div>
    </div>
  );
}

export default FilterItemGenres;

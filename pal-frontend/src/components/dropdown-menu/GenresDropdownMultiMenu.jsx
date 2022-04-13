import React, { useState } from "react";

import "../css/GenresDropdownMultiMenu.css";

import GenreFilterItem from "../filter-items/anime-filter/genres/GenreFilterItem";

function GenresDropdownMultiMenu({ genres, ...props }) {
  const genreFilterItems = genres.map((genre) => (
    <GenreFilterItem key={genre.id} genre={genre} addGenre={props.addGenre} />
  ));

  return (
    <div className="dropdown-multi-menu">
      <input
        type="text"
        className="dropdown-search-menu"
        placeholder="Искать"
      />

      <div className="scroll-div">{genreFilterItems}</div>
    </div>
  );
}

export default GenresDropdownMultiMenu;

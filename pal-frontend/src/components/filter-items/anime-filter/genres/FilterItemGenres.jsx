import React, { useState } from "react";

import GenreFilterItem from "./GenreFilterItem";
import GenreApplyButton from "./GenreApplyButton";

function FilterItemGenres({ needAdd, genres, appliedGenres, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const getAppliedGenres = appliedGenres.map((appliedGenre) => (
    <GenreApplyButton
      key={appliedGenre.id}
      genre={appliedGenre}
      removeGenre={props.removeGenre}
    />
  ));

  return (
    <div className="filter-item">
      <h1 className="filter-item-title">
        {needAdd ? "Выбрать жанры" : "Убрать жанры"}
      </h1>

      <div
        className="filter-item-multi-list"
        style={isOpen ? { borderRadius: "10px 10px 0 0" } : {}}
      >
        <button
          className="filter-multi-list-plus"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        >
          <i className="fa-solid fa-plus" style={{ color: "#d72323" }}></i>
        </button>

        {isOpen && props.children}

        <div className="filter-buttons-grid">{getAppliedGenres}</div>
      </div>
    </div>
  );
}

export default FilterItemGenres;

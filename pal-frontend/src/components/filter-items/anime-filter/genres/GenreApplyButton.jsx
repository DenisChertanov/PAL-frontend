import React from "react";

function GenreApplyButton({ genre, ...props }) {
  return (
    <button
      className="filter-buttons-item"
      onClick={(event) => {
        props.removeGenre(genre);
        event.stopPropagation();
      }}
    >
      <i
        className="fa-solid fa-xmark"
        style={{ fontSize: "10px", marginRight: "7px" }}
      ></i>
      {genre.name}
    </button>
  );
}

export default GenreApplyButton;

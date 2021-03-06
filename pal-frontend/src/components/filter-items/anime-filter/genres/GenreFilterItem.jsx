import React from "react";

function GenreFilterItem({ genre, ...props }) {
  return (
    <div
      className="dropdown-genre-item"
      onClick={(event) => {
        !genre.isApplied && props.addGenre(genre);
        event.stopPropagation();
      }}
      style={{ cursor: "pointer" }}
    >
      <h1
        className="dropdown-one-item-menu-item"
        style={genre.isApplied ? { color: "#9A9999" } : {}}
      >
        {genre.name}
      </h1>
      <hr className="dropdown-hr"></hr>
    </div>
  );
}

export default GenreFilterItem;

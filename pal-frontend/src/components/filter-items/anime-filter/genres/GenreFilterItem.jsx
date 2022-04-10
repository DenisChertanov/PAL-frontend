import React from "react";

function GenreFilterItem({ genre }) {
  return (
    <div className="dropdown-genre-item">
      <h1 className="dropdown-one-item-menu-item">{genre.name}</h1>
      <hr className="dropdown-hr"></hr>
    </div>
  );
}

export default GenreFilterItem;

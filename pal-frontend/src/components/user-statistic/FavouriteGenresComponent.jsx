import React from "react";

import "./css/FavouriteGenresComponent.css";
import FavouriteGenresItem from "./FavouriteGenresItem";

function FavouriteGenresComponent({ favouriteGenres, ...props }) {
  const favouriteGenresItems = favouriteGenres.map((favouriteGenre) => (
    <FavouriteGenresItem
      key={favouriteGenre.genreId}
      favouriteGenre={favouriteGenre}
    />
  ));

  return (
    <div className="favourite-genres-main-div">
      <div className="favourite-genres-header">
        <h1 className="favourite-genre-header-text">Любимые жанры</h1>
      </div>

      <div className="favourite-genres-body">{favouriteGenresItems}</div>
    </div>
  );
}

export default FavouriteGenresComponent;

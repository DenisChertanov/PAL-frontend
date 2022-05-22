import React from "react";

import "./css/FavouriteGenresItem.css";

function FavouriteGenresItem({ favouriteGenre, ...props }) {
  return (
    <div className="favourite-genre-item-outer-div">
      <div className="favourite-genre-item-div">
        <h1 className="favourite-genre-item-order">
          {"#".concat(favouriteGenre.order)}
        </h1>

        <h1 className="favourite-genre-item-title">
          {favouriteGenre.genreTitle}
        </h1>

        <h1 className="favourite-genre-item-mark">
          {favouriteGenre.genreMark}
        </h1>
      </div>

      <hr className="favourite-genre-item-hr" />
    </div>
  );
}

export default FavouriteGenresItem;

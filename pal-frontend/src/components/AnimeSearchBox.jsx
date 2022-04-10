import React from "react";

import "./css/AnimeSearchBox.css";

function AnimeSearchBox() {
  return (
    <div className="search-box">
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Найти аниме по названию"
      />
    </div>
  );
}

export default AnimeSearchBox;

import React, { useState } from "react";

import "./css/AnimeSearchBox.css";

function AnimeSearchBox({ ...props }) {
  const [namePrefix, setNamePrefix] = useState("");

  return (
    <div className="search-box">
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Найти аниме по названию"
        value={namePrefix}
        onChange={(event) => {
          setNamePrefix(event.target.value);
          event.preventDefault();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.setNamePrefix(event.target.value);
            setNamePrefix("");
            event.preventDefault();
          }
        }}
      />
    </div>
  );
}

export default AnimeSearchBox;

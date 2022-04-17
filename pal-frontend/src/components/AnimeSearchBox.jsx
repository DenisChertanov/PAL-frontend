import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./css/AnimeSearchBox.css";

function AnimeSearchBox({ ...props }) {
  const [namePrefix, setNamePrefix] = useState("");
  const navigate = useNavigate();

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
            props.setPageNumber(1);
            setNamePrefix("");
            event.preventDefault();

            navigate("/anime");
          }
        }}
      />
    </div>
  );
}

export default AnimeSearchBox;

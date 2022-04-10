import React from "react";

var state = {
  id: "Демоны",
  name: "Демоны",
};

function GenreApplyButton() {
  return (
    <button className="filter-buttons-item">
      <i
        className="fa-solid fa-xmark"
        style={{ fontSize: "10px", marginRight: "3px" }}
      ></i>
      {state.name}
    </button>
  );
}

export default GenreApplyButton;

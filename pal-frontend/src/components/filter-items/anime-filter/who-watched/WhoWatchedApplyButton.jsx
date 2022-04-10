import React from "react";

function WhoWatchedApplyButton({ username }) {
  return (
    <button className="filter-buttons-item">
      <i
        className="fa-solid fa-xmark"
        style={{ fontSize: "10px", marginRight: "3px" }}
      ></i>
      {username}
    </button>
  );
}

export default WhoWatchedApplyButton;

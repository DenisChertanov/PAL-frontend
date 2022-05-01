import React from "react";

function WhoWatchedApplyButton({ user, ...props }) {
  return (
    <button
      className="filter-buttons-item"
      onClick={(event) => {
        props.removeWatchedByUser(user);
        event.stopPropagation();
      }}
    >
      <i
        className="fa-solid fa-xmark"
        style={{ fontSize: "10px", marginRight: "7px" }}
      ></i>
      {"@".concat(user.userName)}
    </button>
  );
}

export default WhoWatchedApplyButton;

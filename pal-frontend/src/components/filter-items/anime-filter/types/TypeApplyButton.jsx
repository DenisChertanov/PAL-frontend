import React from "react";

function TypeApplyButton({ type, ...props }) {
  return (
    <button
      className="filter-buttons-item"
      onClick={() => props.removeAppliedType(type)}
    >
      <i
        className="fa-solid fa-xmark"
        style={{ fontSize: "10px", marginRight: "7px" }}
      ></i>
      {type.name}
    </button>
  );
}

export default TypeApplyButton;

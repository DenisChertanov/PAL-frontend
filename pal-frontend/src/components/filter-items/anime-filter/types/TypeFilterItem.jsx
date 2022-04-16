import React from "react";

function TypeFilterItem({ type, ...props }) {
  return (
    <div
      className="dropdown-genre-item"
      onClick={() => !type.isApplied && props.addAppliedType(type)}
      style={{ cursor: "pointer" }}
    >
      <h1
        className="dropdown-one-item-menu-item"
        style={type.isApplied ? { color: "#9A9999" } : {}}
      >
        {type.name}
      </h1>
      <hr className="dropdown-hr"></hr>
    </div>
  );
}

export default TypeFilterItem;

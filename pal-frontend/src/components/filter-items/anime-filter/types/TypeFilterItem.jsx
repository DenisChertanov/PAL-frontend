import React from "react";

function TypeFilterItem({ type }) {
  return (
    <div className="dropdown-one-item">
      <h1 className="dropdown-one-item-menu-item">{type.name}</h1>
      <hr className="dropdown-hr"></hr>
    </div>
  );
}

export default TypeFilterItem;

import React from "react";

function SortByFilterItem({ sortType }) {
  return (
    <div className="dropdown-one-item">
      <h1 className="dropdown-one-item-menu-item">{sortType.name}</h1>
      <hr className="dropdown-hr" />
    </div>
  );
}

export default SortByFilterItem;

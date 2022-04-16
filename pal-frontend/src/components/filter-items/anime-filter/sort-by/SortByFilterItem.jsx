import React from "react";

function SortByFilterItem({ sort, ...props }) {
  return (
    <div
      className="dropdown-genre-item"
      onClick={() => !sort.isApplied && props.applySort(sort)}
      style={{ cursor: "pointer" }}
    >
      <h1
        className="dropdown-one-item-menu-item"
        style={sort.isApplied ? { color: "#9A9999" } : {}}
      >
        {sort.name}
      </h1>
      <hr className="dropdown-hr"></hr>
    </div>
  );
}

export default SortByFilterItem;

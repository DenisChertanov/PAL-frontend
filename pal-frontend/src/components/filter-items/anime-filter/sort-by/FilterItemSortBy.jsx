import React, { useState } from "react";

import SortByFilterItem from "./SortByFilterItem";

function FilterItemSortBy({ sorts, appliedSort, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Сортировать по</h1>

      <div
        className="filter-item-one-element"
        style={
          isOpen
            ? { borderRadius: "10px 10px 0 0", cursor: "pointer" }
            : { cursor: "pointer" }
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="filter-multi-list-arrow">
          <i
            className="fa-solid fa-angle-down"
            style={{ color: "#d72323" }}
          ></i>
        </button>

        {isOpen && props.children}

        <h1 className="filter-item-one-element-header">
          {appliedSort && appliedSort.name}
        </h1>
      </div>
    </div>
  );
}

export default FilterItemSortBy;

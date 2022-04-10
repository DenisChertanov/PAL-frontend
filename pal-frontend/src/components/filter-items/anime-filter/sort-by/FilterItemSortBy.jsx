import React from "react";

import SortByFilterItem from "./SortByFilterItem";

function FilterItemSortBy({ sorts }) {
  const sortByFilterItems = sorts.map((sortType) => (
    <SortByFilterItem key={sortType.id} sortType={sortType} />
  ));

  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Сортировать по</h1>

      <div className="filter-item-one-element">
        <button className="filter-multi-list-arrow">
          <i
            className="fa-solid fa-angle-down"
            style={{ color: "#d72323" }}
          ></i>
        </button>

        <div className="dropdown-one-item-menu">{sortByFilterItems}</div>

        <h1 className="filter-item-one-element-header">Рейтингу</h1>
      </div>
    </div>
  );
}

export default FilterItemSortBy;

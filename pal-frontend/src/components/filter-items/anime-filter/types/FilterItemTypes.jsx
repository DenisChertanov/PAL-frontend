import React from "react";

import TypeFilterItem from "./TypeFilterItem";

function FilterItemtypes({ types }) {
  const typeFilterItems = types.map((type) => (
    <TypeFilterItem key={type.id} type={type} />
  ));

  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Тип аниме</h1>

      <div className="filter-item-one-element">
        <button className="filter-multi-list-arrow">
          <i
            className="fa-solid fa-angle-down"
            style={{ color: "#d72323" }}
          ></i>
        </button>

        <div className="dropdown-one-item-menu">{typeFilterItems}</div>

        <h1 className="filter-item-one-element-header">Сериал</h1>
      </div>
    </div>
  );
}

export default FilterItemtypes;

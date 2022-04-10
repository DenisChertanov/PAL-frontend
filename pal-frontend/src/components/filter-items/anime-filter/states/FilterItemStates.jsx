import React from "react";

import StateFilterItem from "./StateFilterItem";

function FilterItemStates({ states }) {
  const stateFilterItems = states.map((state) => (
    <StateFilterItem key={state.id} state={state} />
  ));

  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Статус аниме</h1>

      <div className="filter-item-one-element">
        <button className="filter-multi-list-arrow">
          <i
            className="fa-solid fa-angle-down"
            style={{ color: "#d72323" }}
          ></i>
        </button>

        <div className="dropdown-one-item-menu">{stateFilterItems}</div>

        <h1 className="filter-item-one-element-header">Вышел</h1>
      </div>
    </div>
  );
}

export default FilterItemStates;

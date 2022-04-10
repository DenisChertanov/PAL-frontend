import React from "react";

function StateFilterItem({ state }) {
  return (
    <div className="dropdown-one-item">
      <h1 className="dropdown-one-item-menu-item">{state.name}</h1>

      <hr className="dropdown-hr" />
    </div>
  );
}

export default StateFilterItem;

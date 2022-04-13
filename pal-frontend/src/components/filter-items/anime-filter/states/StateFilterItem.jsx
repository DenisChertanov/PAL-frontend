import React from "react";

function StateFilterItem({ state, ...props }) {
  return (
    <div
      className="dropdown-genre-item"
      onClick={() => !state.isApplied && props.addAppliedState(state)}
    >
      <h1
        className="dropdown-one-item-menu-item"
        style={state.isApplied ? { color: "#9A9999" } : {}}
      >
        {state.name}
      </h1>
      <hr className="dropdown-hr"></hr>
    </div>
  );
}

export default StateFilterItem;

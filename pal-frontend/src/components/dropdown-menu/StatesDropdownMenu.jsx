import React from "react";

import StateFilterItem from "../filter-items/anime-filter/states/StateFilterItem";

function StatesDropdownMenu({ states, ...props }) {
  const stateFilterItems = states.map((state) => (
    <StateFilterItem
      key={state.id}
      state={state}
      addAppliedState={props.addAppliedState}
    />
  ));

  return <div className="dropdown-multi-menu">{stateFilterItems}</div>;
}

export default StatesDropdownMenu;

import React from "react";

import TypeFilterItem from "../filter-items/anime-filter/types/TypeFilterItem";

function TypesDropdownMenu({ types, ...props }) {
  const typeFilterItems = types.map((type) => (
    <TypeFilterItem
      key={type.id}
      type={type}
      addAppliedType={props.addAppliedType}
    />
  ));

  return <div className="dropdown-multi-menu">{typeFilterItems}</div>;
}

export default TypesDropdownMenu;

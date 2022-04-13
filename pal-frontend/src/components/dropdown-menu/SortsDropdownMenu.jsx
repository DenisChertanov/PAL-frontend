import React from "react";

import SortByFilterItem from "../filter-items/anime-filter/sort-by/SortByFilterItem";

function SortsDropdownMenu({ sorts, ...props }) {
  const sortFilterItems = sorts.map((sort) => (
    <SortByFilterItem key={sort.id} sort={sort} applySort={props.applySort} />
  ));

  return <div className="dropdown-multi-menu">{sortFilterItems}</div>;
}

export default SortsDropdownMenu;

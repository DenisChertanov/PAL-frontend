import React, { useState } from "react";

import "../css/WhoWatchedDropdownMultiMenu.css";
import WhoWatchedFilterItem from "../filter-items/anime-filter/who-watched/WhoWatchedFilterItem";

function WhoWatchedDropdownMultiMenu({ watchedByUsers, ...props }) {
  const [userPrefix, setUserPrefix] = useState("");

  const whoWatchedFilterItems = watchedByUsers
    .filter((user) =>
      user.firstName.concat(" ").concat(user.lastName).startsWith(userPrefix)
    )
    .map((user) => (
      <WhoWatchedFilterItem
        key={user.userId}
        user={user}
        addWatchedByUser={props.addWatchedByUser}
      />
    ));

  return (
    <div className="dropdown-people-menu">
      <input
        type="text"
        className="dropdown-search-menu"
        placeholder="Искать"
        value={userPrefix}
        onChange={(event) => {
          setUserPrefix(event.target.value);
          event.preventDefault();
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      />

      <div className="scroll-div">{whoWatchedFilterItems}</div>
    </div>
  );
}

export default WhoWatchedDropdownMultiMenu;

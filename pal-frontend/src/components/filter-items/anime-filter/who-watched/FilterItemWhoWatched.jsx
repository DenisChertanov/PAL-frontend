import React, { useState } from "react";

import WhoWatchedFilterItem from "./WhoWatchedFilterItem";
import WhoWatchedApplyButton from "./WhoWatchedApplyButton";

function FilterItemWhoWatched({
  watchedByUsers,
  appliedWatchedByUsers,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  const getAppliedWhoWatched = appliedWatchedByUsers.map((watchedByUser) => (
    <WhoWatchedApplyButton
      key={watchedByUser.userId}
      user={watchedByUser}
      removeWatchedByUser={props.removeWatchedByUser}
    />
  ));

  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Просмотрено другими</h1>

      <div
        className="filter-item-multi-list"
        style={
          isOpen
            ? { borderRadius: "10px 10px 0 0", cursor: "pointer" }
            : { cursor: "pointer" }
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="filter-multi-list-plus">
          <i className="fa-solid fa-plus" style={{ color: "#d72323" }}></i>
        </button>

        {isOpen && props.children}

        <div className="filter-buttons-grid">{getAppliedWhoWatched}</div>
      </div>
    </div>
  );
}

export default FilterItemWhoWatched;

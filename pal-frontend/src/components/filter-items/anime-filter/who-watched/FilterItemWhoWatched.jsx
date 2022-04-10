import React from "react";

import WhoWatchedFilterItem from "./WhoWatchedFilterItem";
import WhoWatchedApplyButton from "./WhoWatchedApplyButton";

import UserLogo from "../../../../img/denis-logo.jpg";

function FilterItemWhoWatched() {
  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Просмотрено другими</h1>
      <div className="filter-item-multi-list">
        <button className="filter-multi-list-plus">
          <i className="fa-solid fa-plus" style={{ color: "#d72323" }}></i>
        </button>

        <div className="dropdown-people-menu">
          <input
            type="text"
            className="dropdown-search-menu"
            placeholder="Искать"
          />

          <div className="scroll-div">
            <WhoWatchedFilterItem userLogo={UserLogo} />
            <WhoWatchedFilterItem userLogo={UserLogo} />
            <WhoWatchedFilterItem userLogo={UserLogo} />
            <WhoWatchedFilterItem userLogo={UserLogo} />
          </div>
        </div>

        <div className="filter-buttons-grid">
          <WhoWatchedApplyButton username={"@DChertanov"} />
        </div>
      </div>
    </div>
  );
}

export default FilterItemWhoWatched;

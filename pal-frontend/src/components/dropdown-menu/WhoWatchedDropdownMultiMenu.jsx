import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "../css/WhoWatchedDropdownMultiMenu.css";
import WhoWatchedFilterItem from "../filter-items/anime-filter/who-watched/WhoWatchedFilterItem";

function WhoWatchedDropdownMultiMenu({
  watchedByUsers,
  userPrefix,
  appliedWatchedByUsers,
  ...props
}) {
  const whoWatchedFilterItems = watchedByUsers.map((user) => (
    <WhoWatchedFilterItem
      key={user.userId}
      user={user}
      addWatchedByUser={props.addWatchedByUser}
      appliedWatchedByUsersIds={appliedWatchedByUsers.map(
        (user) => user.userId
      )}
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
          props.setNewUserPrefix(event.target.value);
          event.preventDefault();
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      />

      <div className="scroll-div" id="scrollableDiv">
        <InfiniteScroll
          dataLength={whoWatchedFilterItems.length}
          next={props.fetchNextPageWatchedByUsers}
          hasMore={props.hasMoreWatchedByUsers()}
          scrollableTarget="scrollableDiv"
        >
          {whoWatchedFilterItems}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default WhoWatchedDropdownMultiMenu;

import React from "react";

import EmptyUserLogo from "../../../../img/empty-user-logo.png";

function WhoWatchedFilterItem({ user, appliedWatchedByUsersIds, ...props }) {
  return (
    <div
      className="dropdown-people-item"
      onClick={(event) => {
        !user.isApplied &&
          !appliedWatchedByUsersIds.includes(user.userId) &&
          props.addWatchedByUser(user);
        event.stopPropagation();
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="dropdown-people-name-div">
        <img
          src={user.imageUrl ? user.imageUrl : EmptyUserLogo}
          className="dropdown-user-logo"
          onError={(e) => {
            e.target.src = EmptyUserLogo;
          }}
        />
        <h1
          className="dropdown-people-name"
          style={
            user.isApplied || appliedWatchedByUsersIds.includes(user.userId)
              ? { color: "#9A9999" }
              : {}
          }
        >
          {user.firstName
            .concat(" ")
            .concat(user.lastName)
            .concat(" (@")
            .concat(user.userName)
            .concat(")")}
        </h1>
      </div>

      <hr className="dropdown-hr" />
    </div>
  );
}

export default WhoWatchedFilterItem;

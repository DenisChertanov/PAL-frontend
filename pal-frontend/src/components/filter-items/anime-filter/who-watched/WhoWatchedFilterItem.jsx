import React from "react";

function WhoWatchedFilterItem({ user, ...props }) {
  return (
    <div
      className="dropdown-people-item"
      onClick={(event) => {
        !user.isApplied && props.addWatchedByUser(user);
        event.stopPropagation();
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="dropdown-people-name-div">
        <img src={user.imageUrl} className="dropdown-user-logo" />
        <h1
          className="dropdown-people-name"
          style={user.isApplied ? { color: "#9A9999" } : {}}
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

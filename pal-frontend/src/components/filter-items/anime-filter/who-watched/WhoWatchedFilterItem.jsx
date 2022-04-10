import React from "react";

var state = {
  name: "Денис Чертанов (@DChertanov)",
};

function WhoWatchedFilterItem({ userLogo }) {
  return (
    <div className="dropdown-people-item">
      <div className="dropdown-people-name-div">
        <img src={userLogo} className="dropdown-user-logo" />
        <h1 className="dropdown-people-name" style={{ color: "#9A9999" }}>
          {state.name}
        </h1>
      </div>
      <hr className="dropdown-hr" />
    </div>
  );
}

export default WhoWatchedFilterItem;

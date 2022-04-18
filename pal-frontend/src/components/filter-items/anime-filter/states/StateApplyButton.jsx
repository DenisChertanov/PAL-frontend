import React from "react";

function StateApplyButton({ state, ...props }) {
  return (
    <button
      className="filter-buttons-item"
      onClick={(event) => {
        props.removeAppliedState(state);
        event.stopPropagation();
      }}
    >
      <i
        className="fa-solid fa-xmark"
        style={{ fontSize: "10px", marginRight: "7px" }}
      ></i>
      {state.name}
    </button>
  );
}

export default StateApplyButton;

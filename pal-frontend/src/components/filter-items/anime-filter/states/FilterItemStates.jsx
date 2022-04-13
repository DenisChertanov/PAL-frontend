import React, { useState } from "react";

import StateApplyButton from "./StateApplyButton.jsx";

function FilterItemStates({ states, appliedStates, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const getAppliedStates = appliedStates.map((appliedState) => (
    <StateApplyButton
      key={appliedState.id}
      state={appliedState}
      removeAppliedState={props.removeAppliedState}
    />
  ));

  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Статус аниме</h1>

      <div
        className="filter-item-one-element"
        style={isOpen ? { borderRadius: "10px 10px 0 0" } : {}}
      >
        <button
          className="filter-multi-list-arrow"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className="fa-solid fa-angle-down"
            style={{ color: "#d72323" }}
          ></i>
        </button>

        {isOpen && props.children}

        <div className="filter-buttons-grid">{getAppliedStates}</div>
      </div>
    </div>
  );
}

export default FilterItemStates;

import React, { useState } from "react";

import TypeApplyButton from "./TypeApplyButton";

function FilterItemtypes({ types, appliedTypes, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const getAppliedTypes = appliedTypes.map((appliedType) => (
    <TypeApplyButton
      key={appliedType.id}
      type={appliedType}
      removeAppliedType={props.removeAppliedType}
    />
  ));

  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Тип аниме</h1>

      <div
        className="filter-item-one-element"
        style={
          isOpen
            ? { borderRadius: "10px 10px 0 0", cursor: "pointer" }
            : { cursor: "pointer" }
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="filter-multi-list-arrow">
          <i
            className="fa-solid fa-angle-down"
            style={{ color: "#d72323" }}
          ></i>
        </button>

        {isOpen && props.children}

        <div className="filter-buttons-grid">{getAppliedTypes}</div>
      </div>
    </div>
  );
}

export default FilterItemtypes;

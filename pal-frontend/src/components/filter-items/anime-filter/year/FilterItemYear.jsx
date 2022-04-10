import React from "react";

function FilterItemYear() {
  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Год</h1>
      <div className="year-input-grid">
        <input
          type="text"
          name="year-from"
          className="year-input"
          placeholder="от"
        />
        <input
          type="text"
          name="year-to"
          className="year-input"
          placeholder="до"
        />
      </div>
    </div>
  );
}

export default FilterItemYear;

import React from "react";

function FilterItemYear({ yearFrom, yearTo, ...props }) {
  return (
    <div className="filter-item">
      <h1 className="filter-item-title">Год</h1>
      <div className="year-input-grid">
        <input
          type="text"
          name="year-from"
          className="year-input"
          placeholder="от"
          value={yearFrom}
          onChange={(event) => {
            props.setYearFrom(event.target.value);
            event.preventDefault();
          }}
        />

        <input
          type="text"
          name="year-to"
          className="year-input"
          placeholder="до"
          value={yearTo}
          onChange={(event) => {
            props.setYearTo(event.target.value);
            event.preventDefault();
          }}
        />
      </div>
    </div>
  );
}

export default FilterItemYear;

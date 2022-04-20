import React from "react";

import AnimeBox from "../components/AnimeBox.jsx";
import PageBox from "../components/PageBox.jsx";

import "./css/SearchAnimePage.css";

function SearchAnimePage({ page, appliedFilters, authJwtToken, ...props }) {
  return (
    <div className="search-anime-page">
      <AnimeBox
        page={page}
        appliedFilters={appliedFilters}
        setTotalPages={props.setTotalPages}
        authJwtToken={authJwtToken}
      />
      <PageBox
        page={page}
        setPageNumber={props.setPageNumber}
        style={{ gridRow: "2" }}
      />
    </div>
  );
}

export default SearchAnimePage;

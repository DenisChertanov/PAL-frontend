import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import FilterBox from "../components/FilterBox.jsx";
import AnimePage from "./AnimePage.jsx";
import SearchAnimePage from "./SearchAnimePage.jsx";
import AnimeSearchBox from "../components/AnimeSearchBox.jsx";

import "./css/SearchPage.css";

function SearchPage({ authJwtToken, ...props }) {
  const [page, setPage] = useState({
    pageNumber: 1,
    totalPages: 0,
    pagesStub: [1],
  });

  const [appliedFilters, setAppliedFilters] = useState({
    page: {
      pageNumber: 0,
      pageSize: 8,
    },
    filter: {
      includeGenres: [],
      excludeGenres: [],
      includeTypes: [],
      includeStates: [],
      yearFrom: "",
      yearTo: "",
      namePrefix: "",
    },
  });

  function setPageNumber(newPageNumber) {
    if (newPageNumber < 1 || newPageNumber > page.totalPages) {
      return;
    }

    const newPage = { ...page };
    newPage.pageNumber = newPageNumber;
    setPage(newPage);

    const newAppliedFilters = { ...appliedFilters };
    newAppliedFilters.page.pageNumber = newPageNumber - 1;
    setAppliedFilters(newAppliedFilters);
  }

  function setTotalPages(newTotalPages) {
    const newPage = { ...page };
    newPage.totalPages = newTotalPages;

    newPage.pagesStub = [];
    for (let i = 1; i <= newTotalPages; ++i) {
      newPage.pagesStub.push(i);
    }

    setPage(newPage);
  }

  function setFilterForAppliedFilters(
    newIncludeGenres,
    newExcludeGenres,
    newIncludeTypes,
    newIncludeStates,
    newYearFrom,
    newYearTo,
    newExcludeWatched
  ) {
    const newAppliedFilters = { ...appliedFilters };
    newAppliedFilters.filter.includeGenres = newIncludeGenres;
    newAppliedFilters.filter.excludeGenres = newExcludeGenres;
    newAppliedFilters.filter.includeTypes = newIncludeTypes;
    newAppliedFilters.filter.includeStates = newIncludeStates;
    newAppliedFilters.filter.yearFrom = newYearFrom;
    newAppliedFilters.filter.yearTo = newYearTo;
    newAppliedFilters.filter.excludeWatched = newExcludeWatched;

    setAppliedFilters(newAppliedFilters);
  }

  function setNamePrefix(newNamePrefix, authJwtToken) {
    const newAppliedFilters = { ...appliedFilters };
    newAppliedFilters.filter.namePrefix = newNamePrefix;

    setAppliedFilters(newAppliedFilters);
  }

  return (
    <div className="search-page-main-div">
      <AnimeSearchBox
        setNamePrefix={setNamePrefix}
        setPageNumber={setPageNumber}
      />
      <FilterBox
        setFilterForAppliedFilters={setFilterForAppliedFilters}
        setPageNumber={setPageNumber}
      />

      <Routes>
        <Route
          index
          element={
            <SearchAnimePage
              page={page}
              appliedFilters={appliedFilters}
              setNamePrefix={setNamePrefix}
              setTotalPages={setTotalPages}
              setPageNumber={setPageNumber}
              authJwtToken={authJwtToken}
            />
          }
        />
        <Route path=":id" element={<AnimePage authJwtToken={authJwtToken} />} />
      </Routes>
    </div>
  );
}

export default SearchPage;

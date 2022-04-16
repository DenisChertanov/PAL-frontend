import React, { useState, useEffect } from "react";

import "./App.css";

import NavBar from "./components/NavBar";
import AnimeSearchBox from "./components/AnimeSearchBox";
import AnimeBox from "./components/AnimeBox";
import PageBox from "./components/PageBox";
import FilterBox from "./components/FilterBox";

function App() {
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
    newYearTo
  ) {
    const newAppliedFilters = { ...appliedFilters };
    newAppliedFilters.filter.includeGenres = newIncludeGenres;
    newAppliedFilters.filter.excludeGenres = newExcludeGenres;
    newAppliedFilters.filter.includeTypes = newIncludeTypes;
    newAppliedFilters.filter.includeStates = newIncludeStates;
    newAppliedFilters.filter.yearFrom = newYearFrom;
    newAppliedFilters.filter.yearTo = newYearTo;

    setAppliedFilters(newAppliedFilters);
  }

  function setNamePrefix(newNamePrefix) {
    const newAppliedFilters = { ...appliedFilters };
    newAppliedFilters.filter.namePrefix = newNamePrefix;

    setAppliedFilters(newAppliedFilters);
  }

  return (
    <div className="main-box">
      <NavBar />
      <AnimeSearchBox setNamePrefix={setNamePrefix} />
      <AnimeBox
        page={page}
        appliedFilters={appliedFilters}
        setTotalPages={setTotalPages}
      />
      <PageBox page={page} setPageNumber={setPageNumber} />
      <FilterBox setFilterForAppliedFilters={setFilterForAppliedFilters} />
    </div>
  );
}

export default App;

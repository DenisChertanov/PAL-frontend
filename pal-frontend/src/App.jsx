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
    totalPages: 1,
    pagesStub: [1],
  });

  function setPageNumber(newPageNumber) {
    if (newPageNumber < 1 || newPageNumber > page.totalPages) {
      return;
    }

    const newPage = { ...page };
    newPage.pageNumber = newPageNumber;
    setPage(newPage);
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

  return (
    <div className="main-box">
      <NavBar />
      <AnimeSearchBox />
      <AnimeBox page={page} setTotalPages={setTotalPages} />
      <PageBox page={page} setPageNumber={setPageNumber} />
      <FilterBox />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import "./css/UserSearchPage.css";

import UserCard from "../components/UserCard";
import UserSearchBox from "../components/UserSearchBox";
import PageBox from "../components/PageBox";

function UserSearchPage() {
  const [namePrefix, setNamePrefix] = useState("");
  const [page, setPage] = useState({
    pageNumber: 1,
    totalPages: 1,
    pagesStub: [1],
  });

  const userCards = [1, 2, 3].map((num) => <UserCard key={num} num={num} />);

  function setPageNumber(newPageNumber) {
    setPage(newPageNumber);
  }

  return (
    <div className="user-search-page-main-div">
      <UserSearchBox namePrefix={namePrefix} setNamePrefix={setNamePrefix} />

      <div className="user-grid">
        <h1>wweew</h1>
        <h1>wweew</h1>
        <h1>wweew</h1>
      </div>

      {/* <PageBox
        page={page}
        setPageNumber={setPageNumber}
        style={{ gridRow: "3", gridColumn: "1" }}
      /> */}
    </div>
  );
}

export default UserSearchPage;

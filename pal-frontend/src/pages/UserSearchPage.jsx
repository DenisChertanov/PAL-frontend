import React, { useState, useEffect } from "react";

import "./css/UserSearchPage.css";

import UserSearchCard from "../components/UserSearchCard";
import UserSearchBox from "../components/UserSearchBox";
import PageBox from "../components/PageBox";

function UserSearchPage() {
  const [namePrefix, setNamePrefix] = useState("");
  const [needSearchNamePrefix, setNeedSearchNamePrefix] = useState("");
  const [page, setPage] = useState({
    pageNumber: 1,
    totalPages: 0,
    pagesStub: [1],
  });
  const [users, setUsers] = useState([]);

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

  const userCards = users.map((user) => (
    <UserSearchCard
      key={user.userId}
      user={user}
      style={{ display: "block" }}
    />
  ));

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: { pageNumber: page.pageNumber - 1, pageSize: 20 },
        userPrefix: needSearchNamePrefix,
      }),
    };

    fetch("http://localhost:8081/api/public/user/search", requestOptions)
      .then((result) => result.json())
      .then((usersPage) => {
        setTotalPages(usersPage.totalPages);
        setUsers(usersPage.content);
      })
      .catch((error) => {
        console.log(error);
        setUsers([]);
        setPage({ pageNumber: 1, totalPages: 0, pagesStub: [1] });
      });
  }, [page.pageNumber, needSearchNamePrefix]);

  return (
    <div className="user-search-page-main-div">
      <UserSearchBox
        namePrefix={namePrefix}
        setNamePrefix={setNamePrefix}
        setNeedSearchNamePrefix={setNeedSearchNamePrefix}
        setPageNumber={setPageNumber}
      />

      <div className="user-grid">{userCards}</div>

      <PageBox
        page={page}
        setPageNumber={setPageNumber}
        style={{ gridRow: "3", gridColumn: "1" }}
      />
    </div>
  );
}

export default UserSearchPage;

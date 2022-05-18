import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";

// import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import Layout from "./pages/Layout";
import UserPage from "./pages/UserPage";
import UserSearchPage from "./pages/UserSearchPage";
import Modal from "./components/Modal";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const [authJwtToken, setAuthJwtToken] = useState(
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhOGFkZThkYy02ZDExLTQxNzUtOGY2OS04YjY1NDU3ZTU3N2QiLCJpYXQiOjE2NTAyMDI0MzQsImV4cCI6MTY3NjEyMjQzNH0.S3n4DIbQuzdKC8a2v67Pvzwdj83e4lUAaWsL5LwKkTTOVjEQTmHOvxUdmfUdJaIPHMqqxMyH9HzRwrjANrBkiQ"
  );
  const [userId, setUserId] = useState("a8ade8dc-6d11-4175-8f69-8b65457e577d");
  const [userInfo, setUserInfo] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [modalChildren, setModalChildren] = useState();

  useEffect(() => {
    fetch(`http://localhost:8081/api/public/user/get-by-id/${userId}`)
      .then((result) => result.json())
      .then((userInfoDto) => {
        setUserInfo(userInfoDto);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app-div">
      <Routes>
        <Route
          path="/"
          element={<Layout userId={userId} userInfo={userInfo} />}
        >
          <Route index element={<Navigate replace to="/anime" />} />
          <Route
            path="anime/*"
            element={<SearchPage authJwtToken={authJwtToken} />}
          />
          <Route
            path="user/:id"
            element={
              <UserPage
                authJwtToken={authJwtToken}
                userId={userId}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                modalChildren={modalChildren}
                setUpdateModal={setUpdateModal}
                setModalChildren={setModalChildren}
              />
            }
          />
          <Route path="user-search" element={<UserSearchPage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
        <Route path="login" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        updateModal={updateModal}
      >
        {modalChildren}
      </Modal>
    </div>
  );
}

export default App;

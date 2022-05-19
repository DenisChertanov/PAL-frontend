import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "./App.css";

import SearchPage from "./pages/SearchPage";
import Layout from "./pages/Layout";
import UserPage from "./pages/UserPage";
import UserSearchPage from "./pages/UserSearchPage";
import Modal from "./components/Modal";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import axios from "axios";

function App() {
  const [authJwtToken, setAuthJwtToken] = useState();
  const [userId, setUserId] = useState();
  const [userInfo, setUserInfo] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [modalChildren, setModalChildren] = useState();

  let navigate = useNavigate();

  function setAllByUserInfo(newUserInfo) {
    setUserId(newUserInfo.userId);
    setUserInfo(newUserInfo);
  }

  function logOut() {
    setAuthJwtToken();
    setUserId();
    setUserInfo();

    Cookies.remove("auth-token");

    navigate("/login");
  }

  async function signUp(signUpObject) {
    axios
      .post("http://localhost:8081/api/public/auth/signup", signUpObject)
      .then((response) => {
        logIn(signUpObject.username, signUpObject.password);
        navigate("/login");
      });
  }

  async function logIn(username, password) {
    var credentials = btoa(username + ":" + password);
    // console.log(credentials);

    axios
      .get("http://localhost:8081/api/public/auth/signin", {
        headers: { Authorization: "Basic ".concat(credentials) },
      })
      .then((response) => {
        // console.log(response.data);
        Cookies.set("auth-token", response.data);
        getMe();
      });
  }

  async function getMe() {
    const token = Cookies.get("auth-token");

    if (token) {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer ".concat(token),
        },
      };

      fetch("http://localhost:8081/api/public/user/me", requestOptions)
        .then((result) => result.json())
        .then((resultUserInfo) => {
          setAuthJwtToken(token);
          setAllByUserInfo(resultUserInfo);
          navigate("/anime");
        })
        .catch(() => {
          console.log("Cant authorize");
        });
    }
  }

  useEffect(() => {
    if (userInfo == undefined) {
      const token = Cookies.get("auth-token");

      if (token) {
        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: "Bearer ".concat(token),
          },
        };

        fetch("http://localhost:8081/api/public/user/me", requestOptions)
          .then((result) => result.json())
          .then((resultUserInfo) => {
            setAuthJwtToken(token);
            setAllByUserInfo(resultUserInfo);
          })
          .catch(() => {
            console.log("Cant authorize");
            navigate("/login");
          });
      } else {
        console.log("Token not exists");
        navigate("/login");
      }
    }
  }, []);

  const routeToSearchPage = (
    <Route
      path="anime/*"
      element={<SearchPage authJwtToken={authJwtToken} />}
    />
  );

  const routeToUserPage = (
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
          logOut={logOut}
        />
      }
    />
  );

  return (
    <div className="app-div">
      <Routes>
        <Route
          path="/"
          element={<Layout userId={userId} userInfo={userInfo} />}
        >
          <Route index element={<Navigate replace to="/login" />} />
          {authJwtToken && routeToSearchPage}
          {authJwtToken && routeToUserPage}
          <Route path="user-search" element={<UserSearchPage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
        <Route
          path="login"
          element={
            <SignInPage
              authJwtToken={authJwtToken}
              userId={userId}
              userInfo={userInfo}
              setAuthJwtToken={setAuthJwtToken}
              setAllByUserInfo={setAllByUserInfo}
              logIn={logIn}
            />
          }
        />
        <Route path="signup" element={<SignUpPage signUp={signUp} />} />
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

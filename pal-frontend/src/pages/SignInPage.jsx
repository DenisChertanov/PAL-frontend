import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

import "./css/SignInPage.css";

import pal_logo from "../img/pal-logo.svg";
import axios from "axios";

function SignInPage({ authJwtToken, userId, userInfo, ...props }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
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
          props.setAuthJwtToken(token);
          props.setAllByUserInfo(resultUserInfo);
          navigate("/anime");
        })
        .catch(() => {
          console.log("Cant authorize");
        });
    }
  }, []);

  return (
    <div className="signin-div">
      <img src={pal_logo} className="signin-pal-logo" />

      <h1 className="signin-form-header">Логин:</h1>
      <input
        className="signin-form-input"
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <h1 className="signin-form-header" style={{ marginTop: "15px" }}>
        Пароль:
      </h1>
      <input
        className="signin-form-input"
        type={"password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.logIn(username, password);
          }
        }}
      />

      <button
        className="signin-button"
        onClick={() => props.logIn(username, password)}
      >
        Войти
      </button>

      <button className="login-google">
        <i
          className="fa-brands fa-google"
          style={{ marginRight: "10px", fontSize: "16px" }}
        ></i>
        Продолжить через Google
      </button>

      <Link to={"/signup"}>
        <h1 className="not-register-header">Ещё не зарегистрированы?</h1>
      </Link>
    </div>
  );
}

export default SignInPage;

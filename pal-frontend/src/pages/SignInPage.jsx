import React from "react";

import "./css/SignInPage.css";

import pal_logo from "../img/pal-logo.svg";

function SignInPage() {
  return (
    <div className="signin-div">
      <img src={pal_logo} className="signin-pal-logo" />

      <h1 className="signin-form-header">Логин:</h1>
      <input className="signin-form-input" type="text" />

      <h1 className="signin-form-header" style={{ marginTop: "15px" }}>
        Пароль:
      </h1>
      <input className="signin-form-input" type="text" />

      <button className="signin-button">Войти</button>

      <button className="login-google">
        <i
          className="fa-brands fa-google"
          style={{ marginRight: "10px", fontSize: "16px" }}
        ></i>
        Продолжить через Google
      </button>

      <h1 className="not-register-header">Ещё не зарегистрированы?</h1>
    </div>
  );
}

export default SignInPage;

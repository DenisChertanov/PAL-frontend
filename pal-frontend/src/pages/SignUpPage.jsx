import React from "react";

import "./css/SignUpPage.css";

import pal_logo from "../img/pal-logo.svg";

function SignUpPage() {
  return (
    <div className="signup-div">
      <img src={pal_logo} className="signup-pal-logo" />

      <h1 className="signup-form-header">Логин:</h1>
      <input className="signup-form-input" type="text" />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Пароль:
      </h1>
      <input className="signup-form-input" type="text" />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Имя:
      </h1>
      <input className="signup-form-input" type="text" />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Фамилия:
      </h1>
      <input className="signup-form-input" type="text" />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Номер телефона:
      </h1>
      <input className="signup-form-input" type="text" />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Почта:
      </h1>
      <input className="signup-form-input" type="text" />

      <button className="signup-button">Зарегистрироваться</button>
    </div>
  );
}

export default SignUpPage;

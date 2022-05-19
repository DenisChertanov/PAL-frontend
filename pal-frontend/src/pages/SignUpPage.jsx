import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./css/SignUpPage.css";

import pal_logo from "../img/pal-logo.svg";

function SignUpPage({ ...props }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [secondPassword, setSecondPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  let navigate = useNavigate();

  function signUp() {
    let signUpObject = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phone,
    };
    props.signUp(signUpObject);
  }

  return (
    <div className="signup-div">
      <img src={pal_logo} className="signup-pal-logo" />

      <h1 className="signup-form-header">Логин:</h1>
      <input
        className="signup-form-input"
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Пароль:
      </h1>
      <input
        className="signup-form-input"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Подтвердите пароль:
      </h1>
      <input
        className="signup-form-input"
        type="password"
        value={secondPassword}
        onChange={(e) => {
          setSecondPassword(e.target.value);
        }}
      />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Имя:
      </h1>
      <input
        className="signup-form-input"
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Фамилия:
      </h1>
      <input
        className="signup-form-input"
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Номер телефона:
      </h1>
      <input
        className="signup-form-input"
        type="text"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />

      <h1 className="signup-form-header" style={{ marginTop: "15px" }}>
        Почта:
      </h1>
      <input
        className="signup-form-input"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            signUp();
          }
        }}
      />

      <button className="signup-button" onClick={() => signUp()}>
        Зарегистрироваться
      </button>
    </div>
  );
}

export default SignUpPage;

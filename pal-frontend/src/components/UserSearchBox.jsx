import React from "react";

import "./css/UserSearchBox.css";

function UserSearchBox({ namePrefix, setNamePrefix }) {
  return (
    <div className="user-search-box">
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Найти пользователя по имени"
        value={namePrefix}
        onChange={(event) => {
          setNamePrefix(event.target.value);
          event.preventDefault();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // props.setNamePrefix(event.target.value);
            // props.setPageNumber(1);
            // setNamePrefix("");
            // event.preventDefault();
            // navigate("/anime");
          }
        }}
      />
    </div>
  );
}

export default UserSearchBox;

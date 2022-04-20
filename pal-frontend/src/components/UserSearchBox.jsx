import React from "react";

import "./css/UserSearchBox.css";

function UserSearchBox({ namePrefix, setNamePrefix, ...props }) {
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
            props.setNeedSearchNamePrefix(event.target.value);
            props.setPageNumber(1);
            event.preventDefault();
          }
        }}
      />
    </div>
  );
}

export default UserSearchBox;

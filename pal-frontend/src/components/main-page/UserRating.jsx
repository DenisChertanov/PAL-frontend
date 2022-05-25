import React from "react";

import "./css/UserRating.css";
import UserRatingItem from "./UserRatingItem";

function UserRating({ userRatingPeriod, userRatingList, ...props }) {
  const userRatingElements = userRatingList.map((userRatingElement) => (
    <UserRatingItem
      key={userRatingElement.userId}
      userRatingElement={userRatingElement}
      navigateToUserPage={props.navigateToUserPage}
    />
  ));

  return (
    <div className="user-rating-outer-div">
      <div className="user-rating-header-div">
        <h1 className="user-rating-header">
          {"Рейтинг пользователей за ".concat(userRatingPeriod)}
        </h1>
      </div>

      <div className="user-rating-card-outer-div">
        <div className="user-rating-scroll-div">{userRatingElements}</div>
      </div>
    </div>
  );
}

export default UserRating;

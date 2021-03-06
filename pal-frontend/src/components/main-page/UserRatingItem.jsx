import React from "react";

import "./css/UserRatingItem.css";
import EmptyUserLogo from "../..//img/empty-user-logo.png";

function UserRatingItem({ userRatingElement, ...props }) {
  return (
    <div
      className="user-rating-item-outer-div"
      onClick={() => props.navigateToUserPage(userRatingElement.username)}
    >
      <div className="user-rating-item-main-div">
        <h1 className="user-rating-item-order">
          {"#".concat(userRatingElement.order)}
        </h1>

        <img
          className="user-rating-item-image"
          src={
            userRatingElement.imageUrl
              ? userRatingElement.imageUrl
              : EmptyUserLogo
          }
          onError={(e) => {
            e.target.src = EmptyUserLogo;
          }}
        />

        <h1 className="user-rating-item-name">
          {userRatingElement.firstName
            .concat(" ")
            .concat(userRatingElement.lastName)}
          <br />
          {"(@".concat(userRatingElement.username).concat(")")}
        </h1>

        <h1 className="user-rating-item-count">
          {userRatingElement.count.toString().concat(" шт")}
        </h1>
      </div>

      <hr className="user-rating-item-hr" />
    </div>
  );
}

export default UserRatingItem;

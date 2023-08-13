import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserInfo = () => {
  const { isAuthenticated, isLoading, user, logout } = useAuth0();

  // Parse the provided date string
  const addedDate = isAuthenticated && new Date(user.updated_at);

  // Define month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract date components
  const year = isAuthenticated && addedDate.getFullYear();
  const month = isAuthenticated && addedDate.getMonth(); // Months are 0-based, so we don't need to adjust
  const day = isAuthenticated && addedDate.getDate();

  return isAuthenticated ? (
    <section className="user-box-section">
      <div className="user-box">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className="user-box__image">
              <img src={user.picture} alt="User Image" />
            </div>
            <div className="user-box__info">
              <h2>
                {user.given_name
                  ? user.given_name + " " + user.family_name
                  : user.nickname}
              </h2>
              <p className="user-email">
                <span className="email-icon"></span>
                {user.email}
              </p>
              <p className="user-date">
                <span className="date-icon"></span>Added to Meet at{" "}
                {`${monthNames[month]} ${day}, ${year}`}
              </p>
            </div>
            <button
              className="purple"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </section>
  ) : (
    window.location.origin
  );
};

export default UserInfo;

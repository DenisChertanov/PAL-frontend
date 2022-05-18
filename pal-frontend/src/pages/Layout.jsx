import React from "react";
import { Link, Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

function Layout({ userId, userInfo }) {
  return (
    <div className="main-box" style={{ paddingLeft: "20px" }}>
      <NavBar userId={userId} userInfo={userInfo} />
      <Outlet />
    </div>
  );
}

export default Layout;

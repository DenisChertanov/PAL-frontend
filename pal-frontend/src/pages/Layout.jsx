import React from "react";
import { Link, Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

function Layout({ userId }) {
  return (
    <div className="main-box" style={{ paddingLeft: "20px" }}>
      <NavBar userId={userId} />
      <Outlet />
    </div>
  );
}

export default Layout;

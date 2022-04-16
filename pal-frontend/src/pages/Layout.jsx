import React from "react";
import { Link, Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

function Layout() {
  return (
    <div className="main-box">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;

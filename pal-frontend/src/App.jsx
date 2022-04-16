import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";

// import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/anime" />} />
          <Route path="anime/*" element={<SearchPage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

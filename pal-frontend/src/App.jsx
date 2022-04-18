import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";

// import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import Layout from "./pages/Layout";
import UserPage from "./pages/UserPage";

function App() {
  const [authJwtToken, setAuthJwtToken] = useState(
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhOGFkZThkYy02ZDExLTQxNzUtOGY2OS04YjY1NDU3ZTU3N2QiLCJpYXQiOjE2NTAyMDI0MzQsImV4cCI6MTY3NjEyMjQzNH0.S3n4DIbQuzdKC8a2v67Pvzwdj83e4lUAaWsL5LwKkTTOVjEQTmHOvxUdmfUdJaIPHMqqxMyH9HzRwrjANrBkiQ"
  );
  const [userId, setUserId] = useState("a8ade8dc-6d11-4175-8f69-8b65457e577d");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout userId={userId} />}>
          <Route index element={<Navigate replace to="/anime" />} />
          <Route
            path="anime/*"
            element={<SearchPage authJwtToken={authJwtToken} />}
          />
          <Route
            path="user/:id"
            element={<UserPage authJwtToken={authJwtToken} />}
          />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

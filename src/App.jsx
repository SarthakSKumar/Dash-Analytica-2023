import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { getCookie } from "./utils/cookies.js";
import General from "./pages/General.jsx";
import Campaign from "./pages/Campaign.jsx";
import Maps from "./pages/Maps.jsx";
import Social from "./pages/Social.jsx";

import "./css/style.css";

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie("username")) setLoggedIn(true);
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname, setLoggedIn]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/general" element={<General />} />
        <Route exact path="/campaign" element={<Campaign />} />
        <Route exact path="/maps" element={<Maps />} />
        <Route exact path="/social" element={<Social />} />
      </Routes>
    </>
  );
}

export default App;

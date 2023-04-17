import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import General from "./pages/General.jsx";
import Campaign from "./pages/Campaign.jsx";
import Maps from "./pages/Maps.jsx";
import Social from "./pages/Social.jsx";
import withAuth from "./utils/withAuth.jsx";
import "./css/style.css";

function App() {
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

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

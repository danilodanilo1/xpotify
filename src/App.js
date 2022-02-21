import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from "./Pages/Album";
import Home from "./Pages/Home";
import GlobalStyle from "./globalStyles";
import Login from "./Pages/Login";

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="home" element={<Home />} />
      <Route exact path="album" element={<Album />} />
    </Routes>
    </>
  );
};

export default App;

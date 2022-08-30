import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Home />} />
    </Routes>
  );
};

export default MainRoute;

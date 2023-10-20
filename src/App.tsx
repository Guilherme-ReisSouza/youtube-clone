import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Sobre from "./pages/Sobre";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

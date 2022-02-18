import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

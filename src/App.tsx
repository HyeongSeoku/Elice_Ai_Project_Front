import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import LoggedInHome from "./pages/LoggedInHome";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loggedInHome" element={<LoggedInHome />} />
    </Routes>
  );
}

export default App;

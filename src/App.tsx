import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;

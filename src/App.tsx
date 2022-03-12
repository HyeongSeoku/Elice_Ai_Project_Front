import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import NotFoundErrorPage from "./pages/NotFoundErrorPage";
import Regist from "./pages/Regist";
import VideoAnalysis from "./pages/VideoAnalysis";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/analysis" element={<VideoAnalysis />} />
      <Route path="/register" element={<Regist />} />
      <Route path={"*"} element={<NotFoundErrorPage />} />
    </Routes>
  );
}

export default App;

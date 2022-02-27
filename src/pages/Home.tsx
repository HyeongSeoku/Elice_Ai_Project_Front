import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingModal } from "../components";
import HeaderMenu from "../components/HeaderMenu";
import LoginModal from "../components/LoginModal";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); //recoil 사용 필요

  const onModalBtnClick = () => {
    setIsModalOpen((current) => !current);
  };

  const onChangeLoadingState = () => {
    setIsLoading((current) => !current);
  };

  const onChangeLoginState = () => {
    setIsLoggedIn((current) => !current);
  };

  return (
    <div className="container">
      {!isLoggedIn && (
        <HeaderMenu
          isModalOpen={isModalOpen}
          onModalBtnClick={onModalBtnClick}
        />
      )}
      <Logo />
      <SearchBar
        isLoading={isLoading}
        onChangeLoadingState={onChangeLoadingState}
      />
      {isModalOpen && (
        <LoginModal
          isModalOpen={isModalOpen}
          onModalBtnClick={onModalBtnClick}
          isLoggedIn={isLoggedIn}
          onChangeLoginState={onChangeLoginState}
        />
      )}
      {isLoading && <LoadingModal />}
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "../atom";
import { LoadingModal } from "../components";
import HeaderMenu from "../components/HeaderMenu";
import LoginModal from "../components/LoginModal";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(loginState);

  const onModalBtnClick = () => {
    setIsModalOpen((current) => !current);
  };

  const onChangeLoadingState = () => {
    setIsLoading((current) => !current);
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
        />
      )}
      {isLoading && <LoadingModal />}
    </div>
  );
};

export default Home;

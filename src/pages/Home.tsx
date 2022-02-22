import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";
import LoginModal from "../components/LoginModal";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onModalBtnClick = () => {
    setIsModalOpen((current) => !current);
  };

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  return (
    <div className="container">
      <HeaderMenu isModalOpen={isModalOpen} onModalBtnClick={onModalBtnClick} />
      <Logo />
      <SearchBar />
      {isModalOpen && (
        <LoginModal
          isModalOpen={isModalOpen}
          onModalBtnClick={onModalBtnClick}
        />
      )}
    </div>
  );
};

export default Home;

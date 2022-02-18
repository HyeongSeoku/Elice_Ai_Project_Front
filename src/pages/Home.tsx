import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";

const Home = () => {
  //TODO : 로그인 버튼 컴포넌트 따로 뺼 예정
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onModalBtnClick = () => {
    setIsModalOpen((current) => !current);
  };

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  return (
    // <div className="w-full h-full flex flex-col justify-center items-center m-0 p-5">
    <div className="container">
      <button
        className="bg-green-200 py-2 px-5 rounded-xl"
        onClick={onModalBtnClick}
      >
        로그인
      </button>
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

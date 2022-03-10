import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState, modalState } from "../atom";
import { LoadingModal } from "../components";
import HeaderMenu from "../components/HeaderMenu";
import LoginModal from "../components/LoginModal";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import MainLayout from "../components/layout/MainLayout";

const Home = () => {
  const isModalOpen = useRecoilValue(modalState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(loginState);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  function onScroll() {
    console.log(window.scrollY);
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      //메모리 누수 막기 위해서
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onChangeLoadingState = () => {
    setIsLoading((current) => !current);
  };

  return (
    <div className="  mx-auto p-5  overflow-scroll">
      <HeaderMenu />
      <section
        className="flex flex-col justify-center items-center mx-auto p-5  overflow-hidden relative"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="font-bold text-4xl mb-5">
          한번의 검색으로 핵심을 알아보세요
        </div>
        <SearchBar
          isLoading={isLoading}
          onChangeLoadingState={onChangeLoadingState}
        />
        <div className="font-bold text-3xl mb-5">중요 해시</div>
        {isModalOpen && <LoginModal />}
        {isLoading && <LoadingModal />}
      </section>
      <section className="flex flex-row justify-center items-center">
        <div
          className="text-blue-300 font-bold text-2xl"
          style={{
            width: "500px",
          }}
        >
          <div>우리와 너무나도 밀접해진 영상 미디어들,</div>
          <div>바쁜 사회 속 아끼는 방법을 한가지 더 해보세요.</div>
        </div>
      </section>

      <div className="text-purple-300 font-bold text-2xl">
        주소와 검색 한번이면 완료.
      </div>
    </div>
  );
};

export default Home;

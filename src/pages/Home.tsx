import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState, loginUser, modalState } from "../atom";
import { LoadingModal } from "../components";
import HeaderMenu from "../components/HeaderMenu";
import LoginModal from "../components/LoginModal";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../components/SearchBar";
import MainLayout from "../components/layout/MainLayout";

import searchMainSrc from "../img/hash_main/titleColor2.png";
import youtubeMainSrc from "../img/hash_main/youtubeBlack.png";
import getSearchMainSrc from "../img/hash_main/getSearch_color.png";
import scrollMainSrc from "../img/hash_main/scroll_black.png";
import startSearchMainSrc from "../img/hash_main/green_search.png";

import intro1_1 from "../img/hash/page1-1.png";
import intro1_2 from "../img/hash/page1-2.png";
import intro1_3 from "../img/hash/page1-3.png";

import intro2_1 from "../img/hash/page2-1.png";
import intro2_2 from "../img/hash/page2-2.png";

import intro3 from "../img/hash/page3.png";
import intro4 from "../img/hash/page4.png";
import intro5_1 from "../img/hash/page5-1.png";
import intro5_2 from "../img/hash/page5-2.png";
import intro5_3 from "../img/hash/page5-3.png";
import intro5_4 from "../img/hash/page5-4.png";

import intro6 from "../img/hash/page6.png";
import intro7_1 from "../img/hash/page7-1.png";
import intro7_2 from "../img/hash/page7-2.png";
import intro7_3 from "../img/hash/page7-3.png";
import intro7_4 from "../img/hash/page7-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const isModalOpen = useRecoilValue(modalState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(loginState);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const searchRef = useRef<HTMLDivElement>(null);

  function onScroll() {
    // console.log(window.scrollY);
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

  const moveToSearchBar = () => {
    searchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mx-auto p-5  overflow-scroll box-border">
      <HeaderMenu />
      <section
        className="flex flex-col justify-center items-center mx-auto p-5  overflow-hidden"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="flex justify-center items-center mt-auto">
          <img src={youtubeMainSrc} className="w-96" />
        </div>
        <div className="flex justify-center items-center">
          <img src={getSearchMainSrc} className="w-96" />
        </div>
        <div className="flex justify-center items-center mt-auto opacity-70">
          <img src={scrollMainSrc} className="w-48" />
        </div>
        <div className="mt-10 text-5xl font-bold text-center angleDown mb-10">
          <FontAwesomeIcon icon={faAngleDown} onClick={moveToSearchBar} />
          <img
            className="invisible w-60 downMsg mt-4"
            src={startSearchMainSrc}
          />
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center mx-auto p-5 text-center overflow-hidden youtubeSection"
        style={{
          width: "100%",
          height: "100vh",
          opacity: (scrollPosition - 280.5) / 200,
        }}
      >
        <div className="flex justify-center items-center">
          <img
            src={intro1_1}
            className="w-80"
            style={{ opacity: (scrollPosition - 410) / 200 }}
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <img
            src={intro1_2}
            className="w-80"
            style={{ opacity: (scrollPosition - 530) / 200 }}
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          <img
            src={intro1_3}
            className="w-80"
            style={{ opacity: (scrollPosition - 580) / 200 }}
          />
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center mx-auto p-5 text-center overflow-hidden searchSection "
        style={{
          width: "100%",
          height: "100vh",
          opacity: (scrollPosition - 1210) / 200,
        }}
      >
        <div className="flex justify-center items-center">
          <div
            className="text-3xl font-bold"
            style={{ opacity: (scrollPosition - 1400) / 200 }}
          >
            원하는 유튜브 영상의 URL을 검색
          </div>
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center mx-auto p-5  overflow-hidden "
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="font-bold text-4xl mb-5" ref={searchRef}>
          한번의 검색으로 핵심을 알아보세요
        </div>
        <SearchBar
          isLoading={isLoading}
          onChangeLoadingState={onChangeLoadingState}
        />

        <div className="text-slate-500 mt-3">
          1시간 이내 유튜브 URL만 입력해주세요.
        </div>
        <div className="text-slate-500 text-sm">
          실시간 방송과 한국어 외 다른 언어의 영상은 지원하지 않습니다
        </div>
        {isModalOpen && <LoginModal />}
        {isLoading && <LoadingModal />}
      </section>
    </div>
  );
};

export default Home;

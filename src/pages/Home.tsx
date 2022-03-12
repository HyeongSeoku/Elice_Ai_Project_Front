import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState, loginUser, modalState } from "../atom";
import { LoadingModal } from "../components";
import HeaderMenu from "../components/HeaderMenu";
import LoginModal from "../components/LoginModal";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import MainLayout from "../components/layout/MainLayout";

import searchMainSrc from "../img/hash_main/titleColor2.png";
import youtubeMainSrc from "../img/hash_main/youtubeBlack.png";
import getSearchMainSrc from "../img/hash_main/getSearch_color.png";

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
        className="flex flex-col justify-center items-center mx-auto p-5  overflow-hidden"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="flex justify-center items-center">
          <img src={youtubeMainSrc} className="w-96" />
        </div>
        <div className="flex justify-center items-center">
          <img src={getSearchMainSrc} className="w-96" />
        </div>
        <div className="mt-auto">
          {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
          아래로!(아이콘 미해결)
        </div>
        <div
          className="flex justify-center items-center"
          style={{
            opacity: (scrollPosition - 120.5) / 20,
          }}
        >
          <img src={intro1_2} className="w-80" />
        </div>
        <div
          className="flex justify-center items-center"
          style={{
            opacity: (scrollPosition - 122.5) / 20,
          }}
        >
          <img src={intro1_3} className="w-80" />
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center mx-auto p-5  overflow-hidden"
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="font-bold text-4xl mb-5">
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

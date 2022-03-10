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
    <div className="w-full h-full flex flex-col justify-center items-center mx-auto p-5  overflow-scroll">
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
      <section className="w-full relative">
        <div
          className="text-blue-300 font-bold text-2xl  "
          style={{
            transform: `translateX(${scrollPosition}px)`,
            width: "500px",
          }}
        >
          Qui quis proident mollit dolore excepteur adipisicing. Sit adipisicing
          sunt aute irure in dolor sit laboris magna sunt eiusmod. Dolore veniam
          qui amet est in cupidatat ullamco. Culpa nulla aliquip elit proident
          sunt. Nostrud est deserunt cillum adipisicing voluptate minim. Cillum
          nisi incididunt id ea culpa.
        </div>
      </section>
      <div className="text-green-300 font-bold text-2xl">
        Qui quis proident mollit dolore excepteur adipisicing. Sit adipisicing
        sunt aute irure in dolor sit laboris magna sunt eiusmod. Dolore veniam
        qui amet est in cupidatat ullamco. Culpa nulla aliquip elit proident
        sunt. Nostrud est deserunt cillum adipisicing voluptate minim. Cillum
        nisi incididunt id ea culpa.
      </div>
      <div className="text-red-300 font-bold text-2xl">
        Qui elit ut aliquip laborum. Voluptate id cillum dolore aute ad minim et
        labore aliquip proident magna. Labore incididunt id esse anim id do
        aliquip nisi sit aute. Excepteur do elit adipisicing consequat
        excepteur. Labore fugiat voluptate reprehenderit duis enim incididunt
        cillum aliquip id anim.
      </div>
      <div className="text-purple-300 font-bold text-2xl">
        주소와 검색 한번이면 완료.
      </div>
    </div>
  );
};

export default Home;

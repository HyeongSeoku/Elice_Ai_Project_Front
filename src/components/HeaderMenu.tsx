import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { RecoilProps } from "RecoilModule";
import { Logo, UserInfo } from ".";
import { loginState, modalState } from "../atom";

const HeaderMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(loginState);
  const [isModalOpen, setIsModalOpen] = useRecoilState<boolean>(modalState);

  const onChangeLoginState = () => {
    if (isLoggedIn) {
      const logMsg = window.confirm("로그아웃 하시겠습니까?");
      if (logMsg) {
        setIsLoggedIn(false);
      } else {
        return;
      }
    }
  };

  const onModalChange = () => {
    setIsModalOpen((current) => !current);
  };

  return (
    <div className="flex flex-row fixed top-0 right-0 left-0 z-10 space-x-2 box-border p-3">
      <div className="flex-grow ml-3">
        <Logo />
      </div>
      <div className="flex felx-row justify-end items-baseline flex-grow mt-5 ">
        {isLoggedIn && (
          <div className="flex space-x-2 ">
            <Link to="/mypage">
              <UserInfo />
            </Link>
            <button
              className="bg-red-200 py-2 px-5 rounded-xl hover:bg-red-400"
              onClick={onChangeLoginState}
            >
              로그아웃
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <div className="flex space-x-2 ">
            <button
              className="bg-green-200 py-2 px-5 rounded-xl hover:bg-green-400"
              onClick={onModalChange}
            >
              로그인
            </button>
            <Link to="register">
              <button className="bg-blue-200 py-2 px-5 rounded-xl hover:bg-blue-400">
                회원가입
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;

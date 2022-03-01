import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { RecoilProps } from "RecoilModule";
import { loginState } from "../atom";

interface Props {
  isModalOpen: boolean;
  onModalBtnClick: () => void;
}

const HeaderMenu = ({ isModalOpen, onModalBtnClick }: Props) => {
  const isLoggedIn = useRecoilValue<boolean>(loginState);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <header className="w-full flex flex-row justify-end fixed top-0 right-0 left-0 space-x-2 box-border p-3">
      {isLoggedIn && (
        <Link to="/mypage">
          <button className="bg-slate-200 py-2 px-5 rounded-xl hover:bg-slate-400">
            마이 페이지 임시 버튼
          </button>
        </Link>
      )}
      {!isLoggedIn && (
        <div className="flex space-x-2 ">
          <button
            className="bg-green-200 py-2 px-5 rounded-xl hover:bg-green-400"
            onClick={onModalBtnClick}
          >
            로그인
          </button>
          <Link to="regist">
            <button className="bg-blue-200 py-2 px-5 rounded-xl hover:bg-blue-400">
              회원가입
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeaderMenu;

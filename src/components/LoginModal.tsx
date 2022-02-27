import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import commonApi from "../apis/commonApi";

interface Props {
  isModalOpen: boolean;
  onModalBtnClick: () => void;

  isLoggedIn: boolean;
  onChangeLoginState: () => void;
}

const LoginModal = ({
  isModalOpen,
  onModalBtnClick,
  isLoggedIn,
  onChangeLoginState,
}: Props) => {
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const onSubmitLogin = () => {
    //TODO : validation 검사 추가
    if (id === "" || pwd === "") {
      alert("아이디 또는 비밀번호를 확인해주세요.");
    } else {
      loginPost();
    }
  };

  const loginPost = async () => {
    try {
      await commonApi
        .send_login({ username: id, password: pwd })
        .then((response: any) => {
          if (response.status === 200) {
            alert("로그인 성공!");
            onChangeLoginState(); //로그인 상태 변경
            onModalBtnClick(); //모달 닫기
          }
        });
    } catch (e) {
      alert("아이디나 비밀번호를 다시 확인해주세요.");
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center z-10 fixed top-0 right-0 left-0 bottom-0  bg-slate-600 bg-opacity-75">
      <div className="py-10 px-10 flex flex-col justify-center items-center rounded-lg bg-slate-50 z-50  box-border">
        <div className="ml-auto mb-4">
          <FontAwesomeIcon icon={faX} onClick={onModalBtnClick} />
        </div>
        <Logo />
        <div className="flex flex-row items-baseline justify-center space-x-2">
          <label className="w-1/3 flex-initial">아이디</label>
          <input
            className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
            placeholder="ID"
            value={id}
            onChange={onIdChange}
          />
        </div>
        <div className="flex flex-row items-baseline space-x-2">
          <label className="w-1/3 flex-initial">비밀번호</label>
          <input
            className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
            type="password"
            placeholder="PASSWORD"
            value={pwd}
            onChange={onPwdChange}
          />
        </div>
        <div className="w-full flex justify-center items-center space-x-2 mt-10 mb-1">
          <button className="bg-blue-200 py-2 px-5 rounded-xl">회원가입</button>
          <button
            className="bg-green-200 py-2 px-5 rounded-xl"
            onClick={onSubmitLogin}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

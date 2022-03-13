import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import commonApi from "../apis/commonApi";
import { loginState, loginUser, modalState } from "../atom";
import { useRecoilState, useSetRecoilState } from "recoil";

const LoginModal = () => {
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const setIsModalOpen = useSetRecoilState(modalState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(loginState);
  const [userName, setUserName] = useRecoilState<string>(loginUser);

  const navigate = useNavigate();
  const location = useLocation();

  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const onModalBtnClick = () => {
    setIsModalOpen((current) => !current);
  };

  const onSubmitLogin = () => {
    //TODO : validation 검사 추가
    if (id === "" || pwd === "") {
      alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    }
    if (!isId(id)) {
      alert("아이디에는 영어와 숫자만 사용할수 있습니다.");
      return;
    }
    if (!isPassword(pwd)) {
      alert("비밀번호 형식이 맞지 않습니다.");
      return;
    } else {
      loginPost();
    }
  };

  const loginPost = async () => {
    try {
      await commonApi
        .send_login({ user_ID: id, password: pwd })
        .then((response: any) => {
          if (response.status === 200) {
            setIsLoggedIn(true); //로그인 상태 변경
            setUserName(response.data.user_ID);
            localStorage.setItem("login-token", response.data.access);
            localStorage.setItem("token-validity", response.data.refresh);
            onModalBtnClick(); //모달 닫기
          } else {
            console.error(response.error);
          }
        });
    } catch (e) {
      const failMsg = window.confirm("유저 정보가 없습니다. 가입하시겠습니까?");
      if (failMsg) {
        navigate("/register", { replace: true });
      } else {
        return;
      }
      setIsLoggedIn(false);
      console.error(e);
    }
  };

  function isId(asValue: string) {
    var regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    return regExp.test(asValue);
  }

  function isPassword(asValue: string) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    return regExp.test(asValue);
  }

  const onRegisterBtnClick = () => {
    location.pathname = "/";
    navigate("/register");
  };
  return (
    <div className="flex flex-col justify-center items-center z-10 fixed top-0 right-0 left-0 bottom-0  bg-slate-600 bg-opacity-75">
      <div className="py-10 px-10 flex flex-col justify-center items-center rounded-lg bg-slate-50 z-50  box-border">
        <div
          className="ml-auto mb-4 hover:bg-slate-400 cursor-pointer box-border p-4 rounded-md"
          onClick={onModalBtnClick}
        >
          <FontAwesomeIcon icon={faX} />
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
          <button
            className="bg-blue-200 py-2 px-5 rounded-xl"
            onClick={onRegisterBtnClick}
          >
            회원가입
          </button>

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

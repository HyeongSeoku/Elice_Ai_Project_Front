import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import commonApi from "../apis/commonApi";
import {
  ID_MAX_LENGTH,
  ID_MIN_LENGTH,
  PWD_MAX_LENGTH,
  PWD_MIN_LENGTH,
} from "../constants/standard";

const Regist = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");

  const navigate = useNavigate();

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const onChangePwdCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwdCheck(e.target.value);
  };

  const onSubmitRegist = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (email === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (pwd === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (pwdCheck === "") {
      alert("비밀번호 확인을 입력해주세요.");
      return;
    }
    if (pwd !== pwdCheck) {
      alert("비밀번호와 비밀번호 확인이 다릅니다!");
      return;
    }
    if (!isId(id)) {
      if (id.length < ID_MIN_LENGTH || id.length > ID_MAX_LENGTH) {
        alert(`비밀번호는 ${ID_MIN_LENGTH}~${ID_MAX_LENGTH}로 설정해주세요.`);
        return;
      } else {
        alert("비밀번호 형식이 맞지 않습니다.");
        return;
      }
    }
    if (!isPassword(pwd)) {
      if (pwd.length < PWD_MIN_LENGTH || pwd.length > PWD_MAX_LENGTH) {
        alert(`비밀번호는 ${PWD_MIN_LENGTH}~${PWD_MAX_LENGTH}로 설정해주세요.`);
        return;
      } else {
        alert("비밀번호 형식이 맞지 않습니다.");
        return;
      }
    }
    if (!isEmail(email)) {
      alert("이메일 형식이 맞지 않습니다.");
      return;
    } else {
      sendRequestRegist({ userId: id, userEmail: email, userPwd: pwd });
    }
  };

  const sendRequestRegist = async (data: any) => {
    try {
      await commonApi.send_regist(data).then((response: any) => {
        if (response?.status === 200) {
          alert("회원가입 성공");
          setId("");
          setEmail("");
          setPwd("");
          setPwdCheck("");
          navigate("/", { replace: true });
        } else {
          //TODO : 다양한 상황에 대응하도록 해야함
          alert("오류 발생!");
        }
      });
    } catch (e) {
      console.log(e);
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

  function isEmail(asValue: string) {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue);
  }

  return (
    <div className="container">
      <h1>회원가입 페이지</h1>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <form onSubmit={onSubmitRegist}>
          <div className="flex flex-row items-baseline space-x-2">
            <label className="w-1/3 flex-initial">아이디</label>
            <input
              className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
              placeholder="ID"
              onChange={onChangeId}
            />
          </div>
          <div className="flex flex-row items-baseline space-x-2">
            <label className="w-1/3 flex-initial">이메일</label>
            <input
              className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
              placeholder="EMAIL"
              onChange={onChangeEmail}
            />
          </div>
          <div className="flex flex-row items-baseline space-x-2">
            <label className="w-1/3 flex-initial">비밀번호</label>
            <input
              className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
              type="password"
              placeholder="PASSWORD"
              onChange={onChangePwd}
            />
          </div>
          <div className="flex flex-row items-baseline space-x-2">
            <label className="w-1/3 flex-initial">비밀번호 확인</label>
            <input
              className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
              type="password"
              placeholder="PASSWORD CHECK"
              onChange={onChangePwdCheck}
            />
          </div>
          <div className="flex flex-row items-baseline space-x-2">
            <button className="bg-green-200 py-2 px-5 rounded-xl">확인</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Regist;

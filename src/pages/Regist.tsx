import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import commonApi from "../apis/commonApi";

const Regist = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");

  const navigate = useNavigate();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const onChangePwdCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwdCheck(e.target.value);
  };

  const onSubmitRegist = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "") {
      alert("이름을 입력해주세요.");
      return;
    }
    if (id === "") {
      alert("아이디를 입력해주세요.");
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
    } else {
      sendRequestRegist({ userName: name, userId: id, userPwd: pwd });
    }
  };

  const sendRequestRegist = async (data: any) => {
    try {
      await commonApi.send_regist(data).then((response: any) => {
        if (response?.status === 200) {
          alert("회원가입 성공");
          setName("");
          setId("");
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

  return (
    <div className="container">
      <h1>회원가입 페이지</h1>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <form onSubmit={onSubmitRegist}>
          <div className="flex flex-row items-baseline space-x-2">
            <label className="w-1/3 flex-initial">이름</label>
            <input
              className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
              placeholder="NAME"
              onChange={onChangeName}
            />
          </div>
          <div className="flex flex-row items-baseline space-x-2">
            <label className="w-1/3 flex-initial">아이디</label>
            <input
              className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
              placeholder="ID"
              onChange={onChangeId}
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

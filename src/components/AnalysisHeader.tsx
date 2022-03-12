import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Logo, UserInfo } from ".";
import analysisApi from "../apis/analysisApi";
import { loginState, modalState } from "../atom";

interface Props {
  id: string;
}

const AnalysisHeader = ({ id }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(loginState);
  const [isModalOpen, setIsModalOpen] = useRecoilState<boolean>(modalState);
  console.log(id);

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

  const sendSaveRequeset = async (videoId: string, token?: string) => {
    try {
      await analysisApi.saveVideoReq(videoId, token).then((response: any) => {
        alert(response.data.detail);
        return response.data;
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onSaveBtnClick = () => {
    const userToken = "JWT " + localStorage.getItem("login-token")?.trim();
    console.log(userToken);
    if (userToken !== null) {
      sendSaveRequeset(id, userToken);
    } else console.log("동영상 저장 에러");
  };

  return (
    <div className="flex flex-row justify-end fixed top-0 right-0 left-0 space-x-2 z-10  box-border p-3">
      <div className="flex-grow ml-3">
        <Logo />
      </div>
      <div className="flex felx-row justify-end items-baseline flex-grow mt-5">
        {isLoggedIn && (
          <div className="flex space-x-2 ">
            <Link to="/mypage">
              <UserInfo />
            </Link>
            <button
              className="bg-red-200 py-2 px-5 rounded-xl hover:bg-red-400 h-10"
              onClick={onChangeLoginState}
            >
              로그아웃
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <div className="flex space-x-2 ">
            <button
              className="bg-green-200 py-2 px-5 rounded-xl hover:bg-green-400 h-10"
              onClick={onModalChange}
            >
              로그인
            </button>
          </div>
        )}
        <button
          className="bg-blue-200 py-2 px-5 rounded-xl ml-2 hover:bg-blue-400 h-10"
          onClick={onSaveBtnClick}
        >
          저장하기
        </button>
      </div>
    </div>
  );
};

export default AnalysisHeader;

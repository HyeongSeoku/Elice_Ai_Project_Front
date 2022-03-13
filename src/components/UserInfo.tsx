import { useRecoilValue } from "recoil";
import { loginUser } from "../atom";

const UserInfo = () => {
  const userName = useRecoilValue(loginUser);

  return (
    <div>
      <div className="bg-slate-400 w-auto h-10 rounded-3xl text-center" id="userBtn">
        {userName}
      </div>
      <div className="font-light text-sm" id="myPageDesc" >마이페이지</div>
    </div>
  );
};

export default UserInfo;

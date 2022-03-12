import { useRecoilValue } from "recoil";
import { loginUser } from "../atom";

const UserInfo = () => {
  const userName = useRecoilValue(loginUser);

  return (
    <div>
      <div className="bg-slate-400 w-auto h-10 rounded-3xl text-center">
        {userName}
      </div>
      <div>마이페이지</div>
    </div>
  );
};

export default UserInfo;

import Logo from "./Logo";

interface Props {
  isModalOpen: boolean;
  onModalBtnClick: () => void;
}

const LoginModal = ({ isModalOpen, onModalBtnClick }: Props) => {
  console.log(isModalOpen);
  return (
    <div className="flex flex-col justify-center items-center z-10 fixed top-0 right-0 left-0 bottom-0  bg-slate-600 bg-opacity-75">
      <div className="py-10 px-5 flex flex-col justify-center items-center rounded-lg bg-slate-50 z-50  box-border">
        <Logo />
        <div onClick={onModalBtnClick}>x</div>
        <form>
          <div className="flex flex-row items-baseline justify-center space-x-2">
            <label className=" flex-initial" style={{ width: "15%" }}>
              아이디
            </label>
            <input
              className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
              placeholder="ID"
            />
          </div>
          <div className="flex flex-row items-baseline space-x-2">
            <label className="w-1/3 flex-initial">비밀번호</label>
            <input
              className="w-2/3 py-2 px-5 rounded-lg bg-slate-300 mb-3 flex-initial"
              type="password"
              placeholder="PASSWORD"
            />
          </div>
          <div className="w-full flex justify-center items-center space-x-2">
            <button className="bg-blue-200 py-2 px-5 rounded-xl">
              회원가입
            </button>
            <button className="bg-green-200 py-2 px-5 rounded-xl">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

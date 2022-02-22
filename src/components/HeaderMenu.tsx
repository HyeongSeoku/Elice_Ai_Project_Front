interface Props {
  isModalOpen: boolean;
  onModalBtnClick: () => void;
}

const HeaderMenu = ({ isModalOpen, onModalBtnClick }: Props) => {
  return (
    <header className="w-full flex flex-row justify-end fixed top-0 right-0 left-0 space-x-2 box-border p-3">
      <button
        className="bg-green-200 py-2 px-5 rounded-xl hover:bg-green-400"
        onClick={onModalBtnClick}
      >
        로그인
      </button>
      <button className="bg-blue-200 py-2 px-5 rounded-xl hover:bg-blue-400">
        회원가입
      </button>
    </header>
  );
};

export default HeaderMenu;

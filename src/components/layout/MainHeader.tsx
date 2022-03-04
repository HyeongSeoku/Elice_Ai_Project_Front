import { HeaderMenu } from "..";

interface HeaderProps {
  isModalOpen: boolean;
  onModalBtnClick: () => void;
}

const MainHeader = () => {
  return (
    <header className="w-full flex flex-row">
      <HeaderMenu />
    </header>
  );
};

export default MainHeader;

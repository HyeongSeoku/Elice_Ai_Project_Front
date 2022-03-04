import { HeaderMenu } from "..";

interface HeaderProps {
  isModalOpen: boolean;
  onModalBtnClick: () => void;
}

const MainHeader = () => {
  return (
    <header className="flex flex-row w-full">
      {/* <HeaderMenu /> */}
    </header>
  );
};

export default MainHeader;

import { useNavigate } from "react-router-dom";
import LogoImg from "../img/elice_ai_logo.png";

const Logo = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div onClick={onClickHome}>
      <img className="w-auto h-16 laptop:h-20 m-0" src={LogoImg} />
    </div>
  );
};

export default Logo;

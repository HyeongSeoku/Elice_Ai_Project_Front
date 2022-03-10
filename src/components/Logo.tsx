import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/", { replace: true });
    console.log("zmfflr");
  };

  return (
    <div className=" mb-1" onClick={onClickHome}>
      <span className="text-3xl font-bold">LOGO</span>
    </div>
  );
};

export default Logo;

import loadingSrc from "../img/hash/loading.png";

const LoadingModal = () => {
  return (
    <div className="modalBg text-center">
      <div className="w-1/3 h-auto loadingContents">
        <img src={loadingSrc} />
      </div>
    </div>
  );
};

export default LoadingModal;

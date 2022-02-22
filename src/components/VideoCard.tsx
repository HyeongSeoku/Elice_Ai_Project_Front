const VideoCard = () => {
  return (
    <div className="videoCardContainer ">
      <img
        className="w-full"
        src={require("../img/IMG_2347.jpg")}
        style={{ height: "60%" }}
      />
      <div className="w-full h-auto flex flex-col" style={{ flexGrow: 1 }}>
        <div className="videoContentsRowContainer">
          <div className="bg-black rounded-full w-6 h-auto"></div>
          <div className="text-lg font-bold">영상 제목</div>
        </div>
        <div className="font-light ml-7 flex-grow">만든 사람</div>
        <div className="videoContentsRowContainer">
          <div className="mr-7">10만회</div>
          <div className="text-lg font-light"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

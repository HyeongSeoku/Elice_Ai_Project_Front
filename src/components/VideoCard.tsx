import { VideoCardTypes } from "VideoCardModule";

const VideoCard = ({ videoObj }: VideoCardTypes.videoCardProps) => {
  return (
    <div className="videoCardContainer hover:scale-105 hover:shadow-2xl">
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
          {videoObj.hashTag.map((item) => (
            <div className="text-lg font-light">#{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

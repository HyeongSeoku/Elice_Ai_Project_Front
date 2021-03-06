import { useNavigate } from "react-router-dom";
import { VideoCardTypes } from "VideoCardModule";

const VideoCard = ({
  videoObj,
  getVideoDetail,
}: VideoCardTypes.videoCardProps) => {
  const navigate = useNavigate();

  const detailApiRequest = async () => {
    const videoDetail = await getVideoDetail(videoObj.id);

    navigate("/analysis", { state: { analyzedVideo: videoDetail } });
  };

  return (
    <div
      className="videoCardContainer hover:scale-105 hover:shadow-2xl box-border p-5 mt-10 mb-10 rounded-lg"
      onClick={detailApiRequest}
    >
      <div
        className="w-full h-auto flex flex-col bg-slate-200 box-border "
        style={{ flexGrow: 1 }}
      >
        <div className="videoContentsRowContainer">
          <div className="bg-black rounded-full w-full h-auto">
            <img
              alt={videoObj.title}
              className="w-full h-full"
              src={videoObj.thumbnail}
            />
          </div>
          <div className="text-md font-bold mt-2">{videoObj.title}</div>
        </div>
        <div className="font-light ml-3 flex-grow">{videoObj.author}</div>
        <div className="videoContentsRowContainer">
          <div className="flex flex-row">
            {videoObj.keywords_frequency.map((item, idx) =>
              idx < 3 ? (
                <div className="text-lg font-light mr-1 ml-1 bg-green-200 box-border p-1 rounded-md">
                  #{item.keyword}
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

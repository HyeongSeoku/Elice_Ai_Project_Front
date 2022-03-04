import { useLocation } from "react-router-dom";
import { VideoAnalysisTypes } from "VideoAnalysisModule";
import { ResponsiveLine } from "@nivo/line";

const VideoAnalysis = () => {
  const location = useLocation();
  const state = location.state as VideoAnalysisTypes.videoAnalysisProps;
  console.log(state);
  const analysisData = state.analyzedVideo;
  const timeStampData = state.timeStamp;

  return (
    <div className="container">
      <h1>분석</h1>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <iframe src={analysisData.videoUrl}></iframe>
        <div>{analysisData.title}</div>
        <div>{analysisData.owner}</div>
        <div className="w-full h-52">
          <ResponsiveLine
            curve={"monotoneX"}
            data={timeStampData}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            lineWidth={1}
            pointSize={0}
            useMesh={true}
            crosshairType="cross"
          />
        </div>
      </section>
    </div>
  );
};

export default VideoAnalysis;

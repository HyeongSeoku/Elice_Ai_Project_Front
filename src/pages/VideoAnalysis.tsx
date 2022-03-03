import { useLocation } from "react-router-dom";
import { VideoAnalysisTypes } from "VideoAnalysisModule";
import { ResponsiveLine } from "@nivo/line";

const VideoAnalysis = () => {
  const location = useLocation();
  const state = location.state as VideoAnalysisTypes.videoAnalysisProps;
  const analysisData = state.analyzedVideo;
  const tmpId = analysisData.source.split("v=");

  const videoId = tmpId[tmpId.length - 1];
  console.log(videoId);
  //데이터 처리
  const timeStampData: any[] = [];

  analysisData.time_keywords.forEach((item) => {
    timeStampData.push({ x: item.timestamp, y: item.score });
  });
  const graphData: any[] = [{ id: "분석 데이터", data: timeStampData }];
  console.log(timeStampData);
  console.log(state);

  return (
    <div className="container">
      <h1>분석</h1>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe>
        <div>{analysisData.title}</div>
        <div>{analysisData.author}</div>
        <div className="w-full h-52">
          <ResponsiveLine
            curve={"monotoneX"}
            data={graphData}
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

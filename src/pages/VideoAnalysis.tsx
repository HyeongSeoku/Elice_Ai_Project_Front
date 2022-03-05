import { useLocation } from "react-router-dom";
import { VideoAnalysisTypes } from "VideoAnalysisModule";
import { ResponsiveLine } from "@nivo/line";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ScriptItem } from "../components";

const VideoAnalysis = () => {
  const location = useLocation();
  const state = location.state as VideoAnalysisTypes.videoAnalysisProps;
  const analysisData = state.analyzedVideo;
  const tmpId = analysisData.source.split("v=");

  const videoId = tmpId[tmpId.length - 1];
  console.log(state.analyzedVideo, videoId);
  //데이터 처리
  //TODO : 타입 지정
  const timeStampData: any[] = [];
  const timeStampContents: any[] = [];

  analysisData.time_scripts.forEach((item) => {
    timeStampData.push({
      timeStamp: item.timestamp,
      score: item.importance_score,
    });
    timeStampContents.push({
      timeStamp: item.timestamp,
      contents: item.content,
    });
  });
  const graphData: any[] = [{ id: "분석 데이터", data: timeStampData }];
  console.log(timeStampData);
  console.log(state);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center mx-auto p-5 box-border; overflow-scroll">
      <h1>분석</h1>
      <section className="flex flex-col items-center justify-center w-full h-full overflow-auto">
        <div className="flex flex-row w-3/4 h-full mt-2 mb-2">
          <div className="flex-grow" style={{ width: "100%", height: "100%" }}>
            단어 위치할 예정
          </div>
          <div
            className="flex-grow bg-slate-300 box-border p-5 rounded-md"
            style={{ width: "100%", height: "100%" }}
          >
            <div style={{ width: "100%", height: "90%" }}>
              <iframe
                title="temp title"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
              />
            </div>
            <div className="flex flex-row items-baseline">
              <div className="bg-slate-400 rounded-2xl mr-2 w-10 text-center font-bold">
                제목
              </div>
              <strong className="mt-1">{analysisData.title}</strong>
            </div>
            <div className="font-light">{analysisData.author}</div>
          </div>
        </div>

        <div
          className="w-3/4 overflow-x-scroll mb-5 box-border p-5"
          style={{ height: "70%" }}
        >
          <div className="w-screen h-full">
            <ResponsiveContainer width={3000} height="95%">
              <LineChart
                data={timeStampData}
                margin={{ top: 5, right: 10, left: 10 }}
              >
                <Line type="monotone" dataKey={"score"} stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey={"timeStamp"} />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div style={{ width: "50%", height: "20%" }}>
          {timeStampContents.map((item) => (
            <ScriptItem key={item.timeStamp} timeLine={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default VideoAnalysis;

import { useLocation } from "react-router-dom";
import { VideoAnalysisTypes } from "VideoAnalysisModule";
import { TagCloud } from "react-tagcloud";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  AnalysisHeader,
  HeaderMenu,
  KeyWord,
  LoginModal,
  ScriptItem,
} from "../components";
import { useRecoilState } from "recoil";
import { modalState } from "../atom";

const VideoAnalysis = () => {
  const location = useLocation();
  const state = location.state as VideoAnalysisTypes.videoAnalysisProps;
  const analysisData = state.analyzedVideo;
  const videoId = analysisData.youtube_slug;
  const saveId = analysisData.id;
  //TODO : 타입 지정
  const timeStampData: any[] = [];
  const timeStampContents: any[] = [];
  const tagCloudDate: any[] = [];

  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);

  //tag cloud color
  const cloudOptions = {
    luminosity: "ligt",
    hue: "blue",
  };

  //데이터 처리
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

  state.analyzedVideo.keywords_frequency.forEach((item) => {
    tagCloudDate.push({
      value: item.keyword,
      count: item.count,
    });
  });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center mx-auto p-5 box-border; overflow-scroll">
      <header style={{ height: "10%" }}>
        <AnalysisHeader id={saveId} />
      </header>
      <section className="flex flex-col items-center justify-center w-full h-full overflow-auto">
        <div className="flex flex-col w-full laptop:flex-row laptop:w-3/4 h-full mt-2 mb-2  ">
          <div className="flex flex-col flex-grow  box-border p-2 bg-slate-200 rounded-md mr-1 laptop:w-1/2">
            <div
              className=" box-border p-2"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="text-3xl font-bold mb-5">자주 등장한 단어</div>
              <div className="flex flex-row w-full h-full">
                {analysisData.keywords_frequency.map((item, idx) => {
                  if (idx < 3) {
                    return <KeyWord key={idx} keywordObj={item} />;
                  }
                })}
              </div>
            </div>
            <div className="bg-slate-300 rounded-md box-border p-2 h-32">
              <TagCloud
                minSize={15}
                maxSize={35}
                tags={tagCloudDate}
                colorOptions={cloudOptions}
              />
            </div>
          </div>
          <div
            className="flex-grow bg-slate-300 box-border p-5 rounded-md"
            style={{ width: "100%", height: "100%" }}
          >
            <div style={{ width: "100%", height: "90%" }}>
              <iframe
                title={analysisData.title}
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
          className="w-3/4 overflow-x-scroll mb-5 box-border p-2 "
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
        <div className="flex flex-row" style={{ width: "50%", height: "30%" }}>
          <div className="flex-grow overflow-scroll mb-10">
            {timeStampContents.map((item) => (
              <ScriptItem key={item.timeStamp} timeLine={item} />
            ))}
          </div>
        </div>
      </section>
      {isModalOpen && <LoginModal />}
    </div>
  );
};

export default VideoAnalysis;

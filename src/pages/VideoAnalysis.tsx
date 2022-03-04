import { useLocation } from "react-router-dom";
import { VideoAnalysisTypes } from "VideoAnalysisModule";
import { ResponsiveLine } from "@nivo/line";
import { ScriptItem } from "../components";

const VideoAnalysis = () => {
  const location = useLocation();
  const state = location.state as VideoAnalysisTypes.videoAnalysisProps;
  const analysisData = state.analyzedVideo;
  const tmpId = analysisData.source.split("v=");

  const videoId = tmpId[tmpId.length - 1];
  console.log(videoId);
  //데이터 처리
  //TODO : 타입 지정
  const timeStampData: any[] = [];
  const timeStampContents: any[] = [];

  analysisData.time_scripts.forEach((item) => {
    timeStampData.push({ x: item.timestamp, y: item.importance_score });
    timeStampContents.push({
      timeStamp: item.timestamp,
      contents: item.content,
    });
  });
  const graphData: any[] = [{ id: "분석 데이터", data: timeStampData }];
  console.log(timeStampData);
  console.log(state);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center mx-auto p-5 box-border; overflow-scroll">
      <h1>분석</h1>
      <section className="w-full h-full flex flex-col justify-center items-center overflow-auto">
        <div style={{ width: "50%", height: "50%" }}>
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>
        </div>
        <div style={{ height: "3%" }}>{analysisData.title}</div>
        <div style={{ height: "3%" }}>{analysisData.author}</div>
        <div className="w-full" style={{ height: "40%" }}>
          <ResponsiveLine
            curve={"monotoneX"}
            data={graphData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            axisLeft={{ legend: "빈도 수", legendPosition: "middle" }}
            axisBottom={{
              legend: "타임 라인",
              legendPosition: "middle",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            pointColor={{ theme: "background" }}
            lineWidth={1}
            pointSize={0}
            useMesh={true}
            crosshairType="cross"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 100,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
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

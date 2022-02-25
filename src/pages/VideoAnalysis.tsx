import { VideoAnalysisTypes } from "VideoAnalysisModule";

const VideoAnalysis = ({
  analyzedVideo,
}: VideoAnalysisTypes.videoAnalysisProps) => {
  return (
    <div className="container">
      <section>
        <iframe></iframe>
      </section>
    </div>
  );
};

export default VideoAnalysis;

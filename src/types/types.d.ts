declare module "VideoCardModule" {
  export namespace VideoCardTypes {
    interface videoCardProps {
      videoObj: {
        videoUrl: string;
        thumbnail: string;
        owner: string;
        title: string;
        hashTag: string[];
      };
    }
  }
}

declare module "VideoAnalysisModule" {
  export namespace VideoAnalysisTypes {
    interface videoAnalysisProps {
      analyzedVideo: {
        videoId: number;
        videoUrl: string;
        thumbnail: string;
        owner: string;
        title: string;
        keywordCnt: { keyword: string; count: number }[];
        timeStamp: {
          id: string;
          color: string;
          data: { time: number; score: number }[];
        }[];
        timStampContents: { time: number; contents: string }[];
      };
      timeStamp: {
        id: string;
        data: { x: number; y: number }[];
      }[];
    }
  }
}

declare module "SearchModule" {
  export namespace SearchTypes {
    interface searchProps {
      isLoading: boolean;
      onChangeLoadingState: () => void;
    }
  }
}

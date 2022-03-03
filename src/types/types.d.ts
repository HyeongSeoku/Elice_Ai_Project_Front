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
        id: number;
        source: string;
        thumbnail: string;
        author: string;
        title: string;
        keywords_frequency: { keyword: string; count: number }[];
        time_scripts: {
          timestamp: string;
          content: string;
          importance_score: number;
        }[];
        time_keywords: { timestamp: string; contents: string; score: number }[];
        user_id: string | null;
      };
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

declare module "RecoilModule" {
  export namespace RecoilProps {
    interface loginProps {
      loginState: boolean;
    }
  }
}

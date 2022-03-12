declare module "VideoCardModule" {
  export namespace VideoCardTypes {
    interface videoCardProps {
      videoObj: {
        id: string;
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
        youtube_slug: string;
      };
      getVideoDetail: (videoId: any) => Promise<any>;
    }
  }
}

declare module "VideoAnalysisModule" {
  export namespace VideoAnalysisTypes {
    interface videoAnalysisProps {
      analyzedVideo: {
        id: string;
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
        youtube_slug: string;
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

declare module "MyPageModule" {
  export namespace MyPageProps {
    interface myPageProps {
      id: string;
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
      youtube_slug: string;
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

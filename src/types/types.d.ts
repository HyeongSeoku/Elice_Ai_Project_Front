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
        videoUrl: string;
        thumbnail: string;
        owner: string;
        title: string;
        hashtag: string[];
        mainSection: string[];
      };
    }
  }
}

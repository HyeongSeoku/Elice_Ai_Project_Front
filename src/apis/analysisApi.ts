import axios from "axios";
import { API_END_POINT } from "../constants/standard";

const getApi = async (url: string, headers?: any) => {
  const result = await axios.get(url, headers);
  switch (result.status) {
    case 200:
      return result;
    case 400:
    case 404:
      console.error("데이터가 없습니다.");

      //TODO : throw new Error() 방식 사용
      return false;
    case 500:
      console.error("Internal Error");
      return false;
    default:
      console.error("네트워크 오류 발생");
  }
};

const postApi = async (url: string, data: any, headers?: any) => {
  const result = await axios.post(url, data, headers);
  switch (result.status) {
    case 200:
    case 201:
      return result;
    case 400:
    case 401:
    case 404:
      console.error("데이터가 없습니다.");
      return result;
    case 500:
      console.error("Internal Error");
      return false;
    default:
      console.error("네트워크 오류 발생");
  }
};

const analysisApi = {
  getVideoDetail: async (videoId: any) => {
    return await getApi(`${API_END_POINT}/videos/${videoId}/`);
  },
  getVideoId: async (videoUrl: string, token?: string) => {
    return await postApi(
      `${API_END_POINT}/videos/`,
      { youtube_slug: videoUrl },
      { headers: { Authorization: token } }
    );
  },
  saveVideoReq: async (videoId: any, token: any) => {
    return await postApi(
      `${API_END_POINT}/videos/${videoId}/`,
      { video_id: videoId },
      { headers: { Authorization: token } }
    );
  },
};

export default analysisApi;

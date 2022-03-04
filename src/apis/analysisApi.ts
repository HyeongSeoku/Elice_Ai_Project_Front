import axios from "axios";
import { API_END_POINT } from "../constants/standard";

const getApi = async (url: string) => {
  const result = await axios.get(url);
  switch (result.status) {
    case 200:
      return result;
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

const postApi = async (url: string, data: any) => {
  const result = await axios.post(url, data);
  switch (result.status) {
    case 200: case 201:
      return result;
    case 404:
      console.error("데이터가 없습니다.");
      return false;
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
  getVideoId: async (videoUrl: any) => {
    return await postApi(`${API_END_POINT}/videos/`, videoUrl);
  },
};

export default analysisApi;

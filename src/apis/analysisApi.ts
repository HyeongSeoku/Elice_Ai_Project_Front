import axios from "axios";

const END_POINT = "http://localhost:8000";

const getApi = async (url: string) => {
  const result = await axios.get(url);
  switch (result.status) {
    case 200:
      return result;
    case 404:
      console.error("데이터가 없습니다.");
      return false;
    case 500:
      console.error("Internal Error");
      return false;
    default:
      console.log("네트워크 오류 발생");
  }
};

const analysisApi = {
  getKeywordFreq: async (videoId: any) => {
    return await getApi(`${END_POINT}/videos/${videoId}/frequencies`);
  },
  getTimeStamp: async (videoId: any) => {
    return await getApi(`${END_POINT}/videos/${videoId}/script`);
  },
};

export default analysisApi;

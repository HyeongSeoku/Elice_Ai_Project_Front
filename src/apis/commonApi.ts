import axios from "axios";
import { API_END_POINT } from "../constants/standard";

const postApi = async (url: string, data: any) => {
  const result = await axios.post(url, data);
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

const commonApi = {
  send_login: async (data: any) => {
    return await postApi(`${API_END_POINT}/user/login/token/`, data);
  },
  send_regist: async (userData: any) => {
    return await postApi(`${API_END_POINT}/user/register/`, userData);
  },
  send_logout: async (user: any) => {
    return await postApi(`${API_END_POINT}/user/logout/`, user);
  },
};

export default commonApi;

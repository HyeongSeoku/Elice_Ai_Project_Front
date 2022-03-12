import { MyPageProps } from "MyPageModule";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import analysisApi from "../apis/analysisApi";
import commonApi from "../apis/commonApi";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import VideoCard from "../components/VideoCard";

const MyPage = () => {
  const [videoList, setVideoList] = useState<MyPageProps.myPageProps[]>([]);
  useEffect(() => {
    onComponentRendered();
  }, []);

  useEffect(() => {
    console.log(videoList);
  }, [videoList]);

  const onComponentRendered = async () => {
    const data = await getMyVideoList();
    setVideoList(data);
  };

  const getMyVideoList = async () => {
    const userToken = "JWT " + localStorage.getItem("login-token")?.trim();
    console.log(userToken);
    try {
      return await commonApi.get_video_list(userToken).then((response: any) => {
        console.log(response.data);
        return response.data;
      });
    } catch (e) {
      console.error(e);
    }
  };

  //리턴 받은 비디오 아이디를 통해 비디오 세부 디테일을 받아오는 메소드 2번함수
  const getDetailInfoVideo = async (videoId: any) => {
    try {
      return await analysisApi.getVideoDetail(videoId).then((response: any) => {
        return response.data;
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center mx-auto p-5 box-border; overflow-scroll bg-emerald-200">
      <div
        className="flex flex-row laptop:flex-col w-full box-border flex-wrap"
        style={{ height: "15%" }}
      >
        <div className="w-1/4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div
        className="w-full grid mobile:grid-cols1 justify-center items-center laptop:grid-cols-4 "
        style={{ height: "70%" }}
      >
        {videoList.map((item) => (
          <VideoCard
            key={item.id}
            videoObj={item}
            getVideoDetail={getDetailInfoVideo}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPage;

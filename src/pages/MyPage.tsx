import { MyPageProps } from "MyPageModule";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="container">
      <div
        className="flex flex-row laptop:flex-col w-full box-border"
        style={{ height: "15%" }}
      >
        <div className="w-1/4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div
        className="w-full grid mobile:grid-cols1 justify-center items-center laptop:grid-cols-4 laptop:gap-x-10	"
        style={{ height: "70%" }}
      >
        {videoList.map((item) => (
          <VideoCard key={item.id} videoObj={item} />
        ))}
        {/* {arr.map((item) => (
          <VideoCard videoObj={item} />
        ))} */}
      </div>
    </div>
  );
};

export default MyPage;

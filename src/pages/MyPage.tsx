import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import VideoCard from "../components/VideoCard";

interface Props {
  savedVideo: {
    videoUrl: string;
    thumbnail: string;
    owner: string;
    title: string;
    hashtag: string[];
  }[];
}

const LoggedInHome = () => {
  //데이터 통신을 통해 받아올 데이터
  const arr = [
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["코딩", "프론트엔드", "React"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["코딩", "백엔드", "Django"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["코딩", "데이터 분석", "Pandas"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["인공지능", "Ai", "TensorFlow"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["개발", "시스템 프로그래밍", "Window"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["개발", "시스템 프로그래밍", "Window"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["개발", "시스템 프로그래밍", "Window"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["개발", "시스템 프로그래밍", "Window"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["개발", "시스템 프로그래밍", "Window"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["개발", "시스템 프로그래밍", "Window"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["개발", "시스템 프로그래밍", "Window"],
    },
    {
      videoUrl: "vvevev",
      thumbnail: "testthumbnail",
      owner: "testOwner",
      title: "testTtitle",
      hashTag: ["개발", "시스템 프로그래밍", "Window"],
    },
  ];

  return (
    <div className="container">
      <div
        className="flex flex-row w-full box-border"
        style={{ height: "15%" }}
      >
        <div className="w-1/4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div
        className="w-full grid md:grid-cols1 justify-center items-center lg:grid-cols-2 xl:grid-cols-4"
        style={{ height: "70%" }}
      >
        {arr.map((item) => (
          <VideoCard VideoObj={item} />
        ))}
      </div>
    </div>
  );
};

export default LoggedInHome;

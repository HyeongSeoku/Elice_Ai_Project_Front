import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchTypes } from "SearchModule";
import { useNavigate } from "react-router-dom";
import analysisApi from "../apis/analysisApi";

const SearchBar = ({
  isLoading,
  onChangeLoadingState,
}: SearchTypes.searchProps) => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [videoId, setVideoId] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoId !== 0) {
      //api 실행
      getDetailInfoVideo(videoId);
    }
  }, [videoId]);

  const testData = [
    {
      id: "중요도",
      data: [
        {
          x: "00:00:00",
          y: 0.0,
        },
        {
          x: "00:00:10",
          y: 0.4,
        },
        {
          x: "00:00:20",

          y: 1.0,
        },
        {
          x: "00:00:30",
          y: 1.4,
        },
        {
          x: "00:00:40",
          y: 2.5,
        },
        {
          x: "00:00:50",

          y: 3.5,
        },
        {
          x: "00:01:50",

          y: 6.5,
        },
        {
          x: "00:02:50",

          y: 1.5,
        },
        {
          x: "00:03:50",

          y: 0.5,
        },
        {
          x: "00:04:50",

          y: 30.5,
        },
        {
          x: "00:05:50",

          y: 1.5,
        },
        {
          x: "00:06:50",

          y: 10.5,
        },
        {
          x: "00:07:50",

          y: 2.5,
        },
      ],
    },
  ];

  const testAnalyzedData = {
    videoId: 1,
    videoUrl: "https://www.youtube.com/embed/3AyMjyHu1bA",
    thumbnail: "Asdv",
    owner: "testOwner",
    title: "testTitle",
    keywordCnt: [{ keyword: "sdvsdv", count: 10 }],
    timeStamp: testData,
    timStampContents: [{ time: "00:00:01", contents: "avasd" }],
  };

  const onSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    //[임시] 로딩 중일때 이벤트 막아놓음
    if (!isLoading) {
      setSearchWord(value);
      return;
    }
  };

  //TODO:예외 처리
  //1.영상의 아이디가 특정되지 않았을 경우
  //2.URL이 영상이 아닐 경우
  //3.분석이 불가능할 경우
  const onSubmitSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //문자열에서 유튜브 영상의 아이디값 저장
    const urlStr: string = getUrlId(searchWord);
    //데이터 분석 요청 메소드 (비동기 처리)
    if (!isLoading) {
      onChangeLoadingState();
      getVideoId(urlStr);
      //TODO : 요청한 데이터 잘 올떄까지 기다린후 로딩 false로 변환
      return;
    }
  };

  //검색어에서 유튜브 영상의 아이디만 추출
  const getUrlId = (text: string) => {
    try {
      if (text.includes("watch")) {
        const result = text.split("v=");
        return result[result.length - 1];
      } else {
        const result = text.split("/");
        return result[result.length - 1];
      }
      //catch문으로 갈수 있는 경우 입력 필요할듯
    } catch (e) {
      alert("URL 형식 에러!");
      //string반환 때문에 작성
      return "error";
    }
  };

  //분석 요청시 가장 처음 실행되는 메소드 1번 함수
  const getVideoId = async (text: string) => {
    try {
      await analysisApi.getVideoId({ source: text }).then((response: any) => {
        if (response.status === 201) {
          console.log("api 요청 성공");
          setVideoId(response.data.video_id);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  //리턴 받은 비디오 아이디를 통해 비디오 세부 디테일을 받아오는 메소드 2번함수
  const getDetailInfoVideo = async (videoId: number) => {
    try {
      await analysisApi.getVideoDetail(videoId).then((response: any) => {
        if (response.status === 200) {
          const tmpData = response.data;
          console.log(response.data);
          setTimeout(() => {
            onChangeLoadingState();
            setSearchWord("");
            navigate("/analysis", { state: { analyzedVideo: tmpData } });
          }, 4000);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="sm:w-100 lg:w-1/3 h-16  rounded-2xl flex box-border p-2 items-baseline  bg-slate-300 focus:bg-slate-400 ">
      <FontAwesomeIcon icon={faSearch} className="flex-grow-0 text-lg ml-2" />
      <form className="w-full" onSubmit={onSubmitSearch}>
        <input
          className="grow w-full h-full rounded-2xl box-border p-3 text-lg ml-2 bg-inherit focus:outline-none"
          value={searchWord}
          onChange={onSearchWordChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;

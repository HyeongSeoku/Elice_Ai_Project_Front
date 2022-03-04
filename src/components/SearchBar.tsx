import React, { useState } from "react";
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
  const navigate = useNavigate();

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
  const onSubmitSearch = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    //문자열에서 유튜브 영상의 아이디값 저장
    const urlStr: string = getUrlId(searchWord);
    //데이터 분석 요청 메소드 (비동기 처리)
    if (!isLoading && urlStr !== 'error') {
      onChangeLoadingState();
      const videoId = await getVideoId(urlStr);
      const videoDetail = await getDetailInfoVideo(videoId)

      onChangeLoadingState();
      setSearchWord("");
      navigate("/analysis", { state: { analyzedVideo: videoDetail } });

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
      const videoId = await analysisApi
        .getVideoId({ youtube_slug: text })
        .then((response: any) => {
          console.log("api 요청 성공");
          return response.data.video_id
        });
      return videoId
    } catch (e) {
      console.error(e);
    }
  };

  //리턴 받은 비디오 아이디를 통해 비디오 세부 디테일을 받아오는 메소드 2번함수
  const getDetailInfoVideo = async (videoId: number) => {
    try {
      return await analysisApi.getVideoDetail(videoId)
        .then((response: any) => {
          console.log(response.data);
          return response.data;
          // setTimeout(() => {
          //   onChangeLoadingState();
          //   setSearchWord("");
          //   navigate("/analysis", { state: { analyzedVideo: tmpData } });
          // }, 2000);
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="box-border flex items-baseline h-16 p-2 sm:w-100 lg:w-1/3 rounded-2xl bg-slate-300 focus:bg-slate-400 ">
      <FontAwesomeIcon icon={faSearch} className="flex-grow-0 ml-2 text-lg" />
      <form className="w-full" onSubmit={onSubmitSearch}>
        <input
          className="box-border w-full h-full p-3 ml-2 text-lg grow rounded-2xl bg-inherit focus:outline-none"
          value={searchWord}
          onChange={onSearchWordChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;

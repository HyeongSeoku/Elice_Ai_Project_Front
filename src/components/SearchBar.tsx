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
    }
  };

  const onSubmitSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //데이터 분석 요청 메소드 (비동기 처리)

    if (!isLoading) {
      onChangeLoadingState();
      //TODO : 요청한 데이터 잘 올떄까지 기다린후 로딩 false로 변환
    }
    setTimeout(() => {
      // sendTimeStampAnalysis();
      onChangeLoadingState();
      navigate("/analysis", {
        state: { analyzedVideo: testAnalyzedData, timeStamp: testData },
      }); //요청 잘 올 경우 분석 페이지로 이동
    }, 4000);
    setSearchWord("");
  };

  const sendTimeStampAnalysis = async () => {
    try {
      await analysisApi.getTimeStamp(searchWord).then((response: any) => {
        if (response.status === 200) {
          const analyzedData = response.data;
          onChangeLoadingState();
          navigate("/analysis", {
            state: { analyzedVideo: analyzedData, timeStamp: testData },
          }); //요청 잘 올 경우 분석 페이지로 이동
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

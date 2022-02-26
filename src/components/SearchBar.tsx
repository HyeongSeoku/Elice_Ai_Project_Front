import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchTypes } from "SearchModule";

const SearchBar = ({
  isLoading,
  onChangeLoadingState,
}: SearchTypes.searchProps) => {
  const [searchWord, setSearchWord] = useState<string>("");

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
      setTimeout(() => {
        onChangeLoadingState();
      }, 4000);
      //요청 잘 올 경우 분석 페이지로 이동
      setSearchWord("");
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

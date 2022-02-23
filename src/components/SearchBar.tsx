import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState<string>("");

  const onSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchWord(value);
  };

  const onSubmitSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //데이터 분석 요청 메소드
    //로딩중으로 상태 변경
    //요청 잘 올 경우 분석 페이지로 이동
    setSearchWord("");
  };

  return (
    <div className="sm:w-100 lg:w-1/3 h-16  rounded-2xl flex box-border p-2 items-baseline  bg-slate-300 focus:bg-slate-400 ">
      <FontAwesomeIcon icon={faSearch} className="flex-grow-0 text-lg ml-2" />
      <form onSubmit={onSubmitSearch}>
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

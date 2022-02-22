import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="w-1/3 h-16  rounded-2xl flex box-border p-2 items-baseline  bg-slate-300 focus:bg-slate-400 ">
      <FontAwesomeIcon icon={faSearch} className="flex-grow-0 text-lg ml-2" />
      <input className="grow w-full h-full rounded-2xl box-border p-3 text-lg ml-2 bg-inherit focus:outline-none" />
    </div>
  );
};

export default SearchBar;

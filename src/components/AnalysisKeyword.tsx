interface Props {
  keywordObj: { keyword: string; count: number };
}

const KeyWord = ({ keywordObj }: Props) => {
  return (
    <div className="w-full box-border ml-1 mr-1">
      <div
        className="bg-slate-300 h-1/3 flex flex-col justify-center items-center rounded-t-2xl"
        // style={{ width: "33%" }}
      >
        <div className="w-full text-center text-3xl font-extrabold">
          {keywordObj.keyword}
        </div>
      </div>
      <div
        className="bg-black w-full h-1/5 flex flex-col justify-center items-center text-white text-center rounded-b-2xl"
        // style={{ width: "33%" }}
      >
        <div className="w-full text-center text-xl font-bold">
          {keywordObj.count} 회
        </div>
      </div>
    </div>
  );
};

export default KeyWord;

interface Props {
  timeLine: any;
}

const ScriptItem = ({ timeLine }: Props) => {
  console.log(timeLine.timeStamp);
  return (
    <div className="flex flex-row mt-1 h-5 box-border">
      <div
        className="bg-slate-300 rounded-md h-auto text-center mr-2 hover:bg-slate-500"
        style={{ width: "15%" }}
      >
        {timeLine.timeStamp}
      </div>
      <div
        className="bg-blue-300 rounded-md text-center hover:bg-blue-500"
        style={{ width: "85%" }}
      >
        {timeLine.contents}
      </div>
    </div>
  );
};

export default ScriptItem;

import clsx from "clsx";
import React from "react";

interface Props{
  league_name:string,
  class_league_name: string
  nextPage: string
}
const TournamentItem:React.FC<Props> = ({class_league_name,league_name,nextPage}) => {
  return (
    <div className="rounded-[5rem] text-[12rem] mb-[3rem] min-h-[36rem] px-[8rem] flex items-center bg-[#181818] text-[#aaa] cursor-pointer hover:bg-[#333] hover:text-[#fdfdfd] gap-10">
      <span className={clsx('w-[32rem] h-[32rem] flags--category',class_league_name)}></span>
      <div className="pr-[5rem]">
        <div className="text-[#fdfdfd]">
          {league_name}
        </div>
      </div>
    </div>
  );
};

export default TournamentItem;

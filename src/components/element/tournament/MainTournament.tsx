import React from "react";
import { FaChevronRight } from "react-icons/fa";
import TournamentItem from "./TournamentItem";
import handlerCrawlTournament from "@/api/tournament";

const MainTournament = async () => {
  const data = await handlerCrawlTournament();

  return (
    <div className="px-[10rem] overflow-auto h-screen no-scrollbar">
      <div
        className="flex items-center color-[#aaa] text-[11rem] font-[700] h-[38rem] justify-between uppercase"
        style={{
          padding: "0 5rem 0 0",
        }}
      >
        Giải đấu nổi bật
        <FaChevronRight />
      </div>
      {!!data?.length &&
        data?.map((item: any, index: number) => (
          <TournamentItem
            league_name={item?.league_name}
            class_league_name={item?.class_league_name}
            nextPage={item?.class_league_name}
            imgFlag={item?.imgFlag}
            key={index}
          />
        ))}
    </div>
  );
};

export default MainTournament;

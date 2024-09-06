"use";

import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import TournamentItem from "./TournamentItem";

const MainTournament = () => {
  const [tournament, set_tournament] = useState<Array<any>>([]);
  const getTournament = async () => {
    try {
      const res = await fetch("/api/crawl/tournament");
      if (res.ok) {
        const data = await res.json();
        set_tournament(data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTournament();
  }, []);

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
      {!!tournament?.length &&
        tournament?.map((item: any, index: number) => (
          <TournamentItem
            league_name={item?.league_name}
            class_league_name={item?.class_league_name}
            nextPage={item?.nextPage}
            imgFlag={item?.imgFlag}
            slug={item?.slug}
            key={index}
          />
        ))}
    </div>
  );
};

export default MainTournament;

import { handleCrawlLiveScore } from "@/api/live-score";
import MatchScores from "@/components/element/MatchScores";
import { notFound } from "next/navigation";
import React from "react";

const HomePage = async () => {
  const data = await handleCrawlLiveScore();

  if (!data) return notFound();
  return (
    <div className="border border-[#222] rounded-[8rem] t:ml-[17rem] min-h-[630rem] w-full t:w-[470rem] ">
      {!!data?.length &&
        data.map((item: any, index: number) => (
          <MatchScores
            flag={item?.flag}
            captionDays={item?.captionDays}
            categoryTitle={item?.categoryTitle}
            listMatch={item?.listMatch}
            region={item?.region}
            key={index}
          />
        ))}
    </div>
  );
};

export default HomePage;

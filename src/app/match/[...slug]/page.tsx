/* eslint-disable @next/next/no-img-element */
import { handleCrawlMatchDetail } from "@/api/match";
import Tabs from "@/components/Tabs";
import { headers } from "next/headers";
import React from "react";
import Summary from "./components/Summary";
import Statistics from "./components/Statistics";
import LineUps from "./components/LineUps";

interface Props {
  searchParams: { tab?: string };
}
const MatchSingle: React.FC<Props> = async ({ searchParams: { tab } }) => {
  const headersList = headers();
  const pathName = headersList.get("x-pathname") as string;
  const data = await handleCrawlMatchDetail(pathName);

  if (!data) return;

  const renderTabContent = () => {
    switch (tab) {
      case "line-ups":
        return <LineUps />;
      case "stats":
        return <Statistics />;
      default:
        return (
          <Summary
            content_detail_event={data?.detail?.content_detail_event}
            math_content={data?.math_content}
          />
        );
    }
  };
  return (
    <div className="border border-[#222] rounded-[8rem] ml-[17rem] min-h-[630rem] max-w-[470rem] w-full">
      <div className="px-[15rem] pt-[10rem]">
        <h3 className="font-[700] mb-[3rem]">Trận đấu</h3>
        <div className="bg-[#181818] rounded-[8rem] flex flex-col  p-[10rem] relative mb-[10rem]">
          <div className="flex items-center text-[11rem] relative">
            <div className="flex-1 text-center">
              <div className="flex justify-center mb-[10]">
                <img
                  src={data?.detail?.home?.logo_home}
                  alt={data?.detail?.home?.name_home}
                  className="w-[30rem] h-[30rem]"
                />
              </div>
              <span className="text-[#fdfdfd] font-[700]">
                {data?.detail?.home?.name_home}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className=" pt-[2rem] capitalize text-[11rem] text-[#fdfdfd]">
                {data?.detail?.score?.status_match}
              </span>
              <span className=" text-[#fdfdfd] text-[22rem] font-[700] min-h-[18rem] min-w-[56rem] text-center">
                {data?.detail?.score?.score_home} -{" "}
                {data?.detail?.score?.score_away}
              </span>
              <span className=" pt-[2rem] capitalize text-[11rem]">
                {data?.detail?.score?.time}
              </span>
            </div>
            <div className="flex-1 text-center">
              <div className="flex justify-center mb-[10]">
                <img
                  src={data?.detail?.away?.logo_away}
                  alt={data?.detail?.away?.name_away}
                  className="w-[30rem] h-[30rem]"
                />
              </div>
              <span className="text-[#fdfdfd] font-[700]">
                {data?.detail?.away?.name_away}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-[10rem] ">
          <Tabs
            baseHref={pathName}
            tabs={[
              {
                title: "Tóm tắt",
                tab: tab ? "" : null,
              },
              {
                title: "Đội hình",
                tab: "line-ups",
              },
              {
                title: "Thống kê",
                tab: "stats",
              },
            ]}
            currentTab={tab}
          />
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};
export default MatchSingle;

import { handleCrawlMatchStatistics } from "@/api/match";
import clsx from "clsx";
import { url } from "inspector";
import { headers } from "next/headers";
import React from "react";

interface Props {
  tab?: string;
}
const Statistics: React.FC<Props> = async ({ tab }) => {
  const headersList = headers();
  const pathName = headersList.get("x-pathname") as string;
  const data = await handleCrawlMatchStatistics(pathName);


  if (!data?.length)
    return (
      <div className="text-center text-[11rem]">Chưa cập nhật dữ liệu</div>
    );
  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="text-[#aaa] text-[12rem] relative"
          style={{
            margin: "14px 10px 10px;",
          }}
        >
          <div className="flex">
            <span className="font-[700] text-[#fdfdfd]">
              {item.stat__category.stat_homeValue}
            </span>
            <div className="flex-1 mb-[1rem] text-center text-[10   rem]">
              {item.stat__category.stat_categoryName}
            </div>
            <span className="font-[700] text-[#fdfdfd]">
              {item.stat__category.stat_awayValue}
            </span>
          </div>
          <div className="flex justify-center items-center mt-[4rem]">
            <span className="bg-[#222] flex flex-1 h-[9rem] overflow-hidden relative rounded-tl-[8rem] rounded-bl-[8rem] justify-end mr-[4rem]">
              <span
                style={{
                  width: item.stat__category.stat_bar_home,
                }}
                className={clsx({
                  "bg-primary-1":
                    parseFloat(item.stat__category.stat_bar_home as string) >
                    50,
                  "bg-[#aaa]":
                    parseFloat(item.stat__category.stat_bar_home as string) <
                    50,
                })}
              ></span>
            </span>
            <span className="bg-[#222] flex flex-1 h-[9rem] overflow-hidden relative rounded-tr-[8rem] rounded-br-[8rem] justify-start mr-[4rem]">
              <span
                style={{
                  width: item.stat__category.stat_bar_away,
                }}
                className={clsx({
                    "bg-primary-1":
                      parseFloat(item.stat__category.stat_bar_away as string) >
                      50,
                    "bg-[#aaa]":
                      parseFloat(item.stat__category.stat_bar_away as string) <
                      50,
                  })}
              ></span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;

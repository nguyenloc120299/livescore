/* eslint-disable @next/next/no-img-element */
import { ROUTES } from "@/routes";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

interface Props {
  categoryTitle: string;
  captionDays: string;
  flag: string;
  region: string;
  listMatch: Array<{
    slug: string;
    match_id: string;
    time: string;
    team_a: {
      name: string;
      logo: string;
    };
    team_b: {
      name: string;
      logo: string;
    };
    score: {
      score_a: string;
      score_b: string;
    };
    nextPageUrl: string;
  }>;
}
const MatchScores: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex justify-between items-center text-[14rem] px-[15rem] py-[10rem]">
        <div className="flex items-center gap-[5rem]">
          <span
            className={clsx("w-[32rem] h-[32rem] flags--category", props.flag)}
          ></span>
          <div className="">
            <div className="text-[#fdfdfd] font-[700] mb-[2rem] rg">
              {props.categoryTitle}
            </div>
            <div className="text-[#aaa] text-[11rem]">{props.region}</div>
          </div>
        </div>
        <FaChevronRight className="text-[11rem] mr-[10rem] cursor-pointer" />
      </div>
      <div className="text-[#aaa] pb-[5rem] ">
        {!!props.listMatch &&
          props.listMatch.map((item, index) => (
            <Link href={item.slug} key={index}>
              <div className="mb-[5rem] flex items-center text-[14px] relative py-[10rem] bg-[#181818] hover:bg-[#333] rounded-[8rem] mx-[10rem]">
                <span className="text-[14rem] font-[700] h-[40rem] flex items-center justify-center flex-0 w-[50rem]">
                  {item.time}
                </span>
                <div className="flex-1">
                  <div className="mb-[5rem] flex relative items-center gap-[10rem]">
                    <span className="w-[20rem] h-[20rem]">
                      <img
                        src={item.team_a.logo}
                        alt={item.team_a.name}
                        loading="lazy"
                        className="w-full h-full"
                      />
                    </span>
                    <div className="rg">{item.team_a.name}</div>
                  </div>
                  <div className="mb-[5rem] flex relative items-center gap-[10rem]">
                    <span className="w-[20rem] h-[20rem]">
                      <img
                        src={item.team_b.logo}
                        alt={item.team_b.name}
                        loading="lazy"
                        className="w-full h-full"
                      />
                    </span>
                    <div className="rg">{item.team_b.name}</div>
                  </div>
                </div>
                <div className="flex flex-col font-[700] relative w-[25rem] self-stretch">
                  <div className="mb-[5rem]">{item.score.score_a}</div>
                  <div className="mb-[5rem]">{item.score.score_b}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default MatchScores;

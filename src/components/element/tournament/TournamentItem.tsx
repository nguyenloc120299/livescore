/* eslint-disable @next/next/no-img-element */
import { ROUTES } from "@/routes";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props {
  league_name: string;
  class_league_name: string;
  nextPage: string;
  imgFlag?: string;
  slug?: string;
}
const TournamentItem: React.FC<Props> = ({
  class_league_name,
  league_name,
  imgFlag,
  nextPage,
  slug,
}) => {
  return (
    <Link href={`${ROUTES.LEAGUE}/${slug}`}>
      <div className="rounded-[5rem] text-[12rem] mb-[3rem] min-h-[36rem] px-[8rem] flex items-center bg-[#0a10268c] text-[#aaa] cursor-pointer hover:bg-[#333] hover:text-[#fdfdfd] gap-10">
        {imgFlag ? (
          <img
            src={imgFlag}
            className="flags flags-category flags--sm rounded-full"
            alt={league_name}
            width={32}
            height={32}
          />
        ) : (
          <span
            className={clsx(
              "w-[32rem] h-[32rem] flags--category",
              class_league_name
            )}
          ></span>
        )}

        <div className="pr-[5rem]">
          <div className="text-[#fdfdfd]">{league_name}</div>
        </div>
      </div>
    </Link>
  );
};

export default TournamentItem;

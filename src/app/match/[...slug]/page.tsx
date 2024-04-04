import { handleCrawlMatchDetail } from "@/api/match";
import { headers } from "next/headers";
import React from "react";

interface Props {}
const MatchSingle: React.FC<Props> = async () => {
  const headersList = headers();
  const pathName = headersList.get("x-pathname") as string;
  const data = await handleCrawlMatchDetail(pathName);
  console.log("🚀 ~ constMatchSingle:React.FC<Props>= ~ data:", data)
  
  return (
    <div className="border border-[#222] rounded-[8rem] ml-[17rem] min-h-[630rem] max-w-[470rem] w-full"></div>
  );
};
export default MatchSingle;

import { handleCrawlMatchLineups } from "@/api/match";
import { headers } from "next/headers";
import React from "react";

const LineUps = async () => {
  const headersList = headers();
  const pathName = headersList.get("x-pathname") as string;

  const data = await handleCrawlMatchLineups(pathName);
  console.log("🚀 ~ LineUps ~ data:", data)

  return <div>LineUps</div>;
};

export default LineUps;

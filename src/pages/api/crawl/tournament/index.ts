import type { NextApiRequest, NextApiResponse } from "next";
import handlerCrawlTournament from "@/api/tournament";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case "GET":
      const data = await handlerCrawlTournament();

      return res.status(200).json(data);

    default:
      break;
  }
}

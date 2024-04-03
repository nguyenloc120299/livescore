import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cheerio from "cheerio";

const url = "https://thethao247.vn/livescores/";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  axios
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      let result = [] as any;
      $(".text-middle").each((index, item) => {
     
        
        const league_name = $(item).find(".league-name").text().trim();
        const class_league_name = $(item)
          .find("span.flags-category")
          .attr("class");
        result.push({
          league_name,
          class_league_name,
        });
      });

      res.status(200).json({result});
    })
    .catch((error) => {
      console.log("Failed to retrieve page:", error);
    });
}

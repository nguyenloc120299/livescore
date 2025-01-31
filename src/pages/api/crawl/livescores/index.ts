// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
      const data = [] as any;
      $(".roundsByStageName").each((index, element) => {
        const categoryTitle = $(element)
          .find(".category-title")
          .contents()
          .filter(function () {
            return this.nodeType === 3;
          })
          .text()
          .replace(/-/g, '').trim();
        const linkText = $(element).find(".category-title a").text().trim();
        const flag = $(element)
          .find(".category-title .flags-category").attr('class')
        const captionDays = $(element)
          .find(".list_match .caption-days .title")
          .text()
          .trim();
        const listMatch = [] as any;
        $(element)
          .find(".list_match")
          .each((index, matchElement) => {
            $(matchElement)
              .find(".match-info")
              .each((index, match_info) => {
                const time = $(match_info).find(".time").text().trim();
                const name_team_a = $(match_info)
                  .find(".group .team.team-a .name")
                  .text()
                  .trim();
                const logo_team_a = $(match_info)
                  .find(".group .team.team-a img.lazy")
                  .attr("data-original");
                const name_team_b = $(match_info)
                  .find(".group .team.team-b .name")
                  .text()
                  .trim();
                const logo_team_b = $(match_info)
                  .find(".group .team.team-b img.lazy")
                  .attr("data-original");
                const score =
                  $(match_info)
                    .find(".group .score .name span:nth-child(1)")
                    .text()
                    .trim() +
                  "-" +
                  $(match_info)
                    .find(".group .score .name span:nth-child(3)")
                    .text()
                    .trim();
                //next page

                const nextPageUrl = $(match_info).find(".more a").attr("href") as string ;
                const parts = nextPageUrl.split('/');
                const match_id = parts[parts.length - 2];
                let formation: any;

                listMatch.push({
                  match_id,
                  time,
                  team_a: {
                    name: name_team_a,
                    logo: logo_team_a,
                  },
                  team_b: {
                    name: name_team_b,
                    logo: logo_team_b,
                  },
                  score,
                  nextPageUrl,
                  formation,
                });
              });
          });
        data.push({
          region: categoryTitle,
          flag,
          categoryTitle: linkText,
          captionDays,
          listMatch,
        });
      });

      res.status(200).json(data);
    })
    .catch((error) => {
      console.log("Failed to retrieve page:", error);
    });
}

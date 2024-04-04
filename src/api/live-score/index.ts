import cheerio from "cheerio";
const url = "https://thethao247.vn/livescores/";

export const handleCrawlLiveScore = async () => {
  try {
    const response = await fetch(url, {
      mode: "no-cors",
    });
    const html = await response.text();
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
        .replace(/-/g, "")
        .trim();
      const linkText = $(element).find(".category-title a").text().trim();
      const flag = $(element)
        .find(".category-title .flags-category")
        .attr("class");
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
              const score_a = $(match_info)
                .find(".group .score .name span:nth-child(1)")
                .text()
                .trim();
              const score_b = $(match_info)
                .find(".group .score .name span:nth-child(3)")
                .text()
                .trim();
              //next page

              const nextPageUrl = $(match_info)
                .find(".more a")
                .attr("href") as string;
              const parts = nextPageUrl.split("/");
              const match_id = parts[parts.length - 2];   
              const slug = nextPageUrl.split("/").slice(4).join("/")
              let formation: any;

              listMatch.push({
                match_id,
                time,
                slug,
                team_a: {
                  name: name_team_a,
                  logo: logo_team_a,
                },
                team_b: {
                  name: name_team_b,
                  logo: logo_team_b,
                },
                score: {
                  score_a,
                  score_b,
                },
                nextPageUrl,
                formation,
              });
            });
        });
      data.push({
        flag,
        region: categoryTitle,
        categoryTitle: linkText,
        captionDays,
        listMatch,
      });
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

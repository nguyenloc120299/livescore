import cheerio from "cheerio";
import { NextResponse } from "next/server";

export const handleCrawlMatchDetail = async (url: string) => {
    console.log(`https://thethao247.vn/livescores` + url);
    
  try {
    const response = await fetch(`https://thethao247.vn/livescores` + url, {
      mode: "no-cors",
    });
    const html = await response.text();
    const $ = cheerio.load(html);
    const name_team_a = $(".match-detail")
      .find(".match .title:nth-child(1)")
      .text()
      .trim();
    const name_team_b = $(".match-detail")
      .find(".match .title:nth-child(2)")
      .text()
      .trim();
    // const logo_team_a=$('match-detail').find('').text().trim()
    // const logo_team_b=$('match-detail').find('').text().trim()
    return {
      detail: {
        name_team_a,
        name_team_b,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

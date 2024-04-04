import cheerio from "cheerio";

const url = "https://thethao247.vn/livescores/";

export default async function handlerCrawlTournament() {
  try {
    const response = await fetch(url,{ cache: 'force-cache',mode: 'no-cors' });
    const html = await response.text();
    const $ = cheerio.load(html);

    let result = [] as any;
    $(".text-middle").each((index, item) => {
      const nextPage = $(item).find("a").attr("href");
      const league_name = $(item).find(".league-name").text().trim();
      const class_league_name = $(item)
        .find("span.flags-category")
        .attr("class");
      result.push({
        league_name,
        class_league_name,
        nextPage,
      });
    });

    return result;
  } catch (error) {
    console.log("Failed to retrieve page:", error);
    return null; // Trả về null hoặc giá trị mặc định nếu muốn xử lý lỗi một cách phù hợp
  }
}
